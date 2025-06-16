import React from "react";
import { Link } from "react-router-dom";

const Legals = () => {
  const legals = [
    { title: "Privacy Policy", url: "/privacy-policy" },
    { title: "Refund Policy", url: "/refund-policy" },
    { title: "Fair Usage Policy", url: "/fair-usage-policy" },
    { title: "Web Development Terms of Policy", url: "/webdevelopment-policy" },
    { title: "General | Terms of Service", url: "/terms-of-services" },
    { title: "SSL Terms of service", url: "/ssl-terms" },
  ];
  return (
    <div className="rounded-lg flex flex-col w-[300px] ms-2 md:mr-0 gap-5 md:w-fit text-teal-900 p-2">
      {legals.map(({ title, url }) => {
        return (
          <Link className=" hover:underline" to={url}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Legals;
