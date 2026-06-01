import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-content">
        <span class="badge">Nuevo · Temporada 2025</span>
        <h1>El mercado<br><em>que te simplifica</em></h1>
        <p>Descubre miles de productos curados para tu estilo de vida. Calidad garantizada, envío rápido.</p>
        <div class="hero-actions">
          <a routerLink="/catalogo" class="btn-primary">Ver Catálogo</a>
          <a routerLink="/catalogo" class="btn-ghost">Explorar ofertas →</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="visual-card card-1">
          <div class="card-icon">🛍️</div>
          <p>+10,000 productos</p>
        </div>
        <div class="visual-card card-2">
          <div class="card-icon">⚡</div>
          <p>Envío express</p>
        </div>
        <div class="visual-card card-3">
          <div class="card-icon">✅</div>
          <p>Calidad garantizada</p>
        </div>
      </div>
    </section>

    <section class="features">
      <h2>¿Por qué Uno Market?</h2>
      <div class="features-grid">
        <div class="feature" *ngFor="let f of features">
          <div class="feature-icon">{{ f.icon }}</div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      padding: 5rem 4rem 4rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .badge {
      display: inline-block;
      background: var(--brand-light);
      color: var(--brand);
      font-size: .75rem; font-weight: 600;
      letter-spacing: .06em; text-transform: uppercase;
      padding: .35rem .8rem; border-radius: 20px;
      margin-bottom: 1.2rem;
    }
    h1 {
      font-family: var(--font-display);
      font-size: clamp(2.2rem, 5vw, 3.5rem);
      line-height: 1.1; color: var(--dark);
      margin-bottom: 1.2rem;
    }
    h1 em { color: var(--brand); font-style: normal; }
    .hero-content p {
      font-size: 1.05rem; color: var(--mid);
      line-height: 1.7; max-width: 420px;
      margin-bottom: 2rem;
    }
    .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; }
    .btn-primary {
      background: var(--brand); color: #fff;
      padding: .8rem 1.8rem; border-radius: var(--radius);
      text-decoration: none; font-weight: 600; font-size: .95rem;
      box-shadow: var(--shadow);
      transition: background .2s, transform .15s;
    }
    .btn-primary:hover { background: var(--brand-dark); transform: translateY(-2px); }
    .btn-ghost {
      color: var(--brand); text-decoration: none;
      font-weight: 500; font-size: .95rem;
      padding: .8rem 1rem;
      transition: opacity .2s;
    }
    .btn-ghost:hover { opacity: .7; }

    .hero-visual {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      position: relative;
    }
    .visual-card {
      background: var(--white);
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: var(--shadow);
      border: 1px solid rgba(31,111,235,.08);
      transition: transform .25s;
    }
    .visual-card:hover { transform: translateY(-4px); }
    .card-1 { grid-column: span 2; }
    .card-icon { font-size: 2rem; margin-bottom: .5rem; }
    .visual-card p { font-weight: 600; color: var(--dark); font-size: .95rem; }

    .features {
      background: var(--white);
      padding: 4rem;
      margin-top: 2rem;
    }
    .features h2 {
      font-family: var(--font-display);
      font-size: 2rem; text-align: center;
      margin-bottom: 2.5rem; color: var(--dark);
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      max-width: 900px; margin: 0 auto;
    }
    .feature {
      text-align: center; padding: 1.5rem;
      border-radius: var(--radius);
      transition: background .2s;
    }
    .feature:hover { background: var(--brand-light); }
    .feature-icon { font-size: 2.2rem; margin-bottom: .8rem; }
    .feature h3 { font-size: 1rem; font-weight: 600; margin-bottom: .4rem; }
    .feature p { font-size: .875rem; color: var(--mid); line-height: 1.6; }

    @media (max-width: 768px) {
      .hero { grid-template-columns: 1fr; padding: 2.5rem 1.5rem; }
      .hero-visual { display: none; }
      .features { padding: 2.5rem 1.5rem; }
    }
  `]
})
export class InicioComponent {
  features = [
    { icon: '🔒', title: 'Pago Seguro', desc: 'Transacciones protegidas con cifrado SSL de extremo a extremo.' },
    { icon: '🚀', title: 'Envío Rápido', desc: 'Recibe tu pedido en menos de 48 horas hábiles.' },
    { icon: '↩️', title: 'Devoluciones', desc: '30 días para cambios y devoluciones sin complicaciones.' },
    { icon: '🎧', title: 'Soporte 24/7', desc: 'Equipo disponible todo el día para resolver tus dudas.' }
  ];
}