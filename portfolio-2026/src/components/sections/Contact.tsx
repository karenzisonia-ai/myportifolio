'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Mail, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 flex items-center gap-4">
            <span className="text-cyan-primary font-mono text-xl">04.</span>
            Get In Touch
            <div className="h-px bg-dark-lighter flex-1 ml-4 max-w-xs"></div>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            I'm currently looking for new opportunities and my inbox is always open. Whether you
            have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-4"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-text-primary mb-2 font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-dark-lighter rounded-lg text-text-primary focus:outline-none focus:border-cyan-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-primary mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-dark-lighter rounded-lg text-text-primary focus:outline-none focus:border-cyan-primary transition-colors"
                  placeholder="karenzisonia@gmail.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-text-primary mb-2 font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-card border border-dark-lighter rounded-lg text-text-primary focus:outline-none focus:border-cyan-primary transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-text-primary mb-2 font-medium">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-dark-card border border-dark-lighter rounded-lg text-text-primary focus:outline-none focus:border-cyan-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <div className="text-center">
              <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </div>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-cyan-primary text-center font-medium"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-center font-medium"
              >
                ✗ Something went wrong. Please try again later.
              </motion.p>
            )}
          </form>

          {/* Alternative Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-text-secondary mb-4">Or reach me directly at:</p>
            <a
              href="mailto:karenzisonia@gmail.com"
              className="inline-flex items-center gap-2 text-cyan-primary hover:text-cyan-light font-medium text-lg"
            >
              <Mail size={20} />
              karenzisonia@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
