export default function PageTemplate({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-semibold text-neutral-900">{title}</h1>
      <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="text-sm font-medium text-neutral-900">
          {title} Content Area
        </div>
        <p className="mt-2 text-sm text-neutral-500">
          Replace this section with your real UI later (tables, filters, cards, etc.).
        </p>
      </div>
    </div>
  );
}
