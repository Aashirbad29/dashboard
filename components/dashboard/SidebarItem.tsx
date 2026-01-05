"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  collapsed: boolean;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  rightSlot?: React.ReactNode;
  href: string;
};

export default function SideBarItem({
  collapsed,
  icon,
  label,
  active,
  rightSlot,
  href,
}: Props) {
  const base = cn(
    "w-full relative",
    "transition-all duration-200 ease-out",
    "hover:-translate-y-[1px] hover:scale-[1.01]",
    active ? "" : "hover:bg-neutral-100",
    active ? "bg-brand text-brand-foreground" : "text-neutral-900"
  );

  const cls = cn(
    base,
    collapsed
      ? "flex h-9 items-center justify-center rounded-lg"
      : "flex items-center gap-2.5 rounded-lg px-3.5 py-2"
  );

  return (
    <Link href={href} className={cls} aria-label={label} title={label}>
      <span
        className={cn(
          collapsed ? "text-[18px]" : "text-[16px]",
          "transition-transform duration-200",
          active ? "text-brand-foreground" : "text-neutral-900",
          !active && "group-hover:translate-x-px"
        )}
      >
        {icon}
      </span>

      {!collapsed && (
        <>
          <span
            className={cn(
              "flex-1 text-[14px] font-medium",
              "transition-all duration-200",
              !active && "group-hover:translate-x-px"
            )}
          >
            {label}
          </span>

          {rightSlot ?? null}
        </>
      )}
    </Link>
  );
}
