export const navItems = [
  {
    type: 'link',
    href: '#features',
    label: 'Funcionalidades',
  },
  {
    type: 'link',
    href: '#b2b-outreach',
    label: 'Outreach B2B',
  },
  {
    type: 'link',
    href: '#b2c-omnichannel',
    label: 'Omnicanal B2C',
  },
  {
    type: 'link',
    href: '#pricing',
    label: 'Precios',
  },
  {
    type: 'dropdown',
    label: 'Iniciar Sesión',
    items: [
      { href: 'https://b2b.inhubflow.online', label: '🚀 InHub Outreach (B2B)' },
      { href: 'https://b2c.inhubflow.online', label: '💬 InHub Omnicanal (B2C)' },
    ],
  },
] satisfies NavItem[];

type NavItem = Record<string, string | unknown> &
  (
    | {
        type: 'link';
        href: string;
      }
    | {
        type: 'dropdown';
      }
  );
