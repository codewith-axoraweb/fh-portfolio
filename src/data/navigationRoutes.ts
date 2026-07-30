export interface NavigationRoute {
  title: string;
  href: string;
}

export const routes: NavigationRoute[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
];
