type PortfolioLayoutProps = {
  leftPane: React.ReactNode;
  rightPane: React.ReactNode;
};

export default function CommandCenterLayout({
  leftPane,
  rightPane,
}: PortfolioLayoutProps) {
  return (
    <main className="flex min-h-screen w-full text-zinc-50">
      <section className="w-1/2 min-h-screen overflow-y-auto border-r border-zinc-800">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-20 px-10 py-16 lg:px-16">
          {leftPane}
        </div>
      </section>

      <aside className="w-1/2 min-h-screen">
        {rightPane}
      </aside>
    </main>
  );
}