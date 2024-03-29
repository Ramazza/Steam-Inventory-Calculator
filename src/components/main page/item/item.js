import React, { useEffect, useState } from "react";
import "./styles.css";

function Items(props) {
    
    const url = `https://www.steamwebapi.com/steam/api/inventory?key=KTOSODJ0A3SVTTU9&steam_id=${props.steamId}&currency=BRL`

    const [loading, setLoading] = useState(true);

    const [items, setItems] = useState({
        valor: [],
        imgURL: [],
        nome: [],
        raridade: [],
    });
    const [error, setError] = useState(null);
    
    function getRarityColor(rarity, aplpha = 0.19) {
        switch (rarity) {
            // Guns
            case 'contraband':
                return `rgba(235, 75, 75, ${aplpha})`; // knife
            case 'covert':
                return `rgba(235, 75, 75, ${aplpha})`; // red
            case 'classified':
                return `rgba(211, 44, 230, ${aplpha})`; // pink
            case 'restricted':
                return `rgba(136, 71, 255, ${aplpha})`; // purple
            case 'mil-spec grade':
                return `rgba(75, 105, 255, ${aplpha})`; // blue
            case 'industrial grade':
                return `rgba(94, 152, 217, ${aplpha})`; // light blue
            // Agents
            case 'master':
                return `rgba(235, 75, 75, ${aplpha})`; // red
            case 'superior':
                return `rgba(211, 44, 230, ${aplpha})`; // pink
            case 'exceptional':
                return `rgba(136, 71, 255, ${aplpha})`; // purple
            case 'distinguished':
                return `rgba(75, 105, 255, ${aplpha})`; // blue
            // Stickers
            case 'extraordinary':
                return `rgba(211, 44, 230, ${aplpha})`; // pink
            case 'exotic':
                return `rgba(136, 71, 255, ${aplpha})`; // purple
            case 'remarkable':
                return `rgba(75, 105, 255, ${aplpha})`; // blue
            case 'high grade':
                return `rgba(94, 152, 217, ${aplpha})`; // light blue
            // Grey items and cases
            default:
                return `rgba(176, 195, 217, ${aplpha})`; // default color(grey)
        }
    }
    
    useEffect(() => {

        async function getData() {
        
            try {

                setLoading(true);

                const response = await fetch(url);
                const data = await response.json();
    
                const updatedItems = {
                    valor: [],
                    imgURL: [],
                    nome: [],
                    raridade: [],
                };
    
                data.forEach(item => {
                    updatedItems.valor.push(item.pricelatestsell);
                    updatedItems.imgURL.push(item.image);
                    updatedItems.nome.push(item.marketname);
                    updatedItems.raridade.push(item.rarity);
                });
    
                const sum = updatedItems.valor.reduce((acc, curr) => acc + parseFloat(curr), 0);
                props.onTotalValue(sum.toFixed(2)); 
    
                setItems(updatedItems);  
                setLoading(false);

            } catch (error) {
                setError(error.message);
                props.onError(error.message); 
                console.log(`Fetch error: ${error}`);
            }

        }
    

        getData()
    
    }, [url]);

    if (loading) {
        return <div className="loading">Carregando...</div>; 
    }

    return (
        <>
            <div className="item-wrapper">
                {items.nome.map((itemName, index) => (
                    <div className="item" style={{ 
                    backgroundImage: `radial-gradient(circle at 50% 100%, ${getRarityColor(items.raridade[index])}, transparent 150%)`,
                    borderBottom: `5px solid ${getRarityColor(items.raridade[index], 0.5)}`}} 
                    key={index}
                    >
                        <h4 className="valor">{`R$` + items.valor[index]}</h4>
                        <img className="imagem" src={items.imgURL[index]} alt="" />
                        <h4 className="nome">{itemName}</h4>
                    </div>
                ))}
            </div>
        </>
    );

}

export default Items;