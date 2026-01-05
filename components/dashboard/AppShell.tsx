"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./SideBar";
import Topbar from "./TopBar";
import PageTemplate from "./PageTemplate";
import { NAV_GROUPS, BOTTOM_ITEMS } from "./NavConfig";

type Meta = { title: string; subtitle: string };

const DEFAULT_META: Meta = {
  title: "Page",
  subtitle: "Manage your content",
};


const SUBTITLE_BY_ID: Record<string, string> = {
  dashboard: "Overview of your workspace",
  inbox: "Manage messages and conversations",
  tickets: "Track and resolve support requests",
  visitors: "See who’s visiting and engaging",
  ai: "Configure your AI assistants",
  triggers: "Automate actions with triggers",
  clients: "Manage client accounts and access",
  campaigns: "Create and monitor campaigns",
  support: "Docs, FAQs and resources",
  plugins: "Manage integrations and plugins",
  darkmode: "Appearance preferences",
  settings: "System and account settings",
  help: "Get help and support",
};

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const meta = useMemo<Meta>(() => {
    const allItems = [
      ...NAV_GROUPS.flatMap((g) => g.items),
      ...BOTTOM_ITEMS,
    ];

    const match = allItems.find((i) => i.href === pathname);

    if (!match) return DEFAULT_META;

    return {
      title: match.label,
      subtitle: SUBTITLE_BY_ID[match.id] ?? "Manage your content",
    };
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Topbar />

      <div className="flex">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((p) => !p)} />

        <main className="flex-1 px-6 py-6">
          <PageTemplate title={meta.title} subtitle={meta.subtitle}>
            {children}
          </PageTemplate>
        </main>
      </div>
    </div>
  );
}
