import Link from 'next/link';

import navItems from '../../data/navItems.json';

export default function NavMenuItems() {
  return (
    <>
      {navItems.map(({ label, href }) => (
        <li key={label}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </>
  );
}
