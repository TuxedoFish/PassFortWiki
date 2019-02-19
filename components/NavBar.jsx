// DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class NavBar extends React.Component {
  render() {
    return <div className="nav-bar">
    			<AppBar position="static">
    				<Toolbar>
    					<Typography variant="h6" color="inherit" className="nav-title">
    						Wiki Home
    					</Typography>
    				</Toolbar>
				</AppBar>
    </div>;
  }
}

export default NavBar;
