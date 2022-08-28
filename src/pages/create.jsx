import React, { Component, useState } from 'react'
import { CREATE, BASE } from "../constants.js";
import Axios from "axios";
import '../style.css';

function CreatePage () {

    const [short_url, setShortUrl] = useState("");
    
    let handleSubmit = async (e) => {
        e.preventDefault();
        
        const target_url = document.getElementById("input-url")

        var formData = new FormData();
        formData.append("url", target_url.value)

        const token = localStorage.getItem("shortner_token");

        let resp = await Axios.post(CREATE, 
            formData,
            {
                headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": 'application/json'
                }
            }
        )
        setShortUrl(resp.data["short_url"])

    }
        


    return (
        <div>

            <form className='center' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="input-url">Target Url</label>
                    <input type="text" className="form-control" id="input-url" aria-describedby="emailHelp" placeholder="Enter target url" />
                </div>
                
                
                <button type="submit" className="btn btn-primary mt-2">Create short url</button>
            </form>

            {short_url ? (
                <div>
                    <span>Your Short URL(slug) is: <b>{short_url}</b></span>
                    <br />
                    <span>
                        Actual Short URL is:
                        <a href={BASE+short_url}>{BASE+short_url}</a>
                    </span>
                </div>

            ) : (
                <span></span>
            )
            } 

        </div>
    )



}



export default CreatePage;