import { Component } from '@angular/core';

interface Achievement {
  title: string;
  description: string;
  date: string;
  photos: string[];
}

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styles: [`
    section { background: var(--surface); }

    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }

    .card {
      background: var(--card-bg); border: 1px solid var(--border);
      border-radius: 12px; padding: 24px; display: flex; flex-direction: column; gap: 12px;
      transition: border-color 0.2s;
    }
    .card:hover { border-color: var(--accent); }
    .card h3 { color: var(--text); font-size: 1.1rem; }
    .card p { color: var(--muted); font-size: 0.9rem; line-height: 1.6; }
    .date { font-size: 0.8rem; color: var(--accent); font-weight: 600; }

    .photos { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
    .photos img {
      width: 80px; height: 80px; object-fit: cover; border-radius: 8px;
      cursor: pointer; border: 2px solid var(--border); transition: border-color 0.2s;
    }
    .photos img:hover { border-color: var(--accent); }

    .lightbox {
      position: fixed; inset: 0; background: rgba(0,0,0,0.85);
      display: flex; align-items: center; justify-content: center; z-index: 999;
    }
    .lightbox img { max-width: 90vw; max-height: 85vh; border-radius: 10px; }
    .lightbox-close {
      position: absolute; top: 20px; right: 28px; font-size: 2rem;
      color: #fff; cursor: pointer; background: none; border: none; line-height: 1;
    }
  `]
})
export class AchievementsComponent {
  // Add your achievements here. For photos, place image files in src/assets/ and use 'assets/your-image.jpg'
  achievements: Achievement[] = [
    {
      title: 'Best Developer Award',
      description: 'Recognized as the best developer at the annual company hackathon.',
      date: 'Dec 2023',
      photos: []
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributed to 3 major open source projects with 200+ GitHub stars.',
      date: 'Aug 2023',
      photos: []
    }
  ];

  lightboxSrc: string | null = null;

  openLightbox(src: string) { this.lightboxSrc = src; }
  closeLightbox() { this.lightboxSrc = null; }
}
