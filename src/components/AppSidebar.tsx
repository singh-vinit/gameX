import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { CollapsiblePlatform } from "./CollapsiblePlatform";
import { CollapsibleGenre } from "./CollapsibleGenre";

export function AppSidebar() {
  return (
    <>
      <Sidebar className="text-center">
        <SidebarHeader className="font-bold text-3xl mb-10">Gamex</SidebarHeader>
        <SidebarContent>
          <CollapsiblePlatform subheading="Platforms" />
          <CollapsibleGenre subheading="Genres" />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
}
