"use client";

import { useState } from "react";
import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background text-foreground">
      <EditorNavbar 
        isSidebarOpen={isSidebarOpen} 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />

      <ProjectSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Center canvas area, padded top for navbar height */}
      <main className="flex-1 relative mt-14 bg-muted/10">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          Canvas Area
        </div>
      </main>

      {/* Slide-over AI sidebar on the right (keeping the original mock structure for right side) */}
      <aside className="absolute right-4 top-20 bottom-4 z-10 w-80 rounded-2xl border bg-background/90 backdrop-blur-md p-4 shadow-lg">
        <h2 className="font-medium flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          AI Assistant
        </h2>
        <div className="mt-4 text-sm text-muted-foreground">
          Ready to design.
        </div>
      </aside>
    </div>
  );
}
