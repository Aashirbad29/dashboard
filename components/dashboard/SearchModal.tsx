"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

type SearchResult = {
  id: string;
  icon: string;
  title: string;
  variant?: "primary" | "secondary";
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  results?: SearchResult[];
  resultsCountText?: string;
  title?: string;
  dialogTitle?: string;
};

const DEFAULT_RESULTS: SearchResult[] = [
  { id: "visitors", icon: "mdi:web", title: "Visitors", variant: "primary" },
  {
    id: "doc",
    icon: "mdi:file-document-outline",
    title: "How can you utilize visitors to empower your business.",
    variant: "secondary",
  },
];

export default function SearchModal({
  open,
  onOpenChange,
  results = DEFAULT_RESULTS,
  resultsCountText = "2 results",
  title = "Search Results",
  dialogTitle = "Search",
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={[
          "w-[95vw] max-w-190 sm:max-w-215 lg:max-w-200",
          "fixed left-1/2 top-16 -translate-x-1/2 translate-y-0",
          "p-0 border-0 bg-transparent shadow-none sm:rounded-2xl",
        ].join(" ")}
      >
        <VisuallyHidden>
          <DialogTitle>{dialogTitle}</DialogTitle>
        </VisuallyHidden>

        <div className="rounded-2xl border bg-white px-4 py-4 shadow-sm">
          <div className="relative pr-10">
            <Input
              autoFocus
              placeholder="Search, or ask a question....."
              className="h-10 bg-neutral-50 border-neutral-200 pr-36 rounded-xl"
            />
            
            <Button className="absolute right-12 top-2 h-6 rounded-full bg-brand hover:bg-brand-hover px-3 text-xs text-brand-foreground">
              <Icon icon="mdi:sparkles" className="mr-1 text-[14px]" />
              Ask AI
            </Button>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-neutral-800">{title}</h2>
            <span className="text-xs text-neutral-500">{resultsCountText}</span>
          </div>

          <div className="mt-3 space-y-2">
            {results.map((r) => (
              <button
                key={r.id}
                className={[
                  "w-full text-left flex items-center gap-2 rounded-xl px-3 py-3",
                  r.variant === "primary" ? "bg-neutral-50" : "hover:bg-neutral-50",
                ].join(" ")}
              >
                <Icon icon={r.icon} className="text-[18px] text-neutral-600" />
                <span
                  className={[
                    "text-sm",
                    r.variant === "primary"
                      ? "font-medium text-neutral-900"
                      : "text-neutral-800",
                  ].join(" ")}
                >
                  {r.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
