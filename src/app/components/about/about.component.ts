import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [`
    section { background: var(--surface); }
    .grid { display: grid; grid-template-columns: 200px 1fr; gap: 48px; align-items: start; }
    .avatar-placeholder {
      width: 180px; height: 180px; border-radius: 50%;
      background: linear-gradient(135deg, var(--accent), var(--accent-soft));
      display: flex; align-items: center; justify-content: center;
      font-size: 5rem; font-weight: 700; color: #fff;
    }
    .bio { color: var(--muted); line-height: 1.8; }
    .details { margin-top: 24px; display: flex; flex-direction: column; gap: 8px; color: var(--muted); }
    strong { color: var(--accent); }
    @media (max-width: 768px) {
      .grid { grid-template-columns: 1fr; text-align: center; }
      .avatar-placeholder { margin: 0 auto; }
      .details { align-items: center; }
    }
  `]
})
export class AboutComponent {}
