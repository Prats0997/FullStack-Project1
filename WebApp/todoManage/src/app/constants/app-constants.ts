export const NAV_MENU = {
  MENU_ITEMS: [
    {
      menuID: 'menu1',
      parentMenu: 'My Dashboard',
      subMenus: [
        {
          id: 1,
          name: 'Jobs Available',
          status: false,
          icon: 'home',
          altValue: 'Jobs Available',
          routerUrl: '/manage-client-presentation',
          parentMenu: 'My Dashboard',
        },
        {
          id: 2,
          name: 'Jobs Applied',
          status: false,
          icon: 'home',
          altValue: 'Jobs Applied',
          routerUrl: '/app/landing-page',
          parentMenu: 'My Dashboard',
        },
        {
          id: 3,
          name: 'Jobs Selected',
          status: false,
          icon: 'home',
          altValue: 'Jobs Selected',
          routerUrl: '/my-assets',
          parentMenu: 'My Dashboard',
        },
      ],
    },
  ],
};
