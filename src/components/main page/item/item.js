import React, { useEffect, useState } from "react";
import "./styles.css";

function Items() {
    
    const url = 'https://www.steamwebapi.com/steam/api/inventory?key=NVEJ8DCC922B0VZT&steam_id=76561198073034521&currency=BRL';
    
    const [items, setItems] = useState({
        valor: [],
        imgURL: [],
        nome: [],
        raridade: []
    });
        
    
    useEffect(() => {

        async function getData() {
        
            const response = await fetch(url);
            const data = await response.json();

            const updatedItems = {
                valor: [],
                imgURL: [],
                nome: [],
                raridade: []
              };
  
              data.forEach(item => {
                  updatedItems.valor.push(item.priceavg);
                  updatedItems.imgURL.push(item.image);
                  updatedItems.nome.push(item.marketname);
                  updatedItems.raridade.push(item.rarity);
              });

              setItems(updatedItems);
        
              console.log(updatedItems);

        }
    
        getData()
    
    }, [url]);

    return (
        <>
            <div className="item-wrapper">
                {items.nome.map((itemName, index) => (
                    <div className="item" key={index}>
                        <h4 className="valor">{`R$` + items.valor[index]}</h4>
                        <img className="imagem" src={items.imgURL[index]} alt="" />
                        <h4 className="nome">{itemName}</h4>
                        {/* <p className="raridade">{items.raridade[index]}</p> */}
                    </div>
                ))}
            </div>
        </>
    );

}

export default Items;