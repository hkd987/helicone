import functools
import os
import openai
import warnings
from openai.api_resources import (
    Audio,
    ChatCompletion,
    Completion,
    Edit,
    Embedding,
    Image,
    Moderation,
)

class HeliconeRateLimit:
    def __init__(self, limit=None, remaining=None, reset=None, policy=None):
        self.limit = limit
        self.remaining = remaining
        self.reset = reset
        self.policy = policy

class HeliconeResponse:
    def __init__(self, cache=None, rate_limit=None):
        self.rate_limit = rate_limit
        self.cache = cache

    def __repr__(self):
        return f"<HeliconeResponse cache={self.cache} rate_limit={self.rate_limit}>"

class Helicone:
    def __init__(self):
        self.api_key = None
        self._check_env_var()
        self.apply_helicone_auth()

    def _check_env_var(self):
        if "HELICONE_API_KEY" in os.environ:
            self.api_key = os.environ["HELICONE_API_KEY"]
        else:
            warnings.warn("Helicone API key is not set as an environment variable.")

    def set_api_key(self, key: str):
        self.api_key = key

    def _with_helicone_auth(self, func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            headers = kwargs.get("headers", {})

            if "Helicone-Auth" not in headers and self.api_key:
                headers["Helicone-Auth"] = f"Bearer {self.api_key}"

            headers.update(self._get_property_headers(kwargs.pop("properties", {})))
            headers.update(self._get_cache_headers(kwargs.pop("cache", None)))
            headers.update(self._get_retry_headers(kwargs.pop("retry", None)))
            headers.update(self._get_rate_limit_policy_headers(kwargs.pop("rate_limit_policy", None)))

            kwargs["headers"] = headers

            original_api_base = openai.api_base
            openai.api_base = "https://oai.hconeai.com/v1"
            try:
                result = func(*args, **kwargs)
            finally:
                openai.api_base = original_api_base

            # Check if retries are enabled
            if headers.get("Helicone-Retry-Enabled") == "true":
                helicone_rate_limit = self._add_helicone_rate_limit_attributes(result)
            else:
                helicone_rate_limit = None

            result["helicone"] = HeliconeResponse(rate_limit=helicone_rate_limit, cache=result.headers.get("Helicone-Cache", None))

            return result

        return wrapper
    
    def _add_helicone_rate_limit_attributes(self, response):
        rate_limit_headers = {
            "Helicone-RateLimit-Limit": "limit",
            "Helicone-RateLimit-Remaining": "remaining",
            "Helicone-RateLimit-Reset": "reset",
            "Helicone-RateLimit-Policy": "policy",
        }

        rate_limit = {}
        for header, attr_name in rate_limit_headers.items():
            if header in response.headers:
                rate_limit[attr_name] = response.headers[header]

        helicone_rate_limit = HeliconeRateLimit(**rate_limit)
        return helicone_rate_limit

    def _get_property_headers(self, properties):
        return {f"Helicone-Property-{key}": str(value) for key, value in properties.items()}

    def _get_cache_headers(self, cache):
        return {"Helicone-Cache-Enabled": "true"} if cache is True else {}

    def _get_retry_headers(self, retry):
        if isinstance(retry, bool) and retry:
            return {"Helicone-Retry-Enabled": "true"}
        elif isinstance(retry, dict):
            headers = {"Helicone-Retry-Enabled": "true"}
            if "num" in retry:
                headers["Helicone-Retry-Num"] = str(retry["num"])
            if "factor" in retry:
                headers["Helicone-Retry-Factor"] = str(retry["factor"])
            if "min_timeout" in retry:
                headers["Helicone-Retry-Min-Timeout"] = str(retry["min_timeout"])
            if "max_timeout" in retry:
                headers["Helicone-Retry-Max-Timeout"] = str(retry["max_timeout"])
            return headers
        return {}

    def _get_rate_limit_policy_headers(self, rate_limit_policy):
        if rate_limit_policy:
            if isinstance(rate_limit_policy, str):
                policy = rate_limit_policy
            elif isinstance(rate_limit_policy, dict):
                policy = f'{rate_limit_policy["quota"]};w={rate_limit_policy["time_window"]}'
                if "segment" in rate_limit_policy:
                    policy += f';s={rate_limit_policy["segment"]}'
            else:
                raise TypeError("rate_limit_policy must be either a string or a dictionary")
            return {"Helicone-RateLimit-Policy": policy}
        return {}


    def apply_helicone_auth(self):
        api_resources_classes = [
            (Audio, "transcribe"),
            (ChatCompletion, "create"),
            (Completion, "create"),
            (Edit, "create"),
            (Embedding, "create"),
            (Image, "create"),
            (Moderation, "create"),
        ]

        for api_resource_class, method in api_resources_classes:
            create_method = getattr(api_resource_class, method)
            setattr(api_resource_class, "create", self._with_helicone_auth(create_method))

# Initialize Helicone and apply authentication to the specified classes
helicone_instance = Helicone()

# Expose the methods for easy user access
api_key = helicone_instance.api_key
set_api_key = helicone_instance.set_api_key
