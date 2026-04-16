"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle')
    const mobileMenu = document.querySelector('.mobile-menu')
    const mobileLinks = document.querySelectorAll('.mobile-menu-link')
    
    mobileToggle?.addEventListener('click', () => {
      mobileMenu?.classList.toggle('active')
    })
    
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu?.classList.remove('active')
      })
    })

    // Fade up animation
    const fadeElements = document.querySelectorAll('.fade-up')
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 }
    
    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)
    
    fadeElements.forEach(element => {
      fadeObserver.observe(element)
    })

    // Header scroll effect
    const header = document.querySelector('.header') as HTMLElement
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(13, 17, 23, 0.98)'
      } else {
        header.style.backgroundColor = 'rgba(13, 17, 23, 0.95)'
      }
    }
    
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
:root {
  --bg-primary: #0d1117;
  --bg-secondary: #161b22;
  --bg-card: #1c2128;
  --text-primary: #f0f6fc;
  --text-secondary: #8b949e;
  --accent: #51b5bb;
  --accent-dark: #3d9a9f;
  --accent-glow: rgba(81, 181, 187, 0.3);
  --border-color: #30363d;
  --gradient-dark: linear-gradient(180deg, #0d1117 0%, #161b22 100%);
  --cta-green: #22c55e;
  --cta-green-dark: #16a34a;
  --cta-green-glow: rgba(34, 197, 94, 0.3);
  --google-blue: #4285f4;
  --google-red: #ea4335;
  --google-yellow: #fbbc05;
  --google-green: #34a853;
}
html { scroll-behavior: smooth; }
body { font-family: 'Poppins', sans-serif; background-color: var(--bg-primary); color: var(--text-primary); line-height: 1.6; overflow-x: hidden; }
.container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.section { padding: 80px 0; }
.section-title { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; text-align: center; margin-bottom: 50px; }
.section-title .accent { color: var(--accent); font-style: italic; }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 16px 32px; font-family: 'Poppins', sans-serif; font-size: 1rem; font-weight: 700; text-decoration: none; border: none; border-radius: 6px; cursor: pointer; transition: all 0.3s ease; }
.btn-primary { background-color: var(--accent); color: #15191f; }
.btn-primary:hover { background-color: var(--accent-dark); transform: translateY(-2px); box-shadow: 0 10px 30px var(--accent-glow); }
.btn-secondary { background-color: transparent; color: var(--accent); border: 2px solid var(--accent); }
.btn-secondary:hover { background-color: var(--accent); color: #15191f; }
.btn-cta { background-color: var(--cta-green); color: #ffffff; }
.btn-cta:hover { background-color: var(--cta-green-dark); transform: translateY(-2px); box-shadow: 0 10px 30px var(--cta-green-glow); }
.google-line { height: 4px; background: linear-gradient(90deg, var(--google-blue) 0%, var(--google-yellow) 50%, var(--google-green) 100%); border-radius: 2px; }
.google-line-full { width: 100%; margin: 0 auto; }
.google-line-medium { width: 200px; }
.google-line-small { width: 80px; }
.google-line-left { margin-right: auto; margin-left: 0; }
.google-line-right { margin-left: auto; margin-right: 0; }
.google-line-center { margin: 0 auto; }
.platform-logos { display: flex; align-items: center; justify-content: center; gap: 40px; margin: 30px 0; position: relative; z-index: 10; }
.platform-logos img { height: 50px; width: auto; opacity: 0.9; transition: opacity 0.3s ease, transform 0.3s ease; position: relative; z-index: 10; }
.platform-logos img:hover { opacity: 1; transform: scale(1.05); }
.platform-logos .meta-logo { height: 60px; }
.platform-logos-small img { height: 35px; }
.platform-logos-small .meta-logo { height: 45px; }
@media (max-width: 600px) { .platform-logos img { height: 40px; } .platform-logos .meta-logo { height: 50px; } .platform-logos-small img { height: 28px; } .platform-logos-small .meta-logo { height: 35px; } .google-line-medium { width: 120px; } }
.logo-container { display: flex; align-items: center; gap: 15px; }
.logo-icons { display: flex; align-items: center; gap: 8px; }
.logo-icons img { height: 28px; width: auto; }
@media (max-width: 600px) { .logo-icons img { height: 22px; } }
.foto-wrapper { width: 290px; height: 290px; border-radius: 50%; background: linear-gradient(135deg, var(--google-blue) 0%, var(--google-yellow) 50%, var(--google-green) 100%); padding: 5px; flex-shrink: 0; }
.foto-placeholder { width: 100%; height: 100%; border-radius: 50%; background-color: var(--bg-card); display: flex; align-items: center; justify-content: center; color: var(--text-secondary); font-size: 0.9rem; text-align: center; flex-shrink: 0; }
.fade-up { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
.fade-up.visible { opacity: 1; transform: translateY(0); }
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background-color: rgba(13, 17, 23, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid var(--border-color); padding: 15px 0; transition: all 0.3s ease; }
.header-content { display: flex; align-items: center; justify-content: space-between; }
.logo { font-size: 1.25rem; font-weight: 700; color: var(--text-primary); text-decoration: none; }
.logo span { color: var(--accent); }
.nav { display: none; }
.nav-list { display: flex; list-style: none; gap: 30px; }
.nav-link { color: var(--text-secondary); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.3s ease; }
.nav-link:hover { color: var(--accent); }
.mobile-toggle { display: flex; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 5px; }
.mobile-toggle span { width: 25px; height: 2px; background-color: var(--text-primary); transition: all 0.3s ease; }
.mobile-menu { display: none; position: fixed; top: 60px; left: 0; right: 0; background-color: var(--bg-secondary); border-bottom: 1px solid var(--border-color); padding: 20px; }
.mobile-menu.active { display: block; }
.mobile-menu-list { list-style: none; display: flex; flex-direction: column; gap: 15px; }
.mobile-menu-link { color: var(--text-secondary); text-decoration: none; font-size: 1rem; font-weight: 500; transition: color 0.3s ease; }
.mobile-menu-link:hover { color: var(--accent); }
@media (min-width: 768px) { .nav { display: block; } .mobile-toggle { display: none; } }
.hero { min-height: 100vh; display: flex; align-items: center; padding-top: 80px; background: var(--gradient-dark); position: relative; overflow: hidden; }
.hero::before { content: ''; position: absolute; top: -50%; right: -30%; width: 80%; height: 150%; background: radial-gradient(circle, var(--accent-glow) 0%, transparent 60%); opacity: 0.3; pointer-events: none; }
.hero-content { display: flex; flex-direction: column-reverse; align-items: center; gap: 40px; text-align: center; position: relative; z-index: 1; }
.hero-text { max-width: 600px; }
.hero-title { font-size: clamp(2rem, 5vw, 3.25rem); font-weight: 700; line-height: 1.2; margin-bottom: 20px; }
.hero-title .accent { color: var(--accent); font-style: italic; }
.hero-subtitle { font-size: clamp(1rem, 2vw, 1.125rem); color: var(--text-secondary); margin-bottom: 30px; line-height: 1.7; }
.hero-features { list-style: none; margin-bottom: 35px; display: inline-flex; flex-direction: column; gap: 12px; text-align: left; }
.hero-features li { display: flex; align-items: center; gap: 12px; font-size: 1rem; color: var(--text-primary); }
.hero-features li svg { width: 20px; height: 20px; color: var(--accent); flex-shrink: 0; }
@media (min-width: 900px) { .hero-content { flex-direction: row; text-align: left; justify-content: space-between; } .hero-features { display: flex; } .foto-placeholder { width: 320px; height: 320px; } }
.strip { background-color: var(--accent); padding: 25px 0; }
.strip-content { display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center; }
.strip-text { font-size: clamp(1rem, 2.5vw, 1.25rem); font-weight: 600; color: #15191f; }
.strip .btn-secondary { border-color: #15191f; color: #15191f; padding: 12px 24px; }
.strip .btn-secondary:hover { background-color: #15191f; color: var(--accent); }
@media (min-width: 768px) { .strip-content { flex-direction: row; justify-content: center; } }
.aprender { background-color: var(--bg-secondary); }
.cards-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
.card { background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 30px; transition: all 0.3s ease; }
.card:hover { border-color: var(--accent); transform: translateY(-5px); }
.card-icon { width: 48px; height: 48px; background-color: rgba(81, 181, 187, 0.15); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
.card-icon svg { width: 24px; height: 24px; color: var(--accent); }
.card-title { font-size: 1.125rem; font-weight: 600; margin-bottom: 10px; }
.card-text { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; }
@media (min-width: 600px) { .cards-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 900px) { .cards-grid { grid-template-columns: repeat(4, 1fr); } }
.para-quem { background-color: var(--bg-primary); }
.perfis-grid { display: grid; grid-template-columns: 1fr; gap: 25px; }
.perfil-card { background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 30px; text-align: center; transition: all 0.3s ease; }
.perfil-card:hover { border-color: var(--accent); }
.perfil-icon { width: 60px; height: 60px; background-color: rgba(81, 181, 187, 0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
.perfil-icon svg { width: 28px; height: 28px; color: var(--accent); }
.perfil-title { font-size: 1.125rem; font-weight: 600; margin-bottom: 10px; }
.perfil-text { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; }
@media (min-width: 600px) { .perfis-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 900px) { .perfis-grid { grid-template-columns: repeat(4, 1fr); } }
.planos { background-color: var(--bg-secondary); }
.planos-grid { display: grid; grid-template-columns: 1fr; gap: 25px; align-items: stretch; }
.plano-card { background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: 16px; padding: 35px 30px; display: flex; flex-direction: column; position: relative; transition: all 0.3s ease; }
.plano-card:hover { transform: translateY(-5px); }
.plano-card.destaque { border: 2px solid var(--accent); box-shadow: 0 0 40px var(--accent-glow); }
.plano-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background-color: var(--accent); color: #15191f; font-size: 0.75rem; font-weight: 700; padding: 6px 16px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; }
.plano-nome { font-size: 1.25rem; font-weight: 600; margin-bottom: 20px; text-align: center; }
.plano-preco { text-align: center; margin-bottom: 25px; }
.plano-preco-antigo { font-size: 0.9rem; color: var(--text-secondary); text-decoration: line-through; margin-bottom: 5px; }
.plano-preco-atual { font-size: 2.5rem; font-weight: 700; color: var(--accent); }
.plano-preco-atual span { font-size: 1rem; font-weight: 400; }
.plano-descricao { font-size: 0.9rem; color: var(--text-secondary); text-align: center; margin-bottom: 25px; padding-bottom: 25px; border-bottom: 1px solid var(--border-color); }
.plano-itens { list-style: none; margin-bottom: 30px; flex-grow: 1; }
.plano-itens li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: var(--text-primary); margin-bottom: 12px; }
.plano-itens li svg { width: 18px; height: 18px; color: var(--accent); flex-shrink: 0; margin-top: 2px; }
.plano-card .btn { width: 100%; }
@media (min-width: 768px) { .planos-grid { grid-template-columns: repeat(3, 1fr); } .plano-card.destaque { transform: scale(1.05); } .plano-card.destaque:hover { transform: scale(1.05) translateY(-5px); } }
.porque { background-color: var(--bg-secondary); }
.porque-grid { display: grid; grid-template-columns: 1fr; gap: 30px; }
.porque-item { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 15px; }
.porque-icon { width: 70px; height: 70px; background-color: rgba(81, 181, 187, 0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.porque-icon svg { width: 32px; height: 32px; color: var(--accent); }
.porque-titulo { font-size: 1.125rem; font-weight: 600; }
.porque-texto { font-size: 0.9rem; color: var(--text-secondary); max-width: 300px; }
@media (min-width: 768px) { .porque-grid { grid-template-columns: repeat(3, 1fr); } }
.garantia { background-color: var(--bg-primary); }
.garantia-content { max-width: 700px; margin: 0 auto; text-align: center; }
.garantia-icon { width: 80px; height: 80px; background-color: rgba(81, 181, 187, 0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; }
.garantia-icon svg { width: 40px; height: 40px; color: var(--accent); }
.garantia-titulo { font-size: 1.5rem; font-weight: 700; margin-bottom: 15px; }
.garantia-texto { font-size: 1rem; color: var(--text-secondary); margin-bottom: 30px; line-height: 1.7; }
.sobre { background-color: var(--bg-secondary); }
.sobre-content { display: flex; flex-direction: column; align-items: center; gap: 40px; }
.sobre-foto { width: 220px; height: 220px; }
.sobre-texto { max-width: 650px; text-align: center; }
.sobre-texto h3 { font-size: 1.5rem; font-weight: 700; margin-bottom: 20px; }
.sobre-texto h3 .accent { color: var(--accent); font-style: italic; }
.sobre-texto p { font-size: 1rem; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.7; }
.sobre-texto .btn { margin-top: 15px; }
@media (min-width: 900px) { .sobre-content { flex-direction: row; text-align: left; } .sobre-texto { text-align: left; } .sobre-foto { width: 280px; height: 280px; } }
.footer { background-color: var(--bg-primary); border-top: 1px solid var(--border-color); padding: 50px 0 30px; }
.footer-content { display: flex; flex-direction: column; align-items: center; gap: 25px; text-align: center; }
.footer-logo { font-size: 1.25rem; font-weight: 700; color: var(--text-primary); }
.footer-logo span { color: var(--accent); }
.footer-social { display: flex; gap: 15px; }
.footer-social a { width: 42px; height: 42px; border: 1px solid var(--border-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--text-secondary); transition: all 0.3s ease; }
.footer-social a:hover { border-color: var(--accent); color: var(--accent); }
.footer-social svg { width: 20px; height: 20px; }
.footer-copy { font-size: 0.85rem; color: var(--text-secondary); margin-top: 15px; }
      ` }} />

      <header className="header">
        <div className="container header-content">
          <div className="logo-container">
            <a href="#" className="logo">Thaylon <span>|</span> Aulas Particulares</a>
            <div className="logo-icons">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meta-Logo%20%281%29%20BRANCA-G9XljI1ScOiBs3WkGLdRmRKYNcpMiW.png" alt="Meta Ads" className="meta-logo" />
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-ads-removebg-preview-A1xBXNvyDbrRNGDJWlw8lzKN05ELvQ.png" alt="Google Ads" />
            </div>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#aprender" className="nav-link">O que voce vai aprender</a></li>
              <li><a href="#planos" className="nav-link">Planos</a></li>
              <li><a href="#sobre" className="nav-link">Sobre</a></li>
            </ul>
          </nav>
          <button className="mobile-toggle" aria-label="Abrir menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="mobile-menu">
          <ul className="mobile-menu-list">
            <li><a href="#aprender" className="mobile-menu-link">O que voce vai aprender</a></li>
            <li><a href="#planos" className="mobile-menu-link">Planos</a></li>
            <li><a href="#sobre" className="mobile-menu-link">Sobre</a></li>
          </ul>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text fade-up">
            <h1 className="hero-title">Aula Particular <span className="accent">Trafego Pago</span> do Zero ao Avancado</h1>
            <p className="hero-subtitle">Aulas particulares e ao vivo via Zoom, com metodologia propria que ja ajudou dezenas de empreendedores a dominarem Meta Ads e Google Ads com autonomia total.</p>
            <ul className="hero-features">
              <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Aulas individuais e 100% personalizadas</li>
              <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Suporte direto pelo WhatsApp entre aulas</li>
              <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Material de apoio completo incluso</li>
            </ul>
            <a href="#planos" className="btn btn-primary">Quero Comecar Agora</a>
          </div>
          <div className="foto-wrapper fade-up">
            <div className="foto-placeholder" style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MULT8404-ZxtqlfEbVELxRCwpIcaUSWvTHDow4K.jpg')", backgroundSize: "cover", backgroundPosition: "center top" }}></div>
          </div>
        </div>
        <div className="platform-logos fade-up">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meta-Logo%20%281%29%20BRANCA-G9XljI1ScOiBs3WkGLdRmRKYNcpMiW.png" alt="Meta Ads" className="meta-logo" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-ads-removebg-preview-A1xBXNvyDbrRNGDJWlw8lzKN05ELvQ.png" alt="Google Ads" />
        </div>
      </section>

      <div className="google-line google-line-full"></div>

      <section className="strip">
        <div className="container strip-content">
          <p className="strip-text">Vagas limitadas para atendimento individual. Garanta a sua agora.</p>
          <a href="#planos" className="btn btn-secondary">Ver Planos Disponiveis</a>
        </div>
      </section>

      <section id="aprender" className="section aprender">
        <div className="container">
          <h2 className="section-title fade-up">O Que Voce Vai <span className="accent">Aprender</span></h2>
          <div className="cards-grid">
            <div className="card fade-up">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg></div>
              <h3 className="card-title">Criacao de Campanhas</h3>
              <p className="card-text">Monte campanhas do zero com estrutura profissional, otimizadas para conversao desde o primeiro dia.</p>
            </div>
            <div className="card fade-up">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>
              <h3 className="card-title">Tipos de Anuncios</h3>
              <p className="card-text">Domine anuncios de vendas, engajamento, seguidores e geracao de leads para cada objetivo.</p>
            </div>
            <div className="card fade-up">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></div>
              <h3 className="card-title">Metricas e Escalada</h3>
              <p className="card-text">Aprenda a ler os dados que importam e saiba exatamente quando e como escalar seus resultados.</p>
            </div>
            <div className="card fade-up">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg></div>
              <h3 className="card-title">Configuracao do Pixel</h3>
              <p className="card-text">Instale e configure o pixel corretamente para rastrear conversoes e criar publicos poderosos.</p>
            </div>
            <div className="card fade-up">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
              <h3 className="card-title">Teste e Validacao</h3>
              <p className="card-text">Metodologia para testar criativos, publicos e ofertas ate encontrar a combinacao vencedora.</p>
            </div>
            <div className="card fade-up">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg></div>
              <h3 className="card-title">Contingencia e Seguranca</h3>
              <p className="card-text">Proteja suas contas contra bloqueios e aprenda estrategias de contingencia profissional.</p>
            </div>
            <div className="card fade-up">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></div>
              <h3 className="card-title">Google Ads</h3>
              <p className="card-text">Domine a rede de pesquisa e display para capturar clientes que ja estao buscando sua solucao.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section para-quem">
        <div className="container">
          <h2 className="section-title fade-up">Para Quem E <span className="accent">Esta Aula</span></h2>
          <div className="perfis-grid">
            <div className="perfil-card fade-up">
              <div className="perfil-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
              <h3 className="perfil-title">Empreendedor</h3>
              <p className="perfil-text">Voce quer parar de depender de terceiros e assumir o controle total da aquisicao de clientes do seu negocio.</p>
            </div>
            <div className="perfil-card fade-up">
              <div className="perfil-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
              <h3 className="perfil-title">Profissional Liberal</h3>
              <p className="perfil-text">Medicos, advogados, dentistas e consultores que querem lotar sua agenda com clientes qualificados todos os meses.</p>
            </div>
            <div className="perfil-card fade-up">
              <div className="perfil-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
              <h3 className="perfil-title">Negocio Local</h3>
              <p className="perfil-text">Lojas, restaurantes e prestadores de servico que precisam atrair clientes da regiao de forma consistente.</p>
            </div>
            <div className="perfil-card fade-up">
              <div className="perfil-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg></div>
              <h3 className="perfil-title">Afiliado</h3>
              <p className="perfil-text">Voce quer aprender a criar campanhas lucrativas para vender produtos digitais e fisicos como afiliado.</p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ padding: "20px 0" }}><div className="google-line google-line-medium google-line-left" style={{ marginLeft: "5%" }}></div></div>

      <section id="planos" className="section planos">
        <div className="container">
          <h2 className="section-title fade-up">Escolha o Melhor Plano <span className="accent">para Voce</span></h2>
          <div className="platform-logos platform-logos-small fade-up" style={{ marginBottom: "40px" }}>
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meta-Logo%20%281%29%20BRANCA-G9XljI1ScOiBs3WkGLdRmRKYNcpMiW.png" alt="Meta Ads" className="meta-logo" />
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-ads-removebg-preview-A1xBXNvyDbrRNGDJWlw8lzKN05ELvQ.png" alt="Google Ads" />
          </div>
          <div className="planos-grid">
            <div className="plano-card fade-up">
              <h3 className="plano-nome">Plano Intermediario</h3>
              <div className="plano-preco"><p className="plano-preco-antigo">De R$ 747,00</p><p className="plano-preco-atual"><span>R$</span> 647</p></div>
              <p className="plano-descricao">3 aulas de ate 1 hora cada</p>
              <ul className="plano-itens">
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Aulas ao vivo e individuais via Zoom</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Gravacao de todas as aulas</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Material de apoio em PDF</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Suporte WhatsApp por 15 dias</li>
              </ul>
              <a href="#" className="btn btn-cta">Comprar Agora</a>
            </div>
            <div className="plano-card destaque fade-up">
              <span className="plano-badge">Mais Popular</span>
              <h3 className="plano-nome">Plano Avancado</h3>
              <div className="plano-preco"><p className="plano-preco-antigo">De R$ 1.237,00</p><p className="plano-preco-atual"><span>R$</span> 997</p></div>
              <p className="plano-descricao">5 aulas de ate 1 hora cada</p>
              <ul className="plano-itens">
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Aulas ao vivo e individuais via Zoom</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Gravacao de todas as aulas</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Material de apoio completo em PDF</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Suporte WhatsApp por 30 dias</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Checklist de lancamento de campanha</li>
              </ul>
              <a href="#" className="btn btn-cta">Comprar Agora</a>
            </div>
            <div className="plano-card fade-up">
              <h3 className="plano-nome">Plano Master</h3>
              <div className="plano-preco"><p className="plano-preco-antigo">De R$ 2.470,00</p><p className="plano-preco-atual"><span>R$</span> 1.897</p></div>
              <p className="plano-descricao">10 aulas de ate 1 hora cada</p>
              <ul className="plano-itens">
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Aulas ao vivo e individuais via Zoom</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Gravacao de todas as aulas</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Material de apoio completo em PDF</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Suporte WhatsApp por 60 dias</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Checklist + Templates de anuncios</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Mentoria de acompanhamento no WhatsApp do grupo por ate 3 meses</li>
              </ul>
              <a href="#" className="btn btn-cta">Comprar Agora</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section porque">
        <div className="container">
          <h2 className="section-title fade-up">Por Que Escolher as <span className="accent">Aulas Particulares</span></h2>
          <div className="porque-grid">
            <div className="porque-item fade-up">
              <div className="porque-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
              <h3 className="porque-titulo">Aprenda Rapido e Sem Enrolacao</h3>
              <p className="porque-texto">Metodologia focada no que realmente funciona. Sem teoria desnecessaria, apenas pratica aplicavel ao seu negocio.</p>
            </div>
            <div className="porque-item fade-up">
              <div className="porque-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg></div>
              <h3 className="porque-titulo">Para Todos os Niveis</h3>
              <p className="porque-texto">Do iniciante ao intermediario, as aulas se adaptam ao seu conhecimento atual e evoluem no seu ritmo.</p>
            </div>
            <div className="porque-item fade-up">
              <div className="porque-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg></div>
              <h3 className="porque-titulo">Transforme Conhecimento em Resultado</h3>
              <p className="porque-texto">O objetivo e voce sair gerando clientes e vendas. Tudo que ensinamos tem aplicacao imediata no seu negocio.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section garantia">
        <div className="container">
          <div className="garantia-content fade-up">
            <div className="garantia-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
            <h3 className="garantia-titulo">Garantia de 7 Dias</h3>
            <p className="garantia-texto">Se apos a primeira aula voce sentir que o conteudo nao e para voce, devolvemos 100% do seu investimento. Sem burocracia, sem perguntas. Estou tao confiante na metodologia que assumo todo o risco por voce.</p>
            <a href="#planos" className="btn btn-primary">Comecar Agora com Garantia</a>
          </div>
        </div>
      </section>

      <section id="sobre" className="section sobre">
        <div className="container">
          <div className="sobre-content">
            <div className="foto-wrapper sobre-foto fade-up">
              <div className="foto-placeholder" style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MULT8511.JPG-84nbMTzaacRf1SqVEFfdPLbMqQbZsl.jpeg')", backgroundSize: "cover", backgroundPosition: "center 20%" }}></div>
            </div>
            <div className="sobre-texto fade-up">
              <h3>Quem e <span className="accent">Thaylon</span></h3>
              <p>Especialista em trafego pago com foco em Meta Ads e Google Ads, ja ajudei dezenas de empreendedores, profissionais liberais e donos de negocio local a conquistarem autonomia na aquisicao de clientes atraves de anuncios online.</p>
              <p>Minha metodologia nasceu da pratica real: anos gerenciando campanhas para diversos nichos me mostraram que o caminho mais rapido para resultados e o ensino individualizado, adaptado a realidade de cada aluno.</p>
              <p>Acredito que qualquer pessoa pode aprender a rodar anuncios lucrativos quando tem o acompanhamento certo. Por isso, criei um formato de aulas particulares com suporte continuo — para que voce nunca fique travado em uma duvida e possa aplicar tudo em tempo real no seu negocio.</p>
              <p>Minha missao e simples: transferir o conhecimento necessario para que voce nunca mais dependa de terceiros para gerar clientes e vendas.</p>
              <a href="#planos" className="btn btn-primary">Quero Aprender com Thaylon</a>
            </div>
          </div>
          <div className="platform-logos platform-logos-small fade-up" style={{ marginTop: "60px" }}>
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meta-Logo%20%281%29%20BRANCA-G9XljI1ScOiBs3WkGLdRmRKYNcpMiW.png" alt="Meta Ads" className="meta-logo" />
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-ads-removebg-preview-A1xBXNvyDbrRNGDJWlw8lzKN05ELvQ.png" alt="Google Ads" />
          </div>
        </div>
      </section>

      <div className="google-line google-line-full"></div>

      <footer className="footer">
        <div className="container footer-content">
          <p className="footer-logo">Thaylon <span>|</span> Aulas Particulares</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/thaylon.vieira___?igsh=MWQzbm03MGNwZjY2" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://youtube.com/@atrioassessoria?si=toAyf5rmuoMUE8Ge" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
          <p className="footer-copy">© 2026 Thaylon. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}
