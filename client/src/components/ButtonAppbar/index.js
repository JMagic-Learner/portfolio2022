import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';

// This is the component that displays the Navigation bar
// This component is loaded into App.js, and will be found in every instance of REACT rendering.
export default function ButtonAppBar() {

  return (
    <AppBar position="relative">

      <Toolbar elevation={0}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          PORTFOLIO
        </Typography>
        <Grid container spacing={1} align="center" xs={12} sm={12} md={12}>
          {/* flexgrow specifically applies to the following buttons */}

          <Grid item xs={6} sm={2.75} md={2}>
            <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/">Home</Button>
          </Grid>
          <Grid item xs={6} sm={2.75} md={2}>
            <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Bio"> Bio</Button>
          </Grid>
          <Grid item xs={6} sm={2.75} md={2}>
            <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Resume"> Resume</Button>
          </Grid>
          <Grid item xs={6} sm={2.75} md={2}>
            <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Projects"> Projects</Button>
          </Grid>
          <Grid item xs={6} sm={2.75} md={2}>
            <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Contact">Contact</Button>
          </Grid>
        </Grid>
      </Toolbar>

    </AppBar>
  );
}