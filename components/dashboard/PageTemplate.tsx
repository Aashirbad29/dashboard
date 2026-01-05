"use client";

export default function PageTemplate({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-semibold text-neutral-900">{title}</h1>
      <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>
      
        {children ? <div className="mt-6">{children}</div> : null}

    </div>
  );
}
