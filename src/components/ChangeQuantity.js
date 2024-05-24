

const ChangeQuantity = ({quantity}) => {

    return (
        <div className="change-container">
            {/* <button className="btn-change" onClick={removeQuantity}><MdRemove /></button> */}
            <span className="quantity">{quantity}</span>
            {/* <button className="btn-change" onClick={addQuantity}><MdAdd /></button> */}
        </div>
    )
}

export default ChangeQuantity;