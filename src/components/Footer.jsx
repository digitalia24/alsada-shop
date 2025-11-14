import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from '../hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#F5EFE6] border-t border-[#E8DCC8] mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-serif text-[#C85A3C] mb-4">Marrakesh</h2>
            <p className="text-sm text-[#5A4A3A] leading-relaxed">
              Authentic Moroccan perfumes, spices, and cultural treasures. Bringing the essence of Morocco to Portugal and beyond.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#5A4A3A] mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-sm text-[#5A4A3A] hover:text-[#C85A3C] transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/perfume" className="text-sm text-[#5A4A3A] hover:text-[#C85A3C] transition-colors">
                  Perfumes
                </Link>
              </li>
              <li>
                <Link to="/feminine" className="text-sm text-[#5A4A3A] hover:text-[#C85A3C] transition-colors">
                  Feminine Collection
                </Link>
              </li>
              <li>
                <Link to="/masculine" className="text-sm text-[#5A4A3A] hover:text-[#C85A3C] transition-colors">
                  Masculine Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#5A4A3A] mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-sm text-[#5A4A3A] hover:text-[#C85A3C] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-[#5A4A3A] hover:text-[#C85A3C] transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#5A4A3A] hover:text-[#C85A3C] transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#5A4A3A] hover:text-[#C85A3C] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-[#5A4A3A] mb-4">Newsletter</h3>
            <p className="text-sm text-[#5A4A3A] mb-4">
              Subscribe for exclusive offers and Moroccan inspiration
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border-[#E8DCC8] focus:border-[#C85A3C]"
              />
              <Button
                type="submit"
                className="w-full bg-[#C85A3C] hover:bg-[#B04A2C] text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#E8DCC8] flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#5A4A3A] mb-4 md:mb-0">
            © 2025 Marrakesh. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#5A4A3A] hover:text-[#C85A3C] transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-[#5A4A3A] hover:text-[#C85A3C] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-[#5A4A3A] hover:text-[#C85A3C] transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
