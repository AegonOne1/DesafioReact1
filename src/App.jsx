import './App.css'
import Header from './Components/Header'
import MyCard from './Components/MyCard'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {


  return (
    <>
    <Header />
    <MyCard
      titulo= "Soy un Titulo"
      image= ""
      descripcion= "Soy una descripcion"
      BsButton= "soy un botton"
    />
    </>
  )
}

export default App
