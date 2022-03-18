import { createContext, useState } from "react";

export const contexto = createContext()

const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);   

    const addItem = (producto,cantidad) => {     
        const copiaCarrito = [...carrito];
        const itemAlCarrito = { ...producto, cantidad};     
       
        if(yaExisteEnCarrito(producto.id)) {            
            let index = copiaCarrito.findIndex( item =>  item.id === producto.id);
            copiaCarrito[index].cantidad += cantidad;
            setCarrito(copiaCarrito)
        } 
        else{
            copiaCarrito.push(itemAlCarrito);
            setCarrito(copiaCarrito);
        }        
    }

    const yaExisteEnCarrito = (id) => {
        return carrito.some(item =>  item.id === id);
    }

    const borrarProdDelCarrito = (id) => {
        //filter
    }

    const limpiarCarrito = () => {
        setCarrito([])
    }

    const calcCantidad = () =>{
        let cantidad = 0;
        carrito.forEach( item => cantidad = item.cantidad);
        return cantidad;
    }

    const valorDelContexto = {
        carrito: carrito,      
        addItem: addItem,
        calcCantidad: calcCantidad
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider