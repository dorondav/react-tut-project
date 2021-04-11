import React from 'react'
import classes from './Navigation.module.css';
import NavItem from './NavItem/NavItem';

function Navigation() {
    return (
        <React.Fragment>
            <div className="flex-col">

                <div className={classes.Navigation}>
                    <span className={classes.AddTask}>
                        {/* <NavItem exact link="/new-posts" textColor="#000" >ADD NEW POST</NavItem> */}
                    </span>
                    <NavItem exact link="/" >Home</NavItem>
                    <NavItem link="/posts" >Posts</NavItem>
                </div >
            </div>
        </React.Fragment>
    )
}

export default Navigation
