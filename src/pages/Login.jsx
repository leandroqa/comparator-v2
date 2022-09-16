import React, {useState} from 'react'
import { StyledLogin } from '../global.styled';

import axios from 'axios';
import {SERVER_HOST} from '../config';

const Login = () => {

    const [inputs, setInputs] = useState({});

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = () => {
        axios.post(`${SERVER_HOST}/login`, {
            email: inputs.email,
            password: inputs.password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (        
        <StyledLogin>
            <h1>
                Login
            </h1>
            <form>
                <div>
                    <label>E-mail: </label>
                    <input 
                        type="email"
                        name="email"
                        value={inputs.email || ''}
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type="password"
                        name="password"
                        value={inputs.password || ''}
                        onChange={handleInput}
                    />
                </div>
                <div className="button">
                    <button 
                        type="button"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                </div>
            </form>
        </StyledLogin>
    )
}
export default Login;
