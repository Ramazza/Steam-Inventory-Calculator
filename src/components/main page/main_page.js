import React from "react";
import "./styles.css";
import Items from "./item/item";
import Profile from "./profile/profile";
import Friends from "./friends/friends";

function MainPage(props) {

    return(
        <>
            <div className="wrapper">
                <aside className="aside">
                    <div className="id-input">
                        <input type="text" placeholder="Nome Steam/SteamID"/>
                        <button>calcular</button>
                    </div>
                    <Profile steamId={props.steamId}/>
                    <p>account value</p>
                    <p>Amigos</p>
                    <Friends steamId={props.steamId}/>
                </aside>
                <main className="main">
                    <Items steamId={props.steamId}/>
                </main>
            </div>
        </>
    );

}

export default MainPage;