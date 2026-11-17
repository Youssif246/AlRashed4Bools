import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { App } from './app';

describe('App Component', () => {
  let fixture: ComponentFixture<App>;
  let app: App;

  beforeEach(async () => {
    sessionStorage.clear();

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  afterEach(() => {
    sessionStorage.clear();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(App);
    app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should complete intro and hide when onIntroCompleted is called', () => {
    fixture = TestBed.createComponent(App);
    app = fixture.componentInstance;
    app.isIntroActive.set(true);

    app.onIntroCompleted();

    expect(app.isIntroActive()).toBe(false);
  });
});
