export interface NavLink {
  label: string;
  route: string;
  fragment?: string;
}

export const COMPANY_INFO = {
  nameAr: 'شركة الراشد للمسابح والعوازل والمقاولات العامة',
  shortNameAr: 'شركة الراشد',
  tagline: 'خبرة تُبنى عليها الثقة... وجودة تترجم إلى واقع',
  experienceYears: '13+',
  phone: '0509827772',
  phoneDisplay: '050 982 7772',
  phoneInternational: '+966509827772',
  whatsappUrl: 'https://wa.me/966509827772?text=' + encodeURIComponent('السلام عليكم ورحمة الله، أود الاستفسار عن خدمات شركة الراشد للمسابح والعوازل والمقاولات العامة.'),
  whatsappQuoteUrl: 'https://wa.me/966509827772?text=' + encodeURIComponent('السلام عليكم ورحمة الله، أود طلب عرض سعر لمشروعي لدى شركة الراشد للمسابح والعوازل والمقاولات العامة.'),
  location: {
    city: 'الأحساء',
    district: 'المبرز - حي النزهة',
    country: 'المملكة العربية السعودية',
    fullAddress: 'المملكة العربية السعودية، المنطقة الشرقية، الأحساء، المبرز، حي النزهة',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115160.89311026048!2d49.5484833!3d25.4166299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e379768600d8d01%3A0x6b77d6124578b871!2sAl%20Mubarraz!5e0!3m2!1sen!2ssa!4v1700000000000'
  },
  socialLinksHub: 'https://heylink.me/alrashidcomp/',
  buildingCodeCompliant: true,
  executionModes: ['بالمواد', 'بدون مواد']
};

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: 'الرئيسية', route: '/' },
  { label: 'خدماتنا', route: '/services' },
  { label: 'عن الشركة', route: '/about' },
  { label: 'تواصل معنا', route: '/contact' }
];

