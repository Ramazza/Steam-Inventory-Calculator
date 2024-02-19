import React , {useState} from "react";
import "./styles.css";
import Items from "./item/item";
import Profile from "./profile/profile";
import Friends from "./friends/friends";

function MainPage(props) {

    const [accountValue, SetAccountValue] = useState(0)

    const handleTotalValue = (totalValue) => {
        SetAccountValue(totalValue)
        
    };


    return(
        <>
            <div className="wrapper">
                <aside className="aside">
                    <div className="id-input">
                        <input type="text" placeholder="Nome Steam/SteamID"/>
                        <button>calcular</button>
                    </div>
                    <Profile steamId={props.steamId}/>
                    <h3>Valor da conta: R${accountValue}</h3>
                    <div className="friends-name">
                        <div className="div1"></div>
                        <h1>Amigos</h1>
                        <div className="div2"></div>
                    </div>
                    <Friends steamId={props.steamId}/>
                </aside>
                <main className="main">
                    <Items steamId={props.steamId} onTotalValue={handleTotalValue}/>
                </main>
            </div>
        </>
    );

}

export default MainPage;