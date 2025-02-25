"use client";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

import {
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

import { ChevronDown } from "lucide-react";
import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";

interface Props {
  subheading: string;
}

import { useFetch } from "@/hooks/useFetch";
import { Platforms } from "@/types/platforms";
import Image from "next/image";

export function CollapsiblePlatform({ subheading }: Props) {
  const { data, loading } = useFetch("platforms");
  const items = data as Platforms;
  if (loading) return <div>Loading...</div>;
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel className="font-bold text-xl" asChild>
          <CollapsibleTrigger>
            {subheading}
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.results.map((curr) => (
              <SidebarMenuSubItem key={curr.id}>
                <SidebarMenuSubButton asChild>
                  <a href="#">
                    <span className="text-sm font-light">{curr.name}</span>
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
}
