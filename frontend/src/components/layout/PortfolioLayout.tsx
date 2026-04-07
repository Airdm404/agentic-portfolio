type PortfolioLayoutProps = {
  leftPane: React.ReactNode;
  rightPane: React.ReactNode;
};

export default function PortfolioLayout({
  leftPane,
  rightPane,
}: PortfolioLayoutProps) {
  return (
    <main className="flex min-h-screen w-full flex-col text-zinc-50 lg:h-screen lg:flex-row lg:overflow-hidden">
      <section className="w-full border-zinc-800 lg:h-screen lg:w-1/2 lg:overflow-y-auto lg:border-r">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 py-12 sm:px-8 lg:gap-20 lg:px-16 lg:py-16">
          {leftPane}
        </div>
      </section>

      <aside className="min-h-[70vh] w-full border-t border-zinc-800 lg:h-screen lg:w-1/2 lg:overflow-hidden lg:border-t-0">
        {rightPane}
      </aside>
    </main>
  );
}
