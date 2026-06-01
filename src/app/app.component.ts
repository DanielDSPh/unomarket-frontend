import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="nav">
      <a routerLink="/" class="nav-brand">
        <span class="brand-dot"></span>Uno Market
      </a>
      <div class="nav-links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Inicio</a>
        <a routerLink="/catalogo" routerLinkActive="active">Catálogo</a>
      </div>
    </nav>
    <main>
      <router-outlet />
    </main>
    <footer class="footer">
      <p>© 2025 Uno Market — Todos los derechos reservados</p>
    </footer>
  `,
  styles: [`
    .nav {
      position: sticky; top: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 2rem; height: 64px;
      background: rgba(255,255,255,.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(31,111,235,.1);
    }
    .nav-brand {
      display: flex; align-items: center; gap: .5rem;
      font-family: var(--font-display); font-size: 1.3rem;
      color: var(--dark); text-decoration: none; font-weight: 700;
    }
    .brand-dot {
      width: 10px; height: 10px; border-radius: 50%;
      background: var(--brand); display: inline-block;
    }
    .nav-links { display: flex; gap: 1.5rem; }
    .nav-links a {
      text-decoration: none; color: var(--mid);
      font-size: .95rem; font-weight: 500;
      padding: .3rem .6rem; border-radius: 6px;
      transition: color .2s, background .2s;
    }
    .nav-links a:hover { color: var(--brand); background: var(--brand-light); }
    .nav-links a.active { color: var(--brand); font-weight: 600; }
    main { min-height: calc(100vh - 64px - 52px); }
    .footer {
      text-align: center; padding: 1rem;
      font-size: .8rem; color: var(--mid);
      border-top: 1px solid #e2e8f0;
    }
  `]
})
export class AppComponent {}