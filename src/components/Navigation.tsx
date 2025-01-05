import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { logoutApi } from "@/api/auth";
import { useDispatch } from "react-redux";
import { logoutAsync } from "@/store/authSlice";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogout = async () => {
    try {
      await logoutApi();
      dispatch(logoutAsync());
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <Menubar className={cn("border-t-0 border-l-0 border-r-0 rounded-none")}>
      <MenubarMenu>
        <MenubarTrigger className={cn("text-lg")}>
          <Link to="/">Home</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className={cn("text-lg cursor-pointer")} onClick={handleLogout}>
          Logout
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navigation;
