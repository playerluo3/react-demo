import '../components/Dropdown.css';
import DropItem from './DropItem';

const Dropdown = ({ items, isDrop, onDrop }) => {
    return (
        <div className="dropdown">
            <button className="dropdown-btn" onClick={onDrop} >select items&nbsp;
                <i className={`fas fa-caret-${isDrop ? 'up' : 'down'}`}></i>
            </button>
            <ul className={`dropdown-list${isDrop ? '.active' : ''}`}>
                {
                    items.length > 0 ?
                        items.map((item) => <DropItem key={item.itemId} itemId={item.itemId} itemName={item.itemName} />) : 'No data found'
                }
            </ul>
        </div>
    )
}

export default Dropdown
