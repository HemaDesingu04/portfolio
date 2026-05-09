import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [`
    .wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
    .info p { color: var(--muted); line-height: 1.8; margin-bottom: 24px; }
    .links { display: flex; flex-direction: column; gap: 12px; }
    .links a { color: var(--accent); text-decoration: none; }
    .links a:hover { text-decoration: underline; }
    form { display: flex; flex-direction: column; gap: 16px; }
    input, textarea {
      background: var(--surface); border: 1px solid var(--border); border-radius: 8px;
      padding: 12px 16px; color: var(--text); font-size: 0.95rem; outline: none;
      transition: border-color 0.2s;
    }
    input:focus, textarea:focus { border-color: var(--accent); }
    textarea { resize: vertical; min-height: 120px; }
    button {
      padding: 12px; background: var(--accent); color: var(--btn-text); border: none;
      border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: opacity 0.2s;
    }
    button:hover { opacity: 0.85; }
    button:disabled { opacity: 0.6; cursor: not-allowed; }
    .success { color: #4ade80; font-size: 0.9rem; }
    .error { color: #f87171; font-size: 0.9rem; }
    @media (max-width: 768px) { .wrapper { grid-template-columns: 1fr; gap: 32px; } }
  `]
})
export class ContactComponent {
  sending = false;
  sent = false;
  error = false;

  constructor(private http: HttpClient) {}

  onSubmit(form: any) {
    if (form.invalid) return;
    this.sending = true;
    this.error = false;

    this.http.post('http://localhost:8080/api/contact', {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    }).subscribe({
      next: () => {
        this.sent = true;
        this.sending = false;
        form.reset();
      },
      error: () => {
        this.error = true;
        this.sending = false;
      }
    });
  }
}
