import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COMPANY_INFO } from '../../core/data/company-info.data';
import { SeoService } from '../../core/services/seo.service';

interface ValueCard {
  icon: string;
  title: string;
  description: string;
  badge: string;
  highlight: string;
  theme: 'ocean' | 'navy' | 'coral' | 'amber';
}

interface StepItem {
  step: string;
  phase: string;
  title: string;
  description: string;
  icon: string;
  deliverable: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  private seoService = inject(SeoService);
  readonly company = COMPANY_INFO;

  readonly coreValues: ValueCard[] = [
    {
      icon: 'fa-shield-halved',
      title: 'الجودة والإتقان الهندسي',
      badge: 'كود البناء السعودي SBC',
      description: 'نلتزم بأعلى معايير كود البناء السعودي وباستخدام خامات ومعدات معتمدة دولياً تضمن المتانة والسلامة الإنشائية واستدامة المنشأة.',
      highlight: 'مطابقة تامة لاشتراطات السلامة والخرسانات المعتمدة',
      theme: 'ocean'
    },
    {
      icon: 'fa-file-signature',
      title: 'الشفافية والالتزام التعاقدي',
      badge: 'عقود رسمية ملزمة',
      description: 'عقود رسمية مفصلة وجداول زمنية دقيقة تضمن تسليم المشاريع وفق المواصفات المحددة دون تأخير زمني أو مفاجآت في التكاليف.',
      highlight: 'وضوح كامل في جداول الكميات والدفعات ومواعيد التسليم',
      theme: 'navy'
    },
    {
      icon: 'fa-handshake-angle',
      title: 'مرونة التعاقد والتنفيذ',
      badge: 'خيارات تعاقد متعددة',
      description: 'نوفر حلولاً تلبي تطلعات كل عميل، سواء بنظام تسليم مفتاح شامل المواد والمعدات، أو بالإشراف والتنفيذ باليد العاملة المتخصصة.',
      highlight: 'تسليم مفتاح بالمواد أو مصنعية وإشراف هندسي',
      theme: 'coral'
    },
    {
      icon: 'fa-cubes-stacked',
      title: 'تكامل هندسي تحت سقف واحد',
      badge: 'حلول إنشائية شاملة',
      description: 'تناغم فريد بين المقاولات العامة والمسابح والعوازل يجنب العميل تشتت المقاولين ويضمن ترابطاً وتكاملاً هندسياً فائق الدقة.',
      highlight: 'إشراف موحد يمنع تضارب الأعمال ويضمن سلامة العزل والإنشاء',
      theme: 'amber'
    }
  ];

  readonly workflowSteps: StepItem[] = [
    {
      step: '01',
      phase: 'المرحلة الأولى',
      title: 'المعاينة والدراسة الفنية الميدانية',
      description: 'فحص الموقع الميداني بأيدي مهندسين متخصصين، رفع المناسيب والأبعاد بدقة، ودراسة طبيعة المشروع والمواصفات الفنية المطلوبة.',
      icon: 'fa-compass-drafting',
      deliverable: 'تقرير رفع مساحي ومقايسة فنية تفصيلية'
    },
    {
      step: '02',
      phase: 'المرحلة الثانية',
      title: 'التخطيط الهندسي والتعاقد الرسمي',
      description: 'إعداد المقايسات الفنية التفصيلية واعتماد المخططات التنفيذية وجدول الدفعات والزمن التعاقدي بشفافية ووضوح تام.',
      icon: 'fa-file-contract',
      deliverable: 'عقد هندسي معتمد وجدول تدفقات ملزم'
    },
    {
      step: '03',
      phase: 'المرحلة الثالثة',
      title: 'التنفيذ الميداني وضبط الجودة',
      description: 'مباشرة أعمال الحفر والخرسانات والعزل وتمديدات السباكة مع إجراء اختبارات هبوط الخرسانة (Slump Test) وفحوصات الضغط.',
      icon: 'fa-trowel-bricks',
      deliverable: 'تقارير فحص دورية واختبارات خرسانة معتمدة'
    },
    {
      step: '04',
      phase: 'المرحلة الرابعة',
      title: 'التشطيب والتسليم مع الضمانات',
      description: 'استكمال التشطيبات المعمارية الراقية وتجربة وتشغيل أنظمة المسابح والعوازل وتسليم المشروع رسمياً مع وثائق الضمان المعتمدة.',
      icon: 'fa-circle-check',
      deliverable: 'محضر تسليم رسمي + وثائق الضمان الشامل'
    }
  ];

  ngOnInit(): void {
    this.seoService.updateTags({
      title: 'من نحن — شركة الراشد للمسابح والعوازل والمقاولات العامة بالأحساء',
      description: 'تعرف على شركة الراشد للمسابح والعوازل والمقاولات العامة في الأحساء والمبرز. خبرة تمتد لأكثر من 13 عاماً في تنفيذ المشاريع الإنشائية وبناء المسابح والعوازل وفق كود البناء السعودي.',
      keywords: 'عن شركة الراشد, من نحن, شركة مقاولات الأحساء, بناء مسابح المبرز, عوازل مائية وحرارية, كود البناء السعودي',
      url: 'https://alrashid-sa.com/about'
    });
  }
}
