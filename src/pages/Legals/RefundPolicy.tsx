import Policies from "@/components/Policies";
import Layout from "@/components/Layout";
import { policyProps } from "@/components/Policies";
const RefundPolicy = () => {
  const refundPolicy: policyProps[] = [
    {
      id: 1,
      title: "Policy Updates",
      content:
        "NexxyHost may vary the Refund Policy at any time by publishing updates on the website. Continued use of the site is considered acceptance of the new terms.",
    },
    {
      id: 2,

      title: "Refund Request Process",
      content:
        "To request a refund, cancel the service by emailing billing@NexxyHost.com or opening a support ticket via the client area within the stipulated time for the service.",
    },
    {
      id: 3,

      title: "General Refund Rules",
      content: [
        "Services must be cancelled before refunds can be issued.",
        "No refund if the domain is flagged as suspicious or violates the Terms of Service.",
        "No refund for services suspended or terminated due to Terms of Service violation.",
        "Eligible refunds go to client account unless cash refund is specifically requested.",
        "Cash refunds require matching payment account details.",
        "Cash refunds take 5–15 days and incur an administrative fee.",
        "Refunds via payment gateways may go through the original source and may incur gateway fees.",
        "A product/service can only be refunded once.",
      ],
    },
    {
      id: 4,

      title: "Overpayment",
      content: [
        "Overpayments are automatically credited to the client account.",
        "To refund to a bank account, a request must be sent with invoice number, date, method of payment, and amount.",
      ],
    },
    {
      id: 5,

      title: "Web Hosting",
      content: [
        "Annual shared and reseller hosting: cancel within 30 days for full refund.",
        "Monthly/Quarterly/Semi-annual plans: cancel within 72 hours for refund.",
        "Add-on products like domains are not refundable.",
      ],
    },
    {
      id: 6,

      title: "Web Hosting with Domain Registration",
      content:
        "Cancel within 30 days. Domain registration fees are non-refundable and will be deducted from the refund amount.",
    },
    {
      id: 7,

      title: "SSL Certificates",
      content: [
        "Issued Comodo & Certum SSL: cancel within 5 days for refund.",
        "Unissued certificates: cancel within 30 days.",
        "No refunds after the stated periods.",
      ],
    },
    {
      id: 8,

      title: "Non-Refundable Products and Services",
      content: [
        "Virtual Servers",
        "Domain registrations, transfers & renewals",
        "Cloud hosting",
        "Local servers",
        "SiteLock",
        "CodeGuard",
        "Bizgrowth Projects",
        "Website Projects",
        "SiteBuilder",
        "G-Suite",
        "Email Hosting",
        "Installation/setup fees",
        "Custom service purchases",
      ],
      //   notes: [
      //     "Domains are non-refundable except in the case of failed registration or transfer.",
      //     "Uninstalled/unsetup services after one month are refunded to client account only."
      //   ]
    },
    {
      id: 9,

      title: "Payment Issues",
      content: [
        "Payment errors (e.g. double payment, wrong transfer) are credited to client account.",
        "To refund to a bank account, email billing@NexxyHost.com with date, method, invoice number, and amount.",
        "Contact NexxyHost before contacting your bank/payment gateway for disputes.",
      ],
    },
    {
      id: 10,

      title: "How to Cancel Web Hosting",
      content: [
        "Login to client area → Services → My Services.",
        "Click 'View Details' on the service.",
        "Click 'Management Actions' → 'Request Cancellation'.",
        "You’ll receive an automatic confirmation email.",
        "Wait up to 48 hours for a cancellation-confirmation email.",
        "Reply and ask for your refund.",
        "You must get written confirmation of refund amount and request for account details.",
        "Allow up to 15 days for processing.",
      ],
    },
  ];

  return (
    <Layout>
      <Policies text="REFUND POLICY" Policies={refundPolicy} />
    </Layout>
  );
};

export default RefundPolicy;
