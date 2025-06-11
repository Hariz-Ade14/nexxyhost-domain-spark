import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegisterDomain from "./pages/Domain/registerDomain"; 
import TransferDomain from "./pages/Domain/TransferDomain";
import WhoIsSearch from "./pages/Domain/whoIsSearch";
import SharedHosting from "./pages/WebsiteAndHosting/sharedHosting";
import WebsiteBuilder from "./pages/WebsiteAndHosting/websiteBuilder";
import HostingMigrationAndTransfer from "./pages/WebsiteAndHosting/HostingMigrationAndTransfer";
import WordpressShareHosting from "./pages/WebsiteAndHosting/wordpressShareHosting";
import DedicatedCloudHosting from "./pages/WebsiteAndHosting/DedicatedCloudHosting";
import Resellerhosting from "./pages/WebsiteAndHosting/resellerhosting";
import BusinessEmailHosting from "./pages/EmailServices/BusinessEmailHosting";
import EnterpriseEmailHosting from "./pages/EmailServices/EnterpriseEmailHosting";
import EmailServices from "./pages/EmailServices/EmailServices";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register-domain" element={<RegisterDomain/>}/>
          <Route path="/transfer-domain" element={<TransferDomain/>}/>
          <Route path="/regiter-domain" element={<WhoIsSearch/>}/>
          <Route path="/shared-hosting" element={<SharedHosting/>}/>
          <Route path="/website-builder" element={<WebsiteBuilder/>}/>
          <Route path="/wordpressshared-hosting" element={<WordpressShareHosting/>}/>
          <Route path="/hosting-migration" element={<HostingMigrationAndTransfer/>}/>
          <Route path="/dedicated-cloud-hosting" element={<DedicatedCloudHosting/>}/>
          <Route path="/reseller-hosting" element={<Resellerhosting/>}/>
          <Route path="/email-services" element={<EmailServices/>}/>
          <Route path="/enterprise-email-hosting" element={<EnterpriseEmailHosting/>}/>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
