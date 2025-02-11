import React from "react";
import { TableOfContents } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";
import { links } from "@/utils/links";


const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <TableOfContents />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {
            links.map((item,index)=>{
                return <DropdownMenuItem key={index}>
                    <Link href={item.href}>{item.lable}</Link>
                    </DropdownMenuItem>
            })
        }
        
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
