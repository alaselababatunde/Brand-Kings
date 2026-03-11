import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Brain, MessageCircle, ArrowLeft, Search, 
  Target, TrendingUp, BarChart3, CheckCircle
} from 'lucide-react';

function StrategicInsight() {
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
    <div className="app subbrand-page insight-page">
      {/* Header */}
      <header className={`glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar">
          <div className="logo">
            <Link to="/">
              <Brain size={32} className="brand-icon" />
              <span className="logo-text">Strategic<span>Insight</span></span>
            </Link>
          </div>
          <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Get Insights</a></li>
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
      <section id="hero" className="subbrand-hero">
        <div className="container">
          <div className="hero-content reveal">
            <div className="subbrand-badge">
              <Brain size={16} /> A BrandKings Company
            </div>
            <h1 className="hero-title">Research & Strategy<br />That Wins</h1>
            <p className="hero-subtitle">Data-driven insights. Market-winning strategies. Built on the BrandKings operating system.</p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Get Strategy</a>
              <a href="#services" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Our Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Strategic <span>Services</span></h2>
          </div>
          <div className="services-grid">
            <div className="service-card glass reveal">
              <div className="service-icon"><Search size={24} /></div>
              <h3>Market Research</h3>
              <p>Deep dives into your market, competitors, and customer psychology.</p>
            </div>
            <div className="service-card glass reveal reveal-delay-1">
              <div className="service-icon"><Target size={24} /></div>
              <h3>Brand Positioning</h3>
              <p>Find your unique space in the market and own it.</p>
            </div>
            <div className="service-card glass reveal reveal-delay-2">
              <div className="service-icon"><TrendingUp size={24} /></div>
              <h3>Growth Strategy</h3>
              <p>Roadmaps for scaling your brand systematically.</p>
            </div>
            <div className="service-card glass reveal reveal-delay-3">
              <div className="service-icon"><BarChart3 size={24} /></div>
              <h3>Performance Analytics</h3>
              <p>Track, measure, and optimize what matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding bg-purple-gradient">
        <div className="container">
          <div className="about-grid">
            <div className="about-content reveal">
              <h2 className="section-title">Strategy That<br /><span>Moves As One.</span></h2>
              <p className="section-desc">Every recommendation is backed by BrandKings strategic framework. We set the direction that all other teams follow.</p>
              <ul className="about-list">
                <li><CheckCircle size={18} /> Data-Driven Insights</li>
                <li><CheckCircle size={18} /> BrandKings Framework</li>
                <li><CheckCircle size={18} /> Same Quality Standards</li>
                <li><CheckCircle size={18} /> Centralized Direction</li>
              </ul>
            </div>
            <div className="about-stats reveal reveal-delay-2">
              <div className="stat-card glass">
                <span className="stat-number">100+</span>
                <span className="stat-label">Markets Analyzed</span>
              </div>
              <div className="stat-card glass">
                <span className="stat-number">4.2×</span>
                <span className="stat-label">Avg. Growth</span>
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
              <h2 className="section-title">Get Strategic<br /><span>Insights.</span></h2>
              <p className="contact-desc">Ready for data-driven strategy? Let's talk.</p>

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
                const text = encodeURIComponent(`Hi Strategic Insight!\n\nName: ${formData.get('name')}\nCompany: ${formData.get('company')}\nChallenge: ${formData.get('challenge')}`);
                window.open(`https://wa.me/2349078239676?text=${text}`, '_blank');
              }}>
                <h3>Tell Us Your Challenge</h3>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Company name" />
                </div>
                <div className="form-group">
                  <label htmlFor="challenge">What's your biggest challenge?</label>
                  <textarea id="challenge" name="challenge" rows={3} placeholder="Tell us what you're facing..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Get Insights</button>
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
              <Brain size={20} />
              <span>Strategic<strong>Insight</strong></span>
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
          <p>&copy; 2026 Strategic Insight. A BrandKings Company.</p>
        </div>
      </footer>
    </div>
  );
}

export default StrategicInsight;
