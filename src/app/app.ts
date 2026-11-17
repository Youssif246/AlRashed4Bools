import { Component, OnInit, signal, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LogoIntroComponent } from './shared/components/logo-intro/logo-intro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LogoIntroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  readonly isIntroActive = signal(false);

  // In-memory session tracking ensures intro runs once on page load and does not interrupt SPA route navigation
  private static hasRunInCurrentSession = false;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Show intro on page load / refresh
    if (!App.hasRunInCurrentSession) {
      this.isIntroActive.set(true);
    }
  }

  onIntroCompleted(): void {
    App.hasRunInCurrentSession = true;
    this.isIntroActive.set(false);
  }
}
