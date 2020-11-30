import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import FirebaseService from '../../services/firebase';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
    const history = useHistory();
    const styles = useStyles();

    const logout = async () => {
        try {
            await FirebaseService.logout();
            history.push('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.root}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Button color="inherith" onClick={async () => await logout()}>{'Logout'}</Button>
                    <Button color="inherith" onClick={() => history.push('/add-student')}>add Student</Button>
                    <Button color="inherith" onClick={() => history.push('/bellow-grade')}>Students bellow the medium</Button>
                    <Button color="inherith" onClick={() => history.push('/main')}>All students</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
