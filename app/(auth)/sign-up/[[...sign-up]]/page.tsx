import { SignUp } from "@clerk/nextjs";
import { Zap, Users, FileText } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background">
      {/* Left panel for large screens */}
      <div className="hidden lg:flex flex-1 flex-col justify-center p-12 border-r bg-muted/20">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Hantu-Ai</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Design systems at the speed of thought.
          </p>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              AI Architecture Generation
            </li>
            <li className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Real-time Collaboration
            </li>
            <li className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              Instant Spec Generation
            </li>
          </ul>
        </div>
      </div>
      
      {/* Right panel with Clerk Form */}
      <div className="flex flex-1 items-center justify-center p-4">
        <SignUp />
      </div>
    </div>
  );
}
