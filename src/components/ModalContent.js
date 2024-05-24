import './Modal.css';

const ModalContent = ({setIsOpen}) => {
    return (
        <div className="modal_content">
            <p>Modal</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
    )
}

export default ModalContent;