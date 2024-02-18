import React from "react";
import "./styles.css";
import Items from "./item/item";

function MainPage(props) {

    return(
        <>
            <div className="wrapper">
                <aside className="aside">
                    <p>Preciso de uma barra de pesquisa para poder pesquisar outro usuario</p>
                    <p>Preciso do avatar</p>
                    <p>Preciso do nome do perfil</p>
                    <p>Preciso do stem id</p>
                    <p>Preciso mostrar o valor da conta</p>
                    <p>Preciso mostrar 5 amigos da conta</p>
                </aside>
                <main className="main">
                    <Items steamId={props.steamId}/>
                </main>
            </div>
        </>
    );

}

export default MainPage;