import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { COMPANY_INFO } from '../../core/data/company-info.data';
import { SeoService } from '../../core/services/seo.service';

interface ContactChannel {
  id: string;
  title: string;
  subtitle: string;
  value: string;
  icon: string;
  actionText: string;
  actionUrl: string;
  isExternal: boolean;
  theme: 'ocean' | 'whatsapp' | 'amber' | 'navy';
  badge: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  private seoService = inject(SeoService);
  readonly company = COMPANY_INFO;

  // Quick navigation pills matching services page hero
  readonly quickNav = [
    { id: 'channels', label: 'قنوات التواصل المباشرة', icon: 'fa-phone-volume', count: '01' },
    { id: 'consultation', label: 'طلب معاينة وعرض سعر', icon: 'fa-file-signature', count: '02' },
    { id: 'contact-faq', label: 'الأسئلة الشائعة', icon: 'fa-circle-question', count: '03' }
  ];

  // Form Model Signals
  readonly fullName = signal('');
  readonly phone = signal('');
  readonly city = signal('الأحساء');
  readonly serviceCategory = signal('بناء وتجهيز المسابح');
  readonly contractMode = signal('تسليم مفتاح (شامل كافة المواد)');
  readonly projectDetails = signal('');

  readonly isSubmitting = signal(false);
  readonly isSubmitted = signal(false);
  readonly submitSuccessMsg = signal('');

  // Active FAQ accordion state
  readonly activeFaq = signal<number | null>(0);

  // Available service options
  readonly serviceOptions: string[] = [
    'بناء وتجهيز المسابح (أوفرفلو / سكيمر / إنفينيتي)',
    'توريد وتركيب معدات وفلاتر وأنظمة التدفئة',
    'أعمال العزل المائي والحراري (قواعد / أسطح / خزانات)',
    'المقاولات العامة والإنشاءات وأعمال العظم',
    'صيانة وترميم وتجديد مسابح وعوازل قائمة'
  ];

  // Available contract modes
  readonly contractModes: string[] = [
    'تسليم مفتاح (شامل كافة المواد والمواصفات)',
    'التنفيذ بالمصنعية واليد العاملة المتخصصة',
    'طلب معاينة ميدانية وحساب تكاليف أولاً'
  ];

  // Direct Contact Channels
  readonly contactChannels: ContactChannel[] = [
    {
      id: 'phone',
      title: 'الاتصال الهاتفي المباشر',
      subtitle: 'اتصال واستفسار مباشر',
      value: '050 982 7772',
      icon: 'fa-phone-volume',
      actionText: 'اتصل بنا الآن',
      actionUrl: 'tel:' + COMPANY_INFO.phoneInternational,
      isExternal: false,
      theme: 'ocean',
      badge: 'متاح للرد السريع'
    },
    {
      id: 'whatsapp',
      title: 'محادثة واتساب المباشرة',
      subtitle: 'إرسال المخططات والمواقع',
      value: '050 982 7772',
      icon: 'fa-whatsapp',
      actionText: 'بدء محادثة واتساب',
      actionUrl: COMPANY_INFO.whatsappUrl,
      isExternal: true,
      theme: 'whatsapp',
      badge: 'الخيار الأسرع للمخططات'
    },
    {
      id: 'location',
      title: 'المقر الميداني والإداري',
      subtitle: 'محافظة الأحساء',
      value: 'المبرز — حي الراشدية',
      icon: 'fa-location-dot',
      actionText: 'عرض الموقع على الخريطة',
      actionUrl: COMPANY_INFO.location.googleMapsUrl,
      isExternal: true,
      theme: 'amber',
      badge: 'نستقبلكم في مقرنا'
    }
  ];

  // FAQ Dataset
  readonly faqs: FaqItem[] = [
    {
      question: 'هل المعاينة الميدانية للموقع مجانية؟',
      answer: 'نعم، تقدم شركة الراشد خدمة المعاينة الميدانية ورفع المقاسات ودراسة مناسيب الموقع مجاناً للمشاريع ومشاريع المسابح داخل محافظة الأحساء والمنطقة الشرقية، وذلك لحساب التكاليف وجداول الكميات بدقة وشفافية.'
    },
    {
      question: 'ما هي المدة اللازمة لإعداد واستلام عرض السعر وتفاصيل التكلفة؟',
      answer: 'نقوم بتسليم حساب التكاليف وجداول الكميات المحددة خلال 24 إلى 48 ساعة من إتمام المعاينة الميدانية أو استلام مخططات المشروع.'
    },
    {
      question: 'هل يمكنني التعاقد بالمصنعية والعمالة المتخصصة فقط دون المواد؟',
      answer: 'بالتأكيد؛ نوفر لعملائنا مرونة تامة في أسلوب العمل؛ حيث يمكنك اختيار نظام تسليم مفتاح شامل توفير كافة المواد، أو خيار التنفيذ بالمصنعية والإشراف الميداني المباشر، بحسب ما يناسب رغبتك.'
    },
    {
      question: 'ما هي مدة الضمانات التي تقدمها شركة الراشد على المشاريع؟',
      answer: 'نوفر ضمانات خطية موثقة تصل إلى 10 سنوات على أعمال العزل المائي والحراري وسلامة الهيكل الخرساني للمسابح، بالإضافة إلى ضمانات المصنعين على المضخات والفلاتر وأجهزة التدفئة والإنارة.'
    },
    {
      question: 'هل تقدم الشركة خدماتها في كافة مدن ومناطق المملكة؟',
      answer: 'نقدم خدماتنا بشكل مباشر ويومي في كافة مدن محافظة الأحساء (المبرز، الهفوف، العيون، الجفر) ومدن المنطقة الشرقية (الدمام، الخبر، الظهران)، كما ننفذ مشاريع المسابح والعوازل في مختلف مناطق المملكة وفق تنسيق مسبق.'
    }
  ];

  ngOnInit(): void {
    this.seoService.updateTags({
      title: 'تواصل معنا | شركة الراشد للمسابح والعوازل والمقاولات العامة بالأحساء',
      description: 'تواصل مباشرة مع شركة الراشد للمسابح والعوازل والمقاولات العامة بالأحساء. اطلب عرض سعر ومعاينة ميدانية لمشروعك عبر الهاتف 0509827772 أو الواتساب.',
      keywords: 'تواصل شركة الراشد, رقم شركة الراشد للمسابح, مسابح الأحساء, عوازل الأحساء, مقاولات المبرز, هاتف 0509827772, واتساب شركة الراشد, عروض أسعار مسابح',
      url: 'https://alrashid-sa.com/contact'
    });
  }

  toggleFaq(index: number): void {
    this.activeFaq.update(current => current === index ? null : index);
  }

  submitConsultation(event: Event): void {
    event.preventDefault();
    if (!this.fullName().trim() || !this.phone().trim()) {
      return;
    }

    this.isSubmitting.set(true);

    // Build the clean, professional WhatsApp text
    const messageParts = [
      'السلام عليكم ورحمة الله وبركاته،',
      'أود طلب معاينة وعرض سعر من شركة الراشد:',
      `• الاسم الكريم: ${this.fullName().trim()}`,
      `• رقم الجوال: ${this.phone().trim()}`,
      `• المدينة / الحي: ${this.city().trim() || 'الأحساء'}`,
      `• القطاع المطلوب: ${this.serviceCategory()}`,
      `• نظام التعاقد: ${this.contractMode()}`,
      this.projectDetails().trim() ? `• تفاصيل المشروع: ${this.projectDetails().trim()}` : null,
      '---',
      'مرسل عبر موقع شركة الراشد'
    ].filter(Boolean);

    const fullMessage = messageParts.join('\n');
    const waUrl = `https://wa.me/966509827772?text=${encodeURIComponent(fullMessage)}`;

    // Open WhatsApp in a new tab
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank');
    }

    this.isSubmitting.set(false);
    this.isSubmitted.set(true);
    this.submitSuccessMsg.set('تم تجهيز طلبك بنجاح! يتم الآن توجيهك إلى محادثة واتساب المباشرة مع فريق العمل.');
  }

  resetForm(): void {
    this.fullName.set('');
    this.phone.set('');
    this.city.set('الأحساء');
    this.projectDetails.set('');
    this.isSubmitted.set(false);
  }
}
