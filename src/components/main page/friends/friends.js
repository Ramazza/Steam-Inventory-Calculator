import React, { useState, useEffect } from "react";
import "./styles.css";

function Friends(props) {

    //friends url 
    //https://www.steamwebapi.com/steam/api/friendlist?key=NVEJ8DCC922B0VZT&id=76561198012345678&parse=1&no_cache=1&sort_by=1

    const url = `https://www.steamwebapi.com/steam/api/friendlist?key=NVEJ8DCC922B0VZT&id=${props.steamId}&parse=1&no_cache=1&sort_by=random`

    const [avatar, setAvatar] = useState([]);
    const [name, setName] = useState([]);

    async function getData() {
        
        const response = await fetch(url);
        const data = await response.json();
       
        const firstFiveNames = data.slice(0, 5).map(entry => entry.personaname);
        const firstFiveAvatars = data.slice(0, 5).map(entry => entry.avatarfull);

        setName(firstFiveNames);
        setAvatar(firstFiveAvatars);

    }

    useEffect(() => {
        getData();
    }, []);

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