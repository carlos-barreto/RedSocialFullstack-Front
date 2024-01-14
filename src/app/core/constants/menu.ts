import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Publicaciones ',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/view-grid.svg',
          label: 'Muro',
          route: '/wall/home',
          children: [
            { label: 'home', route: '/home/publications' },
          ],
        }
      ],
    },
    {
      group: 'Usuarios',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Usuarios',
          route: '/users',
        },
      ],
    },
    {
      group: 'Configuración',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Configuración',
          route: '/settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        }
      ],
    },
  ];
}
