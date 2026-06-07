import { Link } from 'react-router-dom'

const nav = {
  Services: [
    { label: 'Salesforce Consulting',     to: '/services#salesforce' },
    { label: 'MuleSoft Integration',      to: '/services#salesforce' },
    { label: 'ServiceNow Implementation', to: '/services#servicenow' },
    { label: 'ServiceNow Development',    to: '/services#servicenow' },
    { label: 'CRM Migration',             to: '/services#migration' },
    { label: 'Cloud Migration',           to: '/services#migration' },
  ],
  Company: [
    { label: 'About Us',      to: '/about' },
    { label: 'Services',      to: '/services' },
    { label: 'Case Studies',  to: '/case-studies' },
    { label: 'Contact',       to: '/contact' },
  ],
  Contact: [
    { label: 'Free Consultation',           to: '/contact' },
    { label: 'info@hadapaservices.com',     to: 'mailto:info@hadapaservices.com' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-brand flex items-center justify-center">
                <span className="text-white font-black text-xs">H</span>
              </div>
              <span className="text-white font-bold text-base">
                Hadapa<span className="text-brand-cyan">.</span>
              </span>
            </Link>
            <p className="text-sm text-white/35 leading-relaxed max-w-[200px]">
              Expert Salesforce, ServiceNow &amp; migration consulting tailored to your business goals.
            </p>
          </div>

          {/* Nav columns */}
          {Object.entries(nav).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Hadapa Services LLC. All rights reserved.
          </p>
          <p className="text-xs text-white/25">Salesforce · ServiceNow · Migration</p>
        </div>
      </div>
    </footer>
  )
}
