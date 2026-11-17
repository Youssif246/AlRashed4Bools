import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COMPANY_INFO } from '../../core/data/company-info.data';
import { SeoService } from '../../core/services/seo.service';

export interface PoolType {
  id: string;
  title: string;
  titleEn: string;
  badge: string;
  description: string;
  image: string;
  imageAlt: string;
  waterLevel: string;
  surgeTank: string;
  aesthetic: string;
  features: string[];
  bestFor: string;
  icon: string;
  theme: 'ocean' | 'navy' | 'cyan';
}

export interface PoolComparisonItem {
  metric: string;
  icon: string;
  overflow: string;
  skimmer: string;
  infinity: string;
}

export interface PoolConstructionStep {
  step: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  deliverables: string[];
}

export interface EquipmentItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  badge: string;
  theme: string;
  description: string;
  image: string;
  specs: string[];
}

export interface PoolFaq {
  question: string;
  answer: string;
  icon: string;
}

export interface InsulationDomain {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  warrantyYears: string;
  theme: 'water' | 'thermal' | 'structure';
}

export interface ContractingPhase {
  title: string;
  category: string;
  badge: string;
  description: string;
  image: string;
  imageAlt: string;
  deliverables: string[];
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'pools' | 'insulation' | 'contracting';
  categoryLabel: string;
  image: string;
  imageAlt: string;
  badge: string;
  location: string;
}

export interface QualityCommitment {
  id: string;
  number: string;
  icon: string;
  theme: 'blue' | 'emerald' | 'amber' | 'terracotta';
  badge: string;
  title: string;
  text: string;
  featurePill: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  private seoService = inject(SeoService);
  readonly company = COMPANY_INFO;

  // Active quick navigation helper
  readonly quickNav = [
    { id: 'pools', label: 'أنظمة وتصاميم المسابح', icon: 'fa-person-swimming', count: '01' },
    { id: 'insulation', label: 'أعمال العزل المائي والحراري', icon: 'fa-shield-halved', count: '02' },
    { id: 'gallery', label: 'معرض المشاريع الميدانية', icon: 'fa-images', count: '03' }
  ];

  // Interactive UI States
  activeComparisonTab: 'overflow' | 'skimmer' | 'infinity' = 'overflow';
  activeFaqIndex: number | null = 0;
  activeCategory: 'all' | 'pools' | 'insulation' | 'contracting' = 'all';
  activeModalImage: GalleryItem | null = null;

  // Contact helpers
  getWhatsappUrl(message: string): string {
    return 'https://wa.me/966509827772?text=' + encodeURIComponent(message);
  }

  get phoneTelLink(): string {
    return 'tel:' + this.company.phoneInternational;
  }

  // 1. Core Swimming Pool Types (Concise & Focused)
  readonly poolTypes: PoolType[] = [
    {
      id: 'overflow',
      title: 'مسابح الأوفرفلو',
      titleEn: 'Overflow Luxury Pools (Mirror System)',
      badge: 'الخيار المفضل للقصور والفلل الحديثة',
      description: 'يتساوى منسوب سطح الماء تماماً مع مستوى الأرضيات المحيطة مع انسياب سلس داخل مجرى محيطي مخفي، ليمنحك مظهر مرآة مائية متصلة بدون أي حواجز بصرية.',
      image: '/last-projects/Luxury-Overflow-Swimming-Pool.jpg',
      imageAlt: 'تنفيذ مسابح الأوفرفلو للقصور والفلل في الأحساء - شركة الراشد',
      waterLevel: 'مستوٍ تماماً مع الأرضيات المحيطة (0 سم)',
      surgeTank: 'يتطلب خزان موازنة إضافي معزول تحت الأرض',
      aesthetic: 'مظهر مرآة مائية متصلة بدون أي حواجز بصرية',
      features: [
        'استواء كامل للمياه مع مستوى الأرضيات والرخام (0 سم)',
        'انسياب مائي هادئ وتصفية سطحية مستمرة 360 درجة',
        'خيار مثالي للقصور والفلل السكنية'
      ],
      bestFor: 'القصور والفلل السكنية والمشاريع الحديثة',
      icon: 'fa-water',
      theme: 'ocean'
    },
    {
      id: 'skimmer',
      title: 'مسابح السكيمر العصرية',
      titleEn: 'Skimmer System Pools (Compact & Practical)',
      badge: 'الخيار الأكثر كفاءة وعملية للمساحات السكنية',
      description: 'الحل الأكثر انتشاراً وعملية؛ يعتمد على كاشطات جدارية مدمجة لسحب وتنقية مياه السطح، دون الحاجة لخزان موازنة إضافي، ما يوفر في المساحة والتكلفة.',
      image: '/last-projects/Modern-Skimmer-Swimming-Pool.jpg',
      imageAlt: 'تصميم وبناء مسابح السكيمر العصرية للفلل والاستراحات - شركة الراشد',
      waterLevel: 'أقل من الحافة بـ 10 إلى 15 سم (حافة أمان)',
      surgeTank: 'لا يحتاج إلى خزان موازنة (توفير في المساحة والتكلفة)',
      aesthetic: 'طابع كلاسيكي أنيق مع حواف حجرية أو موزاييك',
      features: [
        'تكلفة اقتصادية ذكية وسرعة تنفيذ قياسية',
        'توفير في المساحة الإنشائية (لا يتطلب خزان موازنة إضافي)',
        'مثالي للفلل العائلية والاستراحات والحدائق المنزلية'
      ],
      bestFor: 'الفلل العائلية، الاستراحات، والحدائق المنزلية',
      icon: 'fa-filter',
      theme: 'navy'
    },
    {
      id: 'infinity',
      title: 'مسابح الإنفينيتي ذات الأفق المفتوح',
      titleEn: 'Infinity Edge Pools (Zero-Edge Horizon)',
      badge: 'إطلالة معمارية بانورامية مفتوحة',
      description: 'تصميم عصري مميز؛ حيث تُصمم إحدى الحواف لتفيض المياه فوقها كشلال هادئ نحو مجرى سفلي، ليندمج سطح الماء في خط واحد ممتد مع الأفق الطبيعي.',
      image: '/last-projects/Panoramic-Infinity-Edge-Pool.jpg',
      imageAlt: 'بناء مسابح الإنفينيتي ذات الأفق المفتوح والإطلالة البانورامية - شركة الراشد',
      waterLevel: 'منساب كشلال على إحدى الحواف نحو مجرى تجميعي',
      surgeTank: 'مجرى تجميع سفلي مدمج يعيد تدوير المياه',
      aesthetic: 'اندماج ساحر للمياه مع الأفق الطبيعي والمناظر المفتوحة',
      features: [
        'إطلالة بانورامية تندمج مع الأفق والمحيط الخارجي',
        'صوت خرير ماء شلالي مهدئ يضفي طابعاً هادئاً وجمالياً',
        'مثالي للأراضي ذات الإطلالات المفتوحة والمنتجعات'
      ],
      bestFor: 'المواقع ذات الإطلالات المفتوحة والأراضي المتدرجة',
      icon: 'fa-infinity',
      theme: 'cyan'
    }
  ];

  // 2. Comprehensive Comparison Matrix for Educational Decision Making
  readonly poolComparison: PoolComparisonItem[] = [
    {
      metric: 'مستوى سطح الماء بالنسبة للأرضيات',
      icon: 'fa-ruler-vertical',
      overflow: 'متساوٍ تماماً مع الرخام والأرضيات بمستوى انسيابي',
      skimmer: 'أقل من الحافة بـ 10-15 سم (حافة أمان)',
      infinity: 'يفيض فوق الحافة كشلال نحو مجرى سفلي'
    },
    {
      metric: 'الحاجة لخزان موازنة إضافي',
      icon: 'fa-database',
      overflow: 'إلزامي (لحساب كمية المياه الفائضة وحفظ المنسوب)',
      skimmer: 'غير مطلوب نهائياً (توفير مساحة وتكلفة حفر)',
      infinity: 'مجرى تجميع سفلي مدمج أسفل الجدار الهابط'
    },
    {
      metric: 'نظام سحب وتصفية الشوائب',
      icon: 'fa-arrows-rotate',
      overflow: 'تصفية محيطية شاملة 360 درجة على كامل الحواف',
      skimmer: 'كاشطات جدارية جانبية بمناطق محددة بالمسبح',
      infinity: 'تصفية سطحية مستمرة عبر جدار الشلال الهابط'
    },
    {
      metric: 'المساحة الإنشائية المطلوبة',
      icon: 'fa-maximize',
      overflow: 'تتطلب مساحة للمسبح + المجرى المحيطي + خزان الموازنة',
      skimmer: 'الأكثر استغلالاً للمساحة (مثالي للمساحات المحدودة)',
      infinity: 'تتطلب مساحة إضافية للمجرى التجميعي وغرفة المضخات'
    },
    {
      metric: 'سرعة التنفيذ والجاهزية',
      icon: 'fa-clock',
      overflow: 'من 4 إلى 6 أسابيع (تتطلب دقة استواء شاقولي للمجرى)',
      skimmer: 'من 3 إلى 4 أسابيع (أسرع وأبسط إنشائياً)',
      infinity: 'من 4 إلى 6 أسابيع (حسابات هيدروليكية وميول)'
    },
    {
      metric: 'الملائمة والميزانية التقديرية',
      icon: 'fa-coins',
      overflow: 'فئة راقية (استثمار طويل الأجل للقصور والفلل)',
      skimmer: 'فئة اقتصادية وعملية (أفضل عائد مقابل التكلفة)',
      infinity: 'فئة فندقية راقية (مخصصة للإطلالات والواجهات)'
    }
  ];

  // 3. Complete 6-Step Pool Construction Journey (من الحفر إلى السباحة)
  readonly poolConstructionSteps: PoolConstructionStep[] = [
    {
      step: '01',
      title: 'التصميم والرفع المساحي وتحديد المناسيب',
      badge: 'الدراسة والتخطيط',
      description: 'دراسة طبيعة التربة، توقيع أبعاد المسبح بدقة بالغة بواسطة أجهزة الليزر، وتحديد منسوب سطح الماء وموقع غرفة الفلاتر والمضخات ومسارات السباكة.',
      image: '/last-projects/Sunlit Construction Slab with Red Layout Lines.webp',
      deliverables: [
        'مخططات واضحة تحدد الأبعاد والعمق المتدرج',
        'تحديد مناسيب الصرف وغرفة التجهيزات الهيدروليكية',
        'مطابقة التصميم مع رغبة العميل واشتراطات الموقع'
      ]
    },
    {
      step: '02',
      title: 'أعمال الحفر، فرشة النظافة، وحديد التسليح المزدوج',
      badge: 'الهيكل الإنشائي',
      description: 'حفر المسبح بالأبعاد المحددة، صب فرشة النظافة الخرسانية، وتثبيت شبكتي حديد تسليح (أرضية وجدران) مع كانات وبساكيت لحماية الحديد.',
      image: '/last-projects/Rebar Footings Under Construction.webp',
      deliverables: [
        'دك قاع التربة وصب خرسانة نظافة عازلة',
        'حديد تسليح مزدوج مقاوم لعزوم وضغط المياه الإنشائي',
        'تثبيت شرائط مانع تسريب الفواصل عند فاصل الصب'
      ]
    },
    {
      step: '03',
      title: 'تمديد شبكات السباكة والهيدروليك عالي الضغط',
      badge: 'السباكة الهيدروليكية',
      description: 'تأسيس خطوط السحب والدفع والنوافير ومصبات الشلالات وفتحات المكانس وشبكات التصريف الأرضية، باستخدام مواسير الضغط العالي المقاومة للأملاح والكيماويات.',
      image: '/last-projects/Industrial Interior Pipework and Wiring.webp',
      deliverables: [
        'مواسير ووصلات عالية الجودة ومقاومة للكلور والضغط المرتفع',
        'توزيع متوازن لنوافير الدفع لضمان تجانس تدفق المياه',
        'اختبار ضغط هيدروليكي موثق للشبكة بالكامل قبل الصب'
      ]
    },
    {
      step: '04',
      title: 'الصب الخرساني المسلح المتواصل واستخدام الهزازات',
      badge: 'الصب والدمك الميكانيكي',
      description: 'صب قاع وجدران المسبح بخلطة خرسانية جاهزة ذات مقاومة عالية ونفاذية منخفضة مع إضافات السيكا المقاومة للأملاح، واستخدام الهزازات لمنع أي تعشيش.',
      image: '/last-projects/Concrete Pouring Equipment at Construction Site.webp',
      deliverables: [
        'صب خرساني متجانس ومنتظم بدون فواصل هواء',
        'فحص هبوط الخرسانة الميداني وقياس الحرارة قبل الصب',
        'معالجة ورش مائي مستمر لتصلب الخرسانة بأعلى متانة'
      ]
    },
    {
      step: '05',
      title: 'العزل المائي البوليمري المزدوج واختبار الغمر 72 ساعة',
      badge: 'العزل وضبط الجودة',
      description: 'لياسة ناعمة بالقِدد والأوتار، معالجة الزوايا بركنيات دائرية، تطبيق طبقات العزل الإسمنتي والبوليمري المرن، وإخضاع المسبح لاختبار غمر كامل لمدة 72 ساعة متواصلة.',
      image: '/last-projects/Waterproofed Foundation Excavation.webp',
      deliverables: [
        'عازل بوليمري مطاطي فائق الالتصاق وغير سام',
        'فحص دقيق لمناسيب المياه على مدار 3 أيام متتالية',
        'شهادة اختبار غمر وضمان عزل مائي موثق'
      ]
    },
    {
      step: '06',
      title: 'التشطيب، الموزاييك، تركيب المعدات، والتسليم النهائي',
      badge: 'التشطيب والتشغيل',
      description: 'تركيب بلاط الموزاييك والبورسلان الإسباني المقاوم للانزلاق وفواصل الإيبوكسي، تركيب المضخات وفلاتر التنقية وأنظمة التدفئة والإنارة الذكية، وتعبئة المسبح والمعايرة.',
      image: '/last-projects/Under-Construction Tiled Utility Bathroom.webp',
      deliverables: [
        'تركيب موزاييك بمهارة فندقية وأجهزة ليزر دقيقة',
        'تجهيز وتشغيل لوحات التحكم الكهربائية ومضخات الفلترة',
        'معايرة كيميائية أولية للمياه وتدريب العميل على الصيانة'
      ]
    }
  ];

  // 4. Pool Equipment & Electro-Mechanical Systems
  readonly poolEquipment: EquipmentItem[] = [
    {
      id: 'filtration',
      icon: 'fa-gears',
      title: 'مضخات وفلاتر التنقية',
      subtitle: 'أنظمة الضخ والفلترة فائقة النقاء',
      badge: 'علامات موثوقة',
      theme: 'ocean',
      image: '/last-projects/pool-pumps-filters.jpg',
      description: 'توريد وتركيب وحدات الضخ وفلاتر الرمل متعددة الطبقات لضمان نقاء دائم للمياه مع استهلاك كهرباء موفر.',
      specs: [
        'فلاتر رملية وخرطوشية فائقة الترشيح لنقاء بلوري',
        'مضخات موفرة للطاقة ومقاومة للتآكل والملوحة العالية',
        'لوحات تحكم كهربائية بحماية حرارية ذكية'
      ]
    },
    {
      id: 'heat-pump',
      icon: 'fa-temperature-arrow-up',
      title: 'مضخات التدفئة والتبريد الذكية',
      subtitle: 'سباحة دافئة وممتعة على مدار فصول العام',
      badge: 'تقنية توفير الطاقة',
      theme: 'amber',
      image: '/last-projects/pool-heat-pump.jpg',
      description: 'مضخات حرارية ومبادلات ذكية تتيح التحكم الدقيق بدرجة حرارة مياه المسبح شتاءً وصيفاً للاستمتاع بالسباحة المريحة على مدار فصول السنة كافة.',
      specs: [
        'سخانات مضخات حرارية متطورة بتقنية توفير الطاقة',
        'مبادلات تيتانيوم مقاومة لملوحة وكلور المياه',
        'تحكم رقمي بالحرارة عبر شاشات لمس أو تطبيق ذكي'
      ]
    },
    {
      id: 'lighting',
      icon: 'fa-lightbulb',
      title: 'أنظمة الإنارة الذكية للمسابح',
      subtitle: 'إضاءات مائية ليلية ومؤثرات بصرية مميزة',
      badge: 'أمان وحماية عازلة',
      theme: 'indigo',
      image: '/last-projects/pool-led-lighting.jpg',
      description: 'كشافات مائية غاطسة موفرة للطاقة بمستويات حماية عالية، مع إمكانية تغيير الألوان والتحكم بالمؤثرات الضوئية ليلاً لإضفاء لمسة جمالية.',
      specs: [
        'إضاءات بيضاء ودافئة وملونة متطورة مع سيناريوهات تشغيل',
        'محولات أمان منخفضة الفولتية لحماية تامة للسباحين',
        'إطارات مقاومة للتآكل والصدأ'
      ]
    },
    {
      id: 'waterfalls',
      icon: 'fa-faucet-drip',
      title: 'الشلالات والمصبات المائية الديكورية',
      subtitle: 'شلالات مائية ونوافير ديكورية مميزة',
      badge: 'ستانلس ستيل مقاوم للصدأ',
      theme: 'teal',
      image: '/last-projects/pool-waterfall-fountain.jpg',
      description: 'تصميم وتنفيذ شلالات جدارية ومصبات انسيابية من الستانلس ستيل المقاوم للصدأ تضفي صوتاً خريراً مهدئاً ولمسة فندقية ساحرة لحديقة المسبح.',
      specs: [
        'مصبات ستانلس ستيل عريض بمسارات تدفق مائي متجانسة',
        'مضخات تغذية مخصصة لتحكم دقيق بقوة وهدوء التدفق',
        'إنارة ليلية خفية مدمجة داخل شريحة الشلال لأجواء ساحرة'
      ]
    }
  ];

  // 5. Frequently Asked Questions about Pools (الأسئلة الأكثر شيوعاً)
  readonly poolFaqs: PoolFaq[] = [
    {
      question: 'كم يستغرق بناء المسبح الخرساني من البداية وحتى التسليم النهائي؟',
      answer: 'يتراوح الوقت الإجمالي عادة بين 3 إلى 6 أسابيع حسب حجم المسبح ونوعه (مسابح السكيمر تستغرق عادة 3 إلى 4 أسابيع، بينما مسابح الأوفرفلو والإنفينيتي تستغرق من 4 إلى 6 أسابيع نظراً لمتطلبات خزان الموازنة والمجاري المحيطية واختبارات الغمر المائي الإلزامية).',
      icon: 'fa-stopwatch'
    },
    {
      question: 'كيف أختار بين مسبح الأوفرفلو ومسبح السكيمر لمساحتي؟',
      answer: 'إذا كانت مساحة الحديقة متوسطة أو محدودة والميزانية محددة، فإن مسبح السكيمر هو الخيار الأمثل والعملي لعدم حاجته لخزان موازنة إضافي. أما إذا كنت تبحث عن استواء كامل للمياه مع رخام الأرضيات ولديك مساحة كافية للخزان وغرفة التجهيزات، فنظام الأوفرفلو يمنحك أفضل نتيجة بصرية وجمالية.',
      icon: 'fa-scale-balanced'
    },
    {
      question: 'ما هي الضمانات التي تقدمها شركة الراشد على المسابح والعزل؟',
      answer: 'نقدم ضماناً موثقاً يصل إلى 10 سنوات على الهيكل الخرساني وعزل المسبح المائي بعد اجتياز اختبار الغمر لمدة 72 ساعة، مع توفير ضمانات المصنع على مضخات الفلترة والسخانات والشلالات.',
      icon: 'fa-award'
    },
    {
      question: 'هل يمكن تدفئة المسبح للاستخدام خلال أيام الشتاء الباردة في الأحساء؟',
      answer: 'نعم بالتأكيد؛ نقوم بتركيب مضخات التدفئة والتبريد الذكية الموفرة للطاقة، والتي تتيح تسخين المياه بكفاءة عالية حتى درجة 30 مئوية بأقل استهلاك كهربائي لتتمكن عائلتك من السباحة طوال أيام العام.',
      icon: 'fa-temperature-half'
    },
    {
      question: 'كيف تتم معالجة وصيانة مياه المسبح للحفاظ على نقائها وسلامتها؟',
      answer: 'نوفر أنظمة فلترة متعددة الوسائط (فلاتر رمل زجاجي ومضخات تدوير) مع لوحات تعقيم أوتوماتيكية تقيس نسبة الكلور والحموضة تلقائياً، كما نزود عملاءنا بجدول صيانة مبسط ومواد فحص مخصصة تضمن بقاء المياه نقية وآمنة للعين والبشرة.',
      icon: 'fa-hand-holding-droplet'
    }
  ];

  // 6. Supporting Pillar: Certified Waterproofing
  readonly insulationDomains: InsulationDomain[] = [
    {
      id: 'foundations-insulation',
      title: 'عزل القواعد والأساسات والميدات الإنشائية',
      badge: 'حماية الهيكل ضد الأملاح والمياه الجوفية',
      description: 'حماية خرسانات القواعد والرقاب والأساسات الجدارية ضد الرطوبة والمياه الجوفية باستخدام لفائف البيتومين المسلح والدهانات العازلة المطاطية وفق كود البناء السعودي.',
      image: '/last-projects/Waterproofed Foundation Excavation.webp',
      imageAlt: 'تنفيذ أعمال عزل الأساسات والقواعد الإنشائية لشركة الراشد',
      technologies: [
        'طبقات برايمر بيتوميني عالي التغلغل لسد المسام',
        'لفائف بيتومين مسلحة بالبوليستر بسمك 4 ملم',
        'حماية العزل بألواح حماية مخصصة قبل الردم',
        'معالجة الزوايا ورقبة الزجاجة بالفواصل المرنة'
      ],
      warrantyYears: 'ضمان يصل إلى 10 سنوات',
      theme: 'structure'
    },
    {
      id: 'pools-tanks-insulation',
      title: 'عزل المسابح وخزانات المياه الأرضية',
      badge: 'عزل مائي مزدوج إيجابي وسلبي',
      description: 'منظومة عزل مائي محكمة تعتمد على المواد الإسمنتية والبوليمرية المطاطية المرنة ذات التماسك الفائق مع الخرسانة؛ غير سامة ومطابقة لاشتراطات مياه الشرب وتمنع التسريب تماماً.',
      image: '/last-projects/Concrete Temperature Check.webp',
      imageAlt: 'فحوصات الجودة وتجهيز عزل المسابح والخزانات بشركة الراشد',
      technologies: [
        'معجون إيبوكسي وفايبر مش مقوى للأركان والزوايا',
        'عازل بوليمري مرن مزدوج المكونات مقاوم لضغط المياه العالي',
        'معالجة فواصل التمدد والصب بشرائط مانع تسريب الفواصل',
        'اختبار غمر مائي إلزامي لمدة 72 ساعة متواصلة'
      ],
      warrantyYears: 'اختبار غمر موثق مع شهادة سلامة',
      theme: 'water'
    },
    {
      id: 'roofs-thermal-insulation',
      title: 'عزل الأسطح المائي والحراري المتكامل',
      badge: 'نظام كومبو وحماية حرارية فائقة',
      description: 'عزل مزدوج مائي وحراري للأسطح الخرسانية والمعدنية؛ يحد من استهلاك أجهزة التكييف والكهرباء صيفاً ويمنع نفاذ مياه الأمطار والرطوبة شتاءً، بما يطابق اشتراطات كفاءة الطاقة السعودية.',
      image: '/last-projects/Geometric Waterproofing in Progress.webp',
      imageAlt: 'تنفيذ العزل المائي والحراري للأسطح',
      technologies: [
        'ألواح العزل الحراري عالي الكثافة المقاوم للحرارة',
        'أغشية عزل مائي متطورة مسلحة بالألياف',
        'صب خرسانة الميول (الفوم كونكريت) لتوجيه تصريف المياه',
        'طبقة حماية نهائية أكريليكية مقاومة للشمس والأشعة'
      ],
      warrantyYears: 'كفاءة حرارية ومائية مستدامة',
      theme: 'thermal'
    }
  ];

  // 7. Live Field Projects Gallery Showcase (Pools & Contracting)
  readonly galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'تنفيذ مسبح أوفرفلو مع شلالات ديكورية',
      category: 'pools',
      categoryLabel: 'قطاع المسابح',
      image: '/last-projects/Luxury-Overflow-Swimming-Pool.jpg',
      imageAlt: 'مسبح أوفرفلو منفذ لفيلا في الأحساء',
      badge: 'مسابح الأوفرفلو',
      location: 'الأحساء — مجمع فلل سكنية'
    },
    {
      id: 2,
      title: 'صب وتأسيس اللبشة والقواعد الخرسانية الكبرى',
      category: 'contracting',
      categoryLabel: 'المقاولات والإنشاءات',
      image: '/last-projects/Expansive Concrete Foundation Construction Site.webp',
      imageAlt: 'صب خرسانات الأساسات والقواعد الكبرى في مشاريع الراشد',
      badge: 'كود البناء السعودي',
      location: 'المبرز — مشروع سكني وتجاري'
    },
    {
      id: 3,
      title: 'عزل مائي بلفائف البيتومين للقواعد والأساسات',
      category: 'insulation',
      categoryLabel: 'أعمال العزل المائي والحراري',
      image: '/last-projects/Geometric Waterproofing Membrane Construction Site.webp',
      imageAlt: 'عزل مائي محكم للأساسات والميدات الإنشائية',
      badge: 'ضمان 10 سنوات',
      location: 'الأحساء — حي النزهة'
    },
    {
      id: 4,
      title: 'مسبح إنفينيتي بانورامي مفتوح بإطلالة ساحرة',
      category: 'pools',
      categoryLabel: 'قطاع المسابح',
      image: '/last-projects/Panoramic-Infinity-Edge-Pool.jpg',
      imageAlt: 'مسبح إنفينيتي ذو أفق لا نهائي وإضاءة ليلية مدمجة',
      badge: 'مسابح الإنفينيتي',
      location: 'الأحساء — منتجع سياحي'
    },
    {
      id: 5,
      title: 'تأسيس شبكات السباكة المعلقة والإنشائية',
      category: 'contracting',
      categoryLabel: 'المقاولات والإنشاءات',
      image: '/last-projects/Unfinished Ceiling Plumbing and Wiring.webp',
      imageAlt: 'تمديد أنابيب الصرف والتغذية تحت الأسقف المعلقة',
      badge: 'تأسيسات كهروميكانيكية',
      location: 'المبرز — مبنى تجاري وسكني'
    },
    {
      id: 6,
      title: 'مسبح سكيمر عائلي عصري بإنارة LED مائية',
      category: 'pools',
      categoryLabel: 'قطاع المسابح',
      image: '/last-projects/Modern-Skimmer-Swimming-Pool.jpg',
      imageAlt: 'مسبح سكيمر عائلي متكامل مع الحديقة وجلسات الاسترخاء',
      badge: 'مسابح السكيمر',
      location: 'الأحساء — فيلا سكنية خاصة'
    },
    {
      id: 7,
      title: 'شدات خشبية متقنة للأعمدة والقواعد',
      category: 'contracting',
      categoryLabel: 'المقاولات والإنشاءات',
      image: '/last-projects/Vivid WISA-Form Foundation Construction Site.webp',
      imageAlt: 'أعمال الشدات الخشبية والنجارة المسلحة للأعمدة والقواعد',
      badge: 'موازين شاقولية',
      location: 'الأحساء — مشروع إنشائي متكامل'
    },
    {
      id: 8,
      title: 'رفع مساحي وتخطيط المحاور الإنشائية ميدانياً',
      category: 'contracting',
      categoryLabel: 'المقاولات والإنشاءات',
      image: '/last-projects/Sunlit Construction Slab with Red Layout Lines.webp',
      imageAlt: 'تخطيط المحاور والخطوط الإنشائية بدقة ميدانياً',
      badge: 'إشراف ومساحة',
      location: 'المبرز — حي النزهة'
    }
  ];

  // 9. Engineering & Quality Commitments
  readonly qualityCommitments: QualityCommitment[] = [
    {
      id: 'sbc-compliance',
      number: '01',
      icon: 'fa-shield-halved',
      theme: 'blue',
      badge: 'معيار إلزامي',
      title: 'مطابقة تامة لاشتراطات كود البناء السعودي',
      text: 'تنفيذ شامل لكافة أعمال التسليح، الصب، والعزل وفق اشتراطات الكود السعودي لضمان السلامة الإنشائية ومقاومة الأحمال.',
      featurePill: 'التزام كامل باشتراطات ومخططات كود البناء'
    },
    {
      id: 'field-testing',
      number: '02',
      icon: 'fa-vial-circle-check',
      theme: 'emerald',
      badge: 'ضبط الجودة',
      title: 'فحوصات وضبط جودة ميدانية دورية',
      text: 'فحص هبوط الخرسانة، قياس درجات حرارة الصب، واختبارات الضغط قبل كل مرحلة.',
      featurePill: 'فحص مائي ومخبري موثق بالتقارير'
    },
    {
      id: 'official-contracts',
      number: '03',
      icon: 'fa-file-shield',
      theme: 'amber',
      badge: 'حماية وضمان',
      title: 'عقود واضحة وضمانات موثقة',
      text: 'عقود واضحة البنود، جداول كميات مفصلة، ووثائق ضمان على أعمال العزل والمسابح والإنشاء.',
      featurePill: 'ضمانات شاملة وجداول كميات دقيقة'
    },
    {
      id: 'integrated-solutions',
      number: '04',
      icon: 'fa-network-wired',
      theme: 'terracotta',
      badge: 'إشراف موحد',
      title: 'خدمات متكاملة تحت سقف واحد',
      text: 'تنسيق متناغم بين المقاولات العامة والمسابح والعوازل يجنب العميل تشتت المقاولين ويضمن ترابط الأعمال.',
      featurePill: 'إدارة متكاملة تمنع تعارض الأعمال'
    }
  ];

  // Component Methods
  setComparisonTab(tab: 'overflow' | 'skimmer' | 'infinity'): void {
    this.activeComparisonTab = tab;
  }

  toggleFaq(index: number): void {
    this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
  }

  setCategory(category: 'all' | 'pools' | 'insulation' | 'contracting'): void {
    this.activeCategory = category;
  }

  get filteredGallery(): GalleryItem[] {
    if (this.activeCategory === 'all') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === this.activeCategory);
  }

  openModal(item: GalleryItem): void {
    this.activeModalImage = item;
  }

  closeModal(): void {
    this.activeModalImage = null;
  }

  ngOnInit(): void {
    // 1. Dynamic SEO Metadata Update
    this.seoService.updateTags({
      title: 'خدمات المسابح والعوازل والمقاولات — شركة الراشد | الأحساء',
      description: 'دليلك الشامل لبناء وتجهيز المسابح في الأحساء والمبرز: مسابح أوفرفلو، سكيمر، وإنفينيتي مع مقارنة شاملة ومراحل التنفيذ ومعدات الفلترة وضمان 10 سنوات.',
      keywords: 'مسابح الأحساء, شركة مسابح المبرز, بناء مسابح السعودية, مسابح أوفرفلو, مسابح سكيمر, مسابح إنفينيتي, تكلفة بناء مسبح, فلاتر ومضخات مسابح, عزل مسابح, شركة الراشد للمسابح',
      url: 'https://alrashid-sa.com/services'
    });

    // 2. Structured Data (Schema.org) for Pools & Construction
    this.seoService.setStructuredData({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HomeAndConstructionBusiness',
          '@id': 'https://alrashid-sa.com/#organization',
          name: this.company.nameAr,
          alternateName: this.company.shortNameAr,
          url: 'https://alrashid-sa.com/',
          logo: 'https://alrashid-sa.com/ALRASHID-Logo.png',
          telephone: this.company.phoneInternational,
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: this.company.location.district,
            addressLocality: this.company.location.city,
            addressRegion: 'المنطقة الشرقية',
            addressCountry: 'SA'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '25.4166',
            longitude: '49.5484'
          }
        },
        {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'Service',
              position: 1,
              name: 'تصميم وبناء وتجهيز المسابح',
              provider: { '@id': 'https://alrashid-sa.com/#organization' },
              description: 'تصميم وبناء متكامل لمسابح الأوفرفلو والسكيمر والإنفينيتي مع توريد الفلاتر والمضخات ومعدات التدفئة والشلالات المائية.',
              areaServed: 'المملكة العربية السعودية، المنطقة الشرقية، الأحساء'
            },
            {
              '@type': 'Service',
              position: 2,
              name: 'أعمال العوازل المائية والحرارية',
              provider: { '@id': 'https://alrashid-sa.com/#organization' },
              description: 'حماية القواعد والأساسات والمسابح والخزانات والأسطح بأحدث تقنيات العزل المائي والحراري وفق كود البناء السعودي.',
              areaServed: 'المملكة العربية السعودية، المنطقة الشرقية، الأحساء'
            },
            {
              '@type': 'Service',
              position: 3,
              name: 'أعمال المقاولات العامة والإنشاءات والتشطيب',
              provider: { '@id': 'https://alrashid-sa.com/#organization' },
              description: 'تنفيذ شامل لأعمال العظم والهياكل الخرسانية والسباكة والكهرباء والتشطيبات وفق اشتراطات كود البناء السعودي.',
              areaServed: 'المملكة العربية السعودية، المنطقة الشرقية، الأحساء'
            }
          ]
        }
      ]
    });
  }
}
