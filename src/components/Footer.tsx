import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="font-display text-xl mb-4">
            Care<span className="text-primary">Well</span>
          </h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Compassionate healthcare for you and your family. Modern medicine with a personal touch.
          </p>
        </div>
        {[
          { title: "Services", items: ["Primary Care", "Pediatrics", "Cardiology", "Dermatology"] },
          { title: "Company", items: ["About Us", "Our Team", "Careers", "News"] },
          { title: "Contact", items: ["(555) 123-4567", "info@carewell.com", "123 Health Ave", "Mon–Fri 8am–6pm"] },
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
        <p className="text-xs opacity-50">© 2026 CareWell Health. All rights reserved.</p>
        <p className="text-xs opacity-50 flex items-center gap-1">
          Made with <Heart size={12} className="text-primary" /> for better health
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
