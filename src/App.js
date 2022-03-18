import Header from "./Header"
import Footer from "./Footer"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";

import MiProvider from "./Context/miContexto";

import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Carrito from "./Carrito"
import { Container } from 'react-bootstrap'

const App = () => {
    return (
        <BrowserRouter>
            <MiProvider>
                <Header />
                <Container as="main" fluid>
                    <Routes>
                        <Route path="/" element={<ItemListContainer/>} />
                        <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
                        <Route path="/producto/:idProducto" element={<ItemDetailContainer/>} />
                        <Route path="/carrito" element={<Carrito/>} />
                    </Routes>
                </Container>
            </MiProvider>
            <Footer />
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App