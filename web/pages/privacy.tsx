import BasePage from "../components/shared/layout/basePage";
import MetaData from "../components/shared/metaData";
import Footer from "../components/templates/home/footer";

interface PrivacyProps {}

const Privacy = (props: PrivacyProps) => {
  const {} = props;

  const privacyPageSection = (
    index: number,
    title: string,
    description: string
  ) => (
    <div className="text-lg flex flex-col space-y-4">
      <p className="text-xl font-semibold">{`${index}. ${title}`}</p>
      <p className="whitespace-pre-wrap text-left">{description}</p>
    </div>
  );

  return (
    <MetaData title="Privacy Policy">
      <BasePage full variant="secondary">
        <div className="py-24 max-w-3xl font-serif space-y-16">
          <div className="flex flex-col space-y-4">
            <p className="text-5xl font-sans">Privacy Policy</p>
            <p className="text-lg font-sans">Last updated February 5, 2023</p>
          </div>

          {pageContent.map((page, index) =>
            privacyPageSection(index + 1, page.title, page.description)
          )}
        </div>
      </BasePage>
      <Footer />
    </MetaData>
  );
};

const pageContent: PageContentProps[] = [
  {
    title: "Introduction",
    description: `Welcome to Helicone, Inc. Helicone, Inc. (“us”, “we”, or “our”) operates https://www.helicone.ai/ (hereinafter referred to as “Service”). Our Privacy Policy governs your visit to https://www.helicone.ai/, and explains how we collect, safeguard and disclose information that results from your use of our Service. We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions. Our Terms and Conditions (“Terms”) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (“agreement”).`,
  },
  {
    title: "Definitions",
    description: `SERVICE means the https://www.helicone.ai/ website operated by Helicone, Inc.
 
PERSONAL DATA means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).
     
USAGE DATA is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).
     
COOKIES are small files stored on your device (computer or mobile device).
     
DATA CONTROLLER means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.
     
DATA PROCESSORS (OR SERVICE PROVIDERS) means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.
     
DATA SUBJECT is any living individual who is the subject of Personal Data.
     
THE USER is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.`,
  },
  {
    title: "Information Collection and Use",
    description: `We collect several different types of information for various purposes to provide and improve our Service to you.`,
  },
  {
    title: "Types of Data Collected",
    description: `
Personal Data
While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to:
 
- Email address
 
- First name and last name
 
- Phone number
 
- Address, State, Province, ZIP/Postal code, City
 
- Cookies and Usage Data
 
We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at help@helicone.ai.
 
Usage Data
We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through a mobile device (“Usage Data”).
 
This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
 
When you access Service with a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.
 
Location Data
We may use and store information about your location if you give us permission to do so (“Location Data”). We use this data to provide features of our Service, to improve and customize our Service.
 
You can enable or disable location services when you use our Service at any time by way of your device settings.
 
Tracking Cookies Data
We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.
 
Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.
 
You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
 
Examples of Cookies we use:
 
- Session Cookies: We use Session Cookies to operate our Service.
 
- Preference Cookies: We use Preference Cookies to remember your preferences and various settings.
 
- Security Cookies: We use Security Cookies for security purposes.
 
- Advertising Cookies: Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.
 
Other Data
While using our Service, we may also collect the following information: sex, age, date of birth, place of birth, passport details, citizenship, registration at place of residence and actual address, telephone number (work, mobile), details of documents on education, qualification, professional training, employment agreements, non-disclosure agreements, information on bonuses and compensation, information on marital status, family members, social security (or other taxpayer identification) number, office location and other data. 
`,
  },
  {
    title: "Use of Data",
    description: `
Helicone, Inc. uses the collected data for various purposes:
 
- to provide and maintain our Service;
 
- to notify you about changes to our Service; 
 
- to allow you to participate in interactive features of our Service when you choose to do so; 
 
- to provide customer support; 
 
- to gather analysis or valuable information so that we can improve our Service; 
 
- to monitor the usage of our Service;
 
- to detect, prevent and address technical issues;
 
- to fulfill any other purpose for which you provide it;
 
- to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;
 
- to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.;
 
- to provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;
 
in any other way we may describe when you provide the information;
 
for any other purpose with your consent. 

    `,
  },
  {
    title: "Retention of Data",
    description: `
We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
 
We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.

    `,
  },
  {
    title: "Transfer of Data",
    description: `
Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
 
If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.
 
Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
 
Helicone, Inc. will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.

    `,
  },
  {
    title: "Disclosure of Data",
    description: `
We may disclose personal information that we collect, or you provide:
 
Disclosure for Law Enforcement.
Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities.
 
Business Transaction.
If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be transferred.
 
Other cases. We may disclose your information also:
 
to our subsidiaries and affiliates;
 
for the purpose of including your company’s logo on our website;
 
with your consent in any other cases;

    `,
  },
  {
    title: "Security of Data",
    description: `
    The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
    `,
  },
  {
    title:
      "Your Data Protection Rights Under General Data Protection Regulation (GDPR)",
    description: `
If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR. – See more at https://eur-lex.europa.eu/eli/reg/2016/679/oj 
 
We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
 
If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at help@helicone.ai. 
 
In certain circumstances, you have the following data protection rights:
 
- the right to access, update or to delete the information we have on you;
 
- the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;
 
- the right to object. You have the right to object to our processing of your Personal Data;
 
- the right of restriction. You have the right to request that we restrict the processing of your personal information;
 
- the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;
 
- the right to withdraw consent. You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;
 
Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data.
 
You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).

    `,
  },
  {
    title:
      "Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)",
    description: `
CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law’s reach stretches well beyond California to require a person or company in the United States (and conceivable the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy. – See more at: https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/ 
 
According to CalOPPA we agree to the following:
 
- users can visit our site anonymously;
 
- our Privacy Policy link includes the word “Privacy”, and can easily be found on the page specified above on the home page of our website;
 
- users will be notified of any privacy policy changes on our Privacy Policy Page;
 
- users are able to change their personal information by emailing us at help@helicone.ai. 
 
Our Policy on “Do Not Track” Signals:
 
We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked. 
 
You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.

    `,
  },
  {
    title: "Service Providers",
    description: `
We may employ third party companies and individuals to facilitate our Service (“Service Providers”), provide Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.
 
These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.

    `,
  },
  {
    title: "Analytics",
    description: `
Google Analytics
Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.
 
For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: https://policies.google.com/privacy?hl=en
 
We also encourage you to review the Google's policy for safeguarding your data: https://support.google.com/analytics/answer/6004245.
 
Cloudflare analytics
Cloudflare analytics is a web analytics service operated by Cloudflare Inc. Read the Privacy Policy here: https://www.cloudflare.com/privacypolicy/ 
 
Mixpanel
Mixpanel is provided by Mixpanel Inc.
 
You can prevent Mixpanel from using your information for analytics purposes by opting-out. To opt-out of Mixpanel service, please visit this page: https://mixpanel.com/optout/
 
For more information on what type of information Mixpanel collects, please visit the Terms of Use page of Mixpanel: https://mixpanel.com/terms/
    `,
  },
  {
    title: "CI/CD tools",
    description: `
We may use third-party Service Providers to automate the development process of our Service. 
 
GitHub
 
GitHub is provided by GitHub, Inc.
 
GitHub is a development platform to host and review code, manage projects, and build software.
 
For more information on what data GitHub collects for what purpose and how the protection of the data is ensured, please visit GitHub Privacy Policy page: https://help.github.com/en/articles/github-privacy-statement.
 
CircleCI
 
CircleCI is provided by Circle Internet Services, Inc. 
 
CircleCI is Continuous Integration, a development practice which is being used by software teams allowing them to build, test and deploy applications easier and quicker on multiple platforms. 
 
For more information on what data Circle CI collects for what purpose and how the protection of the data is ensured, please visit Circle CI Privacy Policy page: https://circleci.com/privacy/. 
    `,
  },
  {
    title: "Behavioral Remarketing",
    description: `
Helicone, Inc. uses remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based on your past visits to our Service.
 
Google Ads (AdWords)
Google Ads (AdWords) remarketing service is provided by Google Inc.
 
You can opt-out of Google Analytics for Display Advertising and customize the Google Display Network ads by visiting the Google Ads Settings page: http://www.google.com/settings/ads
 
Google also recommends installing the Google Analytics Opt-out Browser Add-on – https://tools.google.com/dlpage/gaoptout – for your web browser. Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent their data from being collected and used by Google Analytics.
 
For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: https://policies.google.com/privacy?hl=en
 
Twitter
Twitter remarketing service is provided by Twitter Inc.
 
You can opt-out from Twitter's interest-based ads by following their instructions: https://support.twitter.com/articles/20170405
 
You can learn more about the privacy practices and policies of Twitter by visiting their Privacy Policy page: https://twitter.com/privacy`,
  },
  {
    title: "Payments",
    description: `
We may provide paid products and/or services within Service. In that case, we use third-party services for payment processing (e.g. payment processors).
 
We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.
 
The payment processors we work with are:
 
Stripe:
Their Privacy Policy can be viewed at: https://stripe.com/us/privacy
 
`,
  },
  {
    title: "Links to Other Sites",
    description: `
Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
 
We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
`,
  },
  {
    title: "Children's Privacy",
    description: `
Our Services are not intended for use by children under the age of 13 (“Children”). 
 
We do not knowingly collect personally identifiable information from Children under 13. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.
`,
  },
  {
    title: "Changes to This Privacy Policy",
    description: `
We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
 
We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update “effective date” at the top of this Privacy Policy.
 
You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
`,
  },
  {
    title: "Contact Us",
    description: `
If you have any questions about this Privacy Policy, please contact us:
 
By email: help@helicone.ai.
 
`,
  },
];

interface PageContentProps {
  title: string;
  description: string;
}

export default Privacy;
