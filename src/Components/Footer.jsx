import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
 
const Footer = () => {
  return (
    <footer className="bg-[#001F3F] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-navy">GIS</span>
              </div>
              <span className="font-heading text-xl font-semibold">
                Great Indian Sweets
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Bringing you authentic Indian sweets from traditional treasure kitchens since 1950. Quality, tradition, and taste in every bite.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-white/60 hover:text-gold cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-white/60 hover:text-gold cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-white/60 hover:text-gold cursor-pointer transition-colors" />
            </div>
          </div>
 
          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Sweets Collection</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Celebration Baskets</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Bulk Orders</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">About Us</a></li>
            </ul>
          </div>
 
          {/* Customer Service */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Track Your Order</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Returns</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Contact Support</a></li>
            </ul>
          </div>
 
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <span className="text-white/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <span className="text-white/80">hello@greatindiansweets.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  Traditional Sweet Shop<br />
                  Chennai, Tamil Nadu 600001
                </span>
              </div>
            </div>
          </div>
        </div>
 
        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Great Indian Sweets. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;