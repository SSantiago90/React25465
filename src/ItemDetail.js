import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import Contador from './Contador';

import { contexto } from './Context/miContexto';

const ItemDetail = ( {item} ) => {
    const { addItem } = useContext(contexto);

    const [seleccionado,setSeleccionado] = useState(false)

    const onAdd = (cant) => {
        console.log('Añadir al carrito',cant)
        setSeleccionado(cant);        
        //llamamos a "addItem" del context pasando la data del item, y la cantidad del ItemCount
        addItem(item, cant); 
    }

    return (
        <article className="itemDetail">
            <img src={item.image} alt="" />
            <div className="titulos">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <div>
                <Rate onChange={(val)=>{console.log(val)}} allowHalf count={5} value={item.rating?.rate}/>
                <span>Rates : {item.rating?.count}</span>
                </div>
            </div>
            <p className="descripcion">{item.description}</p>
            <Contador stock={5} initial={1} onAdd={onAdd}/>
            <Link to="/carrito">carrito</Link>
        </article>
    )
}

export default ItemDetail