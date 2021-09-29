import './Backdrop.css';

const Backdrop = ({ isDrop, onHide }) => {
    return (
        isDrop &&
        <div className="backdrop" onClick={onHide}>

        </div>
    )
}

export default Backdrop
