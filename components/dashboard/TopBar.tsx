"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Icon } from "@iconify/react";
import SearchModal from "./SearchModal";

export default function Topbar() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-20 border-b bg-white">
        <div className="flex h-14 items-center gap-3 px-4">
          {/* Left: Workspace pill */}
          <Button
            variant="ghost"
            className="h-9 px-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-sm font-medium"
          >
            <span className="inline">Brahmabyte Workspace</span>
            <Icon
              icon="mdi:chevron-down"
              className="ml-2 text-[18px] opacity-70"
            />
          </Button>

          {/* Center Search (small like design) */}
          <div className="flex flex-1 items-center justify-center">
            <div className="relative w-115 max-w-115">
              <Icon
                icon="mdi:magnify"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[18px] text-neutral-400"
              />

              {/* This input just opens modal (readOnly) */}
              <Input
                readOnly
                onClick={() => setOpenSearch(true)}
                onFocus={() => setOpenSearch(true)}
                placeholder="Search"
                className="h-9 rounded-full pl-10 pr-30 bg-neutral-50 border-neutral-200 focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer"
              />

              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <Button
                  onClick={() => setOpenSearch(true)}
                  className="h-7 rounded-full bg-brand hover:bg-brand-hover px-3 text-xs text-brand-foreground shadow-sm"
                >
                  <Icon icon="mdi:sparkles" className="mr-1 text-[14px]" />
                  Ask AI
                </Button>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              className="h-8 rounded-full bg-neutral-100 border border-neutral-200 hover:bg-neutral-200"
            >
              Quick access
            </Button>

            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <Icon icon="mdi:layers-outline" className="text-[20px]" />
            </Button>

            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <Icon icon="mdi:bell-outline" className="text-[20px]" />
            </Button>

            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Reusable Modal */}
      <SearchModal open={openSearch} onOpenChange={setOpenSearch} />
    </>
  );
}
