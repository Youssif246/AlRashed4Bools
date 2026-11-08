import { Component, OnInit, signal, ElementRef, ViewChild, AfterViewInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper/bundle';
import { COMPANY_INFO } from '../../core/data/company-info.data';
import { SeoService } from '../../core/services/seo.service';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  tag: string;
  description: string;
}

interface ServicePillar {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  route: string;
  fragment: string;
  highlights: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('projectsSwiper', { static: false }) projectsSwiperRef!: ElementRef<HTMLDivElement>;

  private platformId = inject(PLATFORM_ID);
  private swiperInstance: Swiper | null = null;

  readonly company = COMPANY_INFO;

  // Curated showcase of genuine project photographs representing company disciplines
  readonly selectedProjects: ProjectItem[] = [
    {
      id: 1,
      title: 'تنفيذ أنظمة العزل الهندسي المتقدم للأساسات والمنشآت',
      category: 'العوازل المائية والحرارية',
      image: '/last-projects/Geometric Waterproofing Membrane Construction Site.webp',
      tag: 'عزل مائي متقدم',
      description: 'تطبيق أغشية العزل الهندسي وطبقات الحماية المتكاملة لقواعد وهياكل المباني لضمان منع تسرب المياه واستدامة المنشأة.'
    },
    {
      id: 2,
      title: 'أعمال الشدات الخشبية الهندسية وقوالب الصب الدقيقة',
      category: 'المقاولات العامة والإنشاءات',
      image: '/last-projects/Sunlit ECO PLY Foundation Construction.webp',
      tag: 'الهياكل الإنشائية',
      description: 'استخدام ألواح الشدات الهندسية (ECO PLY) لضمان استقامة الزوايا ونعومة الأسطح الخرسانية ومطابقة كود البناء السعودي.'
    },
    {
      id: 3,
      title: 'تسليح القواعد والميدات الخرسانية والرقاب الإنشائية',
      category: 'أعمال العظم والأساسات',
      image: '/last-projects/Rebar Footings Under Construction.webp',
      tag: 'تسليح إنشائي معتمد',
      description: 'تركيب وتوزيع حديد التسليح بأقطار ومسافات هندسية دقيقة مع تأمين الغطاء الخرساني وضبط مناسيب الصب.'
    },
    {
      id: 4,
      title: 'فحص واختبار قوام الخرسانة الجاهزة ميدانياً (Slump Test)',
      category: 'ضبط الجودة الهندسية',
      image: '/last-projects/Concrete Slump Test Measurement.webp',
      tag: 'اختبارات الجودة والكود',
      description: 'إجراء اختبارات هبوط الخرسانة الميدانية قبل الصب للتحقق من نسب المياه والتشغيلية ومطابقتها للمواصفات الفنية.'
    },
    {
      id: 5,
      title: 'صب اللبشة والخرسانات المسلحة للمشاريع الكبرى',
      category: 'المقاولات العامة والإنشاءات',
      image: '/last-projects/Expansive Concrete Foundation Construction Site.webp',
      tag: 'صب الخرسانة المسلحة',
      description: 'إدارة وتنسيق عمليات الصب المستمر باستخدام مضخات الخرسانة الحديثة وفرق عمل متخصصة لضمان تجانس الكتلة الخرسانية.'
    },
    {
      id: 6,
      title: 'تأسيس شبكات السباكة وتغذية المياه والأنظمة التخصصية',
      category: 'أعمال السباكة والشبكات',
      image: '/last-projects/Industrial Interior Pipework and Wiring.webp',
      tag: 'شبكات التغذية والصرف',
      description: 'تمديد شبكات المواسير المعتمدة المقاومة للضغط العالي والحرارة لأنظمة تغذية المسابح وتصريف المباني مع فحص الضغط المسبق.'
    },
    {
      id: 7,
      title: 'أعمال التشطيبات الداخلية الدقيقة وكسوات السيراميك',
      category: 'التشطيبات والكسوات',
      image: '/last-projects/Under-Construction Tiled Utility Bathroom.webp',
      tag: 'التشطيبات الفاخرة',
      description: 'تركيب البورسلان والرخام والسيراميك بأحدث تقنيات الليزر وفواصل التمدد لضمان استواء مثالي ومظهر معماري متألق.'
    },
    {
      id: 8,
      title: 'المتابعة والإشراف الهندسي الميداني لمراحل التشييد',
      category: 'المقاولات العامة والإنشاءات',
      image: '/last-projects/High-Angle Construction Foundation Site.webp',
      tag: 'إشراف هندسي ميداني',
      description: 'توثيق مراحل البناء بنظرة شاملة تضمن تسلسل الأعمال الإنشائية والعزل والسباكة في التوقيت المحدد دون تعارض.'
    }
  ];

  // The 3 primary services pillars matching the company's core name and identity
  readonly servicePillars: ServicePillar[] = [
    {
      title: 'تصميم وبناء وتجهيز المسابح',
      subtitle: 'مسابح الأوفرفلو • السكيمر • الإنفينيتي • المعدات والشلالات',
      description: 'تصميم وتنفيذ متكامل لأرقى المسابح الخاصة والتجارية، مع توريد أنظمة الفلترة والتدفئة والشلالات المائية.',
      icon: 'pool',
      image: '/last-projects/Expansive Concrete Foundation Construction Site.webp',
      route: '/services',
      fragment: 'pools',
      highlights: [
        'مسابح الأوفرفلو والسكيمر والإنفينيتي الفاخرة',
        'توريد وتركيب مضخات وفلاتر التنقية المعتمدة',
        'أنظمة التدفئة الذكية والشلالات والنوافير الديكورية'
      ]
    },
    {
      title: 'العوازل المائية والحرارية المعتمدة',
      subtitle: 'عزل المسابح • الأسطح • الخزانات • القواعد الإنشائية',
      description: 'حماية هندسية فائقة للمباني والمسابح والخزانات بأحدث تقنيات العزل المعتمدة لمنع التسربات نهائياً.',
      icon: 'shield',
      image: '/last-projects/Geometric Waterproofing Membrane Construction Site.webp',
      route: '/services',
      fragment: 'insulation',
      highlights: [
        'عزل مائي متقدم متعدد الطبقات للمسابح والخزانات',
        'عزل الأسطح والمباني السكنية والتجارية ضد الرطوبة',
        'فحص واختبارات ضغط هيدروليكية وضمان معتمد'
      ]
    },
    {
      title: 'الإنشاءات والمقاولات العامة',
      subtitle: 'أعمال العظم • السباكة • الكهرباء • التشطيبات الشاملة',
      description: 'تنفيذ شامل لأعمال العظم والهياكل الخرسانية والتشطيبات الفاخرة والسباكة والكهرباء (بالمواد أو بدون مواد).',
      icon: 'building',
      image: '/last-projects/Sunlit Foundation Formwork Construction Site.webp',
      route: '/services',
      fragment: 'contracting',
      highlights: [
        'تنفيذ الهياكل الخرسانية وأعمال العظم المتكاملة',
        'مرونة التعاقد (تسليم مفتاح بالمواد أو بالمصنعية)',
        'تأسيس شبكات السباكة المعتمدة والكهرباء والتشطيب'
      ]
    }
  ];

  // Why Choose Us Points
  readonly whyChooseUs = [
    {
      icon: 'award',
      title: 'خبرة تفوق 13 عاماً',
      text: 'رصيد حافل وسجل موثق في إدارة وتنفيذ مختلف المشاريع الإنشائية ومشاريع المسابح والعزل في المنطقة الشرقية والمملكة.'
    },
    {
      icon: 'check-circle',
      title: 'الامتثال لكود البناء السعودي',
      text: 'نلتزم التزاماً صارماً باشتراطات ومواصفات كود البناء السعودي المعتمد لضمان سلامة المنشآت ومطابقتها للتراخيص الرسمية.'
    },
    {
      icon: 'layers',
      title: 'مرونة التنفيذ (بالمواد أو بدون مواد)',
      text: 'نقدم للعميل حرية الاختيار بين تسليم المشاريع بالمفتاح شاملاً أجود المواد المعتمدة، أو الإشراف والتنفيذ باليد العاملة المتخصصة.'
    },
    {
      icon: 'activity',
      title: 'ضبط الجودة والفحوصات الميدانية',
      text: 'فحص عينات الخرسانة، اختبارات الهبوط (Slump Test)، وقياس درجات الحرارة واختبارات الضغط الهيدروليكي قبل كل مرحلة.'
    },
    {
      icon: 'cpu',
      title: 'حلول متكاملة تحت سقف واحد',
      text: 'تنسيق متناغم بين المقاولات العامة والمسابح والعوازل، مما يوفر على العميل تكلفة تشتت المقاولين ويضمن ترابط الأعمال الهندسية.'
    },
    {
      icon: 'clock',
      title: 'الالتزام بمواعيد التسليم',
      text: 'إدارة هندسية دقيقة للجداول الزمنية لضمان تسليم المشاريع وفق المواصفات التعاقدية وبالمواعيد المحددة دون تأخير.'
    }
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateTags({
      title: 'الرئيسية — شركة الراشد للمسابح والعوازل والمقاولات العامة بالأحساء',
      description: 'شركة الراشد للمسابح والعوازل والمقاولات العامة في الأحساء والمبرز. خبرة أكثر من 13 عاماً في تصميم وبناء المسابح، العزل المائي والحراري، وأعمال العظم والتشطيب وفق كود البناء السعودي.',
      keywords: 'شركة الراشد, مسابح الأحساء, شركة مسابح المبرز, بناء مسابح السعودية, عوازل الأحساء, مقاول عظم المبرز, مسابح أوفر فلو, مسابح إنفينيتي, فلاتر ومضخات',
      url: 'https://alrashid-sa.com/'
    });

    this.seoService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: 'شركة الراشد للمسابح والعوازل والمقاولات العامة',
      alternateName: 'شركة الراشد',
      description: 'شركة متخصصة في تصميم وبناء المسابح والعوازل المائية والحرارية وأعمال المقاولات العامة والإنشاءات في الأحساء والمملكة العربية السعودية.',
      telephone: '+966509827772',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'الأحساء',
        addressRegion: 'المبرز - حي النزهة',
        addressCountry: 'SA'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '25.4166',
        longitude: '49.5484'
      },
      url: 'https://alrashid-sa.com/',
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '08:00',
          closes: '20:00'
        }
      ]
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initProjectsSwiper();
    }
  }

  slidePrev(): void {
    if (this.swiperInstance) {
      this.swiperInstance.slidePrev();
    }
  }

  slideNext(): void {
    if (this.swiperInstance) {
      this.swiperInstance.slideNext();
    }
  }

  private initProjectsSwiper(): void {
    if (!this.projectsSwiperRef?.nativeElement) return;

    try {
      if (this.swiperInstance) {
        this.swiperInstance.destroy(true, true);
        this.swiperInstance = null;
      }

      this.swiperInstance = new Swiper(this.projectsSwiperRef.nativeElement, {
        slidesPerView: 'auto',
        spaceBetween: 28,
        loop: true,
        loopAdditionalSlides: 3,
        speed: 600,
        grabCursor: true,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        pagination: {
          el: '.projects-swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-nav-next',
          prevEl: '.swiper-nav-prev',
        },
        breakpoints: {
          0: {
            spaceBetween: 16,
          },
          768: {
            spaceBetween: 22,
          },
          992: {
            spaceBetween: 28,
          }
        }
      });

      requestAnimationFrame(() => {
        this.swiperInstance?.update();
      });
    } catch (err) {
      console.error('Failed to initialize projects Swiper:', err);
    }
  }

  ngOnDestroy(): void {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
    }
  }
}

