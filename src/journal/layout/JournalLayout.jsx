import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";

const drawerWidtg = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidtg={drawerWidtg} />
      <SideBar drawerWidtg={drawerWidtg} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
