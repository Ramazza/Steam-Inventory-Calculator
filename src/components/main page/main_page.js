import React , {useState, useEffect} from "react";
import "./styles.css";
import Items from "./item/item";
import Profile from "./profile/profile";
import Friends from "./friends/friends";

function MainPage(props) {

    const [accountValue, SetAccountValue] = useState(0)
    const [inputValue, setInputValue] = useState(props.steamId || "");
    const [errorItem, setErrorItem] = useState(null);
    const [errorFriend, setErrorFriend] = useState(null);

    useEffect(() => {
        setInputValue(props.steamId || "");
    }, [props.steamId]);

    const handleTotalValue = (totalValue) => {
        SetAccountValue(totalValue) 
    };

    const handleCalculate = () => {
        const newSteamId = document.querySelector(".id-input input").value;
        setInputValue(newSteamId);
        setErrorItem(null);
        setErrorFriend(null);
    };

    const HandleErrorItems = (errorMessage) => {
        setErrorItem(errorMessage);
    }

    const handleErrorFriends = (errorMessage) => {
        setErrorFriend(errorMessage);
    }    

    return(
        <>
            <div className="id-input">
                <input
                    type="text"
                    placeholder="Nome Steam/SteamID"
                />
                <button onClick={handleCalculate}>Calcular</button>
            </div>
            <div className="wrapper">
                <aside className="aside">
                    <div className="profile">
                        <Profile steamId={inputValue}/>
                        <h3>Valor da conta: R${accountValue}</h3>
                    </div>
                    <div className="friends-main-container">
                        <div className="friends-name">
                            <div className="div1"></div>
                            <h1>Amigos</h1>
                            <div className="div2"></div>
                        </div>
                        {errorFriend ? <p className="private-friends">Amigos privados 😔</p> : <Friends steamId={inputValue} onError={handleErrorFriends}/>}
                    </div>
                </aside>
                <main className="main">
                    {errorItem ? <p className="private-items">Conta privada 😔</p> : <Items steamId={inputValue} onTotalValue={handleTotalValue} onError={HandleErrorItems}/>} 
                </main>
            </div>
        </>
    );

}

export default MainPage;