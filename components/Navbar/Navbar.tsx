"use client";

import { forwardRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo2.svg";
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);


  const MobileNavItem = ({ title, items }: { title: string, items: { href: string, label: string }[] }) => (
    <Collapsible>
      <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-100 rounded-md transition-colors duration-200">
        {title}
        {openDropdowns.includes(title) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="pl-4">
          {items.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="block py-2 px-4 hover:bg-gray-100 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );

  const MobileNav = () => (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-md">
          <nav className="container mx-auto max-w-6xl py-4">
            <MobileNavItem 
              title="Instagram" 
              items={[
                { href: "/tools/instagram-bio-generator", label: "Instagram Bio Generator" },
                { href: "/tools/instagram-username-generator", label: "Instagram Username Generator" },
                { href: "/tools/instagram-name-generator", label: "Instagram Name Generator" },
                { href: "/tools/instagram-caption-generator", label: "Instagram Caption Generator" },
              ]} 
            />
            <MobileNavItem 
              title="Facebook" 
              items={[
                { href: "/tools/facebook-bio-generator", label: "Facebook Bio Generator" },
              ]} 
            />
            <MobileNavItem 
              title="TikTok" 
              items={[
                { href: "/tools/tiktok-bio-generator", label: "TikTok Bio Generator" },
                { href: "/tools/tiktok-caption-generator", label: "TikTok Caption Generator" },
              ]} 
            />
            <MobileNavItem 
              title="Twitter" 
              items={[
                { href: "/tools/twitter-bio-generator", label: "Twitter Bio Generator" },
                { href: "/tools/tweet-generator", label: "Tweet Generator" }
              ]} 
            />
            <MobileNavItem 
              title="Menu" 
              items={[
                { href: "https://socialmediatalky.com/blog/", label: "Blog" },
                { href: "https://socialmediatalky.com/contact/", label: "Contact Us" },
              ]} 
            />
          </nav>
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-white border-b border-gray-200 p-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        {/* Logo Section */}
        <Link href="https://socialmediatalky.com/">
          <Image
            src={logo || "/placeholder.svg"}
            alt="logo"
            width={160}
            height={150}
            className="transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Instagram</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {[
                      {
                        href: "/tools/instagram-bio-generator",
                        label: "Instagram Bio Generator",
                      },
                      {
                        href: "/tools/instagram-username-generator",
                        label: "Instagram Username Generator",
                      },
                      {
                        href: "/tools/instagram-name-generator",
                        label: "Instagram Name Generator",
                      },
                      {
                        href: "/tools/instagram-caption-generator",
                        label: "Instagram Caption Generator",
                      },
                    ].map((tool) => (
                      <ListItem
                        key={tool.href}
                        href={tool.href}
                        className="text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-md transition-colors duration-300"
                      >
                        {tool.label}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Facebook</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {[
                      {
                        href: "/tools/facebook-bio-generator",
                        label: "Facebook Bio Generator",
                      },
                    ].map((tool) => (
                      <ListItem
                        key={tool.href}
                        href={tool.href}
                        className="text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-md transition-colors duration-300"
                      >
                        {tool.label}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>TikTok</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {[
                      {
                        href: "/tools/tiktok-bio-generator",
                        label: "TikTok Bio Generator",
                      },
                      {
                        href: "/tools/tiktok-caption-generator",
                        label: "TikTok Caption Generator",
                      }
                    ].map((tool) => (
                      <ListItem
                        key={tool.href}
                        href={tool.href}
                        className="text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-md transition-colors duration-300"
                      >
                        {tool.label}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Twitter</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {[
                      {
                        href: "/tools/twitter-bio-generator",
                        label: "Twitter Bio Generator",
                      },
                      { href: "/tools/tweet-generator", label: "Tweet Generator" }
                    ].map((tool) => (
                      <ListItem
                        key={tool.href}
                        href={tool.href}
                        className="text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-md transition-colors duration-300"
                      >
                        {tool.label}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <ListItem
                      href="https://socialmediatalky.com/blog/"
                      title="Blog"
                    >
                      Explore our latest articles and insights.
                    </ListItem>
                    <ListItem
                      href="https://socialmediatalky.com/contact/"
                      title="Contact Us"
                    >
                      Get in touch with our team.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation Menu */}
        <MobileNav />
      </div>
    </nav>
  );
};

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;

