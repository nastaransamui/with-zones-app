// @material-ui/icons
import AppsIcon from '@mui/icons-material/Apps';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DateRangeIcon from '@mui/icons-material/DateRange';
import GridOnIcon from '@mui/icons-material/GridOn';
import ImageIcon from '@mui/icons-material/Image';
import PlaceIcon from '@mui/icons-material/Place';
import TimelineIcon from '@mui/icons-material/Timeline';
import WidgetsIcon from '@mui/icons-material/Widgets';

var dashRoutes = [
  {
    path: '/dashboard',
    'name_en-US': 'Dashboard',
    name_fa: 'داشبورد',
    icon: DashboardIcon,

    layout: '/admin',
  },
  {
    collapse: true,
    'name_en-US': 'Pages',
    name_fa: 'صفحات',
    icon: ImageIcon,
    state: 'pageCollapse',
    views: [
      {
        path: '/dashboard/pricing-page',
        'name_en-US': 'Pricing Page',
        name_fa: 'صفحه قیمت',
        'mini_en-US': 'PP',
        mini_fa: 'صق',

        layout: '/admin',
      },
      // {
      //   path: '/rtl-support-page',
      //   'name_en-US': 'RTL Support',
      //   name_fa: 'صودعم رتل',
      //   'mini_en-US': 'RS',
      //   mini_fa: 'صو',

      //   layout: '/rtl',
      // },
      // {
      //   path: '/timeline-page',
      //   'name_en-US': 'Timeline Page',
      //   name_fa: 'تيالجدول الزمني',
      //   'mini_en-US': 'T',
      //   mini_fa: 'تي',

      //   layout: '/admin',
      // },
      // {
      //   path: '/login-page',
      //   'name_en-US': 'Login Page',
      //   name_fa: 'هعذاتسجيل الدخول',
      //   'mini_en-US': 'L',
      //   mini_fa: 'هعذا',

      //   layout: '/auth',
      // },
      // {
      //   path: '/register-page',
      //   'name_en-US': 'Register Page',
      //   name_fa: 'تسجيل',
      //   'mini_en-US': 'R',
      //   mini_fa: 'صع',

      //   layout: '/auth',
      // },
      // {
      //   path: '/lock-screen-page',
      //   'name_en-US': 'Lock Screen Page',
      //   name_fa: 'اقفل الشاشة',
      //   'mini_en-US': 'LS',
      //   mini_fa: 'هذاع',

      //   layout: '/auth',
      // },
      // {
      //   path: '/user-page',
      //   'name_en-US': 'User Profile',
      //   name_fa: 'ملف تعريفي للمستخدم',
      //   'mini_en-US': 'UP',
      //   mini_fa: 'شع',

      //   layout: '/admin',
      // },
      // {
      //   path: '/error-page',
      //   'name_en-US': 'Error Page',
      //   name_fa: 'صفحة الخطأ',
      //   'mini_en-US': 'E',
      //   mini_fa: 'البريد',

      //   layout: '/auth',
      // },
    ],
  },
  {
    collapse: true,
    'name_en-US': 'Components',
    name_fa: 'اجزاء',
    icon: AppsIcon,
    state: 'componentsCollapse',
    views: [
      {
        collapse: true,
        'name_en-US': 'Multi Level Collapse',
        name_fa: 'چند سطحی',
        'mini_en-US': 'MC',
        mini_fa: 'ر',
        state: 'multiCollapse',
        views: [
          {
            path: '/dashboard/buttons',
            'name_en-US': 'Buttons',
            name_fa: 'دکمه ها',
            'mini_en-US': 'B',
            mini_fa: 'ب',

            layout: '/admin',
          },
        ],
      },
      // {
      //   path: '/buttons',
      //   'name_en-US': 'Buttons',
      //   name_fa: 'وصفت',
      //   'mini_en-US': 'B',
      //   mini_fa: 'ب',

      //   layout: '/admin',
      // },
      // {
      //   path: '/grid-system',
      //   'name_en-US': 'Grid System',
      //   name_fa: 'نظام الشبكة',
      //   'mini_en-US': 'GS',
      //   mini_fa: 'زو',

      //   layout: '/admin',
      // },
      // {
      //   path: '/panels',
      //   'name_en-US': 'Panels',
      //   name_fa: 'لوحات',
      //   'mini_en-US': 'P',
      //   mini_fa: 'ع',

      //   layout: '/admin',
      // },
      // {
      //   path: '/sweet-alert',
      //   'name_en-US': 'Sweet Alert',
      //   name_fa: 'الحلو تنبيه',
      //   'mini_en-US': 'SA',
      //   mini_fa: 'ومن',

      //   layout: '/admin',
      // },
      // {
      //   path: '/notifications',
      //   'name_en-US': 'Notifications',
      //   name_fa: 'إخطارات',
      //   'mini_en-US': 'N',
      //   mini_fa: 'ن',

      //   layout: '/admin',
      // },
      // {
      //   path: '/icons',
      //   'name_en-US': 'Icons',
      //   name_fa: 'الرموز',
      //   'mini_en-US': 'I',
      //   mini_fa: 'و',

      //   layout: '/admin',
      // },
      // {
      //   path: '/typography',
      //   'name_en-US': 'Typography',
      //   name_fa: 'طباعة',
      //   'mini_en-US': 'T',
      //   mini_fa: 'ر',

      //   layout: '/admin',
      // },
    ],
  },
  {
    collapse: true,
    'name_en-US': 'Forms',
    name_fa: 'فرم ها',
    icon: 'content_paste',
    state: 'formsCollapse',
    views: [
      {
        path: '/dashboard/regular-forms',
        'name_en-US': 'Regular Forms',
        name_fa: 'فرمهای عادی',
        'mini_en-US': 'RF',
        mini_fa: 'فع',

        layout: '/admin',
      },
      // {
      //   path: '/extended-forms',
      //   'name_en-US': 'Extended Forms',
      //   name_fa: 'نماذج موسعة',
      //   'mini_en-US': 'EF',
      //   mini_fa: 'هوو',

      //   layout: '/admin',
      // },
      // {
      //   path: '/validation-forms',
      //   'name_en-US': 'Validation Forms',
      //   name_fa: 'نماذج التحقق من الصحة',
      //   'mini_en-US': 'VF',
      //   mini_fa: 'تو',

      //   layout: '/admin',
      // },
      // {
      //   path: '/wizard',
      //   'name_en-US': 'Wizard',
      //   name_fa: 'ساحر',
      //   'mini_en-US': 'W',
      //   mini_fa: 'ث',

      //   layout: '/admin',
      // },
    ],
  },
  // {
  //   collapse: true,
  //   'name_en-US': 'Tables',
  //   name_fa: 'الجداول',
  //   icon: GridOnIcon,
  //   state: 'tablesCollapse',
  //   views: [
  //     {
  //       path: '/regular-tables',
  //       'name_en-US': 'Regular Tables',
  //       name_fa: 'طاولات عادية',
  //       'mini_en-US': 'RT',
  //       "mini_fa": 'صر',

  //       layout: '/admin',
  //     },
  //     {
  //       path: '/extended-tables',
  //       'name_en-US': 'Extended Tables',
  //       name_fa: 'جداول ممتدة',
  //       'mini_en-US': 'ET',
  //       "mini_fa": 'هور',

  //       layout: '/admin',
  //     },
  //     {
  //       path: '/react-tables',
  //       'name_en-US': 'React Tables',
  //       name_fa: 'رد فعل الطاولة',
  //       'mini_en-US': 'RT',
  //       "mini_fa": 'در',

  //       layout: '/admin',
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   'name_en-US': 'Maps',
  //   name_fa: 'خرائط',
  //   icon: PlaceIcon,
  //   state: 'mapsCollapse',
  //   views: [
  //     {
  //       path: '/google-maps',
  //       'name_en-US': 'Google Maps',
  //       name_fa: 'خرائط جوجل',
  //       'mini_en-US': 'GM',
  //       "mini_fa": 'زم',

  //       layout: '/admin',
  //     },
  //     {
  //       path: '/full-screen-maps',
  //       'name_en-US': 'Full Screen Map',
  //       name_fa: 'خريطة كاملة الشاشة',
  //       'mini_en-US': 'FSM',
  //       "mini_fa": 'ووم',

  //       layout: '/admin',
  //     },
  //     {
  //       path: '/vector-maps',
  //       'name_en-US': 'Vector Map',
  //       name_fa: 'خريطة المتجه',
  //       'mini_en-US': 'VM',
  //       "mini_fa": 'تم',

  //       layout: '/admin',
  //     },
  //   ],
  // },
  // {
  //   path: '/widgets',
  //   'name_en-US': 'Widgets',
  //   name_fa: 'الحاجيات',
  //   icon: WidgetsIcon,

  //   layout: '/admin',
  // },
  // {
  //   path: '/charts',
  //   'name_en-US': 'Charts',
  //   name_fa: 'الرسوم البيانية',
  //   icon: TimelineIcon,

  //   layout: '/admin',
  // },
  // {
  //   path: '/calendar',
  //   'name_en-US': 'Calendar',
  //   name_fa: 'التقويم',
  //   icon: DateRangeIcon,

  //   layout: '/admin',
  // },
];
export default dashRoutes;
