import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [`
    .categories { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; }
    .card {
      background: var(--surface); border: 1px solid var(--border); border-radius: 12px;
      padding: 24px; transition: border-color 0.2s;
    }
    .card:hover { border-color: var(--accent); }
    .card h3 { color: var(--accent); margin-bottom: 16px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
    .tags { display: flex; flex-wrap: wrap; gap: 8px; }
    .tag {
      padding: 4px 12px; background: var(--tag-bg); border: 1px solid var(--border);
      border-radius: 20px; font-size: 0.85rem; color: var(--tag-color);
    }
  `]
})
export class SkillsComponent {
  categories = [
    { title: 'Frontend', skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript'] },
    { title: 'Backend', skills: ['Java', 'REST APIs', 'SpringBoot', 'JDBC'] },
    { title: 'Database', skills: ['MySQL', 'MongoDB'] },
    { title: 'DevOps & Tools', skills: ['AWS-EC2', 'Docker', 'Git', 'CI/CD', 'Jenkins'] },
  ];
}
