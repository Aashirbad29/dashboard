import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

export default function Content() {
  return (
    <div className="mx-auto w-full max-w-245">
      <div className="rounded-2xl border bg-white px-4 py-4 shadow-sm">
        <div className="relative">
          <Input
            placeholder="Search, or ask a question....."
            className="h-10 bg-neutral-50 border-neutral-200 pr-28"
          />
          <Button className="absolute right-2 top-2 h-6 rounded-full bg-violet-600 px-3 text-xs hover:bg-violet-700">
            <Icon icon="mdi:sparkles" className="mr-1 text-[14px]" />
            Ask AI
          </Button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-neutral-800">Search Results</h2>
          <span className="text-xs text-neutral-500">2 results</span>
        </div>

        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 rounded-xl bg-neutral-50 px-3 py-3">
            <Icon icon="mdi:web" className="text-[18px] text-neutral-600" />
            <span className="text-sm font-medium">Visitors</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl px-3 py-3 hover:bg-neutral-50">
            <Icon icon="mdi:file-document-outline" className="text-[18px] text-neutral-600" />
            <span className="text-sm text-neutral-800">
              How can you utilize visitors to empower your business.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
