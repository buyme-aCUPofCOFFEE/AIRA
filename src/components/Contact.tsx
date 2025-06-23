
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'ledesmaheartkey@gmail.com',
      href: 'mailto:ledesmaheartkey@gmail.com',
      color: 'pastel-lavender'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+63 951 035 0639',
      href: 'tel:+639510350639',
      color: 'pastel-mint'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Bohol, Philippines',
      href: '#',
      color: 'pastel-coral'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'pastel-sky'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'pastel-peach'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string, text: string, border: string, hover: string } } = {
      'pastel-lavender': {
        bg: 'bg-pastel-lavender/10',
        text: 'text-pastel-lavender',
        border: 'border-pastel-lavender/30',
        hover: 'hover:bg-pastel-lavender/20'
      },
      'pastel-mint': {
        bg: 'bg-pastel-mint/10',
        text: 'text-pastel-mint',
        border: 'border-pastel-mint/30',
        hover: 'hover:bg-pastel-mint/20'
      },
      'pastel-coral': {
        bg: 'bg-pastel-coral/10',
        text: 'text-pastel-coral',
        border: 'border-pastel-coral/30',
        hover: 'hover:bg-pastel-coral/20'
      },
      'pastel-sky': {
        bg: 'bg-pastel-sky/10',
        text: 'text-pastel-sky',
        border: 'border-pastel-sky/30',
        hover: 'hover:bg-pastel-sky/20'
      },
      'pastel-peach': {
        bg: 'bg-pastel-peach/10',
        text: 'text-pastel-peach',
        border: 'border-pastel-peach/30',
        hover: 'hover:bg-pastel-peach/20'
      }
    };
    return colorMap[color] || colorMap['pastel-lavender'];
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient font-poppins">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card-glow bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to discuss new opportunities, innovative projects, or just chat about technology and design. 
                  Feel free to reach out through any of the channels below!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const colors = getColorClasses(info.color);
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className={`flex items-center gap-4 p-4 rounded-xl ${colors.bg} ${colors.border} border ${colors.hover} transition-all duration-300 group`}
                      >
                        <div className={`${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{info.label}</div>
                          <div className={`font-semibold ${colors.text}`}>{info.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-pastel-mint mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const colors = getColorClasses(social.color);
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-xl ${colors.bg} ${colors.text} ${colors.border} border ${colors.hover} transition-all duration-300 hover:scale-110`}
                          title={social.label}
                        >
                          {social.icon}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-glow bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pastel-lavender focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pastel-lavender focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pastel-lavender focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 btn-gradient text-background font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-card/30 backdrop-blur-sm p-12 rounded-2xl border border-border/30">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need a stunning UI/UX design, a robust web application, or an innovative mobile solution, 
              I'm here to help bring your ideas to life.
            </p>
            <a 
              href="mailto:ledesmaheartkey@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 btn-gradient text-background font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
