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

  // Quick navigation pills matching services page hero
  readonly quickNav = [
    { id: 'story', label: 'هويتنا ومسيرتنا', icon: 'fa-building-columns', count: '01' },
    { id: 'values', label: 'قيمنا الإنشائية', icon: 'fa-shield-halved', count: '02' },
    { id: 'workflow', label: 'مراحل العمل المنظمة', icon: 'fa-compass-drafting', count: '03' }
  ];

  readonly coreValues: ValueCard[] = [
    {
      icon: 'fa-shield-halved',
      title: 'الجودة والإتقان في التنفيذ',
      badge: 'كود البناء السعودي',
      description: 'نلتزم باشتراطات كود البناء السعودي وباستخدام خامات ومعدات ممتازة تضمن المتانة والسلامة الإنشائية واستدامة المبنى.',
      highlight: 'مطابقة لاشتراطات السلامة وجودة الخرسانات',
      theme: 'ocean'
    },
    {
      icon: 'fa-file-signature',
      title: 'الشفافية والالتزام التعاقدي',
      badge: 'عقود واضحة وموثقة',
      description: 'عقود واضحة البنود وجداول زمنية دقيقة تضمن تسليم المشاريع وفق المواصفات المحددة دون تأخير أو مفاجآت في التكاليف.',
      highlight: 'وضوح كامل في جداول الكميات والدفعات ومواعيد التسليم',
      theme: 'navy'
    },
    {
      icon: 'fa-handshake-angle',
      title: 'مرونة التعاقد والتنفيذ',
      badge: 'خيارات تعاقد متعددة',
      description: 'نوفر حلولاً تلبي رغبة كل عميل، سواء بنظام تسليم مفتاح شامل المواد والمعدات، أو بالتنفيذ باليد العاملة المتخصصة.',
      highlight: 'تسليم مفتاح بالمواد أو مصنعية وإشراف مباشر',
      theme: 'coral'
    },
    {
      icon: 'fa-cubes-stacked',
      title: 'خدمات شاملة تحت سقف واحد',
      badge: 'حلول إنشائية شاملة',
      description: 'تكامل بين المقاولات العامة والمسابح والعوازل يجنب العميل تشتت المقاولين ويضمن ترابطاً وجودة عالية في كافة مراحل العمل.',
      highlight: 'متابعة مباشرة تمنع تضارب الأعمال وتضمن سلامة العزل والإنشاء',
      theme: 'amber'
    }
  ];

  readonly workflowSteps: StepItem[] = [
    {
      step: '01',
      phase: 'المرحلة الأولى',
      title: 'المعاينة الميدانية ورفع القياسات',
      description: 'فحص الموقع الميداني، رفع المناسيب والأبعاد، ودراسة تفاصيل العمل المطلوب وفق رغبة العميل.',
      icon: 'fa-compass-drafting',
      deliverable: 'تقرير رفع أبعاد وحساب كميات دقيق'
    },
    {
      step: '02',
      phase: 'المرحلة الثانية',
      title: 'الاتفاق وتوثيق بنود العمل',
      description: 'إعداد جداول الكميات وجدول الدفعات والزمن المتفق عليه بشفافية ووضوح تام.',
      icon: 'fa-file-contract',
      deliverable: 'عقد واضح وجدول زمني محدد'
    },
    {
      step: '03',
      phase: 'المرحلة الثالثة',
      title: 'التنفيذ الميداني وضبط الجودة',
      description: 'مباشرة أعمال الحفر والخرسانات والعزل وتمديدات السباكة مع فحص الخرسانة واختبارات الضغط.',
      icon: 'fa-trowel-bricks',
      deliverable: 'متابعة دورية وفحوصات للخرسانة والعزل'
    },
    {
      step: '04',
      phase: 'المرحلة الرابعة',
      title: 'التشطيب والتسليم مع الضمانات',
      description: 'استكمال التشطيبات وتجربة وتشغيل أنظمة المسابح والعوازل وتسليم المشروع مع وثائق الضمان الشامل.',
      icon: 'fa-circle-check',
      deliverable: 'محضر تسليم واضح + وثائق الضمان الشامل'
    }
  ];

  ngOnInit(): void {
    this.seoService.updateTags({
      title: 'من نحن — شركة الراشد للمسابح والعوازل والمقاولات العامة بالأحساء',
      description: 'تعرف على شركة الراشد للمسابح والعوازل والمقاولات العامة في الأحساء والمبرز. خبرة تمتد لأكثر من 15 عاماً في تنفيذ المشاريع الإنشائية وبناء المسابح والعوازل وفق كود البناء السعودي.',
      keywords: 'عن شركة الراشد, من نحن, شركة مقاولات الأحساء, بناء مسابح المبرز, عوازل مائية وحرارية, كود البناء السعودي',
      url: 'https://alrashid-sa.com/about'
    });
  }
}
