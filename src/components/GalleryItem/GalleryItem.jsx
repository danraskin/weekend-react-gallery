import { useState } from 'react';

export default function ({galleryItem, likeItem}) {

let [ toggleStatus, setToggle ] = useState(true);

    return (
        <div className="itemCard">
            <form className="displayField" onClick={e => setToggle(!toggleStatus)}>
                {toggleStatus ? <img className="image" src={galleryItem.path} /> : <div className="text">{galleryItem.description}</div>}
            </form>
            <input type="button" value="Like" onClick={e => likeItem(galleryItem.id)} />
            <p>🦑{galleryItem.likes}</p>
        </div>
    );
}