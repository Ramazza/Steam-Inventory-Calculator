import React from "react";
import "./styles.css";
import Items from "./item/item";

function MainPage() {

    return(

        <>
            <span>{}</span>
            <div className="wrapper">
                <aside></aside>
                <main className="teste">
                    <Items/>
                </main>
            </div>
        </>

    );

}

export default MainPage;