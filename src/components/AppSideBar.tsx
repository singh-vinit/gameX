import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";
import { Collapsible } from "@/components/ui/collapsible";
import {
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const platformItems = [
  {
    title: "Pc",
    url: "#",
  },
  {
    title: "Play Station 4",
    url: "#",
  },
  {
    title: "Xbox One",
    url: "#",
  },
  {
    title: "Nintendo Switch",
    url: "#",
  },
  {
    title: "Android",
    url: "#",
  },
  {
    title: "iOS",
    url: "#",
  },
];

const genreItems = [
  {
    title: "Free Online Games",
    url: "#",
  },
  {
    title: "Action",
    url: "#",
  },
  {
    title: "Strategy",
    url: "#",
  },
  {
    title: "RPG",
    url: "#",
  },
  {
    title: "Shooting",
    url: "#",
  },
  {
    title: "Adventure",
    url: "#",
  },
  {
    title: "Puzzle",
    url: "#",
  },
  {
    title: "Racing",
    url: "#",
  },
  {
    title: "Sports",
    url: "#",
  },
];

export function AppSidebar() {
  return (
    <>
      <Sidebar className="text-center">
        <SidebarHeader className="font-bold text-2xl">GameX</SidebarHeader>
        <SidebarContent>
          {/* ############################## */}
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel className="font-bold text-xl" asChild>
                <CollapsibleTrigger>
                  Platforms
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {platformItems.map((item, index) => (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <span className="font-medium">{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          {/* ############################## */}
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel className="font-bold text-xl" asChild>
                <CollapsibleTrigger>
                  Genres
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {genreItems.map((item, index) => (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <span className="font-medium">{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          {/* ############################## */}
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
}
