import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { NewRelease } from "./NewRelease";
import { Top } from "./Top";
import { Browse } from "./Browse";

export function AppSidebar() {
  return (
    <>
      <Sidebar className="text-center border-none">
        <SidebarHeader className="font-bold text-3xl mb-4 ">
          Gamex
        </SidebarHeader>
        <SidebarContent>
          {/* ########## */}
          <NewRelease />
          {/* ########## */}
          <Top />
          {/* ########## */}
          <Browse />
          {/* ########## */}
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
}
