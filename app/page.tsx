export default function Home() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-base text-copy-primary">
      {/* Floating sidebar overlay on the left */}
      <aside className="absolute left-4 top-4 bottom-4 z-10 w-64 rounded-2xl border border-surface-border bg-surface/90 backdrop-blur-md p-4 shadow-lg shadow-black/50">
        <h2 className="text-copy-primary font-medium">Hantu-Ai</h2>
        <div className="mt-4 text-sm text-copy-muted">
          Workspace initialization...
        </div>
      </aside>

      {/* Center canvas area */}
      <main className="flex-1 bg-base relative">
        <div className="absolute inset-0 flex items-center justify-center text-copy-faint">
          Canvas Area
        </div>
      </main>

      {/* Slide-over AI sidebar on the right */}
      <aside className="absolute right-4 top-4 bottom-4 z-10 w-80 rounded-2xl border border-surface-border bg-surface/90 backdrop-blur-md p-4 shadow-lg shadow-black/50">
        <h2 className="text-ai-text font-medium flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ai"></span>
          AI Assistant
        </h2>
        <div className="mt-4 text-sm text-copy-muted">
          Ready to design.
        </div>
      </aside>
    </div>
  );
}
