import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FirebaseService from '../../services/firebase';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function AddStudent() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [g1, setG1] = useState('');
    const [g2, setG2] = useState('');
    const [userIsSigned, setUserIsSigned] = useState(false);

    const submit = async () => {
        try {

            await FirebaseService.createNewStudent(name, lastName, g1, g2);
            alert("Student saved!");
        } catch (error) {
            console.log(error);
        }
    };

    const userSigned = async () => {
        const isLoged = await FirebaseService.userIsLogged()
        setUserIsSigned(!!isLoged);
    };

    useEffect(() => {
        userSigned();
    }, []);

    return (
        <div>
            {!userIsSigned ? (
                <div>Please make sure you are {(<Link to="/">logged</Link>)}</div>
            ) : (
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Typography component="h1" variant="h5">
                                Add Student
                </Typography>
                            <form className={classes.form} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            name="g1"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="G1"
                                            onChange={(v) => setG1(v.target.value)}
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="g2"
                                            label="G2"
                                            onChange={(v) => setG2(v.target.value)}
                                            name="g2"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            onChange={(v) => setName(v.target.value)}
                                            label="Name"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Last Name"
                                            onChange={(v) => setLastName(v.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container >
                                    <Button
                                        style={{ marginTop: '10px' }}
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        onClick={submit}
                                    >
                                        Add
                                </Button>
                                </Grid>
                            </form>
                        </div>
                    </Container >
                )}
        </div>
    );
}