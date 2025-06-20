import Layout from "@/components/Layout";
import Policies from "@/components/Policies";

const PrivacyPolicy = () => {
  const PrivacyPolicy = [
    {
      id: 1,
      title: "Introduction",
      content:
        'This policy covers how we use your personal information. We take your privacy seriously and will take all measures to protect your personal information. We are committed to protecting your privacy. We collect the minimum amount of information about you that is commensurate with providing you with a satisfactory service. The purpose of this Privacy Policy to enable you to understand which personal identifying information ("PII", "Personal Information") of yours is collected, how and when we might use your information, who has access to this information, and how you can correct any inaccuracies in the information. To better protect your privacy, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our website.',
    },
    {
      id: 2,
      title: "Information Collected",
      content:
        "We may collect any or all of the information that via both automated means such as communications profiles and cookies. The personal Information you give us depends on the type of service, support, or sale inquiry, and may include your name, address, telephone number and email address, dates of service provided, types of service provided, payment history, manner of payment, amount of payments, date of payments, domain name or other payment information. The financial information will be transferred only be used to bill you for the products and services you purchased. If you purchase by credit card, this information may be forwarded to your credit card provider. All sensitive information is collected on a secure server and data is transferred. When transferring personal information a security icon will appear in your browser.",
    },
    {
      id: 3,
      title: "Information Use",
      content:
        "This information is used for billing and to provide service and support to our customers. We may also study this information to determine our customers needs and provide support for our customers. All reasonable precautions are taken to prevent unauthorised access to this information. This safeguard may require you to provide additional forms of identity should you wish to obtain information about your account details. NexxyHost may email its monthly newsletter to the primary contact email on file, but customers are able to opt out of this newsletter at any time.",
    },
    {
      id: 4,
      title: "Log Files",
      content:
        "We use IP addresses to analyze trends, administer our site and servers, track access, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information. It is possible that personal information about a customer may be included in the log files due to the normal functions of IP addresses and Web browsing.",
    },
    {
      id: 5,
      title: "Cookies",
      content:
        'Your Internet browser has the in-built facility for storing small text files - "cookies" - that hold information which allows a website to recognize your account. We use cookies to save your preferences and login information, and provide personalized functionality. You can reject cookies by changing your browser settings, but be aware that this will disable some of the functionality on the NexxyHost\'s website. More information about cookies can be found at http://en.wikipedia.org/wiki/HTTP_cookie.',
    },
    {
      id: 6,
      title: "Disclosing Information",
      content:
        "We do not disclose any personal information obtained about you from this website to third parties. This does not apply to affiliates that provide services to you based on links provided within your CPanel access and control, wherein information will be shared to facilitate your use of additional amenities included with your hosting account. We may use personal information to keep in contact with you and inform you of developments associated with our business. We may also disclose aggregate, anonymous data based on information collected from users to potential partners, our affiliates, and reputable third parties. We take all available measures to select affiliates and service providers that are ethical and provide similar privacy protection to their customers and the community. We do not make any representations about the practices and policies about these companies.",
    },
    {
      id: 7,
      title: "Information Use (Updates and Corrections)",
      content:
        "If a customer's personally identifiable information changes, or if a customer no longer desires our services, we will endeavor to provide a way to correct, update or remove that customer's personal data in our records. In most cases, this can be achieved via our billing department at support@NexxyHost.com",
    },
    {
      id: 8,
      title: "Compliance with Laws and Law Enforcement",
      content:
        "We cooperate with government and law enforcement officials to enforce and comply with the law. We will disclose any information about Users upon valid request by government or law officials as we, in our sole discretion, believe necessary or appropriate to respond to claims and legal process (including without limitation subpoenas), to protect your property and rights, or the property and rights of a third party, to protect the safety of the public or any person, or stop activity we consider illegal or unethical.",
    },
    {
      id: 9,
      title: "Changes to this Policy",
      content:
        "Any changes to our Privacy Policy will be placed here and will supersede this version of our Policy. We will take reasonable steps to draw your attention to any changes in our Policy. However, to be on the safe side, we suggest that you read this document each time you use the website to ensure that it still meets with your approval.",
    },
    {
      id: 10,
      title: "Contacting Us",
      content:
        "If you have any questions about our Privacy Policy, or if you want to know what information we have collected about you, please email us at hello@NexxyHost.com",
    },
  ];
  return (
    <Layout>
      <Policies text="Privacy Policy" Policies={PrivacyPolicy} />
    </Layout>
  );
};

export default PrivacyPolicy;
