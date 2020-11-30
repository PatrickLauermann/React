import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ label, onChange }) => {
    return (
        <>
            <TextField label={label} variant="outlined" onChange={(v) => onChange(v.target.value)}/>
        </>
    );
};

export default TextInput;
