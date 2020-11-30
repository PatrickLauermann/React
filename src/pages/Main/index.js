import React, { useState, useEffect } from 'react';
import StudentTable from '../../components/StudentTable';
import { Link } from 'react-router-dom';
import FirebaseService from '../../services/firebase';

const Main = () => {
    const [userIsSigned, setUserIsSigned] = useState(false);

    const userSigned = async () => {
        const isLoged = await FirebaseService.userIsLogged()
        setUserIsSigned(!!isLoged);
    };

    useEffect(() => {
        userSigned();
    }, []);

    return (
        <div>
            {userIsSigned ? (<StudentTable />) : (
                <div>Please make sure you are {(<Link to="/">logged</Link>)}</div>
            )}

        </div>

    );
};

export default Main;
