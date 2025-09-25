import { Link } from "react-router-dom";
import { Heart, Shield, CreditCard, FileText, Users, Mail, Phone, MapPin } from "lucide-react";
import { SecurityBadges } from "@/components/SecurityBadges";
import { Separator } from "@/components/ui/separator";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerSections = {
    platform: {
      title: "Platform",
      links: [{
        label: "How It Works",
        href: "/how-it-works"
      }, {
        label: "Start a Campaign",
        href: "/create"
      }, {
        label: "Browse Projects",
        href: "/projects"
      }, {
        label: "Success Stories",
        href: "/success-stories"
      }, {
        label: "Impact Reports",
        href: "/impact"
      }]
    },
    support: {
      title: "Support & Help",
      links: [{
        label: "Help Center",
        href: "/help"
      }, {
        label: "FAQ",
        href: "/faq"
      }, {
        label: "Campaign Guidelines",
        href: "/guidelines"
      }, {
        label: "Verification Process",
        href: "/verification"
      }, {
        label: "Contact Support",
        href: "/contact"
      }]
    },
    legal: {
      title: "Legal & Compliance",
      links: [{
        label: "Terms of Service",
        href: "/terms"
      }, {
        label: "Privacy Policy",
        href: "/privacy"
      }, {
        label: "Cookie Policy",
        href: "/cookies"
      }, {
        label: "Refund Policy",
        href: "/refunds"
      }, {
        label: "Anti-Fraud Policy",
        href: "/anti-fraud"
      }]
    },
    about: {
      title: "About Us",
      links: [{
        label: "Our Mission",
        href: "/about"
      }, {
        label: "Team",
        href: "/team"
      }, {
        label: "Careers",
        href: "/careers"
      }, {
        label: "Press & Media",
        href: "/press"
      }, {
        label: "Partner With Us",
        href: "/partners"
      }]
    }
  };
  return <footer className="bg-background border-t border-border">
      {/* Security & Trust Section */}
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold mb-2">Trusted & Secure Platform</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your donations are protected by bank-level security and transparency standards
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            <SecurityBadges />
          </div>

          {/* Payment Methods */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-3">Accepted Payment Methods</p>
            <div className="flex justify-center items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-2 bg-background rounded-lg border border-border">
                <CreditCard className="w-4 h-4" />
                <span className="text-sm">Credit Card</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-background rounded-lg border border-border">
                <CreditCard className="w-4 h-4" />
                <span className="text-sm">Bank Transfer</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-background rounded-lg border border-border">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Mobile Banking</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DL</span>
                </div>
                
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                Empowering Sri Lankan communities through transparent, secure crowdfunding. 
                From Jaffna to Hambantota, we connect generous hearts with meaningful causes.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+94 11 234 5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@donatelanka.lk</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Colombo 03, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerSections).map(([key, section]) => <div key={key}>
                <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map(link => <li key={link.href}>
                      <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    </li>)}
                </ul>
              </div>)}
          </div>

          <Separator className="my-8" />

          {/* Bottom Bar */}
          

          {/* Regulatory Notice */}
          
        </div>
      </div>
    </footer>;
};