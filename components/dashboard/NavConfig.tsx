export type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: string; 
};

export const NAV_GROUPS: { items: NavItem[] }[] = [
  {
    items: [
      { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: "mdi:view-dashboard-outline" },
      { id: "inbox", label: "Inbox", href: "/inbox", icon: "mdi:inbox-outline" },
      { id: "tickets", label: "Tickets", href: "/tickets", icon: "mdi:ticket-outline" },
      { id: "visitors", label: "Visitors", href: "/visitors", icon: "mdi:account-group-outline" },
    ],
  },
  {
    items: [
      { id: "ai", label: "AI Assistants", href: "/ai-assistants", icon: "mdi:star-four-points-outline" },
      { id: "triggers", label: "Triggers", href: "/triggers", icon: "mdi:flash-outline" },
      { id: "clients", label: "Clients", href: "/clients", icon: "mdi:account-multiple-outline" },
      { id: "campaigns", label: "Campaigns", href: "/campaigns", icon: "mdi:send-outline" },
    ],
  },
  {
    items: [
      { id: "support", label: "Support Library", href: "/support-library", icon: "mdi:book-open-outline" },
      { id: "plugins", label: "Plugins", href: "/plugins", icon: "mdi:puzzle-outline" },
    ],
  },
];

export const BOTTOM_ITEMS: NavItem[] = [
{ id: "darkmode", label: "Dark Mode", href: "/dark-mode", icon: "mdi:moon-waning-crescent" },
  { id: "settings", label: "Settings", href: "/settings", icon: "mdi:cog-outline" },
  { id: "help", label: "Help", href: "/help", icon: "mdi:help-circle-outline" },
];
