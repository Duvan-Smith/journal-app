import { Box } from "@mui/system";
import { NavBar } from "../components";

const drawerWidtg = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidtg={drawerWidtg} />
      <div></div>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div></div>
        {children}
      </Box>
    </Box>
  );
};
