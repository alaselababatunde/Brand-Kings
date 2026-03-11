import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, CheckCircle, TrendingUp, Target, RefreshCw, Zap, Cpu,
  MessageCircle, PhoneCall, Instagram, Music2, Facebook, Shield, Lock,
  Castle, Briefcase, BarChart3, Crown, Rocket,
  Search, Scale, Columns, MessageSquare, Mountain, Compass, Lightbulb,
  Settings, Palette, Globe, Building2, ArrowRight, ChevronRight,
  Users, Sparkles, Heart, Film, Code, Brain
} from 'lucide-react';
import '../App.css';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('traffic');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
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
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const niche = formData.get('niche') as string;
    const challenge = formData.get('challenge') as string;

    const text = encodeURIComponent(
      `Hi BrandKings! 👑\n\n` +
      `Name: ${name}\n` +
      (phone ? `Phone: ${phone}\n` : '') +
      (niche ? `Niche: ${niche}\n` : '') +
      (challenge ? `\nGrowth Challenge: ${challenge}` : '')
    );

    window.open(`https://wa.me/2349078239676?text=${text}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const subBrands = [
    { name: 'Growth Labs', path: '/growth-labs', icon: Rocket, desc: 'Talent Network' },
    { name: 'Inspired Creativity', path: '/inspired-creativity', icon: Sparkles, desc: 'Creative Studio' },
    { name: 'Strategic Insight', path: '/strategic-insight', icon: Brain, desc: 'Research & Strategy' },
    { name: 'Health & Wellness', path: '/health-wellness', icon: Heart, desc: 'Wellness Brands' },
    { name: 'Technology', path: '/technology', icon: Code, desc: 'AI & Software' },
    { name: 'Entertainment', path: '/entertainment', icon: Film, desc: 'Film & Media' },
  ];

  return (
    <div className="app">
      {/* Scarcity Bar */}
      <div className="scarcity-bar">
        <div className="container">
          <p><span>Only 2 Slots Remaining</span> for Digital Brand Growth this Month</p>
        </div>
      </div>

      {/* Header */}
      <header className={`glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar">
          <div className="logo">
            <Link to="/">
              <img src="/logo.jpeg" alt="BrandKings Logo" />
              <span className="logo-text">Brand<span>Kings</span></span>
            </Link>
          </div>
          <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a href="#vision" onClick={(e) => { e.preventDefault(); scrollToSection('vision'); }}>Vision</a></li>
              <li><a href="#brands" onClick={(e) => { e.preventDefault(); scrollToSection('brands'); }}>Our Brands</a></li>
              <li><a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Start Your Project</a></li>
            </ul>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-purple-gradient">
        <div className="hero-visuals">
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text-box reveal">
            <h1 className="hero-title text-gradient">We Build Systems That <br /><span>Acquire Clients For You.</span></h1>
            <p className="hero-subtitle">Activated. Automated. Running. <br />Your business needs a client acquisition system, not another agency.</p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary shadow-gold" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Apply to Work With Us</a>
              <a href="#brands" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollToSection('brands'); }}>Explore Our Brands</a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="vision-section section-padding">
        <div className="container">
          <div className="vision-content reveal">
            <h2 className="vision-title">VISION</h2>
            <Mountain size={120} className="mountain-icon" />
            <h3 className="vision-subtitle">THE MOUNTAIN TOP</h3>
            <p className="vision-desc">Where you want to be in the future.</p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="vision-statement-section section-padding bg-purple-gradient">
        <div className="container">
          <div className="vision-statement-content reveal">
            <div className="vision-text">
              <h3>Offer & Become the Standard for Full Brand Experiences</h3>
              <p>Building Brands To Endure, Designing Them To Evolve Fast, And Engineering Them to Lead.</p>
            </div>
            <div className="pathway-visual">
              <div className="pathway-steps">
                <div className="pathway-step">
                  <Compass size={40} />
                  <span>Strategy</span>
                </div>
                <ArrowRight size={24} />
                <div className="pathway-step">
                  <Lightbulb size={40} />
                  <span>Creativity</span>
                </div>
                <ArrowRight size={24} />
                <div className="pathway-step">
                  <Settings size={40} />
                  <span>Execution</span>
                </div>
                <ArrowRight size={24} />
                <div className="pathway-step highlight">
                  <Crown size={40} />
                  <span>Lead</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving As One */}
      <section className="moving-as-one section-padding">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title dark">Moving As <span className="dark">One</span></h2>
          </div>
          <div className="moving-grid">
            <div className="moving-card reveal">
              <div className="moving-card-header">
                <span className="moving-number">1</span>
                <Compass size={32} />
              </div>
              <h4>Strategy Moves as One</h4>
              <ul>
                <li>Sets the why and where</li>
                <li>Anchored in brand essence</li>
                <li>Never disconnected from reality</li>
              </ul>
            </div>
            <div className="moving-card reveal reveal-delay-1">
              <div className="moving-card-header">
                <span className="moving-number">2</span>
                <Lightbulb size={32} />
              </div>
              <h4>Creativity Moves as One</h4>
              <ul>
                <li>Translates strategy into feeling</li>
                <li>Never decorative</li>
                <li>Never trend-led without purpose</li>
              </ul>
            </div>
            <div className="moving-card reveal reveal-delay-2">
              <div className="moving-card-header">
                <span className="moving-number">3</span>
                <Settings size={32} />
              </div>
              <h4>Execution Moves as One</h4>
              <ul>
                <li>Delivers the promise consistently</li>
                <li>Across all touchpoints</li>
                <li>Never undermines what was promised</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission-section section-padding">
        <div className="container">
          <div className="mission-content reveal">
            <div className="mission-header">
              <h2 className="mission-title">MISSION</h2>
              <h3 className="mission-subtitle">THE ROAD / THE WALK</h3>
              <p className="mission-tagline">What you do every day to get to the top</p>
            </div>
            <div className="mission-statement">
              Building Brands To Endure, Designing Them To Evolve Fast, And Engineering Them to Lead
            </div>
            <div className="road-map">
              <div className="road-step">
                <div className="road-icon">
                  <Compass size={28} />
                </div>
                <h4>Strategic Insight</h4>
              </div>
              <ArrowRight size={24} className="road-arrow" />
              <div className="road-step">
                <div className="road-icon">
                  <Lightbulb size={28} />
                </div>
                <h4>Inspired Creativity</h4>
              </div>
              <ArrowRight size={24} className="road-arrow" />
              <div className="road-step">
                <div className="road-icon">
                  <Settings size={28} />
                </div>
                <h4>Precise Execution</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values-section section-padding">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">#Core <span>Values</span></h2>
          </div>
          <div className="values-grid">
            <div className="value-card reveal">
              <div className="value-icon">
                <Search size={28} />
              </div>
              <h4>Excellence in Every Detail</h4>
            </div>
            <div className="value-card reveal reveal-delay-1">
              <div className="value-icon">
                <Rocket size={28} />
              </div>
              <h4>Innovation That Leads</h4>
            </div>
            <div className="value-card reveal reveal-delay-2">
              <div className="value-icon">
                <Columns size={28} />
              </div>
              <h4>Timeless Design Principles</h4>
            </div>
            <div className="value-card reveal reveal-delay-3">
              <div className="value-icon">
                <MessageSquare size={28} />
              </div>
              <h4>Authenticity as Foundation</h4>
            </div>
            <div className="value-card reveal">
              <div className="value-icon">
                <Scale size={28} />
              </div>
              <h4>Strategy + Creativity Balance</h4>
            </div>
            <div className="value-card reveal reveal-delay-1">
              <div className="value-icon">
                <Globe size={28} />
              </div>
              <h4>Holistic Brand Experience</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="tagline-section section-padding">
        <div className="container">
          <div className="tagline-content reveal">
            <p className="tagline-label">TAGLINE</p>
            <div className="anvil-container">
              <div className="anvil-base"></div>
              <Crown size={80} className="tagline-crown" />
            </div>
            <h2 className="tagline-text">Forged in Process,<br />Crowned in Timeless Excellence</h2>
          </div>
        </div>
      </section>

      {/* House of Brands */}
      <section id="brands" className="house-of-brands-section section-padding">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title dark">House of Brands <span className="dark">Strategy</span></h2>
            <p className="section-desc dark">One backbone. Many faces. Each brand leads in its niche.</p>
          </div>
          <div className="hob-content reveal">
            <div className="hob-text">
              <h3>A brand architecture where the parent company owns and operates multiple independent, specialized brands.</h3>
              <p>Each brand maintains its own identity, positioning, and audience while being supported strategically and operationally by BrandKings.</p>
            </div>
          </div>
          
          {/* Sub-brands Grid */}
          <div className="subbrands-grid">
            {subBrands.map((brand, index) => (
              <Link to={brand.path} key={brand.name} className={`subbrand-card reveal reveal-delay-${index % 4}`}>
                <div className="subbrand-icon">
                  <brand.icon size={32} />
                </div>
                <h4>{brand.name}</h4>
                <p>{brand.desc}</p>
                <span className="subbrand-link">Explore <ChevronRight size={16} /></span>
              </Link>
            ))}
          </div>

          <div className="hob-bottom-text reveal">
            <h4>GLOBAL BRAND ECOSYSTEM</h4>
            <p>CENTRALIZED POWER, DECENTRALIZED AUTHORITY</p>
          </div>
        </div>
      </section>

      {/* Golden Rule */}
      <section className="golden-rule-section section-padding">
        <div className="container">
          <div className="golden-rule-content reveal">
            <div className="golden-rule-header">
              <Lock size={36} />
              <h2>THE GOLDEN RULE</h2>
            </div>
            <div className="comparison-grid">
              <div className="comparison-card old-way">
                <h4>OLD WAY</h4>
                <ul>
                  <li>Creating many brands at once</li>
                  <li>Collecting subsidiaries</li>
                </ul>
              </div>
              <div className="comparison-card">
                <h4>BRANDKINGS WAY</h4>
                <ul>
                  <li>Creating a system that produces brands</li>
                  <li>Deploying specialized units</li>
                </ul>
              </div>
            </div>
            <div className="golden-rule-quote">
              A SYSTEM THAT DEPLOYS. NOT A BAG THAT COLLECTS.
            </div>
          </div>
        </div>
      </section>

      {/* One Backbone */}
      <section className="one-backbone-section section-padding">
        <div className="container">
          <div className="backbone-content reveal">
            <div className="backbone-header">
              <h3>ONE BACKBONE, MANY FACES</h3>
            </div>
            <div className="backbone-comparison">
              <div className="backbone-share">
                <h4>ALL SUB-BRANDS SHARE:</h4>
                <ul>
                  <li>Same team</li>
                  <li>Same tools</li>
                  <li>Same processes</li>
                  <li>Same quality standards</li>
                </ul>
              </div>
              <div className="backbone-differences">
                <h4>ONLY DIFFERENCES:</h4>
                <ul>
                  <li>Name</li>
                  <li>Visual tone</li>
                  <li>Industry language</li>
                  <li>Portfolio</li>
                </ul>
              </div>
            </div>
            <div className="backbone-result">
              LOW COST + HIGH CONTROL
            </div>
          </div>
        </div>
      </section>

      {/* The Standard */}
      <section className="standard-section section-padding">
        <div className="container">
          <div className="standard-content reveal">
            <div className="standard-header">
              <Crown size={32} />
              <h2>THE STANDARD</h2>
            </div>
            <div className="standard-grid">
              <div className="standard-list">
                <h4>BRANDKINGS SETS:</h4>
                <ul>
                  <li>Creative quality bar</li>
                  <li>Same tools</li>
                  <li>Same processes</li>
                  <li>Client experience</li>
                  <li>Ethics & Professional</li>
                </ul>
              </div>
              <div className="standard-shield">
                <Shield size={100} className="shield-icon" />
                <span className="shield-text">THE STANDARD</span>
              </div>
            </div>
            <div className="standard-quote">
              <Lock size={20} />
              IF A SUB-BRAND DOESN'T MEET THE STANDARD, IT DOESN'T LAUNCH.
            </div>
          </div>
        </div>
      </section>

      {/* Role Definitions */}
      <section className="role-definitions-section section-padding">
        <div className="container">
          <div className="role-content reveal">
            <div className="role-header">
              <Briefcase size={28} />
              <h2>CLEAR ROLE DEFINITIONS</h2>
            </div>
            <div className="role-grid">
              <div className="role-card">
                <div className="role-card-header">
                  <Castle size={40} />
                  <h4>BRANDKINGS (HQ)</h4>
                </div>
                <ul>
                  <li>Strategy</li>
                  <li>Same tools</li>
                  <li>Direction</li>
                  <li>Oversight</li>
                </ul>
              </div>
              <div className="role-card">
                <div className="role-card-header">
                  <Building2 size={40} />
                  <h4>SUB-BRANDS</h4>
                </div>
                <ul>
                  <li>Industry execution</li>
                  <li>Sales within niche</li>
                  <li>Content & case studies</li>
                  <li>Execute the vision</li>
                </ul>
              </div>
            </div>
            <div className="role-quote">
              BRANDKINGS DOES THE BIG PICTURE THINKING. SUB-BRANDS EXECUTE THE VISION.
            </div>
          </div>
        </div>
      </section>

      {/* Smart Launch */}
      <section className="smart-launch-section section-padding">
        <div className="container">
          <div className="launch-content reveal">
            <div className="launch-header">
              <BarChart3 size={28} />
              <h2>SMART LAUNCH PHASES</h2>
            </div>
            <div className="launch-phases">
              <div className="phase-card">
                <div className="phase-icon">
                  <Castle size={24} />
                </div>
                <h4>Phase 1 — Foundation</h4>
                <ul>
                  <li>BrandKings solid</li>
                  <li>Same tools</li>
                  <li>FitFlux live</li>
                </ul>
              </div>
              <div className="phase-card">
                <div className="phase-icon">
                  <BarChart3 size={24} />
                </div>
                <h4>Phase 2 — Expansion</h4>
                <ul>
                  <li>2nd sub-brand</li>
                  <li>Proves demand</li>
                  <li>Same systems</li>
                </ul>
              </div>
              <div className="phase-card">
                <div className="phase-icon">
                  <Crown size={24} />
                </div>
                <h4>Phase 3 — Group</h4>
                <ul>
                  <li>BrandKings Group</li>
                  <li>Portfolio of studios</li>
                </ul>
              </div>
            </div>
            <div className="launch-quote">
              STRATEGIC ROLLOUT. CONTROLLED GROWTH.
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-content reveal">
              <h2 className="section-title">7 Specialists. <br /><span>One Unified System.</span></h2>
              <p className="section-desc">Not freelancers. A fully integrated team where every specialist feeds into a single growth engine.</p>
              <p className="about-text">Systems, expansion & scalable solutions. When you activate, we press play. The only delay is a 7-day deployment window.</p>
              <ul className="about-list">
                <li><CheckCircle size={18} /> 7 Specialists Per Client</li>
                <li><CheckCircle size={18} /> 5 Phases Built Before Deploy</li>
                <li><CheckCircle size={18} /> 0 Hours of Your Time</li>
              </ul>
            </div>
            <div className="about-visual reveal reveal-delay-2">
              <div className="about-image-placeholder glass">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="BrandKings Team" className="featured-img" />
                <div className="floating-badge glass">
                  <span>The Standard</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specialists */}
          <div className="specialists">
            {[
              { num: '01', role: 'Funnel Strategist', desc: 'Designs the entire system — offer, messaging, journey & KPIs.' },
              { num: '02', role: 'Graphic Designer', desc: 'Visual persuasion. Ad creatives & social graphics that stop scrolls.' },
              { num: '03', role: 'Video Editor', desc: 'Motion persuasion. Reels, ads & VSLs that create desire.' },
              { num: '04', role: 'Social Media Mgr', desc: 'Traffic & engagement. Content that brings prospects.' },
              { num: '05', role: 'SEO Specialist', desc: 'Long-term inbound. Keywords & content that compounds.' },
              { num: '06', role: 'Web Developer', desc: 'Funnel infrastructure. Pages that convert visitors.' },
              { num: '07', role: 'AI Engineer', desc: 'Automation & scale. Systems that run 24/7.' },
            ].map((spec, i) => (
              <div className={`specialist reveal reveal-delay-${i % 4}`} key={spec.num}>
                <div className="spec-num">{spec.num}</div>
                <div className="spec-role">{spec.role}</div>
                <div className="spec-desc">{spec.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-purple-gradient">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Our Growth <span>Specialties.</span></h2>
            <p className="section-desc">Full-stack solutions designed to dominate.</p>
          </div>

          <div className="services-grid">
            {[
              { icon: TrendingUp, phase: '01', title: 'Traffic', desc: 'Content & lead magnets that pull prospects in.' },
              { icon: Target, phase: '02', title: 'Lead Capture', desc: 'Landing pages & opt-ins that convert traffic.' },
              { icon: RefreshCw, phase: '03', title: 'Conversion', desc: 'Sales pages & sequences that turn leads to clients.' },
              { icon: Zap, phase: '04', title: 'Expansion', desc: 'Retargeting & upsells that grow revenue.' },
              { icon: Cpu, phase: '05', title: 'Automation', desc: 'AI engine that runs everything 24/7.' },
            ].map((service, i) => (
              <div className={`service-card glass reveal reveal-delay-${i}`} key={service.phase}>
                <div className="service-icon"><service.icon size={24} /></div>
                <span className="phase-label">Phase {service.phase}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="section-padding">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Proof of <span>Work.</span></h2>
            <p className="section-desc">Real work. Real results.</p>
          </div>

          <div className="cs-tabs reveal">
            {['traffic', 'capture', 'conversion', 'expansion', 'automation'].map((tab) => (
              <button 
                key={tab}
                className={`cs-tab ${activeTab === tab ? 'active' : ''}`} 
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="cs-panels reveal">
            {activeTab === 'traffic' && (
              <div className="cs-panel active">
                <div className="glass case-study-card">
                  <h4 className="case-label">Case Study · Fitness Coach</h4>
                  <div className="case-stats">
                    <div><span className="stat-num">4.2×</span><span className="stat-label">Organic Reach</span></div>
                    <div><span className="stat-num">90 Days</span><span className="stat-label">To Results</span></div>
                  </div>
                  <p className="case-quote">"I went from invisible to getting DMs every week."</p>
                </div>
                <div className="glass case-features">
                  <ul>
                    <li><Zap size={14} /> SEO Infrastructure</li>
                    <li><Zap size={14} /> Content Engine</li>
                    <li><Zap size={14} /> Organic Traffic</li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === 'capture' && (
              <div className="cs-panel active">
                <div className="glass case-study-card">
                  <h4 className="case-label">Case Study · Dog Trainer</h4>
                  <div className="case-stats">
                    <div><span className="stat-num">68%</span><span className="stat-label">Opt-In Rate</span></div>
                    <div><span className="stat-num">3×</span><span className="stat-label">Leads in 30 Days</span></div>
                  </div>
                  <p className="case-quote">"Now leads come in warmed up and ready to book."</p>
                </div>
                <div className="glass case-features">
                  <ul>
                    <li><Zap size={14} /> Lead Magnet Funnel</li>
                    <li><Zap size={14} /> Opt-In Architecture</li>
                    <li><Zap size={14} /> Email Sequence</li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === 'conversion' && (
              <div className="cs-panel active">
                <div className="glass case-study-card">
                  <h4 className="case-label">Case Study · Coaching Brand</h4>
                  <div className="case-stats">
                    <div><span className="stat-num">22%</span><span className="stat-label">Sales Increase</span></div>
                    <div><span className="stat-num">3.5×</span><span className="stat-label">Booking Rate</span></div>
                  </div>
                  <p className="case-quote">"The VSL literally prints bookings for me."</p>
                </div>
                <div className="glass case-features">
                  <ul>
                    <li><Zap size={14} /> High-Ticket VSL</li>
                    <li><Zap size={14} /> Automated Booking</li>
                    <li><Zap size={14} /> Sales Architecture</li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === 'expansion' && (
              <div className="cs-panel active">
                <div className="glass case-study-card">
                  <h4 className="case-label">Case Study · E-com Brand</h4>
                  <div className="case-stats">
                    <div><span className="stat-num">18%</span><span className="stat-label">LTV Increase</span></div>
                    <div><span className="stat-num">12.4%</span><span className="stat-label">ROAS</span></div>
                  </div>
                  <p className="case-quote">"Retargeting added a whole new revenue stream."</p>
                </div>
                <div className="glass case-features">
                  <ul>
                    <li><Zap size={14} /> Retargeting Infrastructure</li>
                    <li><Zap size={14} /> Post-Purchase Upsells</li>
                    <li><Zap size={14} /> Loyalty Systems</li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === 'automation' && (
              <div className="cs-panel active">
                <div className="glass case-study-card">
                  <h4 className="case-label">Case Study · Local Service</h4>
                  <div className="case-stats">
                    <div><span className="stat-num">0</span><span className="stat-label">Owner Hours</span></div>
                    <div><span className="stat-num">94%</span><span className="stat-label">Lead Accuracy</span></div>
                  </div>
                  <p className="case-quote">"AI qualifies every lead before it hits my calendar."</p>
                </div>
                <div className="glass case-features">
                  <ul>
                    <li><Zap size={14} /> AI Lead Qualification</li>
                    <li><Zap size={14} /> CRM Automation</li>
                    <li><Zap size={14} /> 24/7 AI Chatbot</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section id="why" className="section-padding">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">The <span>BrandKings</span> Edge.</h2>
          </div>

          <div className="features-grid">
            {[
              { icon: Shield, title: 'Strategic Systems', desc: 'Foundations for market dominance.' },
              { icon: Cpu, title: 'Deployment Phase', desc: 'Infrastructure built before you pay.' },
              { icon: Users, title: 'Client Sourcing', desc: 'Automated acquisition & qualification.' },
              { icon: Palette, title: 'Niche Activation', desc: 'Custom-fitted for your industry.' },
              { icon: Rocket, title: '100% Automated', desc: 'Runs without your time.' },
            ].map((feature, i) => (
              <div className={`feature-card glass reveal reveal-delay-${i}`} key={feature.title}>
                <feature.icon size={32} />
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section id="for" className="section-padding bg-purple-gradient">
        <div className="container">
          <div className="about-grid">
            <div className="reveal">
              <h2 className="section-title">Who This Is <span>For.</span></h2>
              <p className="section-desc">Business owners ready for a complete growth system.</p>
              <ul className="about-list">
                <li><CheckCircle size={18} /> Local service businesses</li>
                <li><CheckCircle size={18} /> Coaches & trainers</li>
                <li><CheckCircle size={18} /> Pet service businesses</li>
                <li><CheckCircle size={18} /> Home service providers</li>
                <li><CheckCircle size={18} /> Any business ready to scale</li>
              </ul>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="glass not-for-card">
                <h4>NOT for you if:</h4>
                <ul className="not-for-list">
                  <li><XIcon size={16} /> You micromanage everything</li>
                  <li><XIcon size={16} /> You want cheap, fast work</li>
                  <li><XIcon size={16} /> You're not ready to commit</li>
                  <li><XIcon size={16} /> You want tips, not results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="section-padding">
        <div className="container">
          <div className="cta-box glass reveal">
            <h2 className="cta-title">Activate Your <br /><span>Acquisition System.</span></h2>
            <p className="cta-desc">Stop buying services. Start deploying systems.</p>
            <a href="#contact" className="btn btn-primary btn-large" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Apply to Activate</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <h2 className="section-title">Let's Build <br /><span>Something Great.</span></h2>
              <p className="contact-desc">Ready to dominate? We respond fast.</p>

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
                    <span className="btn-label">Call Us Directly</span>
                    <span className="btn-sub">+234 907 823 9676</span>
                  </div>
                </a>
              </div>

              <div className="contact-social">
                <a href="https://www.instagram.com/brandkings__/" target="_blank" rel="noopener noreferrer" className="social-link"><Instagram size={18} /></a>
                <a href="https://www.tiktok.com/@brandk1ngs" target="_blank" rel="noopener noreferrer" className="social-link"><Music2 size={18} /></a>
                <a href="https://www.facebook.com/share/18dfjeHUjC/" target="_blank" rel="noopener noreferrer" className="social-link"><Facebook size={18} /></a>
              </div>
            </div>

            <div className="contact-form-wrap glass reveal reveal-delay-2">
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <h3>Send Us a Message</h3>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input type="tel" id="phone" name="phone" placeholder="+234 ..." />
                </div>
                <div className="form-group">
                  <label htmlFor="niche">Your Industry</label>
                  <select id="niche" name="niche">
                    <option value="">Select your industry</option>
                    <option>Fitness & Coaching</option>
                    <option>Pet Services</option>
                    <option>Home Services</option>
                    <option>Restaurant & Food</option>
                    <option>Health & Wellness</option>
                    <option>Real Estate</option>
                    <option>E-commerce</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="challenge">Your Biggest Challenge?</label>
                  <textarea id="challenge" name="challenge" rows={3} placeholder="Tell us what's not working..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message
                </button>
                <p className="form-note">We respond within 24 hours.</p>
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
              <img src="/logo.jpeg" alt="BrandKings" />
              <span>Brand<strong>Kings</strong></span>
            </Link>
            <p>We Build Brands That Dominate.</p>
          </div>
          <div className="footer-links">
            <h5>Navigate</h5>
            <ul>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a href="#brands" onClick={(e) => { e.preventDefault(); scrollToSection('brands'); }}>Our Brands</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h5>Contact</h5>
            <a href="tel:+2349078239676">+234 907 823 9676</a>
            <a href="https://wa.me/2349078239676" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <div className="footer-social">
              <a href="https://www.instagram.com/brandkings__/" target="_blank" rel="noopener noreferrer"><Instagram size={16} /></a>
              <a href="https://www.tiktok.com/@brandk1ngs" target="_blank" rel="noopener noreferrer"><Music2 size={16} /></a>
              <a href="https://www.facebook.com/share/18dfjeHUjC/" target="_blank" rel="noopener noreferrer"><Facebook size={16} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 BrandKings. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/2349078239676" target="_blank" rel="noopener noreferrer" className="floating-whatsapp">
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}

export default Home;
