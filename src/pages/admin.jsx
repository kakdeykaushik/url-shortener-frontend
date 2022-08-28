import React,  {useState} from 'react'
import { DETAILS, DISABLE, ENABLE, DELETE } from "../constants.js";
import Axios from "axios";
import '../style.css';
import { useParams, useNavigate } from "react-router-dom";



function AdminPage () {
    
    const { slug } = useParams();
    const [target_url, setTargetUrl] = useState("");
    const [is_active, setActive] = useState(true);
    const [clicks, setClicks] = useState();

    const navigate = useNavigate();
    

    async function getData () {
    
        const token = localStorage.getItem("shortner_token");
    
        let resp = await Axios.get(
            DETAILS + slug, 
            {
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": 'application/json'
                }
            }
        )   
    
        const data = resp.data;
        setTargetUrl(data["original_url"])
        setActive(data["is_active"])
        setClicks(data["clicks"])
    }


    let handleToggle = async () => {
        const endpoint = is_active ? DISABLE : ENABLE;

        const token = localStorage.getItem("shortner_token");

        let resp = await Axios.get(endpoint + slug, 
            {
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": 'application/json'
                }
            }
        )

        const data = resp.json;

    }

    let handleDelete = async (e) => {

        navigate('/create');
        const token = localStorage.getItem("shortner_token");

        let resp = await Axios.delete(DELETE + slug, 
            {
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": 'application/json'
                }
            }
        )


    }

    getData();

    return (
        <React.Fragment>

        <div>
            <p>Slug: {slug}</p>
            <p>Target Url: {target_url}</p>

            <p className={ is_active ? "active" : "inactive" }>
                Active: {is_active.toString()}
            </p> 
            
            <p>Total visits: {clicks}</p>
        </div>
        <div>
            <form onSubmit={handleToggle}>
                <button type='submit'>
                    { is_active ? "Disable link" : "Enable link" }
                </button>
            </form>

            <form onSubmit={handleDelete}>
                <button type='submit' className='button-delete'>
                    Delete
                </button>
            </form>

        </div>
        </React.Fragment>
    );
}



export default AdminPage;

