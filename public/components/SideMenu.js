import React, { useState } from 'react';
import * as s from './SideMenu.styles';
import { Link } from 'react-router-dom';

const SideMenu = (props) => {
    const {
        SideMenuHeader = '', 
        SideMenuLogo = '',
        menuItems = []
    } = props;

    const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
    const handleMenuItemClick = name => {
        setSelectedMenuItem(name);
    }


    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;
        console.log(`${item.name} selected? ${isItemSelected}`)
        return (
            <Link to={item.to} style={{ textDecoration: 'none'}}>
                <s.MenuItem 
                key = {index}
                selected={isItemSelected}
                onClick = {()=> handleMenuItemClick(item.name)}
                > 
                    <s.Icon src={item.icon} />
                    <s.Text>{item.name}</s.Text>
                </s.MenuItem>
            </Link>
        )

    });

    return(
        <s.SideMenuContainer SideMenuLogo={SideMenuLogo}>
            <s.SideMenuHeader>{SideMenuHeader}</s.SideMenuHeader>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
        </s.SideMenuContainer>
    );
    
}


export default SideMenu;
