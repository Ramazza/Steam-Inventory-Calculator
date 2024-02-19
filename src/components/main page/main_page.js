import React , {useState, useEffect} from "react";
import "./styles.css";
import Items from "./item/item";
import Profile from "./profile/profile";
import Friends from "./friends/friends";

function MainPage(props) {

    const [accountValue, SetAccountValue] = useState(0)
    const [inputValue, setInputValue] = useState(props.steamId || "");

    useEffect(() => {
        setInputValue(props.steamId || "");
      }, [props.steamId]);

    const handleTotalValue = (totalValue) => {
        SetAccountValue(totalValue) 
    };

    const handleCalculate = () => {
        const newSteamId = document.querySelector(".id-input input").value;
        setInputValue(newSteamId);
      };

    return(
        <>
            <div className="wrapper">
                <aside className="aside">
                    <div className="id-input">
                        <input
                            type="text"
                            placeholder="Nome Steam/SteamID"
                        />
                        <button onClick={handleCalculate}>Calcular</button>
                    </div>
                    <Profile steamId={inputValue}/>
                    <h3>Valor da conta: R${accountValue}</h3>
                    <div className="friends-name">
                        <div className="div1"></div>
                        <h1>Amigos</h1>
                        <div className="div2"></div>
                    </div>
                    <Friends steamId={inputValue}/>
                </aside>
                <main className="main">
                    <Items steamId={inputValue} onTotalValue={handleTotalValue}/>
                </main>
            </div>
        </>
    );

}

export default MainPage;