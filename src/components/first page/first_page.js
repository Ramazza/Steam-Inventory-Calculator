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
                <p>Digite o seu nome de usuário Steam, SteamID ou link do perfil da Steam abaixo e descubra agora o valor das suas skins.</p>
                <div className="input-wrapper">
                    <input className="input" type="text" placeholder="Nome de usuário, SteamId ou perfil Steam"/>
                    <button onClick={getId}>Calcular</button>
                </div>
            </main>
        </>
    );


}


export default FirstPage;