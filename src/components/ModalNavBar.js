import React from 'react';
import Modal from 'react-modal';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255, 255, 255, 0)', // Прозрачный фон для контента модального окна
    border: 'none',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Полупрозрачный фон для обертки модального окна
    zIndex: 999
  },
};

Modal.setAppElement('#root'); // Установите корневой элемент для доступности


const ModalComponent = ({ isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={customStyles}
    contentLabel="Order Form Modal"
  >
    {/* <OrderForm /> */}
    <div class="form_wrapper">
    <button onClick={onRequestClose} className="close-modal-button">
      &times;
    </button>
    <div class="form_container">
      <div class="title_container">
        <h2>ЗАЯВКА НА УЧАСТИЕ В ФОТОТУРЕ</h2>
      </div>
      <div class="row clearfix">
        <div class="">
          <form>
          <div class="row clearfix">
              <div class="col_half">
                <div class="input_field"> <span><i aria-hidden="true" class="fa-user"><FontAwesomeIcon icon={faUser} /></i></span>
                  <input type="text" name="name" placeholder="ИМЯ *" />
                </div>
              </div>
              <div class="col_half">
                <div class="input_field"> <span><i aria-hidden="true" class="fa-user"><FontAwesomeIcon icon={faUser} /></i></span>
                  <input type="text" name="name" placeholder="ФАМИЛИЯ *" required />
                </div>
              </div>
            </div>
            <div class="input_field"> <span><i aria-hidden="true" class="fa-envelope"><FontAwesomeIcon icon={faEnvelope} /></i></span>
              <input type="email" name="email" placeholder="EMAIL *" required />
            </div>
            <div class="input_field"> <span><i aria-hidden="true" class="fa-phone"><FontAwesomeIcon icon={faPhone} /></i></span>
              <input type="tel" name="phone" placeholder="ТЕЛЕФОН *" required />
            </div>
            {/* <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
              <input type="password" name="password" placeholder="Password" required />
            </div>
            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
              <input type="password" name="password" placeholder="Re-type Password" required />
            </div> */}
                {/* <div class="input_field radio_option">
                <input type="radio" name="radiogroup1" id="rd1"/>
                <label for="rd1">Male</label>
                <input type="radio" name="radiogroup1" id="rd2"/>
                <label for="rd2">Female</label>
                </div> */}
                <div class="input_field select_option">
                  <select>
                    <option>Выбери фототур</option>
                    <option>ЮАР</option>
                    <option>ИНДОНЕЗИЯ</option>
                    <option>АЛЖИР</option>
                  </select>
                  <div class="select_arrow"></div>
                </div>
              <div class="input_field checkbox_option">
                  <input type="checkbox" id="cb1"/>
                  <label for="cb1">Согласие на обработку персональных данных.</label>
              </div>
              <div class="input_field checkbox_option">
                  <input type="checkbox" id="cb2"/>
                  <label for="cb2">Согласие с Условиями пользовательского соглашения.</label>
              </div>
            <input class="button-form" type="submit" value="Отправить" />
          </form>
        </div>
      </div>
    </div>
  </div>
  </Modal>
);

export default ModalComponent;