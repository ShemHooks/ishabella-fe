import React from "react";

const AboutPage = () => {
  const footerLinks = {
    Products: ["Solar Panels", "Inverters", "Batteries", "Solar Kits"],
    Contact: ["About Us", "Careers", "Blog", "Contact"],
    Support: ["Installation Guide", "Warranty", "FAQ", "Returns"],
  };

  return (
    <footer className="bg-[#EBF5FF] pt-16 pb-2 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {/* Replace with your actual Ishabella logo image */}
              <img
                src="/images/logo.png"
                alt="Ishabella Logo"
                className="h-30 w-40"
              />
            </div>
            <p className="text-[#0A3D62]/70 text-sm leading-relaxed">
              Empowering homes and businesses with premium solar energy
              solutions. Trusted by thousands of customers worldwide.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-[#0A3D62] mb-6">{title}</h3>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#0A3D62]/80 hover:text-[#0A3D62] transition-colors text-sm font-medium"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider and Copyright
        <div className="border-t border-[#0A3D62]/20 pt-8 text-center">
          <p className="text-[#0A3D62]/60 text-sm"></p>
        </div> */}
      </div>
    </footer>
  );
};

export default AboutPage;
