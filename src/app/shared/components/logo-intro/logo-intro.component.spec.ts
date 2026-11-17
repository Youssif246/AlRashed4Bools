import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LogoIntroComponent } from './logo-intro.component';

describe('LogoIntroComponent', () => {
  let component: LogoIntroComponent;
  let fixture: ComponentFixture<LogoIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoIntroComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LogoIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the logo intro component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the official logo image with correct src', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logoImg = compiled.querySelector<HTMLImageElement>('.official-logo-img');
    expect(logoImg).toBeTruthy();
    expect(logoImg?.getAttribute('src')).toBe('/ALRASHID-Logo.png');
  });

  it('should render the drawing svg and brand arc strokes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.drawing-svg')).toBeTruthy();
    expect(compiled.querySelector('.layer-arcs')).toBeTruthy();
    expect(compiled.querySelector('.layer-emblem')).toBeTruthy();
    expect(compiled.querySelector('.arc-orange')).toBeTruthy();
    expect(compiled.querySelector('.arc-turquoise')).toBeTruthy();
    expect(compiled.querySelector('.logo-brand-caption')).toBeTruthy();
  });

  it('should emit completed when skip() is called', () => {
    return new Promise<void>((resolve) => {
      component.completed.subscribe(() => {
        expect(true).toBe(true);
        resolve();
      });
      component.skip();
    });
  });

  it('should handle Escape key by triggering skip()', () => {
    const spy = vi.spyOn(component, 'skip');
    component.onEscape();
    expect(spy).toHaveBeenCalled();
  });
});
