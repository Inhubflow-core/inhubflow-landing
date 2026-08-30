export const navItems = [
  {
    type: 'link',
    href: '#features',
    label: 'Funcionalidades',
  },
  {
    type: 'link',
    href: '#benefits',
    label: 'Ventajas',
  },
  {
    type: 'link',
    href: '#pricing',
    label: 'Precios',
  },
  {
    type: 'link',
    href: '#faq',
    label: 'FAQ',
  },
  {
    type: 'link',
    href: 'https://b2b.inhubflow.online',
    label: 'Acceso Clientes ➔',
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
