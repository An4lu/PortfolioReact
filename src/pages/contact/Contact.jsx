import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

import {FiSend} from 'react-icons/fi';
import './contact.css'

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Entre em <span>Contato!</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">
            Não seja timido!
          </h3>

          <p className="contact__description">
            Sinta-se a vontade para entrar em contato comigo. Eu estou
            aberta para discutir novos projetos, ideias criativas e 
            oportunidades que deseja compartilhar e inovar!
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>

              <div>
                <span className="info__title">Mande um Email </span>
                <h4 className="info__desc">ana.dourado@lab2dev.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>

              <div>
                <span className="info__title">Manda um zap </span>
                <h4 className="info__desc">+55 11 93360-4856</h4>
              </div>
            </div>

          </div>

          <div className="contact__socials">
            <a href="https://www.instagram.com/0liveirana/" className="contact__social-link">
              <FaInstagram/>
            </a>

            <a href="https://github.com/An4lu" className="contact__social-link">
              <FaGithub/>
            </a>

            <a href="https://www.linkedin.com/in/ana-dourado/" className="contact__social-link">
              <FaLinkedin/>
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" 
              placeholder="Seu Nome" 
              className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="email" 
              placeholder="Seu Email" 
              className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="text" 
              placeholder="Seu Assunto" 
              className="form__control" />
            </div> 
          </div>

          <div className="form__input-div">
            <textarea 
            placeholder="Sua Mensagem" 
            className="form__control textarea"></textarea>    
          </div>

          <button className='button'>
            Mande uma Mensagem 
            <span className="button__icon contact__button-icon">
              <FiSend/>
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
