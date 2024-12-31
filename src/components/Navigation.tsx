import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Menubar className={cn("border-t-0 border-l-0 border-r-0 rounded-none")}>
      <MenubarMenu>
        <MenubarTrigger className={cn("text-lg")}>
          <Link to="/">Home</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className={cn("text-lg")}>
          <Link to="/about">About</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navigation;
