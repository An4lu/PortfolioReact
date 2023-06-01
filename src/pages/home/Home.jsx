import Profile from "../../assets/eudomine.png"
import {Link} from 'react-router-dom'
import {FaArrowRight} from "react-icons/fa"
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="hom__content">
        <div className="home__data">
          <h1 className="home__title">
          <span>Sou Ana Dourado.</span> Web Designer
          </h1>

          <p className="home__description">
            Opa, entrou na area da estágiaria! 
            Sou Web Designer & Desenvolvedora 
            Front-end focada na programação limpa.  
            Sou apaixonada por programar e aprender
            coisas novas!
          </p>

          <Link to='/about' className='button'>
            Mais sobre mim. . . 
            <span className='button__icon'>
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home
