import React from "react";
import Modal from "react-modal";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "none",
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 999,
  },
};

Modal.setAppElement("#root");

const ModalComponent = ({ isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={customStyles}
    contentLabel="Order Form Modal"
  >
    <div className="form_wrapper">
      <button onClick={onRequestClose} className="close-modal-button">
        &times;
      </button>
      <div className="form_container">
        <div className="title_container">
          <h2>ЗАЯВКА НА УЧАСТИЕ В ФОТОТУРЕ</h2>
        </div>
        <div className="row clearfix">
          <div>
            <form>
              <div className="row clearfix">
                <div className="col_half">
                  <div className="input_field">
                    {" "}
                    <span>
                      <i aria-hidden="true" className="fa-user">
                        <FontAwesomeIcon icon={faUser} />
                      </i>
                    </span>
                    <input type="text" name="name" placeholder="ИМЯ *" />
                  </div>
                </div>
                <div className="col_half">
                  <div className="input_field">
                    {" "}
                    <span>
                      <i aria-hidden="true" className="fa-user">
                        <FontAwesomeIcon icon={faUser} />
                      </i>
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="ФАМИЛИЯ *"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="input_field">
                {" "}
                <span>
                  <i aria-hidden="true" className="fa-envelope">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL *"
                  required
                />
              </div>
              <div className="input_field">
                {" "}
                <span>
                  <i aria-hidden="true" className="fa-phone">
                    <FontAwesomeIcon icon={faPhone} />
                  </i>
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="ТЕЛЕФОН *"
                  required
                />
              </div>
              <div className="input_field select_option">
                <select>
                  <option>Выбери фототур</option>
                  <option>ЮАР</option>
                  <option>ИНДОНЕЗИЯ</option>
                  <option>АЛЖИР</option>
                </select>
                <div className="select_arrow"></div>
              </div>
              <div className="input_field checkbox_option">
                <input type="checkbox" id="cb1" />
                <label htmlFor="cb1">
                  Согласие на обработку персональных данных.
                </label>
              </div>
              <div className="input_field checkbox_option">
                <input type="checkbox" id="cb2" />
                <label htmlFor="cb2">
                  Согласие с Условиями пользовательского соглашения.
                </label>
              </div>
              <input className="button-form" type="submit" value="Отправить" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </Modal>
);

export default ModalComponent;