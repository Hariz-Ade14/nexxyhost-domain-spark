import Policies from "@/components/Policies";
import Layout from "@/components/Layout";
const WebDevelopmentPolicy = () => {
    const termsArray = [
        {
            id: 1,
            title: "Definitions",
            content: "The Client: The company or individual requesting the services of NexxyHost. NexxyHost: Primary designer/site owner & employees or affiliates."
          },
          {
            id: 2,
            title: "Terms and Conditions",
            content: "These are the standard terms and conditions for Website Design and Development and apply to all contracts and all work that is undertaken by NexxyHost for its clients."
          },
          {
            id: 3,
            title: "Your Fees and Deposits",
            content: "A 60% deposit of the total fee payable under our proposal is due immediately upon you instructing us to proceed with the website design and development work. The remaining 40% shall become due when the work is completed to your reasonable satisfaction but subject to the terms of the 'approval of work' and 'rejected work' clauses. We reserve the right not to commence any work until due first installment has been paid in full."
          },
          {
            id: 4,
            title: "Supply of Materials",
            content: "You must supply everything we need to complete the project and in the format, we need to complete the work per any agreed specification. Such materials may include but are not limited to images, content, logos and other printed material. Where there is any delay in supplying these materials to us which leads to a delay in the completion of work, we have the right to extend any previously agreed deadlines by a reasonable amount. Where you fail to supply materials, and that prevents the progress of the work, we have the right to invoice you for any part or parts of the work already completed. You'll review our work; provide feedback and approval on time too. Deadlines work two ways, so you'll also be bound by dates we set together."
          },
          {
            id: 5,
            title: "Variations",
            content: "We are pleased to offer you the opportunity to make reversions to the design. However, we have the right to limit the number of design proposals to a reasonable amount and may charge for additional designs if you make a change to the original design specification after approval has been given. Our website development phase is flexible and allows certain variations to the original specification. However, any major deviation from the specification will be charged at the cost of ₦10,000. A minor change is anything that has to do with adjusting of size, change of placement, moving of component, colour change, image replacement or text change. A major change is an addition of a new feature which has been agreed possible by NexxyHost Limited e.g. new shipping option, new payment option. This does not mean upgrades of unlimited complexity but within the measurable framework of the existing content management system."
          },
          {
            id: 6,
            title: "Project Delays and Client Liability",
            content: "Any time frames or estimates that we give are contingent upon your full co-operation and complete and final content in photography for the work pages. During development, there is a certain amount of feedback required to progress to subsequent phases. It is required that a single point of contact be appointed from your side and be made available daily to expedite the feedback process."
          },
          {
            id: 7,
            title: "Approval of Work",
            content: "On completion of the work, you will be notified and have the opportunity to review it. You must notify us in via mail of any unsatisfactory points within 7 days of such notification. Any of the work which has not been reported in writing to us as unsatisfactory within the 7-day review period will be deemed to have been approved. Once approved, or deemed approved, work cannot subsequently be rejected and the contract will be deemed to have been completed and the 40% balance of the project price will become due."
          },
          {
            id: 8,
            title: "Rejected Work",
            content: "If you reject any of our work within the 7-day review period, or not approve subsequent work performed by us to remedy any points recorded as being unsatisfactory, and we, acting reasonably, consider that you have been illogical/irrational in any rejection of the work, we can elect to treat this contract as at an end and take measures to recover payment for the completed work."
          },
          {
            id: 9,
            title: "Payment",
            content: "Upon completion of the 7-day review period, after the website design and development has been completed, we will invoice you for the 40% balance of the project."
          },
          {
            id: 10,
            title: "Warranty by You as to Ownership of Intellectual Property Rights",
            content: "You must obtain all necessary permissions and authorities in respect of the use of all copy, graphic images, registered company logos, names and trademarks, or any other material that you supply to us to include in your website or web applications. You must indemnify us and hold us harmless from any claims or legal actions related to the content of your website."
          },
          {
            id: 11,
            title: "Licensing",
            content: "Once you have paid us in full for our work we grant to you a license to use the website and its related software and contents for the life of the website."
          },
          {
            id: 12,
            title: "Search Engines",
            content: "We do not guarantee any specific position in search engine results for your website. We perform basic search engine optimisation integration according to current best practice."
          },
          {
            id: 13,
            title: "Consequential Loss",
            content: "We shall not be liable for any loss or damage which you may suffer which is in any way attributable to any delay in performance or completion of our contract, however that delay arises."
          },
          {
            id: 14,
            title: "Disclaimer",
            content: "To the full extent permitted by law, all terms, conditions, warranties, undertakings, inducements or representations whether express, implied, statutory or otherwise (other than the express provisions of these terms and conditions) relating in any way to the services we provide to you are excluded. Without limiting the above, to the extent permitted by law, any liability of NexxyHost Limited® under any term, condition, warranty or representation that by law cannot be excluded is, where permitted by law, limited at our option to the replacement, repair or re-supply of the services or the payment of the cost of the services that we were contracted to perform."
          },
          {
            id: 15,
            title: "Subcontracting",
            content: "We reserve the right to subcontract any services that we have agreed to perform for you as we see fit."
          },
          {
            id: 16,
            title: "Non-Disclosure",
            content: "We (and any subcontractors we engage) agree that we will not at any time disclose any of your confidential information to any third party."
          },
          {
            id: 17,
            title: "Additional Expenses",
            content: "You agree to reimburse us for any requested expenses which do not form part of our proposal including but not limited to the purchase of templates, third-party software, stock photographs, fonts, domain name registration, web hosting or comparable expenses."
          },
          {
            id: 18,
            title: "Backups",
            content: "You are responsible for maintaining your backups concerning your website and we will not be liable for restoring any client data or client websites except to the extent that such data loss arises out of a negligent act or omission by us."
          },
          {
            id: 19,
            title: "Ownership of Domain Names and Web Hosting",
            content: "We will supply your account credentials for domain name registration and/or web hosting that we purchased on your behalf when you reimburse us for any expenses that we have incurred."
          },
          {
            id: 20,
            title: "Governing Law",
            content: "The agreement constituted by these terms and conditions and any proposal will be construed according to and is governed by the laws of the Federal Republic of Nigeria. You and NexxyHost Limited® submit to the non-exclusive jurisdiction of the courts in and of the Federal Republic of Nigeria concerning any dispute arising under these terms and conditions or concerning any services we perform for you."
          },
          {
            id: 21,
            title: "Cross Browser Compatibility",
            content: "By using current versions of well-supported content management systems such as, we endeavour to ensure that the websites we create are compatible with all current modern web browsers such as the most recent versions of Internet Explorer, Firefox, Google Chrome and Safari. Third-party extensions, where used, may not have the same level of support for all browsers. Where appropriate we will substitute alternative extensions or implement other solutions, on a best-effort basis, where any incompatibilities are found."
          },
          {
            id: 22,
            title: "E-Commerce",
            content: "You are responsible for complying with all relevant laws relating to e-commerce, and the full extent permitted by law will hold harmless, protect, and defend and indemnify NexxyHost Limited® and its subcontractors from any claim, penalty, tax, tariff loss or damage arising from your or your clients' use of Internet electronic commerce."
          },
          {
            id: 23,
            title: "Termination of Services",
            content: "If the client changes his/her mind about doing work with NexxyHost Limited during the initial web design or development phase, the client will be responsible for the amount of work already completed. Depending on the amount of work completed at the time of cancellation, this may mean receiving a full refund, a partial refund, no refund, or owing additional fees. To protect clients from unintentional service interruption, clients wishing to terminate any services must request the service termination in writing."
          },
          {
            id: 24,
            title: "Non-Payers",
            content: "If the balance on a completed project has not been paid within ten business days, a 10% penalty will be added. For example, if the remaining balance on a completed project is ₦1,000, and that balance has not been paid within ten business days, the new balance on the complete project will automatically be increased to ₦2,000. Balances that are not paid within 30 days will be reported to a credit bureau. Balances that are not paid within 60 days will be turned over to a collections agency. Clients experiencing financial hardship should contact NexxyHost Sales department to discuss payment options."
          },
          {
            id: 25,
            title: "Project Timeliness Requirements for Clients",
            content: "Projects can be hindered if the client does not provide feedback or required elements in a timely manner, such as feedback on a design mockup, requested sitemaps, text to be used as content on the web pages, photos for either the design or for the content, the client's logo, appropriate account login information, etc. For that reason, if NexxyHost Limited's Web Design is waiting for content or other pieces of information, the client will be notified. If the client fails to handle the requests within 3-5 business days, the project timeline will be moved in simultaneously. However, if the client fails to handle the requests within ten business days, the project will be frozen and the sum of ₦20,000 will be made payable to NexxyHost Limited to resume the project."
          },
          {
            id: 26,
            title: "Payment Gateways",
            content: "Clients are required to create merchant accounts with their choice payment gateways and send in merchant IDs for integration at an agreed cost. Interswitch payment gateway(s) integration can be done through NexxyHost Limited at a discounted rate with free integration if NexxyHost developed the e-commerce platform."
          },
          {
            id: 27,
            title: "Discounts",
            content: "Logos: This is created at a discounted rate only for clients who have also subscribed to our website development service. Branding: This discount applies to clients who agree to brand their websites with our business name by way of permitting our business name and URL to be on their website."
          },
          {
            id: 28,
            title: "Refund Policy",
            content: "Design: Refund of money paid for any design-related job is not possible; therefore, there is a non-refundable policy for any graphic job done by NexxyHost Limited. Development: refund of money can be made to clients not satisfied with their website requirement (Although we are certain that won't be the case). However, this will lessen the calculations of the amount of effort and other input invested by the Web design team."
          },
          {
            id: 29,
            title: "Website Maintenance",
            content: "This agreement allows for minor web site maintenance to pages over 1 month, up to an average of one-half hour per regular web site, including updating lines and making minor changes to a sentence or paragraph. It does not include updating or replacing nearly all the text from a page with new text, major page reconstruction, new pages, guest books, discussion webs, and navigation structure changes, attempted updates by client repairs or web design projects delivered to the client via diskette. The period of 1 month begins on the date the client's web design site has been published to client's hosting service or 30 days from the date this agreement was signed, whichever comes first. If the client's web design package includes database access using Server Side Script, then very minor page code changes will be accepted under this maintenance plan. Major page code and/or database structural changes will be charged accordingly."
          }
    ]
  return (
    <Layout>
     <Policies text="WEB DEVELOPMENT TERMS OF SERVICE" Policies={termsArray}/>
    </Layout>
  );
};

export default WebDevelopmentPolicy;
