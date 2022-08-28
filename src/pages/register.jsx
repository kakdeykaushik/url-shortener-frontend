import React from 'react'
import { REGISTER } from "../constants.js";
import Axios from "axios";
import '../style.css';
import { useNavigate } from "react-router-dom";

function RegisterPage () {
    const navigate = useNavigate();
    
    
    let handleSubmit = async (e) => {
        
        
        e.preventDefault();
        const username = document.getElementById("input-username")
        const password = document.getElementById("input-password")


        var formData = new FormData();
        formData.append("username", username.value)
        formData.append("password", password.value)

        let resp = await Axios.post(REGISTER, 
            formData,
            {
                headers: {
                "Content-Type": 'application/json'
                }
            }
        )
        
        navigate('/create');
        localStorage.setItem("shortner_token", resp.data["token"]);

    }
        


    return (
        <div>

        <form className='center' onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="input-username">Username</label>
                <input type="text" className="form-control" id="input-username" aria-describedby="emailHelp" placeholder="Enter Username" />
            </div>
            <div className="form-group">
                <label htmlFor="input-password">Password</label>
                <input type="password" className="form-control" id="input-password" placeholder="Password" />
            </div>
            
            
            <button type="submit" className="btn btn-primary mt-2">Register</button>
        </form>
        </div>
    )



}



export default RegisterPage;