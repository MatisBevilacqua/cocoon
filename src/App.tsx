import { useState } from 'react'
import './App.css';
import Header from './Components/Header';
import Home from  './Components/Home';
import Propos from './Components/Propos';
import Footer from "./Components/Footer";
import Realisations from "./Components/Realisations";

function App() {

    const [activeComponent, setActiveComponent] = useState('Home');
    const [titleHeader, setTitleHeader] = useState("La vie commence après avoir mis de l'odre dans votre maison")
    const [imgHeader, setImgHeader] = useState('')

    const handleActiveComponentChange = (component: string): void => {
        setActiveComponent(component);
        if (component === 'Propos') {
            setTitleHeader('À props de moi');
        }

        if(component === 'Realisations'){
            setTitleHeader('Mes réalisations');
        }

        if(component === 'Acceuil'){
            setTitleHeader('La vie commence après avoir mis de l\'odre dans votre maison');
        }
    }

    const renderComponent = () => {
        switch(activeComponent) {

            case 'Acceuil':
                return <Home setActiveComponent={handleActiveComponentChange}/>

            case 'Realisations':
                return <Realisations/>

            case 'Propos':
                return <Propos/>

            default:
                return <Home setActiveComponent={handleActiveComponentChange}/>;
        }
    }


  return (
    <>
        <Header setActiveComponent={handleActiveComponentChange} title={titleHeader} img={imgHeader}/>
        {renderComponent()}
        <Footer/>
    </>
  )
}

export default App
