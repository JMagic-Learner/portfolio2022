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


export default function ButtonAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static">
        <Toolbar elevation={3}>
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
            JASON MA - PORTFOLIO
          </Typography>
          {/* flexgrow specifically applies to the following buttons */}
          <Grid container spacing={2} align="center">
          <Grid item xs={6} md={2}>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/">Home</Button>
          </Grid>
          <Grid item xs={6} md={2}>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Bio"> Bio</Button>
          </Grid>
          <Grid item xs={6} md={2}>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Resume"> Resume</Button>
          </Grid>
          <Grid item xs={6} md={2}>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Projects"> Projects</Button>
          </Grid>
          <Grid item xs={6} md={2}>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Contact">Contact</Button>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
     
    </Box>
  );
}