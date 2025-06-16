import Policies from "@/components/Policies";
import Layout from "@/components/Layout";
const FairUsagePolicy = () => {
  return (
    <Layout>
      <div className="mt-20 px-5 md:px-0 md:max-w-5xl flex mx-auto flex-col text-center gap-5 pb-20">
        <h1 className="text-3xl font-bold text-teal-900 mb-2 text-center border-b pb-4">
          NEXXYHOST | FAIR USAGE POLICY
        </h1>
        <h3 className="text-teal-900 text-xl font-semibold">
          The use of NexxyHost's products and services are governed by a Fair
          Use Policy
        </h3>
        <div className="flex flex-col gap-10 items-center justify-center ">
          <p>
            These plans are affordable because it allows many different
            customers to make use of the same underlying server and it will be
            unfair to disturb other users on the same server with your
            activities as it does of course have its limits.
          </p>
          <p>
            Using any of these hosting plans under this policy primarily for
            online file storage (like Google Drive, Microsoft Onedrive, Dropbox
            etc), electronic files archiving, video or audio streaming (like
            Youtube etc) is prohibited. You can store the files on third party
            online storage sites and embed the links on your website. It is safe
            and legal under applicable law to upload files only directly linked
            to, related to and displayed on your website.
          </p>
          <p>
            This policy provides customers with unlimited resources as they wish
            to use without any additional charge as their site visitors
            increases. Customers may use this features for any purpose as they
            like other than those unacceptable as stated in the Acceptable Use
            Policy and must stay within reasonable standards of fair use. If
            your site is poorly optimised, continually gets hacked or is causing
            issues for others on the shared servers (i.e excessive CPU, RAM,
            inodes or disk I/O usage, email storage per account), you will
            receive a notice warning upon reaching the threshold of the set
            limit. Usage beyond this limit may require an upgrade to a higher
            plan, virtual or cloud server in order not to affect other
            customers.
          </p>
          <p>
            Should NexxyHost deem a customer's account as exceeding fair use of
            bandwidth or other resources which causes interference with other
            users on our servers, NexxyHost will notify the customer and allow
            the customer to rectify the problem. However, should a customers'
            resource usage be significantly greater than fair use, NexxyHost
            reserves the right to suspend or terminate the customer’s account
            where appropriate. NexxyHost will discuss the available options that
            could provide better service for the customer.
          </p>
          <p>
            As a shared, reseller and wordpress hosting customer you share the
            total server resources such as disk space, bandwidth and other
            resources with other customers. In order to ensure fast & reliable
            service to you and all of our clients, any hosting account (i.e
            shared hosting, hosting reseller and wordpress hosting etc) that
            adversely affects the server or network performance on our shared
            servers must correct these issues or will be asked to upgrade to a
            virtual or cloud server in order not to affect other clients.
          </p>
          <p>
            This is good news and it means your site is getting popular and
            you've outgrown the capabilities of shared hosting, having greater
            control over the software stack and being able to assign more
            resources to your site means you'll be able to continue to provide a
            great experience to your customers/visitors as your business grows.
          </p>
          <p>
            NexxyHost reserves the right to add or modify the terms presented
            here. On this website, the terms bandwidth and data transfer are
            used interchangeably.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default FairUsagePolicy;
