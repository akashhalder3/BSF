import React from 'react';
import SideMenu from './components/SideMenu';
import { createMuiTheme, CssBaseline, makeStyles } from "@material-ui/core";
import Header from './components/Header';
import { ThemeProvider } from 'theming';
import Routes from './Routes';


const theme = createMuiTheme({
    palette:{
        primary:{
            main: '#333996',
            light: '#3c44b126'
        },
        secondary:{
            main: '#f83245',
            light: '#f8324526'
        },
        background:{
            default: '#fafafa'
        }
    }
});

const useStyles = makeStyles({

    appMain: {
        paddingLeft: '250px',
        width: '100%',
        
    },

});

export function App() {

    const classes = useStyles();
    const SideMenuHeader = '';
    const SideMenuLogo = './images/BSF_logo.png';
    const menuItems = [
        {name: 'Home', to: '/Home/Home', icon: '', subMenuItems:[]},
        {name: 'Insert Data', to: '/CheckoutPage/CheckoutPage', icon: '', subMenuItems:[]},
        {name: 'Read Data', to: '/SearchPersonnelPage/SearchPersonnelPage', icon: '', subMenuItems:[]}
    ];

    
    return (
    <ThemeProvider theme = {theme}>
        <SideMenu 
            SideMenuLogo={SideMenuLogo}
            SideMenuHeader={SideMenuHeader}
            menuItems = {menuItems}
        />
        <div className={classes.appMain}>
            
            <Header />
            <Routes />
    
        </div>
        <CssBaseline />
    </ThemeProvider>
    );
}