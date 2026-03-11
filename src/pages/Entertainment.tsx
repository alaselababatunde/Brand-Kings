import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Film, MessageCircle, ArrowLeft, 
  Video, Clapperboard, Star, Mic, CheckCircle
} from 'lucide-react';

function Entertainment() {
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
    <div className="app subbrand-page entertainment-page">
      {/* Header */}
      <header className={`glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar">
          <div className="logo">
            <Link to="/">
              <Film size={32} className="brand-icon" />
              <span className="logo-text">Studio<span>One</span></span>
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
      <section id="hero" className="subbrand-hero" style={{ '--accent': '#FF5722' } as React.CSSProperties}>
        <div className="container">
          <div className="hero-content reveal">
            <div className="subbrand-badge">
              <Film size={16} /> A BrandKings Company
            </div>
            <h1 className="hero-title">Film & Media<br />Production</h1>
            <p className="hero-subtitle">Stories that captivate. Content that converts. Built on the BrandKings operating system.</p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Start Production</a>
              <a href="#services" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Our Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Production <span>Services</span></h2>
          </div>
          <div className="services-grid">
            <div className="service-card glass reveal">
              <div className="service-icon"><Video size={24} /></div>
              <h3>Brand Films</h3>
              <p>Cinematic brand stories that connect with your audience.</p>
            </div>
            <div className="service-card glass reveal reveal-delay-1">
              <div className="service-icon"><Clapperboard size={24} /></div>
              <h3>Commercial Production</h3>
              <p>High-impact ads for TV, digital, and social platforms.</p>
            </div>
            <div className="service-card glass reveal reveal-delay-2">
              <div className="service-icon"><Star size={24} /></div>
              <h3>Content Series</h3>
              <p>Ongoing content that builds your brand story over time.</p>
            </div>
            <div className="service-card glass reveal reveal-delay-3">
              <div className="service-icon"><Mic size={24} /></div>
              <h3>Podcast Production</h3>
              <p>Professional podcast creation and distribution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding bg-purple-gradient">
        <div className="container">
          <div className="about-grid">
            <div className="about-content reveal">
              <h2 className="section-title">Stories That<br /><span>Convert.</span></h2>
              <p className="section-desc">Entertainment that drives business results. Same BrandKings quality, applied to film and media.</p>
              <ul className="about-list">
                <li><CheckCircle size={18} /> Cinematic Quality</li>
                <li><CheckCircle size={18} /> BrandKings Standards</li>
                <li><CheckCircle size={18} /> Same Tools & Systems</li>
                <li><CheckCircle size={18} /> Results-Focused</li>
              </ul>
            </div>
            <div className="about-stats reveal reveal-delay-2">
              <div className="stat-card glass">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-card glass">
                <span className="stat-number">10M+</span>
                <span className="stat-label">Views Generated</span>
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
              <h2 className="section-title">Tell Your<br /><span>Story.</span></h2>
              <p className="contact-desc">Ready to create something memorable? Let's talk.</p>

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
                const text = encodeURIComponent(`Hi StudioOne!\n\nName: ${formData.get('name')}\nProject: ${formData.get('project')}\nType: ${formData.get('type')}`);
                window.open(`https://wa.me/2349078239676?text=${text}`, '_blank');
              }}>
                <h3>Tell Us Your Vision</h3>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="project">Project Name</label>
                  <input type="text" id="project" name="project" placeholder="Project or brand name" />
                </div>
                <div className="form-group">
                  <label htmlFor="type">Production Type</label>
                  <select id="type" name="type">
                    <option value="">Select type</option>
                    <option>Brand Film</option>
                    <option>Commercial</option>
                    <option>Content Series</option>
                    <option>Podcast</option>
                    <option>Other</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Start Production</button>
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
              <Film size={20} />
              <span>Studio<strong>One</strong></span>
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
          <p>&copy; 2026 StudioOne. A BrandKings Company.</p>
        </div>
      </footer>
    </div>
  );
}

export default Entertainment;
