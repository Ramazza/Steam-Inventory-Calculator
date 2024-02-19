import React, { useState, useEffect } from "react";
import "./styles.css";

function Friends(props) {

    const url = `https://www.steamwebapi.com/steam/api/friendlist?key=RZGWZ6YA77ECUAAI&id=${props.steamId}&parse=1&no_cache=1&sort_by=random`

    const [avatar, setAvatar] = useState([]);
    const [name, setName] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() =>{

        async function getData() {
            
            try {

                const response = await fetch(url);
                const data = await response.json();
               
                const firstFiveNames = data.slice(0, 5).map(entry => entry.personaname);
                const firstFiveAvatars = data.slice(0, 5).map(entry => entry.avatarfull);
        
                setName(firstFiveNames);
                setAvatar(firstFiveAvatars);

            } catch (error) {
                setError(error.message);
                props.onError(error.message); 
                console.log(`Fetch error: ${error}`);
            }

        }

        getData();

    }, [url])

    return(
        <>
            <div className="friends-wrapper">
                {name.map((friend, index) => (
                    <div className="friend" key={index}>
                        <img src={avatar[index]} alt={`Avatar of ${friend}`} />
                        <h2>{friend}</h2>
                    </div>
                ))}
            </div>
        </>
    )

}

export default Friends;