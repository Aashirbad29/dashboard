"use client";

import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import SideBarItem from "./SidebarItem";
import { NAV_GROUPS, BOTTOM_ITEMS } from "./NavConfig";

type SideBarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export default function Sidebar({ collapsed, onToggle }: SideBarProps) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <aside
      className={[
        "border-r bg-white",
        "h-[calc(100vh-56px)] sticky top-14",
        collapsed ? "w-17" : "w-62",
        "transition-all duration-200",
      ].join(" ")}
    >
      <div className={collapsed ? "flex h-full flex-col px-2 py-2.5" : "flex h-full flex-col px-2.5 py-2.5"}>
        {/* collapse button */}
        <div className={collapsed ? "flex justify-center pb-2" : "flex justify-end pb-2"}>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className={[
              "h-8 w-8 rounded-lg",
              "bg-neutral-100 border border-neutral-200 shadow-sm",
              "hover:bg-neutral-200 text-neutral-800",
            ].join(" ")}
          >
            <Icon icon={collapsed ? "mdi:chevron-right" : "mdi:chevron-left"} className="text-[18px]" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar">
          <div className="min-h-full flex flex-col">
            {/* groups */}
            {NAV_GROUPS.map((group, idx) => (
              <div key={idx}>
                <div className={collapsed ? "space-y-1.5" : "space-y-1"}>
                  {group.items.map((item) => (
                    <SideBarItem
                      key={item.id}
                      collapsed={collapsed}
                      active={isActive(item.href)}
                      icon={<Icon icon={item.icon} />}
                      label={item.label}
                      href={item.href}
                    />
                  ))}
                </div>

                {/* separators between groups */}
                {idx !== NAV_GROUPS.length - 1 && (
                  <div className="my-3">
                    <Separator className="-mx-2.5 bg-neutral-200/80" />
                  </div>
                )}
              </div>
            ))}

            <div className="my-6">
              <Separator className="-mx-2.5 bg-neutral-200/80" />
            </div>

            {/* bottom */}
            <div className="mt-auto">
              <div className={collapsed ? "h-16" : "h-28"} />

              <div className="mb-3">
                <Separator className="-mx-2.5 bg-neutral-200/80" />
              </div>

              <div className={collapsed ? "space-y-1.5" : "space-y-1"}>
                {BOTTOM_ITEMS.map((item) => (
                  <SideBarItem
                    key={item.id}
                    collapsed={collapsed}
                    active={isActive(item.href)}
                    icon={<Icon icon={item.icon} />}
                    label={item.label}
                    href={item.href}
                  />
                ))}
              </div>

              <div className="mt-3 pb-2">
                {collapsed ? (
                  <Button className="h-10 w-full rounded-lg bg-brand hover:bg-brand-hover px-0 text-brand-foreground">
                    <Icon icon="mdi:crown-outline" className="text-[18px]" />
                  </Button>
                ) : (
                  <Button className="h-10 w-full rounded-lg bg-brand hover:bg-brand-hover text-[13px] text-brand-foreground">
                    <Icon icon="mdi:crown-outline" className="mr-2 text-[16px]" />
                    Upgrade Current Plan
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
