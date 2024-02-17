import React from "react";
import "./styles.css";
import Items from "./item/item";

function MainPage() {

    return(
        <>
            <div className="wrapper">
                <aside className="aside">
                    <p></p>
                </aside>
                <main className="main">
                    <Items/>
                </main>
            </div>
        </>
    );

}

export default MainPage;