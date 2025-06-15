import Policies from "@/components/Policies";
import Layout from "@/components/Layout";
const GeneralTermOFService = () => {
  const generalTerms = [
    {
      id: 1,
      title: "General Agreement",
      content:
        "Agreeing to NexxyHost's Acceptable Use Policy and Terms of Service is mandatory for using our services. By agreeing to our terms of service, you also agree to all other policies and agreements. Additional terms may apply to certain Services, incorporated by reference as applicable. Ensure you read everything carefully. Violation may lead to suspension of violating websites. HYIP websites, extreme money-making sites, gambling, e-gold doublers, etc., are prohibited.",
    },
    {
      id: 2,
      title: "Introduction",
      content:
        "During the agreement term with NexxyHost, customers must ensure that use of any resource offered, owned, or controlled by NexxyHost ('Service') complies with the current Acceptable Use Policy ('AUP'). NexxyHost may modify the AUP without prior notice, effective upon posting on NexxyHost's website.",
    },
    {
      id: 3,
      title: "Responsibility",
      content:
        "You are responsible for ensuring your sites and all hosted sites comply with all rules on this page. Misuse may result in account actions, including removal from the host with/without notice and without a refund.",
    },
    {
      id: 4,
      title: "Account Setup / Email on File",
      content:
        "Accounts are set up after payment and fraud screening. Provide an email address not associated with the domain(s) you sign up under. Ensure the email and domain contact information are current. NexxyHost is not responsible for lapsed registrations due to outdated contact information. False contact information may lead to account termination. Contact support@NexxyHost.com to verify or update information.",
    },
    {
      id: 5,
      title: "Transfers",
      content:
        "Our transfer team assists with site transfers as a courtesy, but we cannot guarantee availability, possibility, or completion time. Some hosting platforms may use incompatible formats, making data migration difficult. Free transfers are available for 30 days from signup. Transfers outside this period incur a charge; contact support@NexxyHost.com for a quote.",
    },
    {
      id: 6,
      title: "Content",
      content:
        "Services must be used for lawful purposes under Nigerian law. Customers agree to indemnify NexxyHost from claims resulting from service use. Infringing copyright or trademarks is prohibited, including unauthorized copying of music, books, photographs, or counterfeit merchandise. Violating accounts will be removed or disabled. Repeated copyright violations lead to suspension/termination. Report infringement to support@NexxyHost.com. Shared accounts cannot be used as backup/storage devices.",
    },
    {
      id: 7,
      title: "Unacceptable Material on Shared/Reseller Servers",
      content:
        "Prohibited materials include: Topsites, IRC Scripts/Bots, Proxy Scripts/Anonymizers, Pirated Software/Warez, Image Hosting Scripts (e.g., Photobucket, Tinypic), AutoSurf/PTC/PTS/PPC sites, IP Scanners, Bruteforce Programs/Scripts/Applications, Mail Bombers/Spam Scripts, Banner-Ad services, File Dump/Mirror Scripts (e.g., Rapidshare), Commercial Audio Streaming (more than one or two streams), Escrow/Bank Debentures, High-Yield Interest Programs (HYIP) or Related Sites, Investment Sites (FOREX, E-Gold Exchange, Second Life/Linden Exchange, Ponzi, MLM/Pyramid Scheme), Sale of controlled substances without permits, Prime Banks Programs, Lottery/Gambling Sites, MUDs/RPGs/PBBGs, Hacker-focused sites/archives/programs, Sites promoting illegal activities, Forums/websites distributing warez/pirated/illegal content without rights, Bank Debentures/Bank Debenture Trading Programs, Fraudulent Sites (e.g., listed at aa419.org, escrow-fraud.com), Mailer Pro, Broadcast/Streaming of Live Sporting Events (UFC, NASCAR, FIFA, NFL, MLB, NBA, WWE, WWF, etc.), Tell A Friend Scripts, File upload/sharing/archive/backup/mirroring/distribution services, Websites distributing large documents/images/videos or driving traffic to other sites, Heavy websites over-utilizing bandwidth/resources, Torrent software, Network Daemons, Abusive scripts/processes, Adult Thumbnail Galleries/Banner Exchanges.",
    },
    {
      id: 8,
      title: "Unacceptable Material on Dedicated Servers",
      content:
        "Prohibited materials include: IRCD (IRC servers), IRC Scripts/Bots, Pirated Software/Warez, IP Scanners, Bruteforce Programs/Scripts/Applications, Mail Bombers/Spam Scripts, Escrow, High-Yield Interest Programs (HYIP) or Related Sites, Investment Sites (FOREX, E-Gold Exchange, Second Life/Linden Exchange, Ponzi, MLM/Pyramid Scheme), Sale of controlled substances without permits, Prime Banks Programs, Lottery/Gambling Sites, Hacker-focused sites/archives/programs, Sites promoting illegal activities, Bank Debentures/Bank Debenture Trading Programs, Fraudulent Sites (e.g., listed at aa419.org, escrow-fraud.com), Mailer Pro, Broadcast/Streaming of Live Sporting Events (UFC, NASCAR, FIFA, NFL, MLB, NBA, WWE, WWF, etc.).",
    },
    {
      id: 9,
      title: "System Monitoring and Authorization",
      content:
        "NexxyHost systems may be monitored for lawful purposes, including ensuring authorized use, system management, and security. Use of NexxyHost systems constitutes consent to monitoring. Unauthorized access to third-party networks/systems is subject to suspension. Proof of authorization may be required.",
    },
    {
      id: 10,
      title: "Service Refusal and Content Removal",
      content:
        "NexxyHost reserves the right to refuse service or remove/disable obscene, threatening, illegal, or violating material with/without notice. Violations may lead to suspension/termination. Child pornography or related content results in immediate suspension without notice. Resellers must terminate violating accounts; repeated infractions may lead to account termination.",
    },
    {
      id: 11,
      title: "Security and Passwords",
      content:
        "Ensure scripts/programs are secure and directory permissions are set to 755 or more restrictive. Users are responsible for all actions under their account, including compromised credentials. Weak passwords may lead to suspension until a secure password is used. Audits may be conducted to enforce this.",
    },
    {
      id: 12,
      title: "Zero Tolerance Spam Policy",
      content:
        "Unsolicited email, bulk emailing, and spam are prohibited. 'Safe lists' and purchased lists are treated as spam. Spam results in account termination with/without notice.",
    },
    {
      id: 13,
      title: "Payment Information",
      content:
        "Provide appropriate payment in advance. Services are billed on a recurring basis unless canceled. Ensure payment information is up-to-date and invoices are paid on time. Notify billing@NexxyHost.com after renewal payments. No refunds for domain renewals. NexxyHost may change payment amounts at any time.",
    },
    {
      id: 14,
      title: "Termination",
      content:
        "NexxyHost may terminate services without notice for non-payment, agreement violations, harmful conduct, or as specified. No refunds for fees paid in advance, and users are liable for accrued fees. User content, websites, and data will be deleted upon termination.",
    },
    {
      id: 15,
      title: "Backups and Data Loss",
      content:
        "Use of services is at your own risk. NexxyHost is not responsible for files/data on your account. Maintain appropriate backups of all files/data stored on NexxyHost servers.",
    },
    {
      id: 16,
      title: "Promotional Terms",
      content:
        "Free products (e.g., domain names) bundled with promotions become void if not renewed before expiration or if billing cycles change. Free products will be charged at standard renewal rates. Domain promo discounts do not apply to renewals, transfers, premium domains, trademark domains, or pre-registration fees unless stated.",
    },
    {
      id: 17,
      title: "Cancellations and Refunds",
      content:
        "NexxyHost may cancel/suspend accounts at any time with/without notice. Staff abuse results in suspension/termination. Only first-time accounts are eligible for refunds. Violations of Terms of Service waive refund eligibility.",
    },
    {
      id: 18,
      title: "Resource Usage",
      content:
        "Do not use 25% or more of system resources for longer than 90 seconds (e.g., CGI scripts, FTP, PHP, HTTP). No stand-alone, unattended server-side processes or daemons (e.g., IRCD). No web spiders/indexers (e.g., Google Cash/AdSpy) on shared servers. No software interfacing with IRC networks. No bit torrent applications/trackers/clients; legal torrents may be linked off-site. No file-sharing/peer-to-peer activities. No gaming servers (e.g., Counter-Strike, Half-Life). No cron entries with intervals less than 15 minutes. No MySQL queries longer than 15 seconds; tables should be indexed. Use local files instead of URLs in PHP include functions. Avoid forcing HTML to handle server-side code (e.g., PHP, SHTML). Use HTTPS only when necessary due to high CPU usage.",
    },
    {
      id: 19,
      title: "INODES",
      content:
        "Accounts using more than 250,000 inodes may receive a warning; excessive use may lead to suspension. Accounts exceeding 100,000 inodes are removed from backups (databases still backed up). Excessive inodes often result from unchecked catchall email addresses. Disable default mailbox in cPanel with ':fail: No such user here' to prevent this.",
    },
    {
      id: 20,
      title: "Bandwidth Usage",
      content:
        "Accounts exceeding monthly bandwidth allowances may be suspended until the next allocation, additional bandwidth is purchased, the account is upgraded, or terminated. Additional fees may apply for overages. Unused bandwidth does not carry over.",
    },
    {
      id: 21,
      title: "Reseller Responsibilities",
      content:
        "Resellers must support their clients; NexxyHost does not provide direct support to reseller clients. Resellers are responsible for client content and actions. Shared accounts cannot resell hosting; use a reseller account for reselling.",
    },
    {
      id: 22,
      title: "Price Change",
      content:
        "NexxyHost reserves the right to change prices and resource allocations at any time.",
    },
    {
      id: 23,
      title: "Indemnification",
      content:
        "Customers agree to indemnify NexxyHost against demands, liabilities, losses, costs, and claims, including attorney’s fees, arising from services provided, products sold, customer-supplied material infringing proprietary rights, copyright infringement, or defective products.",
    },
    {
      id: 24,
      title: "Disclaimer",
      content:
        "NexxyHost is not responsible for business damages, makes no warranties (expressed or implied), and disclaims merchantability or fitness for a particular purpose, including data loss from delays, non-deliveries, wrong deliveries, or service interruptions.",
    },
    {
      id: 25,
      title: "Disclosure to Law Enforcement",
      content:
        "NexxyHost may disclose subscriber information to law enforcement upon lawful request without further consent or notification and will cooperate fully with law enforcement.",
    },
    {
      id: 26,
      title: "Changes to the TOS",
      content:
        "NexxyHost reserves the right to revise policies at any time without notice.",
    },
    {
      id: 27,
      title: "Important Notice For .NG Domains",
      content:
        "Registrants must be individuals/entities in Nigeria or have a trademark/business/proxy in Nigeria. Domains are not for speculative purposes. Trademarks cannot be registered as domain names without authorization. Generic .com.ng names are often premium and auctioned. .edu.ng is for degree-awarding institutions, .gov.ng for government entities, .net.ng for telecoms. Full .ng registrant agreement available for download.",
    },
    {
      id: 28,
      title: "Customer Responsibilities",
      content:
        "Bulk Email: Provide an easy opt-out mechanism for bulk email recipients and include the source of the recipient’s address in each message. CPU Usage: Avoid excessive CPU usage from heavy scripts or Flash files. No single site may consume 30% of CPU for a sustained period. Password Protection: Protect passwords and be responsible for authorized/unauthorized use. Content Protection: Prevent minors from accessing unsuitable material published via any Service. Content Ownership: Responsible for all content/information on or transmitted via the Service. File Repository / Dump Sites: Do not use disk space as a file repository or dumpsite (e.g., for warez, serials, sound files, applications, zip files, or remote linking for images/flash on other sites).",
    },
    {
      id: 29,
      title: "Violation of Rules",
      content:
        "Breaking rules may result in immediate account suspension with/without notice, no refund, and possible Ascending possible criminal prosecution.",
    },
    {
      id: 30,
      title: "Final Disclaimer",
      content:
        "NexxyHost will not be held responsible for any damages, events that may occur resulting from the use of our services, downtimes, failure or refusal to register or renew your products and services with us.",
    },
  ];
  return (
    <Layout>
      <Policies text="GENERAL TERMS OF SERVICE" Policies={generalTerms} />
    </Layout>
  );
};

export default GeneralTermOFService;
