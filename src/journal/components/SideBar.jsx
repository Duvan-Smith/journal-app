import {
  Box,
  Checkbox,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

export const SideBar = ({ drawerWidtg = 240 }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidtg }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { sx: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidtg },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Duvan Smith
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {["Enero", "Febrero", "Marzo"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText secondary={"text secundario para muestra"} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
