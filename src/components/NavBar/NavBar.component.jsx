import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink className="nav-link" to="/posts">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Posts
            </Typography>
          </NavLink>
          <NavLink className="nav-link" to="/comments">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              to="/comments"
            >
              Comments
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
