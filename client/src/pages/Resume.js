import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function Resume() {

return (
    <Box>
<Typography align="center" variant="h2"> RESUME </Typography>
<Button size="small" sx={{ mx: "auto" }} ><a href="/assets/download/Jason_Ma_Resume.PDF" download="Jason_Ma_Resume.PDF" margin="auto" >CLICK TO DOWNLOAD RESUME</a></Button>
</Box>
);
}