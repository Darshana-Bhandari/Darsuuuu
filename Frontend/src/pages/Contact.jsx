import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const contactInfo = [
    { icon: '📍', title: 'Address', details: 'Kathmandu, Nepal' },
    { icon: '📞', title: 'Phone', details: '+977-1-444-5678' },
    { icon: '📧', title: 'Email', details: 'info@clinicms.com' },
    { icon: '🕐', title: 'Working Hours', details: 'Mon-Fri: 9:00 AM - 6:00 PM' }
  ];

  return (
    <div className="container-custom py-16 animate-fade-in-up sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Contact us</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            We’re here to help.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Have questions? We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-0 bg-white/90 p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
            <h3 className="mb-5 text-xl font-bold text-slate-900">
              Send a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Your Name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Input
                label="Subject"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message <span className="text-danger">*</span>
                </label>
                <textarea
                  className="input"
                  rows="4"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" variant="primary" size="lg" fullWidth>
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="border-0 bg-white/90 p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
              <h3 className="mb-5 text-xl font-bold text-slate-900">
                Contact information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="font-medium text-slate-900">{info.title}</p>
                      <p className="text-sm text-slate-600">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-0 bg-white/90 p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
              <h3 className="mb-5 text-xl font-bold text-slate-900">
                Follow us
              </h3>
              <div className="flex gap-4">
                <a href="#" className="text-3xl transition-transform hover:scale-110" aria-label="Facebook">
                  📘
                </a>
                <a href="#" className="text-3xl transition-transform hover:scale-110" aria-label="Twitter">
                  🐦
                </a>
                <a href="#" className="text-3xl transition-transform hover:scale-110" aria-label="Instagram">
                  📸
                </a>
                <a href="#" className="text-3xl transition-transform hover:scale-110" aria-label="LinkedIn">
                  💼
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;