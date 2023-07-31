import { useState } from 'react'
//import Box from '@mui/material/Box';
//import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import BadgeIcon from '@mui/icons-material/Badge';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './App.css'

const App=()=>{

  return (
    <>
    
     <Grid container spacing={2}>
        <Grid item xs={2}>
          <div className="sideBar" >
            <AlignHorizontalLeftIcon/>
            <h2>Test Dashboard</h2>
            <h3>o.o</h3>
          </div>
        </Grid>
        <Grid item xs={10}>
          <div className="mainBar">
            
              <AccessibilityIcon/><AccessibilityIcon/><AccessibilityIcon/><AccessibilityIcon/><AccessibilityIcon/>
              <div className="mainText">
              <h2>DASHBOARD</h2>
              <h3>By Mike</h3>
              </div>

          </div>

          
        </Grid>
        <Grid item xs={2}>
          <div className="midBars" >
            <BadgeIcon/><h4>Student at FullStack Academy</h4>
          </div>
          
        </Grid>
        <Grid item xs={2}>
          <div className="midBars" >
            <ContentPasteIcon/>
            <h4>Grid - Done</h4>
            <h4>Icon - Done</h4>
          </div>
          
        </Grid>
        <Grid item xs={2}>
          <div className="midBars" >
            <CallIcon/>
            <h7>111-111-1111</h7><br/>
            <EmailIcon/>
            <h7>fake@email.com</h7>
          </div>
          
        </Grid>
        <Grid item xs={2}>
          <div className="midBars" id="empty"></div>
          
        </Grid>
        <Grid item xs={7}>
          <div className="midBotBar">
          <GitHubIcon/>
          <Link href="https://github.com/SangHano">Github</Link><br/>
          <LinkedInIcon/>
          <Link href="https://www.linkedin.com/in/mike-sangchul-han/">LinkedIn</Link>

          </div>
          
        </Grid>
        <Grid item xs={3}>
          <div className="chartBar">Didn't haave time to put stuff here</div>
          
        </Grid>
    </Grid>
    </>
  )
}

export default App
