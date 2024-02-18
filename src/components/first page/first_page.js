import React from "react";
import "./styles.css";

function FirstPage({onButtonClick}) {

    function getId() {
        const steamId = document.querySelector('.input').value
        onButtonClick(steamId);
    }

    return (
        <>
            <main>
                <h1>Quanto vale o seu inventário de CS2?</h1>
                <p>Digite o su SteamID no botão abaixo de descubra agora o valor das suas skins.</p>
                <div className="input-wrapper">
                    <input className="input" type="text" placeholder="SteamId"/>
                    <button onClick={getId}>Calcular</button>
                </div>
            </main>
        </>
    );


}


export default FirstPage;