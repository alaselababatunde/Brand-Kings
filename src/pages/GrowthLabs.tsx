import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Rocket, MessageCircle, PhoneCall, Instagram, Music2, Facebook,
  ArrowLeft, Users, Target, TrendingUp, Zap, CheckCircle, Crown
} from 'lucide-react';

function GrowthLabs() {
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
    <div className="app subbrand-page">
      {/* Header */}
      <header className={`glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar">
          <div className="logo">
            <Link to="/">
              <Crown size={32} className="brand-icon" />
              <span className="logo-text">Growth<span>Labs</span></span>
            </Link>
          </div>
          <nav id="main-navigation" role="navigation" className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Get Started</a></li>
            </ul>
          </nav>
          <button type="button" className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
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
      <section id="hero" className="subbrand-hero" style={{
        // custom accent color for this brand
        '--accent': '#7C4DFF',
      } as React.CSSProperties}>
        <div className="container">
          <div className="hero-content reveal">
            <div className="subbrand-badge">
              <Rocket size={16} /> A BrandKings Company
            </div>
            <h1 className="hero-title">Talent Network &<br />Growth Systems</h1>
            <p className="hero-subtitle">We build the infrastructure that powers elite creative teams. Same tools. Same standards. Deployed at scale.</p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Start Your Team</a>
              <a href="#services" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Our Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">What We <span>Build</span></h2>
          </div>
          <div className="services-grid">
            <div className="service-card glass reveal">
              <div className="service-icon"><Users size={24} /></div>
              <h3>Talent Networks</h3>
              <p>Curated pools of vetted specialists ready to deploy on your projects.</p>
            </div>
            <div className="service-card glass reveal reveal-delay-1">
              <div className="service-icon"><Target size={24} /></div>
              <h3>Team Infrastructure</h3>
              <p>The systems and processes that let teams execute at BrandKings standard.</p>
            </div>
            <div className="service-card glass reveal reveal-delay-2">
              <div className="service-icon"><TrendingUp size={24} /></div>
              <h3>Performance Systems</h3>
              <p>Tracking, reporting, and optimization frameworks that drive results.</p>
            </div>
            <div className="service-card glass reveal reveal-delay-3">
              <div className="service-icon"><Zap size={24} /></div>
              <h3>Rapid Deployment</h3>
              <p>7-day team assembly and system activation for urgent projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding bg-purple-gradient">
        <div className="container">
          <div className="about-grid">
            <div className="about-content reveal">
              <h2 className="section-title">Same Backbone.<br /><span>Different Industry.</span></h2>
              <p className="section-desc">Growth Labs operates on the BrandKings operating system — same tools, same processes, same non-negotiable standards.</p>
              <ul className="about-list">
                <li><CheckCircle size={18} /> BrandKings Quality Bar</li>
                <li><CheckCircle size={18} /> Same Tools & Processes</li>
                <li><CheckCircle size={18} /> Centralized Oversight</li>
                <li><CheckCircle size={18} /> Industry-Specific Execution</li>
              </ul>
            </div>
            <div className="about-stats reveal reveal-delay-2">
              <div className="stat-card glass">
                <span className="stat-number">50+</span>
                <span className="stat-label">Vetted Specialists</span>
              </div>
              <div className="stat-card glass">
                <span className="stat-number">7</span>
                <span className="stat-label">Day Deployment</span>
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
              <h2 className="section-title">Build Your <br /><span>Dream Team.</span></h2>
              <p className="contact-desc">Ready to scale with elite talent? Let's talk.</p>

              <div className="contact-methods">
                <a href="https://wa.me/2349078239676" target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp-btn">
                  <MessageCircle size={24} />
                  <div>
                    <span className="btn-label">Chat on WhatsApp</span>
                    <span className="btn-sub">+234 907 823 9676</span>
                  </div>
                </a>
                <a href="tel:+2349078239676" className="contact-btn call-btn">
                  <PhoneCall size={24} />
                  <div>
                    <span className="btn-label">Call Us</span>
                    <span className="btn-sub">+234 907 823 9676</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-form-wrap glass reveal reveal-delay-2">
              <form className="contact-form" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const text = encodeURIComponent(`Hi Growth Labs!\n\nName: ${formData.get('name')}\nCompany: ${formData.get('company')}\nNeeds: ${formData.get('needs')}`);
                window.open(`https://wa.me/2349078239676?text=${text}`, '_blank');
              }}>
                <h3>Tell Us What You Need</h3>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Company name" />
                </div>
                <div className="form-group">
                  <label htmlFor="needs">What do you need?</label>
                  <textarea id="needs" name="needs" rows={3} placeholder="Tell us about your project..."></textarea>
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
              <Rocket size={20} />
              <span>Growth<strong>Labs</strong></span>
            </Link>
            <p>A BrandKings Company</p>
          </div>
          <div className="footer-links">
            <h5>BrandKings Group</h5>
            <ul>
              <li><Link to="/">BrandKings</Link></li>
              <li><Link to="/inspired-creativity">Inspired Creativity</Link></li>
              <li><Link to="/strategic-insight">Strategic Insight</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h5>Contact</h5>
            <a href="tel:+2349078239676">+234 907 823 9676</a>
            <div className="footer-social">
              <a href="https://www.instagram.com/brandkings__/" target="_blank" rel="noopener noreferrer"><Instagram size={16} /></a>
              <a href="https://www.tiktok.com/@brandk1ngs" target="_blank" rel="noopener noreferrer"><Music2 size={16} /></a>
              <a href="https://www.facebook.com/share/18dfjeHUjC/" target="_blank" rel="noopener noreferrer"><Facebook size={16} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Growth Labs. A BrandKings Company.</p>
        </div>
      </footer>
    </div>
  );
}

export default GrowthLabs;
