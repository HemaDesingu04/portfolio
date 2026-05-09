import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [`
    section { background: var(--surface); }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
    .card {
      background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px;
      padding: 28px; display: flex; flex-direction: column; gap: 12px;
      transition: transform 0.2s, border-color 0.2s;
    }
    .card:hover { transform: translateY(-4px); border-color: var(--accent); }
    .card h3 { font-size: 1.2rem; color: var(--text); }
    .card p { color: var(--muted); font-size: 0.9rem; line-height: 1.6; flex: 1; }
    .tags { display: flex; flex-wrap: wrap; gap: 6px; }
    .tag { padding: 3px 10px; background: var(--tag-bg); border-radius: 20px; font-size: 0.8rem; color: var(--tag-color); }
    .links { display: flex; gap: 12px; margin-top: 8px; }
    a { color: var(--accent); text-decoration: none; font-size: 0.9rem; font-weight: 600; }
    a:hover { text-decoration: underline; }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce app with cart, auth, and payment integration.',
      tags: ['Angular', 'Node.js', 'MongoDB'],
      demo: '#', code: '#'
    },
    {
      title: 'Task Manager',
      description: 'A real-time collaborative task management tool with drag-and-drop.',
      tags: ['React', 'Firebase', 'TypeScript'],
      demo: '#', code: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'This portfolio — built with Angular and a clean theme switcher.',
      tags: ['Angular', 'CSS'],
      demo: '#', code: '#'
    },
  ];
}
