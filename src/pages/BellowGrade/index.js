import React, { useState, useEffect } from 'react';
import BellowGradeTable from '../../components/BellowGradeTable';
import { Link } from 'react-router-dom';
import FirebaseService from '../../services/firebase';

const BellowGrade = () => {
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
            {userIsSigned ? (<BellowGradeTable />) : (
                <div>Please make sure you are {(<Link to="/">logged</Link>)}</div>
            )}

        </div>

    );
};

export default BellowGrade;