import Policies from "@/components/Policies";
import Layout from "@/components/Layout";
const SSLTermsOfService = () => {
  const sslAgreements = [
    {
      id: 1,
      title: "General Agreement",
      content:
        "This SSL Certificate Agreement is between NexxyHost Limited and the Client ordering Services. It governs the use of Services, incorporating NexxyHost’s General Terms of Service, Privacy Policy, and Order-specific Product Terms and Conditions, all subject to modification by NexxyHost. Modifications are effective upon posting to NexxyHost’s website. Electronic approval via payment constitutes acceptance of the Agreement. NexxyHost may accept or reject Orders at its discretion. Use of Services, including on a trial basis, binds you to this Agreement. If acting for a legal entity, you warrant authority to bind it. Services must be used for legitimate purposes.",
    },
    {
      id: 2,
      title: "Acknowledgment and Binding Terms",
      content:
        "By using NexxyHost’s Services, you acknowledge reading, understanding, and agreeing to be bound by this Agreement, including any updated terms posted online. You are also bound by terms for transactions made by you, your agents, or anyone using your account, regardless of authorization.",
    },
    {
      id: 3,
      title: "Definitions",
      content:
        "Client Data: All data stored or processed by you or your end-users on the Hosted System. Order: Online or written orders for Services, signed manually or electronically. Personal Data: Information identifying a person under privacy laws. Product Terms and Conditions: Additional terms for specific Services. Support: 24/7 assistance by trained staff via phone, chat, or ticket. Business Day: Monday to Friday, excluding public holidays. Business Hour: 9:00 a.m. – 5:00 p.m. on a Business Day. Claims: Any legal or financial demands or losses. Confidential Information: Non-public technical, business, or client data, excluding public domain or lawfully obtained information. End User: Individuals or entities obtaining Services from the Client. End User Licence Agreements (EULAs): Terms governing Service use. Intellectual Property Rights: Copyright, trademark, patent, and other rights. Products: Services from NexxyHost or third-party providers. Third Party Suppliers: Providers of Products included in Services.",
    },
    {
      id: 4,
      title: "Additional Policies and Agreements",
      content:
        "Use of Services is governed by NexxyHost’s Privacy Policy, Terms of Service, Refund Policy, and, for domain registrations, the Domain Registration Agreement, all incorporated by reference.",
    },
    {
      id: 5,
      title: "Description of Service",
      content:
        "SSL Certificates provide device authentication, message, software, and content integrity, and confidentiality encryption. Fully-authenticated certificates verify the Subscriber’s organization and domain name entitlement.",
    },
    {
      id: 6,
      title: "NexxyHost Responsibilities",
      content:
        "NexxyHost will provide Services and Support per the Agreement, contingent on full payment, and comply with applicable laws.",
    },
    {
      id: 7,
      title: "Client Responsibilities",
      content:
        "Clients must comply with applicable laws and the Agreement, pay for Services, cover taxes, act professionally, maintain accurate account information, and inform personnel about NexxyHost’s offerings. Clients are responsible for providing end-users with necessary disclosures about their website and services.",
    },
    {
      id: 8,
      title: "End User Data",
      content:
        "NexxyHost will follow industry practices to safeguard Client and End User data, complying with data protection laws. Access to data is limited to Agreement obligations. Neither party may disclose End User data for solicitation or marketing. Client data is confidential, but NexxyHost may solicit End Users through normal practices.",
    },
    {
      id: 9,
      title: "Client Account Usage",
      content:
        "NexxyHost may revoke Certificates without notice if information becomes invalid, obligations are unmet, or harmful activities are detected at NexxyHost’s discretion.",
    },
    {
      id: 10,
      title: "Confidentiality",
      content:
        "The Receiving Party must maintain confidentiality of the Disclosing Party’s Confidential Information, using it only for Agreement purposes. Disclosure is limited to employees or End Users on a need-to-know basis, bound by confidentiality. Disclosure is permitted if required by law, with efforts to secure protective orders. Breaches cause irreparable harm, entitling injunctive relief. Clients may not solicit NexxyHost employees during the Agreement term and for two years post-termination.",
    },
    {
      id: 11,
      title: "Property Rights",
      content:
        "NexxyHost grants a non-exclusive, non-transferable, royalty-free license to use its technology for accessing the Sitebuilder during the Agreement term. Clients may not reverse engineer or derive trade secrets. NexxyHost retains all rights to its technology and Marks. Clients retain Content ownership but grant permission to host it during Service use.",
    },
    {
      id: 12,
      title: "Trademark Use",
      content:
        "Clients own their trademarks. Limited use of Third Party Supplier Marks is allowed for promotion, with written consent required for broader use.",
    },
    {
      id: 13,
      title: "Termination",
      content:
        "NexxyHost may terminate Services without notice for non-payment, Agreement violations, harmful conduct, or as specified. No refunds are issued, and Clients remain liable for accrued fees. User content and data will be deleted upon termination.",
    },
    {
      id: 14,
      title: "Disclaimer of Warranties",
      content:
        "NexxyHost makes no warranties, express or implied, regarding Services or Products, including merchantability or fitness for purpose. Third-party supplier performance is not guaranteed. Clients may not make warranties on NexxyHost’s behalf.",
    },
    {
      id: 15,
      title: "Third Party Services, Software, and Websites",
      content:
        "NexxyHost is not liable for losses from Third Party Materials (e.g., Quickteller, PayPal). Clients must review and comply with third-party terms. Use is at Client’s risk, and no rights are transferred beyond third-party terms.",
    },
    {
      id: 16,
      title: "Third Party Payment Processors",
      content:
        "NexxyHost uses third-party processors (Quickteller, PayPal, Paystack, Rave by Flutterwave) for secure payments, governed by their privacy policies. Clients will be informed of processors used.",
    },
    {
      id: 17,
      title: "Indemnities",
      content:
        "NexxyHost indemnifies Clients against third-party Intellectual Property Rights claims due to Service distribution. NexxyHost may procure rights, modify Services, or terminate EULAs if infringement occurs. Clients indemnify NexxyHost and Third Party Suppliers for claims arising from their distribution of Services.",
    },
    {
      id: 18,
      title: "No Consequential Damages; Limitation of Liability",
      content:
        "NexxyHost is not liable for incidental, consequential, or punitive damages. Liability is limited to amounts paid by the Client in the prior 12 months, except for confidentiality breaches or indemnification obligations.",
    },
    {
      id: 19,
      title: "User Restrictions",
      content:
        "Certificates may not be used for other organizations, unauthorized domains, multiple servers (unless permitted), or in hazardous fail-safe systems (e.g., nuclear facilities, aircraft navigation, weapons control).",
    },
    {
      id: 20,
      title: "Terms",
      content:
        "The Service Term is at least one year, as specified in the Order. Services auto-renew unless terminated via the Client portal. Clients waive requirements for affirmative consent to ongoing billing. Termination requires email to support@NexxyHost.com. Invoices are generated for additional terms until canceled.",
    },
    {
      id: 21,
      title: "Expiration and Renewal of Services",
      content:
        "Clients are responsible for tracking Certificate expiration. NexxyHost may send non-binding renewal reminders. Unpaid fees lead to Service expiration. Payments must be made via approved methods.",
    },
    {
      id: 22,
      title: "Reservation of Rights",
      content:
        "NexxyHost may censor inappropriate websites, review accounts for excessive resource use, modify pricing, and terminate accounts exceeding limits.",
    },
    {
      id: 23,
      title: "Dispute Resolution Policy",
      content:
        "Clients indemnify NexxyHost against disputes involving hosted websites. NexxyHost may modify or control websites to comply with governmental or judicial orders. In lawsuits involving Services, NexxyHost may seek written indemnification assurances from Clients; failure to provide them may be considered a breach.",
    },
    {
      id: 24,
      title: "Miscellaneous",
      content:
        "Media Releases: Require mutual approval unless for internal use or legal requirements. Independent Contractors: No partnership or agency relationship exists. Entire Agreement: This Agreement supersedes prior agreements. Governing Law: Nigerian law applies, with disputes resolved via arbitration in Lagos. Non-Waiver: Rights not waived unless in writing. Force Majeure: No liability for delays beyond reasonable control, except lack of funds or disaster recovery plans. Successors and Assigns: No assignment without consent. Survival: Obligations surviving termination remain effective. Notice: Written notices are effective upon receipt or the next Business Day. Cumulative Rights: Rights are cumulative. No Third-Party Beneficiaries: Only Microsoft and specified suppliers are beneficiaries. Additional Remedies: NexxyHost may seek injunctive relief for violations. Severability: Invalid provisions do not affect others. Counterparts: Multiple signed copies are valid. Language: English only.",
    },
    {
      id: 25,
      title: "Refund Policy",
      content:
        "Clients seeking refunds for SSL Certificates must email billing@NexxyHost.com after cancellation. Fraudulent use forfeits refund rights. See the Refund Policy for details.",
    },
    {
      id: 26,
      title: "Final Agreement",
      content:
        "This Agreement, ICANN policy, and UDRP constitute the entire agreement, superseding prior communications. Amendments require a signed written document from both parties, except for NexxyHost’s unilateral modifications.",
    },
  ];
  return (
    <Layout>
      <Policies text="SSL TERMS OF SERVICE" Policies={sslAgreements} />
    </Layout>
  );
};

export default SSLTermsOfService;
