import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, ArrowRight, Rocket, Sparkles, Brain, 
  Heart, Code, Film, MessageCircle, Phone, Instagram, 
  Mountain, Compass, Lightbulb, Settings, Target, TrendingUp, Zap, Shield
} from 'lucide-react';

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const subBrands = [
    { name: 'Growth Labs', path: '/growth-labs', icon: Rocket, desc: 'Talent Network', color: '#7C4DFF' },
    { name: 'Inspired Creativity', path: '/inspired-creativity', icon: Sparkles, desc: 'Creative Studio', color: '#E91E63' },
    { name: 'Strategic Insight', path: '/strategic-insight', icon: Brain, desc: 'Research & Strategy', color: '#00BCD4' },
    { name: 'Health & Wellness', path: '/health-wellness', icon: Heart, desc: 'Wellness Brands', color: '#4CAF50' },
    { name: 'TechLab', path: '/technology', icon: Code, desc: 'AI & Software', color: '#2196F3' },
    { name: 'StudioOne', path: '/entertainment', icon: Film, desc: 'Film & Media', color: '#FF5722' },
  ];

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const text = encodeURIComponent(
      `Hi BrandKings! 👑\n\n` +
      `Name: ${formData.get('name')}\n` +
      `Email: ${formData.get('email')}\n` +
      `Project: ${formData.get('project')}`
    );
    window.open(`https://wa.me/2349078239676?text=${text}`, '_blank');
  };

  return (
    <div className="app">
      {/* Header */}
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="container navbar">
          <div className="logo">
            <Link to="/">
              <img src="/logo.jpeg" alt="BrandKings" />
              <span className="logo-text">Brand<span>Kings</span></span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="nav-desktop">
            <div className="nav-links">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
              <a href="#philosophy" onClick={(e) => { e.preventDefault(); scrollToSection('philosophy'); }}>Philosophy</a>
              <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Process</a>
              
              {/* Brands Dropdown */}
              <div className="dropdown">
                <button className="dropdown-toggle">
                  Our Brands <ChevronDown size={14} />
                </button>
                <div className="dropdown-menu">
                  {subBrands.map((brand) => (
                    <Link key={brand.name} to={brand.path} className="dropdown-item">
                      <span className="dropdown-icon" style={{ background: `${brand.color}20`, color: brand.color }}>
                        <brand.icon size={14} />
                      </span>
                      <span>{brand.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Start a Project
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="glass mobile-nav" style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            right: 0,
            padding: '1.5rem',
            borderTop: '1px solid var(--glass-border)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>About</a>
              <a href="#philosophy" onClick={(e) => { e.preventDefault(); scrollToSection('philosophy'); }} style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>Philosophy</a>
              <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }} style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>Process</a>
              <div style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--glass-border)' }}>
                <p style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Our Brands</p>
                {subBrands.map((brand) => (
                  <Link key={brand.name} to={brand.path} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    <brand.icon size={16} style={{ color: brand.color }} />
                    {brand.name}
                  </Link>
                ))}
              </div>
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} style={{ marginTop: '0.5rem' }}>
                Start a Project
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <div className="hero-glow hero-glow-1"></div>
          <div className="hero-glow hero-glow-2"></div>
          <div className="hero-grid"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate-fade-in">
              <Sparkles size={14} /> Premium Brand Experiences
            </div>
            <h1 className="hero-title animate-fade-in animate-delay-1">
              We Build Brands<br />That Dominate
            </h1>
            <p className="hero-subtitle animate-fade-in animate-delay-2">
              A house of specialized studios, unified by one standard. Strategy, creativity, and execution — moving as one.
            </p>
            <div className="hero-cta animate-fade-in animate-delay-3">
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Start Your Project <ArrowRight size={16} />
              </a>
              <a href="#about" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                Explore Our World
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Ecosystem */}
      <section id="about" className="section ecosystem">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">The BrandKings Group</p>
            <h2 className="section-title">One Backbone.<br />Many Faces.</h2>
            <p className="section-desc">
              Six specialized studios. One unified standard. Each brand leads in its niche while sharing the same tools, processes, and quality bar.
            </p>
          </div>

          <div className="ecosystem-grid">
            {subBrands.map((brand, index) => (
              <Link to={brand.path} key={brand.name} className={`ecosystem-card reveal`} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="ecosystem-icon" style={{ background: `${brand.color}15`, color: brand.color }}>
                  <brand.icon size={24} />
                </div>
                <h3>{brand.name}</h3>
                <p>{brand.desc}</p>
                <span className="ecosystem-link">
                  Explore <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="section philosophy">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">Our Philosophy</p>
            <h2 className="section-title">Moving As One</h2>
            <p className="section-desc">
              Strategy, creativity, and execution — three forces that must move in perfect harmony to build brands that endure.
            </p>
          </div>

          <div className="philosophy-grid">
            <div className="philosophy-card reveal">
              <div className="philosophy-number">01</div>
              <Compass size={28} style={{ color: '#7C4DFF', marginBottom: '1rem' }} />
              <h3>Strategy Sets Direction</h3>
              <p>We define the why and where. Every decision is anchored in brand essence and market reality. Never disconnected. Never guessing.</p>
            </div>
            <div className="philosophy-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="philosophy-number">02</div>
              <Lightbulb size={28} style={{ color: '#F4C430', marginBottom: '1rem' }} />
              <h3>Creativity Translates</h3>
              <p>We turn strategy into feeling and meaning. Never decorative. Never trend-led without purpose. Every creative choice serves the vision.</p>
            </div>
            <div className="philosophy-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="philosophy-number">03</div>
              <Settings size={28} style={{ color: '#00BCD4', marginBottom: '1rem' }} />
              <h3>Execution Delivers</h3>
              <p>We bring the promise to life across every touchpoint. Design, operations, marketing — all moving as one unified force.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">What We Stand For</p>
            <h2 className="section-title">Our Core Values</h2>
          </div>

          <div className="values-grid">
            <div className="value-item reveal">
              <div className="value-icon">
                <Target size={24} />
              </div>
              <h4>Excellence in Detail</h4>
              <p>We obsess over the smallest elements that separate good from exceptional.</p>
            </div>
            <div className="value-item reveal" style={{ transitionDelay: '0.05s' }}>
              <div className="value-icon">
                <TrendingUp size={24} />
              </div>
              <h4>Innovation That Leads</h4>
              <p>We pioneer new approaches rather than following trends.</p>
            </div>
            <div className="value-item reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="value-icon">
                <Mountain size={24} />
              </div>
              <h4>Timeless Principles</h4>
              <p>We create brands that endure beyond fleeting fashion.</p>
            </div>
            <div className="value-item reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="value-icon">
                <Shield size={24} />
              </div>
              <h4>Authenticity First</h4>
              <p>We build genuine connections between brands and audiences.</p>
            </div>
            <div className="value-item reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="value-icon">
                <Zap size={24} />
              </div>
              <h4>Strategy + Creativity</h4>
              <p>We harmonize data-driven decisions with creative excellence.</p>
            </div>
            <div className="value-item reveal" style={{ transitionDelay: '0.25s' }}>
              <div className="value-icon">
                <Sparkles size={24} />
              </div>
              <h4>Holistic Experience</h4>
              <p>We orchestrate every touchpoint from vision to execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section process">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">How We Work</p>
            <h2 className="section-title">The BrandKings Standard</h2>
            <p className="section-desc">
              A system that deploys. Not a bag that collects. Every sub-brand meets the same non-negotiable quality bar.
            </p>
          </div>

          <div className="process-steps">
            <div className="process-step reveal">
              <div className="process-number">1</div>
              <div className="process-content">
                <h4>Centralized Strategy</h4>
                <p>BrandKings HQ sets the direction, quality bar, and creative standards.</p>
              </div>
            </div>
            <div className="process-step reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="process-number">2</div>
              <div className="process-content">
                <h4>Shared Infrastructure</h4>
                <p>Same team, same tools, same processes across all studios.</p>
              </div>
            </div>
            <div className="process-step reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="process-number">3</div>
              <div className="process-content">
                <h4>Specialized Execution</h4>
                <p>Each sub-brand executes within its niche with industry-specific expertise.</p>
              </div>
            </div>
            <div className="process-step reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="process-number">4</div>
              <div className="process-content">
                <h4>Unified Quality</h4>
                <p>If it doesn't meet the standard, it doesn't launch. Period.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content reveal">
            <h2 className="cta-title">Ready to Build Something Great?</h2>
            <p className="cta-desc">
              Let's create a brand experience that sets you apart. Strategy, creativity, and execution — all moving as one.
            </p>
            <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} style={{ background: 'white', color: 'var(--deep-purple)' }}>
              Start Your Project <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Let's Talk</h2>
            <p className="section-desc">
              Ready to dominate your market? Reach out — we respond fast and move faster.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info reveal">
              <h3>Contact Us</h3>
              <p>Choose the best way to reach us. We're here to help.</p>

              <div className="contact-methods">
                <a href="https://wa.me/2349078239676" target="_blank" rel="noopener noreferrer" className="contact-method whatsapp">
                  <div className="contact-method-icon">
                    <MessageCircle size={20} />
                  </div>
                  <div className="contact-method-info">
                    <span className="contact-method-label">WhatsApp</span>
                    <span className="contact-method-value">+234 907 823 9676</span>
                  </div>
                </a>
                <a href="tel:+2349078239676" className="contact-method phone">
                  <div className="contact-method-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-method-info">
                    <span className="contact-method-label">Phone</span>
                    <span className="contact-method-value">+234 907 823 9676</span>
                  </div>
                </a>
              </div>

              <div className="social-links">
                <a href="https://www.instagram.com/brandkings__/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper reveal" style={{ transitionDelay: '0.1s' }}>
              <h4>Send a Message</h4>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="project">Tell us about your project</label>
                  <textarea id="project" name="project" rows={3} placeholder="What are you looking to build?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="logo" style={{ display: 'inline-flex' }}>
                <img src="/logo.jpeg" alt="BrandKings" style={{ height: '32px' }} />
                <span className="logo-text">Brand<span>Kings</span></span>
              </Link>
              <p>We build brands that dominate.<br />Forged in process. Crowned in excellence.</p>
            </div>
            <div className="footer-links">
              <h5>Navigation</h5>
              <ul>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
                <li><a href="#philosophy" onClick={(e) => { e.preventDefault(); scrollToSection('philosophy'); }}>Philosophy</a></li>
                <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Process</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h5>Our Brands</h5>
              <ul>
                {subBrands.map((brand) => (
                  <li key={brand.name}>
                    <Link to={brand.path}>{brand.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 BrandKings. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
