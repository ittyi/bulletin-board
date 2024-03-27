import { Link, Outlet } from "react-router-dom";
import { Grid, AppBar, Toolbar, Typography } from "@mui/material";

export default function Root() {
  return (
    <>
      <Grid container direction="column">
        <AppBar position="static">
          <Toolbar className="flb-jcsb" >
            <Typography>掲示板</Typography>
            <Link to={`/thread/new`}>スレッドを立てる</Link>
          </Toolbar>
        </AppBar>
        <Grid item>
          <main>
            <Outlet />
          </main>
        </Grid>
      </Grid>
    </>
  );
}
