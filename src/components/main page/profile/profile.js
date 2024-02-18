import React, { useState, useEffect } from "react";
import "./styles.css";

function Profile(props) {
    
    const url = `https://www.steamwebapi.com/steam/api/profile?key=NVEJ8DCC922B0VZT&id=${props.steamId}`;

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [steamId, setSteamId] = useState('');
    const [profileUrl, setProfileUrl] = useState('');


    async function getData() {
        
        const response = await fetch(url);
        const data = await response.json();

        setName(data.personaname)
        setAvatar(data.avatarfull)
        setSteamId(data.steamid)
        setProfileUrl(data.profileurl)

    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <>
            <div className="profile-wrapper">
                <a href={profileUrl} target="blank">
                    <h2>{name}</h2>
                </a>
                <a href={profileUrl} target="blank">
                    <img src={avatar} alt="Profile Avatar" />
                </a>
                <h3>{steamId}</h3>
            </div>
        
        </>
    );

}

export default Profile;
