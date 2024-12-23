"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Bell, Menu, Settings, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { format, formatDistanceToNow } from "date-fns";
import { routes } from "@/config";
import { Separator } from "@/components/ui/separator";
import { useRef, useState } from "react";
import { NotificationModal } from "@/components/dashboard/modals/notification-modal";
import { useModalStore, useStore } from "@/stores";
import { ModalType } from "@/config/enums";

export const Navbar = () => {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  const { setNotification } = useStore();
  const { onOpen } = useModalStore();
  const notificationsRef = useRef<HTMLDivElement>(null);
  const notifications = [
    {
      id: 1,
      title: "System Update",
      message: "A new system update has been successfully installed.",
      type: "success",
      timestamp: "2024-12-15T12:00:00Z",
      read: false, // Indicates whether the notification has been read
    },
    {
      id: 2,
      title: "Payment Reminder",
      message:
        "Your monthly subscription is due in 3 days. Please make a payment to avoid service disruption.",
      type: "warning",
      timestamp: "2024-12-15T10:30:00Z",
      read: false, // Already read
    },
    {
      id: 3,
      title: "New Message",
      message: "You have received a new message from John Doe.",
      type: "new",
      timestamp: "2024-12-15T09:45:00Z",
      read: true,
    },
    {
      id: 4,
      title: "Failed Login Attempt",
      message:
        "A failed login attempt was detected on your account. If this wasn't you, please reset your password.",
      type: "error",
      timestamp: "2024-12-15T08:20:00Z",
      read: true,
    },
    {
      id: 5,
      title: "Special Offer",
      message:
        "Get 20% off on your next purchase! Use the code SAVE20 at checkout.",
      type: "new",
      timestamp: "2024-12-15T07:15:00Z",
      read: false,
    },
  ];

  const onClickShowAll = () => {
    setShowMore((prev) => !prev);
    notificationsRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderLabel = (label: string) => {
    switch (label) {
      case "success":
        return (
          <Badge className="text-[9.27px] bg-[#EDFFFF] hover:bg-[#EDFFFF]/90 text-[#035E5C]">
            success
          </Badge>
        );
      case "warning":
        return (
          <Badge className="text-[9.27px] bg-[#FFEED4] hover:bg-[#FFEED4]/90 text-[#5E3B03]">
            warning
          </Badge>
        );
      case "new":
        return (
          <Badge className="text-[9.27px] bg-[#EDEDFF] hover:bg-[#EDEDFF]/90 text-[#03055E]">
            new
          </Badge>
        );
      case "error":
        return (
          <Badge className="text-[9.27px] bg-[#FFEDF0] hover:bg-[#FFEDF0]/90 text-[#5E0311]">
            error
          </Badge>
        );
      default:
        return null;
    }
  };
  return (
    <header className="sticky top-0 flex h-[72px] items-center gap-4 bg-background px-4 md:px-6 z-10 border-b">
      <NotificationModal />
      <nav className="hidden md:flex flex-row items-center gap-6">
        <Link href="/dashboard" className="relative h-[27px] w-[91px]">
          <Image src="/icons/logo.svg" alt="Logo" fill priority />
        </Link>
        <div className="flex justify-start items-center gap-x-2">
          {routes.map(({ label, href }, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={cn(href === pathname && "bg-secondary transition-all")}
              asChild
            >
              <Link key={index} href={href}>
                {label}
              </Link>
            </Button>
          ))}
        </div>
      </nav>
      <Sheet open={isOpenSheet} onOpenChange={setIsOpenSheet}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="overflow-y-auto">
          <Link href="/dashboard" className="relative h-[27px] w-[91px] block">
            <Image src="/icons/logo.svg" alt="Logo" fill priority />
          </Link>
          <div className="w-full mt-10 flex flex-col justify-start items-center gap-y-5">
            {routes.map(({ label, href }, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={cn(
                  "w-full justify-start",
                  `${href}/` == pathname && "bg-secondary transition-all"
                )}
                onClick={() => setIsOpenSheet(false)}
                asChild
              >
                <Link key={index} href={href}>
                  {label}
                </Link>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-x-2 w-fit ml-auto">
        <Button size="icon" variant="ghost" asChild>
          <Link href="/dashboard/settings">
            <Settings className="h-4 w-4 text-gray-500" />
            <span className="sr-only">Settings icon</span>
          </Link>
        </Button>

        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button size="icon" variant="ghost">
              <Bell className="h-4 w-4 text-gray-500" />
              <span className="sr-only">Bell icon</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end">
            <div className="flex justify-between items-center py-2 px-4">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
              >
                <span className="sr-only">XCircle</span>
                <XCircle className="h-5 w-5" />
              </Button>
            </div>
            <Separator />
            <div
              ref={notificationsRef}
              className={cn(
                "p-4 pb-16 space-y-4 max-h-[375px] h-fit [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-[#D4D4FF]",
                showMore ? "overflow-y-auto" : "overflow-y-hidden"
              )}
            >
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  onClick={() => {
                    onOpen(ModalType.NOTIFICATION);
                    setNotification(notification);
                  }}
                  className="relative hover:bg-[#D4D4FF]/10 p-2 rounded-md cursor-pointer"
                >
                  <h2 className="relative font-medium text-[10.81px]">
                    {notification.title}
                    {!notification.read && (
                      <span className="h-[6px] w-[6px] rounded-full bg-[#03055B] absolute top-0 -left-3"></span>
                    )}
                  </h2>
                  <p className="font-normal text-[9.27px] text-[#727282] line-clamp-2">
                    {notification.message}
                  </p>
                  <div className="flex items-end gap-4 pt-2">
                    {renderLabel(notification.type)}
                    <span className="text-[9.27px]">
                      {formatDistanceToNow(notification.timestamp, {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button
              onClick={onClickShowAll}
              className="fixed bottom-0 left-0 rounded-none text-[#03055E] bg-[#D4D4FF] hover:bg-[#D4D4FF] w-full text-[10.81px] rounded-b-md"
            >
              {showMore ? "Show less" : "Show all notifications"}
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};
