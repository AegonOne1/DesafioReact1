import './App.css'
import Header from './Components/Header'
import MyCard from './Components/MyCard'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {


  return (
    <div className='templateGrid'>
    
    <Header 
      NombredelTitulo= "ADOPTA UN PERRITO"
    />
    <main className='layout-main'>
      <div className='layout-container'>
        <MyCard
          titulo= "Hola soy Dexter"
          colorBg= "success"
          textBg= "Nuevo"
          image= "https://placedog.net/400/524?id=1"
          descripcion= "Proin vitae ex a velit eleifend aliquam. Fusce aliquet, neque. "
          BsButton= "Adoptar"
          ColorButton= "primary"
        />
        <MyCard
          titulo= "Hola soy Alex"
          colorBg= "danger"
          textBg= "Ya Adoptado"
          image= "https://placedog.net/400/524?id=2"
          descripcion= "Proin vitae ex a velit eleifend aliquam. Fusce aliquet, neque. "
          BsButton= "Adoptado"
          ColorButton= "secondary"
        />
         <MyCard
          titulo= "Hola soy Carl"
          colorBg= "success"
          textBg= "Nuevo"
          image= "https://placedog.net/400/524?id=3"
          descripcion= "Proin vitae ex a velit eleifend aliquam. Fusce aliquet, neque. "
          BsButton= "Adoptar"
          ColorButton= "primary"
        />
         <MyCard
          titulo= "Hola soy Ash"
          colorBg= "success"
          textBg= "Nuevo"
          image= "https://placedog.net/400/524?id=5"
          descripcion= "Proin vitae ex a velit eleifend aliquam. Fusce aliquet, neque. "
          BsButton= "Adoptar"
          ColorButton= "primary"
        />
        <MyCard
          titulo= "Hola soy Toby"
          colorBg= "success"
          textBg= "Nuevo"
          image= "https://placedog.net/400/524?id=9"
          descripcion= "Proin vitae ex a velit eleifend aliquam. Fusce aliquet, neque. "
          BsButton= "Adoptar"
          ColorButton= "primary"
        />
        <MyCard
          titulo= "Hola soy Bo"
          colorBg= "danger"
          textBg= "Ya Adoptado"
          image= "https://placedog.net/400/524?id=12"
          descripcion= "Proin vitae ex a velit eleifend aliquam. Fusce aliquet, neque. "
          BsButton= "Adoptado"
          ColorButton= "secondary"
        />
        <MyCard
          titulo= "Hola soy Bailey"
          colorBg= "danger"
          textBg= "Ya Adoptado"
          image= "https://placedog.net/400/524?id=13"
          descripcion= "Proin vitae ex a velit eleifend aliquam. Fusce aliquet, neque. "
          BsButton= "Adoptado"
          ColorButton= "secondary"
        />
        <MyCard
          titulo= "Hola soy Brian"
          colorBg= "danger"
          textBg= "Ya Adoptado"
          image= "https://placedog.net/400/524?id=17"
          descripcion= "Proin vitae ex a velit eleifend aliquam. Fusce aliquet, neque. "
          BsButton= "Adoptado"
          ColorButton= "secondary"
        />
        <MyCard
          titulo= "Hola soy Chip"
          colorBg= "danger"
          textBg= "Ya Adoptado"
          image= "https://placedog.net/400/524?id=19"
          descripcion= "Proin vitae ex a velit eleifend aliquam. Fusce aliquet, neque. "
          BsButton= "Adoptado"
          ColorButton= "secondary"
        />
        <MyCard
          titulo= "Hola soy Monty"
          colorBg= "success"
          textBg= "Nuevo"
          image= "https://placedog.net/400/524?id=65"
          descripcion= "Proin vitae ex a velit eleifend aliquam. Fusce aliquet, neque. "
          BsButton= "Adoptar"
          ColorButton= "primary"
        />
      </div>
    </main>
    
    
    <Footer
      textFooter= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices. "
    />
    </div>
  )
}

export default App
