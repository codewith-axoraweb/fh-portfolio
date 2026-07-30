"use client";

import { Fragment } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import { User, FolderOpen, Briefcase, Mail } from "lucide-react";

import ThemeSwitch from "@/components/utility/theme-switch";
import { classNames } from "@/utility/classNames";

interface RouteItem {
  id: string;
  title: string;
  href: string;
  icon?: ReactNode;
}

export interface MobileMenuProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({ openMenu, setOpenMenu }: MobileMenuProps) {
  const pathname = usePathname();
  const router = useRouter();

  const routes: RouteItem[] = [
    {
      id: "about",
      title: "About",
      href: "#about",
      icon: <User size={18} />,
    },
    {
      id: "skills",
      title: "Skills",
      href: "#skills",
      icon: <Briefcase size={18} />,
    },
    {
      id: "experience",
      title: "Experience",
      href: "#experience",
      icon: <Briefcase size={18} />,
    },
    {
      id: "projects",
      title: "Projects",
      href: "#projects",
      icon: <FolderOpen size={18} />,
    },
    {
      id: "contact",
      title: "Contact",
      href: "#contact",
      icon: <Mail size={18} />,
    },
  ];

  const handleClick = (href: string) => {
    setOpenMenu(false);

    if (href.startsWith("#")) {
      const id = href.slice(1);
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <Transition show={openMenu} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setOpenMenu(false)}
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Panel className="flex min-h-screen w-full flex-col items-center justify-center bg-background px-6">
              <div className="flex flex-col items-center gap-8">
                {routes.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleClick(link.href)}
                    className={classNames(
                      "flex items-center gap-3 text-2xl font-semibold transition-colors",
                      pathname === link.href
                        ? "text-blue-600"
                        : "text-foreground hover:text-blue-600",
                    )}
                  >
                    {link.icon}
                    {link.title}
                  </button>
                ))}

                <ThemeSwitch />
              </div>

              <div className="absolute bottom-8 text-sm text-muted-foreground">
                © 2026 Faqeer Hussain
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
