import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-sage flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">A</span>
            </div>
            <h3 className="font-display text-xl">
              Apex<span className="text-sage">Salus</span>
            </h3>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Expert healthcare administration consulting. Elevating operations,
            compliance, and strategic growth.
          </p>
        </div>
        {[
          { title: "Services", items: ["Operations Consulting", "Strategic Planning", "Compliance & Accreditation"] },
          { title: "Company", items: ["About", "Approach", "Testimonials", "Contact"] },
          { title: "Contact", items: ["(555) 987-6543", "hello@apexsalus.com", "Virtual & In-Person", "Mon–Fri 8am–6pm"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider opacity-80">{col.title}</h4>
            <ul className="space-y-2">
              {col.items.map((item) => (
                <li key={item} className="text-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs opacity-50">© 2026 ApexSalus. All rights reserved.</p>
        <p className="text-xs opacity-50 flex items-center gap-1">
          Building stronger systems <Heart size={12} className="text-sage" /> for better care
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
