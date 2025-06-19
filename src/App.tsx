import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegisterDomain from "./pages/Domain/registerDomain";
import TransferDomain from "./pages/Domain/DomainReseller";
import WhoIsSearch from "./pages/Domain/whoIsSearch";
import SharedHosting from "./pages/WebsiteAndHosting/sharedHosting";
import WebsiteBuilder from "./pages/WebsiteAndHosting/websiteBuilder";
import HostingMigrationAndTransfer from "./pages/WebsiteAndHosting/HostingMigrationAndTransfer";
import WordpressShareHosting from "./pages/WebsiteAndHosting/wordpressShareHosting";
import DedicatedCloudHosting from "./pages/WebsiteAndHosting/DedicatedCloudHosting";
import Resellerhosting from "./pages/WebsiteAndHosting/resellerhosting";
import WebSecurityPage from "./pages/Security/WebsiteSecurity";
import EnterpriseEmailHosting from "./pages/EmailServices/EnterpriseEmailHosting";
import EmailServices from "./pages/EmailServices/EmailServices";
import WhoisSearchPage from "./pages/Domain/whoIsSearch";
import SSLCertificatesPage from "./pages/Security/SSLCertificate";
import ContactPage from "./pages/Support/contactUs";
import PrivacyPolicy from "./pages/Legals/PrivacyPolicy";
import RefundPolicy from "./pages/Legals/RefundPolicy";
import FairUsagePolicy from "./pages/Legals/FairUsagePolicy";
import WebDevelopmentPolicy from "./pages/Legals/WebDevelopmentPolicy";
import SSLTermsOfService from "./pages/Legals/SSLTermsOfService";
import GeneralTermOFService from "./pages/Legals/GeneralTermOFService";
import Knowledgebase from "./pages/Support/knowledgebase";
import SubmitTicket from "./pages/Support/submitTicket";
import DomainReseller from "./pages/Domain/DomainReseller";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      
    });
  }, [pathname]);

  return null;
}

useEffect(() => {

  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/5f0a41165b59f94722ba8cff/default';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();

},[]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
       <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register-domain" element={<RegisterDomain />} />
          <Route path="/transfer-domain" element={<TransferDomain />} />
          <Route path="/regiter-domain" element={<WhoIsSearch />} />
          <Route path="/shared-hosting" element={<SharedHosting />} />
          <Route path="/website-builder" element={<WebsiteBuilder />} />
          <Route path="/website-security" element={<WebSecurityPage />} />
          <Route path="/ssl-certificate" element={<SSLCertificatesPage />} />
          <Route
            path="/wordpressshared-hosting"
            element={<WordpressShareHosting />}
          /> 
          <Route
            path="/hosting-migration"
            element={<HostingMigrationAndTransfer />}
          />
          <Route
            path="/dedicated-cloud-hosting"
            element={<DedicatedCloudHosting />}
          />
          <Route path="/reseller-hosting" element={<Resellerhosting />} />
          <Route path="/domain-reseller" element={<DomainReseller />} />
          <Route path="/email-services" element={<EmailServices />} />
          <Route path="/whois-search" element={<WhoisSearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/enterprise-email-hosting"
            element={<EnterpriseEmailHosting />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/knowledgebase" element={<Knowledgebase />} />
          <Route path="/submit-ticket" element={<SubmitTicket />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/fair-usage-policy" element={<FairUsagePolicy />} />
          <Route path="/ssl-terms" element={<SSLTermsOfService />} />
          <Route path="/terms-of-services" element={<GeneralTermOFService />} />
          <Route
            path="/webdevelopment-policy"
            element={<WebDevelopmentPolicy />}
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
