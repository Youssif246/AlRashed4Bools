import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COMPANY_INFO, MAIN_NAV_LINKS } from '../../../core/data/company-info.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly company = COMPANY_INFO;
  readonly navLinks = MAIN_NAV_LINKS;
  readonly currentYear = new Date().getFullYear();

  readonly servicesList = [
    { name: 'تصميم وبناء المسابح الفاخرة', route: '/services', fragment: 'pools' },
    { name: 'مسابح الأوفرفلو والإنفينيتي', route: '/services', fragment: 'pools' },
    { name: 'معدات وفلاتر ومضخات المسابح', route: '/services', fragment: 'equipment' },
    { name: 'العزل المائي والحراري المعتمد', route: '/services', fragment: 'insulation' },
    { name: 'أعمال العظم والخرسانات والأساسات', route: '/services', fragment: 'contracting' },
    { name: 'التشطيبات والسباكة والكهرباء', route: '/services', fragment: 'contracting' }
  ];
}

