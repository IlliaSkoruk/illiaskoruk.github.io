/**
 * Центральний список навігаційних посилань.
 * Використовується Header.astro та Footer.astro.
 *
 * ЗАСТАРІЛІ маршрути (не виводити у навігації, але НЕ видаляти файли):
 *   /history/
 *   /technology/
 *   /glossary/
 *   /safety-and-law/
 * Будуть перенаправлені або видалені у наступних кроках.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Зброя', href: '/encyclopedia/' },
  { label: 'Аксесуари та оптика', href: '/accessories/' },
  { label: 'Платформи та сумісність', href: '/platforms/' },
  { label: 'Армії та конфлікти', href: '/military/' },
  { label: 'Тир і безпека', href: '/safety/' },
];
