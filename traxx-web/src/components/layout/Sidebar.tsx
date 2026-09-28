"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  ClipboardList,
  Bell,
  Users,
  Clock,
  Briefcase,
  BarChart,
  Bot,
  Settings,
  MessageSquare,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const navConfig = [
  {
    section: "Workspace",
    items: [
      { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { name: "Live Map", href: "/dashboard/live-map", icon: Map },
      { name: "Assignments", href: "/dashboard/assignments", icon: ClipboardList },
      { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
    ],
  },
  {
    section: "People",
    items: [
      {
        name: "Riders",
        icon: Users,
        subItems: [
          { name: "All Riders", href: "/dashboard/riders" },
          { name: "Add Rider", href: "/dashboard/riders/add" },
        ],
      },
      { name: "Shifts", href: "/dashboard/shifts", icon: Clock },
      { name: "Vendors", href: "/dashboard/vendors", icon: Briefcase },
    ],
  },
  {
    section: "Analytics",
    items: [{ name: "Reports", href: "/dashboard/reports", icon: BarChart }],
  },
  {
    section: "Traxx AI",
    items: [{ name: "Traxx AI", href: "/dashboard/traxx-ai", icon: Bot }],
  },
  {
    section: "Settings",
    items: [
      { name: "Settings", href: "/dashboard/settings", icon: Settings },
      { name: "Feedback", href: "/dashboard/feedback", icon: MessageSquare },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen fixed top-0 left-0 bottom-0 z-50 border-r border-slate-800">
      <div className="h-16 flex items-center px-4 border-b border-slate-800 shrink-0 gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center font-black text-sm text-white">
          TX
        </div>
        <span className="font-bold text-lg tracking-tight">Traxx</span>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-6">
        {navConfig.map((section) => (
          <div key={section.section}>
            <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-2 px-2">
              {section.section}
            </div>
            <div className="flex flex-col gap-1">
              {section.items.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white transition-colors text-sm font-medium"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdowns[item.name] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdowns[item.name] && (
                        <div className="mt-1 flex flex-col gap-1 pl-11">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                                pathname === subItem.href
                                  ? "text-white bg-blue-600/10"
                                  : "text-slate-400 hover:text-white hover:bg-slate-800"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium ${
                        pathname === item.href
                          ? "bg-blue-600/20 text-white relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-5 before:bg-blue-600 before:rounded-r-md"
                          : "text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800 p-3 shrink-0">
        <button className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  );
}
