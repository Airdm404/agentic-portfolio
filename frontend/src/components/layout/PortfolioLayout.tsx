type PortfolioLayoutProps = {
  leftPane: React.ReactNode;
  rightPane: React.ReactNode;
};

export default function PortfolioLayout({
  leftPane,
  rightPane,
}: PortfolioLayoutProps) {
  return (
    <main className="flex h-screen w-full overflow-hidden text-zinc-50">
      <section className="h-screen w-1/2 overflow-y-auto border-r border-zinc-800">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-20 px-10 py-16 lg:px-16">
          {leftPane}
        </div>
      </section>

      <aside className="h-screen w-1/2 overflow-hidden">
        {rightPane}
      </aside>
    </main>
  );
}