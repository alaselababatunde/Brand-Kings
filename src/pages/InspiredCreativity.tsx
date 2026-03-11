import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Sparkles, MessageCircle, ArrowLeft, Palette, 
  PenTool, Camera, Video, Layout, CheckCircle
} from 'lucide-react';

function InspiredCreativity() {
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
    <div className="app subbrand-page creativity-page">
      {/* Header */}
      <header className={`glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar">
          <div className="logo">
            <Link to="/">
              <Sparkles size={32} className="brand-icon" />
              <span className="logo-text">Inspired<span>Creativity</span></span>
            </Link>
          </div>
          <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
              <li><a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}>Work</a></li>
              <li><a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Start Project</a></li>
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
              <Sparkles size={16} /> A BrandKings Company
            </div>
            <h1 className="hero-title">Creative Studio<br />That Converts</h1>
            <p className="hero-subtitle">Design that stops the scroll. Content that starts conversations. Built on the BrandKings operating system.</p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Start Project</a>
              <a href="#work" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}>View Work</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Creative <span>Services</span></h2>
          </div>
          <div className="services-grid">
            <div className="service-card glass reveal">
              <div className="service-icon"><Palette size={24} /></div>
              <h3>Brand Identity</h3>
              <p>Logos, color systems, and visual language that defines your brand.</p>
            </div>
            <div className="service-card glass reveal reveal-delay-1">
              <div className="service-icon"><PenTool size={24} /></div>
              <h3>Graphic Design</h3>
              <p>Social graphics, ads, and marketing materials that convert.</p>
            </div>
            <div className="service-card glass reveal reveal-delay-2">
              <div className="service-icon"><Camera size={24} /></div>
              <h3>Photography</h3>
              <p>Product shots, lifestyle imagery, and brand photography.</p>
            </div>
            <div className="service-card glass reveal reveal-delay-3">
              <div className="service-icon"><Video size={24} /></div>
              <h3>Video Production</h3>
              <p>Reels, ads, and brand films that tell your story.</p>
            </div>
            <div className="service-card glass reveal">
              <div className="service-icon"><Layout size={24} /></div>
              <h3>Web Design</h3>
              <p>Landing pages and sites designed to convert visitors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="section-padding bg-purple-gradient">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Selected <span>Work</span></h2>
          </div>
          <div className="work-grid">
            <div className="work-card glass reveal">
              <div className="work-image" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}></div>
              <div className="work-info">
                <span className="work-category">Brand Identity</span>
                <h4>Fitness Coach Rebrand</h4>
              </div>
            </div>
            <div className="work-card glass reveal reveal-delay-1">
              <div className="work-image" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}></div>
              <div className="work-info">
                <span className="work-category">Social Campaign</span>
                <h4>Beauty Brand Launch</h4>
              </div>
            </div>
            <div className="work-card glass reveal reveal-delay-2">
              <div className="work-image" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}></div>
              <div className="work-info">
                <span className="work-category">Video Production</span>
                <h4>Tech Startup VSL</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-content reveal">
              <h2 className="section-title">Creativity With<br /><span>Strategy Behind It.</span></h2>
              <p className="section-desc">Every design decision is backed by BrandKings strategic framework. We don't just make things pretty — we make them work.</p>
              <ul className="about-list">
                <li><CheckCircle size={18} /> Strategy-First Design</li>
                <li><CheckCircle size={18} /> Conversion-Focused</li>
                <li><CheckCircle size={18} /> BrandKings Quality Bar</li>
                <li><CheckCircle size={18} /> Same Tools & Processes</li>
              </ul>
            </div>
            <div className="about-visual reveal reveal-delay-2">
              <div className="about-image-placeholder glass">
                <div className="creative-visual">
                  <Sparkles size={80} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-purple-gradient">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <h2 className="section-title">Let's Create<br /><span>Something Bold.</span></h2>
              <p className="contact-desc">Ready for creative that converts? Let's talk.</p>

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
                const text = encodeURIComponent(`Hi Inspired Creativity!\n\nName: ${formData.get('name')}\nProject: ${formData.get('project')}`);
                window.open(`https://wa.me/2349078239676?text=${text}`, '_blank');
              }}>
                <h3>Tell Us Your Vision</h3>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="project">Project Type</label>
                  <select id="project" name="project">
                    <option value="">Select project type</option>
                    <option>Brand Identity</option>
                    <option>Social Media</option>
                    <option>Video Production</option>
                    <option>Web Design</option>
                    <option>Other</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Start Project</button>
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
              <Sparkles size={20} />
              <span>Inspired<strong>Creativity</strong></span>
            </Link>
            <p>A BrandKings Company</p>
          </div>
          <div className="footer-links">
            <h5>BrandKings Group</h5>
            <ul>
              <li><Link to="/">BrandKings</Link></li>
              <li><Link to="/growth-labs">Growth Labs</Link></li>
              <li><Link to="/strategic-insight">Strategic Insight</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h5>Contact</h5>
            <a href="tel:+2349078239676">+234 907 823 9676</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Inspired Creativity. A BrandKings Company.</p>
        </div>
      </footer>
    </div>
  );
}

export default InspiredCreativity;
