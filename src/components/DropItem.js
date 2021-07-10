import { useState } from 'react';
import './DropItem.css';

const DropItem = ({ itemId, itemName }) => {

    const [isSelected, setIsSelected] = useState(false);

    return (
        <li >
            <label className={`item ${isSelected && "item-selected"}`} htmlFor={itemId}>
                <input id={itemId} type="checkbox" value={itemName} onChange={(e) => setIsSelected(e.currentTarget.checked)} />{itemName}
            </label>
        </li>
    )
}

export default DropItem
