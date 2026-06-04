import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen bg-background">
      {/* Left panel for large screens */}
      <div className="hidden lg:flex flex-1 flex-col justify-center p-12 border-r bg-muted/20">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Hantu-Ai</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Your intelligent workspace.
          </p>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Real-time collaboration
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              AI-powered design generation
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Seamless version control
            </li>
          </ul>
        </div>
      </div>
      
      {/* Right panel (or full width on small screens) */}
      <div className="flex flex-1 items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
}
