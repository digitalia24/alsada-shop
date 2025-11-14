import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5EFE6] to-[#FAF7F2] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#5A4A3A] mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-[#8A7A6A] max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="border-[#E8DCC8] bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-[#C85A3C]/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-[#C85A3C]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-[#5A4A3A] mb-2">Visit Us</h3>
                      <p className="text-sm text-[#8A7A6A]">
                        Rua do Comércio, 123<br />
                        1100-100 Lisboa<br />
                        Portugal
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#E8DCC8] bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-[#C85A3C]/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-[#C85A3C]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-[#5A4A3A] mb-2">Call Us</h3>
                      <p className="text-sm text-[#8A7A6A]">
                        +351 123 456 789<br />
                        +351 123 456 789<br />
                        +351 987 654 321
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#E8DCC8] bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-[#C85A3C]/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-[#C85A3C]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-[#5A4A3A] mb-2">Email Us</h3>
                      <p className="text-sm text-[#8A7A6A]">
                        info@marrakesh.pt<br />
                        support@marrakesh.pt
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#E8DCC8] bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-[#C85A3C]/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-[#C85A3C]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-[#5A4A3A] mb-2">Business Hours</h3>
                      <p className="text-sm text-[#8A7A6A]">
                        Monday - Friday: 9:00 - 18:00<br />
                        Saturday: 10:00 - 16:00<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-[#E8DCC8] bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-serif text-[#5A4A3A] mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-[#8A7A6A] mb-8">
                    Fill out the form below and we'll get back to you soon
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#5A4A3A] mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="border-[#E8DCC8] focus:border-[#C85A3C]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#5A4A3A] mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-[#E8DCC8] focus:border-[#C85A3C]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#5A4A3A] mb-2">
                          Phone
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+351 123 456 789"
                          className="border-[#E8DCC8] focus:border-[#C85A3C]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#5A4A3A] mb-2">
                          Subject *
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                          className="border-[#E8DCC8] focus:border-[#C85A3C]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#5A4A3A] mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        required
                        rows={6}
                        className="border-[#E8DCC8] focus:border-[#C85A3C] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto bg-[#C85A3C] hover:bg-[#B04A2C] text-white px-12"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-[#E8DCC8] overflow-hidden">
            <div className="w-full h-[400px] bg-[#E8DCC8] flex items-center justify-center">
              <div className="text-center text-[#8A7A6A]">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p>Map integration placeholder</p>
                <p className="text-sm">Rua do Comércio, 123, Lisboa, Portugal</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
