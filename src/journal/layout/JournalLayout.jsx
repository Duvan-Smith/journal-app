import { Box } from "@mui/system";

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <div></div>
      <div></div>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div></div>
        {children}
      </Box>
    </Box>
  );
};
