import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      className={`fixed top-14 left-0 bottom-0 w-64 bg-background border-r z-40 transform transition-transform duration-300 ease-in-out flex flex-col ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="font-semibold">Projects</h2>
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close Sidebar">
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto p-4">
        <Tabs defaultValue="my-projects" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="my-projects">My Projects</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>
          <TabsContent value="my-projects" className="text-center text-sm text-muted-foreground mt-8">
            No projects found.
          </TabsContent>
          <TabsContent value="shared" className="text-center text-sm text-muted-foreground mt-8">
            No shared projects.
          </TabsContent>
        </Tabs>
      </div>

      <div className="p-4 border-t">
        <Button className="w-full flex items-center justify-center gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
