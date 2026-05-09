import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`
    section {
      min-height: 100vh; display: flex; align-items: center;
      padding: 0 10%; background: var(--hero-bg);
    }
    .greeting { color: var(--accent); font-size: 1.1rem; margin-bottom: 8px; }
    h1 { font-size: 4rem; font-weight: 800; line-height: 1; margin-bottom: 12px; color: var(--text); }
    .role { font-size: 1.5rem; color: var(--muted); margin-bottom: 16px; }
    .tagline { font-size: 1rem; color: var(--muted); max-width: 480px; margin-bottom: 32px; }
    .actions { display: flex; gap: 16px; flex-wrap: wrap; }
    .btn-primary {
      padding: 12px 28px; background: var(--accent); color: var(--btn-text);
      border-radius: 6px; text-decoration: none; font-weight: 600; transition: opacity 0.2s;
    }
    .btn-primary:hover { opacity: 0.85; }
    .btn-outline {
      padding: 12px 28px; border: 2px solid var(--accent); color: var(--accent);
      border-radius: 6px; text-decoration: none; font-weight: 600; transition: all 0.2s;
    }
    .btn-outline:hover { background: var(--accent); color: var(--btn-text); }
    @media (max-width: 768px) {
      section { padding: 0 6%; }
      h1 { font-size: 2.8rem; }
      .role { font-size: 1.2rem; }
    }
    @media (max-width: 480px) {
      h1 { font-size: 2.2rem; }
      .role { font-size: 1rem; }
      .actions { flex-direction: column; }
      .btn-primary, .btn-outline { text-align: center; }
    }
  `]
})
export class HeroComponent {}
