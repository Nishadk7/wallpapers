

// Importing files from Material-UI
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import { Tooltip } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { tooltipClasses } from '@mui/material/Tooltip';


import './center.css'

// Using Inline Styling
const useStyles = makeStyles((theme) => ({
root: {
	flexGrow: 1,
},
menuButton: {
	marginRight: theme.spacing(2),
},
center:{
	flexGrow : 1,
	textAlign: "center"
}
}));


const BootstrapTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
	[`& .${tooltipClasses.arrow}`]: {
	  color: theme.palette.common.black,
	},
	[`& .${tooltipClasses.tooltip}`]: {
	  backgroundColor: theme.palette.common.black,
	},
  }));



// Exporting Default Navbar to the App.js File
export default function Navbar() {
const classes = useStyles();
return (
	<div className={classes.root}>
	<AppBar style={{ background: '	#1b1818	' }} position="sticky">
		<Toolbar >
		<Typography  >
			WALLPAPERS  
		</Typography>

	  <Tooltip title="1. Right-Click and copy image URL
						2. Open URL in new tab and then save image">
			<IconButton color = 'secondary'aria-label="delete"  style={{ color: 'DodgerBlue' }}  >    
				<DownloadIcon />    
				</IconButton>	

	  </Tooltip>
	  
		</Toolbar>
	</AppBar>
	</div>
);
}


/*const Navbar = () => {
    return(
        <div><h1>Navbar</h1></div>
        
    );
};

export default Navbar;*/