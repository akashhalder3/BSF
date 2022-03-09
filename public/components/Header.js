import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff',
        transform: 'translatez(0);',
    },
    searchInput: {
        opacity: '0.6',
        padding: '0px 8px',
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '&: .MuiSvgIcon-root': {
            marginRight: '8px'
        }
    }
});

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <InputBase 
                        placeholder="Search"
                        className={classes.searchInput}
                        startAdornment={<SearchIcon fontSize="small"/>}/>
                    </Grid>
                    <Grid item sm>
                        
                    </Grid>
                    <Grid item style={{border:'1px solid #000'}}>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color="primary">
                                <ChatBubbleIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                                <PowerSettingsNewIcon />
                        </IconButton>
                    </Grid>

                </Grid>
            </Toolbar>

        </AppBar>
    )
}
