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

import { useQuery } from "@tanstack/react-query";

interface Props {
  subheading: string;
}

import { useFetch } from "@/hooks/useFetch";
import { Genres } from "@/types/genres";

export function CollapsibleGenre({ subheading }: Props) {
  const { data, isPending } = useQuery({
    queryKey: ["genres", "fetchGenres"],
    queryFn: () => useFetch("genres"),
  });

  const items = data as Genres;

  if (isPending) return <div>loading...</div>;

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
            {/* {items.results.map((curr) => (
              <SidebarMenuSubItem key={curr.id}>
                <SidebarMenuSubButton asChild>
                  <a href="#">
                    <span className="text-sm font-light">{curr.name}</span>
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))} */}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
}
