import { GalleryVerticalEnd } from "lucide-react";
import * as React from "react";

import Form from "./CountryForm";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { ResponseStructure } from "./ACMarker";

interface Props extends React.ComponentProps<typeof Sidebar> {
  onFetchData: (data: ResponseStructure[]) => void;
}

export function AppSidebar({ onFetchData, ...props }: Props) {
  return (
    <div className="z-[1000]">
      <Sidebar
        className="h-1/3 w-72"
        variant="floating"
        side="right"
        collapsible="offcanvas"
        {...props}
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <GalleryVerticalEnd className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">
                      Military Aircraft Tracker
                    </span>
                    <span className="">v1.0.0</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu className="gap-2">
              <SidebarMenuItem>
                <SidebarMenuButton className="font-bold">
                  Select Countries
                </SidebarMenuButton>
                <Form onFetchData={onFetchData} />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
