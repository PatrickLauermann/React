import React, { useEffect, useState } from 'react';
import TextInput from '../TextInput';
import Button from '../Button';
import { useHistory } from 'react-router-dom';
import FirebaseService from '../../services/firebase';
import './style.css';

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const createNewUser = () => {
        try {
            FirebaseService.createNewUser(email, password);

        } catch (error) {
            console.log(error);
        }
    };

    const login = async () => {
        try {

            await FirebaseService.authUser(email, password);
            history.push('/main');
        } catch (error) {
            console.log('deu errado');
            console.log(error);
        }
    }

    const onChangeEmail = (v) => {
        setEmail(v);
    }

    const onChangePassword = (v) => {
        setPassword(v);
    }

    return (
        <form>
            <div className="input-container">
                <TextInput label="Email" onChange={onChangeEmail} />
            </div>
            <div className="input-container">
                <TextInput label="Password" hidden onChange={onChangePassword} />
            </div>
            <div className="input-container">
                <Button label="login" onClick={login} />
                <Button label="Sign up" onClick={() => history.push('/signup')} />
            </div>
        </form>
    );
};

export default Form;