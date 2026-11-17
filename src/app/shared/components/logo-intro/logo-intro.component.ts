import { Component, OnInit, OnDestroy, Output, EventEmitter, HostListener, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-logo-intro',
  standalone: true,
  templateUrl: './logo-intro.component.html',
  styleUrl: './logo-intro.component.css'
})
export class LogoIntroComponent implements OnInit, OnDestroy {
  @Output() completed = new EventEmitter<void>();

  private readonly platformId = inject(PLATFORM_ID);
  private timers: any[] = [];

  readonly isFadingOut = signal(false);
  readonly currentScene = signal<'monolith' | 'sheen' | 'hold'>('monolith');

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.skip();
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.completed.emit();
      return;
    }

    // Storyboard: Unified Brand Monolith (~2.75s total)
    // 1. Monolith entrance & framing arcs (0.0s - 0.9s)
    // 2. Prismatic diamond light sheen sweep (0.9s - 1.95s)
    this.timers.push(setTimeout(() => {
      this.currentScene.set('sheen');
    }, 900));

    // 3. Poised brand hold (1.95s - 2.35s)
    this.timers.push(setTimeout(() => {
      this.currentScene.set('hold');
    }, 1950));

    // 4. Silky smooth dissolve into homepage (2.35s - 2.75s)
    this.timers.push(setTimeout(() => {
      this.isFadingOut.set(true);
    }, 2350));

    this.timers.push(setTimeout(() => {
      this.completed.emit();
    }, 2750));

    // Safety failsafe
    this.timers.push(setTimeout(() => {
      this.completed.emit();
    }, 3500));
  }

  skip(): void {
    if (this.isFadingOut()) return;
    this.isFadingOut.set(true);
    setTimeout(() => {
      this.completed.emit();
    }, 150);
  }

  ngOnDestroy(): void {
    this.timers.forEach(t => clearTimeout(t));
    this.timers = [];
  }
}
