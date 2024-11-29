"use client";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { categories, tools, univesell } from "@/lib/navigations";
import CategoryLinkCard from "./category-link-card";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export function NavigationList() {
  return (
    <NavigationMenu>
      <div className="">
        <NavigationMenuList className="w-full">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Explore More</NavigationMenuTrigger>
            <NavigationMenuContent className="w-full min-w-full ">
              <ul className="grid gap-3 p-4    w-full  lg:grid-cols-[220px_auto]">
                <li className="row-span-3 space-y-1">
                  <div className="w-full pb-6 pt-2  border-b border-b-gray-300">
                    <h3 className="text-[14px]  text-[#333] font-sans ">
                      On univesell
                    </h3>
                  </div>

                  <ul className="pt-2 space-y-3">
                    {univesell.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link href={item.href} className="link" passHref>
                            <span className="">{item.icon}</span>
                            <span>{item.title}</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="row-span-3 space-y-1">
                  <div className="w-full pb-6 pt-2  border-b border-b-gray-300">
                    <h3 className="text-[14px]  text-[#333] font-sans ">
                      Market Place
                    </h3>
                  </div>

                  <ul className="pt-2 gap-2  grid grid-cols-12">
                    {categories.slice(0, 6).map((item) => (
                      <li
                        key={item.name}
                        className=" col-span-12 sm:col-span-6 md:col-span-4"
                      >
                        <NavigationMenuLink asChild>
                          <Link href={item.href} passHref>
                            <CategoryLinkCard
                              image={item.image}
                              name={item.name}
                            />
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}

                    <div className="col-span-12 flex py-6 justify-center items-center">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/marketplace" className=" " passHref>
                          View All
                          <ArrowRight />
                        </Link>
                      </Button>
                    </div>
                  </ul>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Planning Tool</NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-full">
              <ul className="grid w-[400px] gap-3 p-4 pr-0 md:w-[500px] md:grid-cols-2 lg:w-full lg:grid-cols-[auto_250px] ">
                <li className=" w-full  space-y-1">
                  <div className="w-full pb-6 pt-2  border-b border-b-gray-300">
                    <h3 className="text-[14px]  text-[#333] font-sans ">
                      <Link
                        href={"/tools/all"}
                        className="flex no-underline gap-2 items-center "
                      >
                        Univesell tool <ArrowRight size={15} />
                      </Link>
                    </h3>
                  </div>

                  <ul className=" grid md:grid-cols-2 pt-2 gap-3">
                    {tools.map((component) => (
                      <ListItem
                        key={component.name}
                        title={component.name}
                        href={component.href}
                        icon={component.icon}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </li>

                <li className=" relative w-full h-full  ">
                  <div className="w-full pb-6 pt-2  border-b border-b-gray-300">
                    <h3 className="text-[14px]  text-[#333] font-sans ">
                      <Link
                        href={"/tools/all"}
                        className="flex no-underline gap-2 items-center "
                      >
                        Access All Tools <ArrowRight size={15} />
                      </Link>
                    </h3>
                  </div>

                  <div className=" relative w-full h-full">
                    <Image
                      src="/tool.jpg"
                      alt="tools"
                      layout="fill"
                      objectFit="cover"
                      className=" w-full h-full"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-40 pt-8 ">
                      <h3 className=" text-white text-lg px-4 ">
                      Join univesell Pro now
                      </h3>
                      <p className=" text-muted text-sm px-4 pb-4">
                        Get access to more tools and features to help you plan
                        your event
                      </p>
                      <div className="w-full px-4">
                      <Button className="w-full text-white" size="lg" variant="secondary" asChild>
                        <Link href="/pro" className=" " passHref>
                          Les Go Pro
                        </Link>
                      </Button>
                      </div>

                    </div>
                  </div>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/resources" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Resources
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pricings" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricings
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuIndicator />
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
  }
>(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block group/sub-link select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex gap-3">
            {icon && (
              <div className="flex-shrink-0 text-primary flex items-center group-hover/sub-link:text-secondary group-focus/sub-link:text-secondary text-2xl">
                {icon}
              </div>
            )}
            <div className=" block space-y-1">
              <div className="text-sm font-medium leading-none group-hover/sub-link:text-secondary group-focus/sub-link:text-secondary">
                {title}
              </div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
