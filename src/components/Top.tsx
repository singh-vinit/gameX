const items = [
  {
    name: "best of the year",
    url: "/#",
    icon: (
      <svg
        version="1.0"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 64 64"
        enableBackground="new 0 0 64 64"
        xmlSpace="preserve"
        className="text-black dark:text-white"
        fill="currentColor"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            fill="currentColor"
            d="M60,4H48c0-2.215-1.789-4-4-4H20c-2.211,0-4,1.785-4,4H4C1.789,4,0,5.785,0,8v8c0,8.836,7.164,16,16,16 c0.188,0,0.363-0.051,0.547-0.059C17.984,37.57,22.379,41.973,28,43.43V56h-8c-2.211,0-4,1.785-4,4v4h32v-4c0-2.215-1.789-4-4-4h-8 V43.43c5.621-1.457,10.016-5.859,11.453-11.488C47.637,31.949,47.812,32,48,32c8.836,0,16-7.164,16-16V8C64,5.785,62.211,4,60,4z M8,16v-4h8v12C11.582,24,8,20.414,8,16z M56,16c0,4.414-3.582,8-8,8V12h8V16z"
          ></path>{" "}
        </g>
      </svg>
    ),
  },
  {
    name: "popular",
    url: "/#",
    icon: (
      <svg
        className="text-black dark:text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>Clyp icon</title>
          <path d="M12 17.958a1.137 1.137 0 01-1.138-1.136V7.233a1.137 1.137 0 012.276 0v9.59c0 .627-.51 1.135-1.138 1.135m7.439 2.44A1.137 1.137 0 0118.3 19.26V4.794a1.137 1.137 0 012.276 0v14.467c0 .627-.51 1.136-1.138 1.136M15.719 24a1.137 1.137 0 01-1.138-1.136V1.136a1.137 1.137 0 012.276 0v21.728c0 .627-.509 1.136-1.138 1.136m-7.438-3.16a1.137 1.137 0 01-1.138-1.136V4.296a1.137 1.137 0 012.276 0v15.408c0 .628-.51 1.137-1.138 1.137m-3.72-4.989a1.137 1.137 0 01-1.138-1.136V9.284a1.137 1.137 0 012.276 0v5.432c0 .627-.51 1.136-1.138 1.136Z"></path>
        </g>
      </svg>
    ),
  },
  {
    name: "top 250",
    url: "/#",
    icon: (
      <svg
        className="text-black dark:text-white"
        fill="currentColor"
        height="200px"
        width="200px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 277.366 277.366"
        xmlSpace="preserve"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <path d="M257.799,55.704c-7.706-3.866-17.016-2.36-23.111,3.734l-39.2,39.201l-38.526-86.757C153.753,4.657,146.589,0,138.683,0 s-15.07,4.657-18.278,11.883L81.878,98.64l-39.2-39.201c-6.094-6.093-15.405-7.6-23.111-3.733 C11.864,59.569,7.502,67.935,8.745,76.463l17.879,122.785c1.431,9.829,9.858,17.118,19.791,17.118h184.536 c9.933,0,18.36-7.289,19.791-17.118l17.88-122.786C269.864,67.934,265.502,59.568,257.799,55.704z"></path>{" "}
            <path d="M230.951,237.366H46.415c-11.046,0-20,8.954-20,20s8.954,20,20,20h184.536c11.046,0,20-8.954,20-20 S241.997,237.366,230.951,237.366z"></path>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
  },
];

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function Top() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-2xl font-bold mb-2">
        Top
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild>
                <Link href={item.url} className="">
                  {item.icon}

                  <span className="capitalize font-medium text-lg">
                    {item.name}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
