/*
 * We will have 3 components in Layout.js
 * Toolbar
 * SideDrawer
 * BackDrop
 * Below these We'll have a main area in this 
 * main area we output the components we want
 * to wrap with this area.
 */

import React, { Component } from 'react';
import Aux from '../Auxiliary/auxiliary';
import classes from './layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerHandler = () => {

        this.setState({ showSideDrawer: false });

    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;