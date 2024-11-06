import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Orgão promotor',
    icon: 'person-outline',
    link: '/pages/dashboard',
    home: true,
    children: [
      {
        'title': 'Listar'
      },
      {
        'title': 'Adicionar'
      }
    ]
  }
];
