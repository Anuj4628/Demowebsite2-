/**
 * OM BOTTLES MFG COMPANY — Centralized Navigation Data
 * Configured for easy extension across 30+ pages
 */

export const navigationData = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    exact: true
  },
  {
    id: 'about',
    label: 'About Us',
    href: '/pages/about/',
    exact: false
  },
  {
    id: 'products',
    label: 'Products',
    href: '/pages/products/',
    exact: false,
    hasDropdown: true,
    dropdownItems: [
      {
        id: 'aluminium-bottles',
        label: 'Aluminium Bottles',
        href: '/pages/products/#aluminium-bottles',
        description: 'Premium seamless manufacturing'
      },
      {
        id: 'dome-lights',
        label: 'Dome Lights',
        href: '/pages/products/#dome-lights',
        description: 'High-grade industrial illumination'
      }
    ]
  },
  {
    id: 'certificates',
    label: 'Certificates',
    href: '/pages/certificates/',
    exact: false
  },
  {
    id: 'contact',
    label: 'Contact Us',
    href: '/pages/contact/',
    exact: false
  },
  {
    id: 'get-quote',
    label: 'Get Quote',
    href: '/pages/get-quote/',
    isCta: true,
    exact: false
  }
];

export const companyInfo = {
  name: 'OM BOTTLES MFG COMPANY',
  logoPath: 'assets/images/logo/om-bottles-logo.png',
  logoAlt: 'OM BOTTLES MFG COMPANY Logo'
};

