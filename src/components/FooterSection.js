import React from 'react';
import './Footer.css';
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer id="footer-section" className="footer mt-2">
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="footer-title">Подпишитесь на новости!</h3>
              <p className='footer-text'>По подписке Вам станут доступны специальные предложения и закрытые распродажи, которых нет в открытом доступе.</p>
            </div>
          </div>
          <div className="row footer-newsletter justify-content-center">
            <div className="col-lg-8">
            <form className="send">
              <div className="form col-row">
                <div>
                  <div className="inputField">
                    <input name="email" type="email" placeholder="EMAIL *" required=""/>
                  </div>
                </div>
                <div>
                  <div className="inputField">
                    <input name="name" type="text" placeholder="ИМЯ И ФАМИЛИЯ *" required=""/>
                  </div>
                </div>
                <div>
                  <div className="inputField">
                    <input name="phone" type="text" placeholder="ТЕЛЕФОН *" required=""/>
                  </div>
                </div>
                <div>
                  <div className="inputField">
                    <button className="text-uppercase" type="submit">Отправить <span className="spinner hidden"></span></button>
                  </div>
                </div>
              </div>
            </form>
              {/* <form>
                <input type="text" name="name" placeholder="Ваше Имя" required />
                <input type="email" name="email" placeholder="Ваш Email" />
                <input type="submit" value="Отправить" />
              </form> */}
            </div>
            <p className='footer-privacy'>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности.</p>
          </div>
          <div className="social-links">
          <a href="https://www.youtube.com/your_channel" target="_blank" rel="noopener noreferrer" className="twitter"><FaYoutube className="github" /></a>
            <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer" className="facebook"><FaFacebook className="github" /></a>
            <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer" className="instagram"><FaInstagram className="github" /></a>
            {/* <a href="/" className="linkedin"><i className="fab fa-linkedin"></i></a> */}
          </div>
        </div>
      </div>
      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; 2024 <strong><span>RoniKa</span></strong>. All Rights Reserved
        </div>
        {/* <div className="credits">
        All rights reserved.
        </div> */}
      </div>
    </footer>
  );
}

export default FooterSection;