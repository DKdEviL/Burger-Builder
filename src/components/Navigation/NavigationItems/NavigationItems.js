import React from 'react';
import classes from './NavigationItems.css';
import NaivgationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (

    <ul className={classes.NavigationItems}>
        <NaivgationItem link="/">Burger Builder </NaivgationItem>
        <NaivgationItem link="/orders">Orders </NaivgationItem>
    </ul>
);

export default navigationItems;
