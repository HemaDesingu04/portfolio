import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = true;

  constructor() {
    const saved = localStorage.getItem('theme');
    this.isDark = saved ? saved === 'dark' : true;
    this.apply();
  }

  toggle() {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    this.apply();
  }

  private apply() {
    document.body.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
  }
}
