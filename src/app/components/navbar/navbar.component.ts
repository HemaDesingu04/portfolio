import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    nav {
      position: fixed; top: 0; width: 100%; z-index: 100;
      display: flex; justify-content: space-between; align-items: center;
      padding: 16px 10%; background: var(--surface);
      backdrop-filter: blur(8px); border-bottom: 1px solid var(--border);
      transition: background 0.3s;
    }
    .logo { font-size: 1.4rem; font-weight: 700; color: var(--accent); }
    .right { display: flex; align-items: center; gap: 28px; }
    ul { list-style: none; display: flex; gap: 28px; }
    a { color: var(--text); text-decoration: none; font-size: 0.95rem; transition: color 0.2s; }
    a:hover { color: var(--accent); }
    .toggle {
      background: none; border: 1px solid var(--border); border-radius: 20px;
      padding: 6px 14px; cursor: pointer; font-size: 0.85rem;
      color: var(--text); transition: all 0.2s; white-space: nowrap;
    }
    .toggle:hover { border-color: var(--accent); color: var(--accent); }
    @media (max-width: 768px) {
      nav { padding: 14px 5%; }
      ul { gap: 16px; }
      a { font-size: 0.85rem; }
    }
    @media (max-width: 480px) {
      nav { flex-wrap: wrap; gap: 10px; padding: 12px 5%; }
      .right { width: 100%; justify-content: space-between; }
      ul { gap: 12px; }
    }
  `]
})
export class NavbarComponent {
  constructor(public theme: ThemeService) {}
}
