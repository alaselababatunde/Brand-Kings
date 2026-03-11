import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Heart, MessageCircle, ArrowLeft, 
  Activity, Sparkles, Users, Shield, CheckCircle
} from 'lucide-react';

function HealthWellness() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <div className="app subbrand-page wellness-page">
      {/* Header */}
      <header className={`glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar">
          <div className="logo">
            <Link to="/">
              <Heart size={32} className="brand-icon" />
              <span className="logo-text">Health &<span>Wellness</span></span>
            </Link>
          </div>
          <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Get Started</a></li>
            </ul>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Back to BrandKings */}
      <div className="back-link">
        <div className="container">
          <Link to="/" className="back-btn">
            <ArrowLeft size={16} /> Back to BrandKings
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section id="hero" className="subbrand-hero" style={{ '--accent': '#4CAF50' } as React.CSSProperties}>
        <div className="container">
          <div className="hero-content reveal">
            <div className="subbrand-badge">
              <Heart size={16} /> A BrandKings Company
            </div>
            <h1 className="hero-title">Wellness Brands<br />That Transform</h1>
            <p className="hero-subtitle">Building health & wellness brands that inspire action and create lasting change. Powered by BrandKings.</p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Build Your Brand</a>
              <a href="#services" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Our Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Wellness <span>Services</span></h2>
          </div>
          <div className="services-grid">
            <div className="service-card glass reveal">
              <div className="service-icon"><Activity size={24} /></div>
              <h3>Brand Strategy</h3>
              <p>Positioning that resonates with health-conscious audiences.</p>
            </div>
            <div className="service-card glass reveal reveal-delay-1">
              <div className="service-icon"><Sparkles size={24} /></div>
              <h3>Visual Identity</h3>
              <p>Designs that communicate wellness, vitality, and trust.</p>
            </div>
            <div className="service-card glass reveal reveal-delay-2">
              <div className="service-icon"><Users size={24} /></div>
              <h3>Community Building</h3>
              <p>Grow engaged communities around your wellness mission.</p>
            </div>
            <div className="service-card glass reveal reveal-delay-3">
              <div className="service-icon"><Shield size={24} /></div>
              <h3>Trust & Authority</h3>
              <p>Build credibility that converts followers into customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding bg-purple-gradient">
        <div className="container">
          <div className="about-grid">
            <div className="about-content reveal">
              <h2 className="section-title">Wellness Brands<br /><span>That Inspire.</span></h2>
              <p className="section-desc">We understand the wellness industry. Same BrandKings quality, tailored for health & fitness brands.</p>
              <ul className="about-list">
                <li><CheckCircle size={18} /> Industry Expertise</li>
                <li><CheckCircle size={18} /> BrandKings Quality</li>
                <li><CheckCircle size={18} /> Same Tools & Systems</li>
                <li><CheckCircle size={18} /> Results That Matter</li>
              </ul>
            </div>
            <div className="about-stats reveal reveal-delay-2">
              <div className="stat-card glass">
                <span className="stat-number">25+</span>
                <span className="stat-label">Wellness Brands</span>
              </div>
              <div className="stat-card glass">
                <span className="stat-number">3×</span>
                <span className="stat-label">Avg. Engagement</span>
              </div>
              <div className="stat-card glass">
                <span className="stat-number">100%</span>
                <span className="stat-label">BrandKings Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <h2 className="section-title">Build Your<br /><span>Wellness Brand.</span></h2>
              <p className="contact-desc">Ready to inspire? Let's build something transformative.</p>

              <div className="contact-methods">
                <a href="https://wa.me/2349078239676" target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp-btn">
                  <MessageCircle size={24} />
                  <div>
                    <span className="btn-label">Chat on WhatsApp</span>
                    <span className="btn-sub">+234 907 823 9676</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-form-wrap glass reveal reveal-delay-2">
              <form className="contact-form" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const text = encodeURIComponent(`Hi Health & Wellness!\n\nName: ${formData.get('name')}\nBrand: ${formData.get('brand')}\nFocus: ${formData.get('focus')}`);
                window.open(`https://wa.me/2349078239676?text=${text}`, '_blank');
              }}>
                <h3>Tell Us About Your Brand</h3>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="brand">Brand Name</label>
                  <input type="text" id="brand" name="brand" placeholder="Your wellness brand" />
                </div>
                <div className="form-group">
                  <label htmlFor="focus">Wellness Focus</label>
                  <select id="focus" name="focus">
                    <option value="">Select focus area</option>
                    <option>Fitness</option>
                    <option>Nutrition</option>
                    <option>Mental Health</option>
                    <option>Holistic Wellness</option>
                    <option>Other</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Get Started</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer glass">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Heart size={20} />
              <span>Health &<strong>Wellness</strong></span>
            </Link>
            <p>A BrandKings Company</p>
          </div>
          <div className="footer-links">
            <h5>BrandKings Group</h5>
            <ul>
              <li><Link to="/">BrandKings</Link></li>
              <li><Link to="/growth-labs">Growth Labs</Link></li>
              <li><Link to="/inspired-creativity">Inspired Creativity</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h5>Contact</h5>
            <a href="tel:+2349078239676">+234 907 823 9676</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Health & Wellness. A BrandKings Company.</p>
        </div>
      </footer>
    </div>
  );
}

export default HealthWellness;
