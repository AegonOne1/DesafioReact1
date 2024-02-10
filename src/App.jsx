import './App.css'
import Header from './Components/Header'
import MyCard from './Components/MyCard'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {


  return (
    <>
    <Header 
      NombredelTitulo= "Adopta un perrito"
    />
    <MyCard
      titulo= "Soy un Titulo"
      colorBg= "secondary"
      textBg= "hola"
      image= ""
      descripcion= "Soy una descripcion"
      BsButton= "soy un botton"
      ColorButton= "success"
    />
    <MyCard
      titulo= "Soy un Titulo"
      colorBg= "secondary"
      textBg= "hola"
      image= ""
      descripcion= "Soy una descripcion"
      BsButton= "soy un botton"
      ColorButton= "success"
    />
    <Footer
      textFooter= "hola soy un footer"
    />
    </>
  )
}

export default App
