import Layout from "@/components/Layout";
const Knowledgebase = () => {
  return (
    <Layout>
      <div className="mt-20 min-h-screen px-20 py-10 flex flex-col gap-12 mx-auto bg-red-500 bg-teal-100/50">
        <h1 className="font-bold text-3xl text-teal-900">
          Advice and answers from the Customer Success Team
        </h1>

        <div className="flex flex-col gap-10 items-start justify-start ">
          <p>
            <span className="font-bold text-xl text-teal-900">
              1. What is a VPS Server
            </span>
            <br />A virtual private server (VPS) is created through the process
            of virtualization, by which a virtual replica of a physical server
            is created. A VPS is like having access to your own personal server
            with an allocated number of resources and choice of a pre-installed
            operating system. It is an isolated microsystem based on a shared
            server. Since a VPS is self contained, you have full control of your
            server setup and are responsible for all updates and security. You
            can also choose to opt for our managed service.
          </p>
          <p>
            <span className="font-bold text-xl text-teal-900">
              2. Why do you need a VPS Server?
            </span>
            <br />
            If you know your site is going to enjoy a high amount of traffic, a
            VPS is a safer option than shared hosting options. VPS is also a
            great option if you have a number of websites to host and want to
            enjoy the ability to tweak their setup behind the scenes. A VPS
            server works hard when it is needed, with burstable memory that
            kicks in when site traffic picks up. You can also reap the benefits
            of dedicated bandwidth, CPU, disk space and RAM. VPS servers remove
            any limitations, allowing you complete flexibility. However, we
            still offer excellent technical support should you need it.
          </p>
          <p>
            <span className="font-bold text-xl text-teal-900">
              3. What is VPS Hosting?
            </span>
            <br />
            VPS Hosting is a halfway point between shared hosting and a
            dedicated server. The VPS is created on a shared server but is self
            contained with its own configuration. VPS Hosting gives you more
            flexibility and access to more resources than shared hosting, making
            VPS ideal for a growing business or platform.
          </p>
          <p>
            <span className="font-bold text-xl text-teal-900">
              4. How to secure my VPS Server?
            </span>
            <br />
            All data is stored on a RAID10 SAN, and your backups will be stored
            away from the primary data store, therefore adding extra peace of
            mind. We recommend configuring iptables on all VPS servers, as well
            as keeping patches up-to-date to keep your systems secure.
          </p>
          <p>
            <span className="font-bold text-xl text-teal-900">
              5. How to connect to VPS?
            </span>
            <br />
            You can connect to your VPS through SSH and PuTTY or Remote Desktop.
          </p>
          <p>
            <span className="font-bold text-xl text-teal-900">
              6. Account information not received?
            </span>
            <br />
            After an order is placed, an Account Information email is sent to
            you. Sometimes this email can be delayed or marked as spam depending
            on your email provider. In the event that this occurs, please check
            your spam and junk email folders.
          </p>
          <p>
            <span className="font-bold text-xl text-teal-900">
              7. Do you offer free SSL certificates?
            </span>
            <br />
            We currently utilize AutoSSL from cPanel, this automatically
            installs free SSL certificates on your sub/addon and main domains.
            The best thing is, it's all automatic, you don't need to do
            anything! On new orders, it may take up to 12 hours for AutoSSL to
            detect your account and activate a free SSL on your domain(s).
          </p>
          <p>
            <span className="font-bold text-xl text-teal-900">
              8. What payment methods do you accept?
            </span>
            <br />
            We accept Nigerian Credit/Debit Cards, and some selected
            International Cards. Your card is not accepted? Not too worry,
            Contact us to make other arrangments
          </p>
          <p>
            <span className="font-bold text-xl text-teal-900">
              9. What are the nameservers?
            </span>
            <br />
            The nameservers for our Web Hosting packages are as follows:
            <br />
            <ol>
              <li>ns1.nexxyhost.com.ng</li>
              <li>ns2.nexxyhost.com.ng</li>
            </ol>
            <br /> We utilize a DNS cluster so it doesn't matter which server
            you're on, you don't need to worry about looking for specific
            nameservers.
          </p>

          <p></p>
        </div>
      </div>
    </Layout>
  );
};

export default Knowledgebase;
