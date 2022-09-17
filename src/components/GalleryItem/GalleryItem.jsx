import { useState } from 'react';

export default function ({galleryItem, likeItem}) {

let [ toggleStatus, setToggle ] = useState(true);
//toggle output between:
//     image ( <img>{item.path}</img> ) and
//     description ( <p>{item.description}

//click listener on itemCard child
//toggle function
const toggleCard = () => {
    setToggle(!toggleStatus);
}

    return (
        <div className="itemCard">
            <form className="displayField" onClick={e => toggleCard()}>
                {toggleStatus ? <img className="itemImg" src={galleryItem.path} /> : <div>{galleryItem.description} </div>}
            </form>
            <input type="button" value="Like" onClick={e => likeItem(galleryItem.id)} />
            <p>🦑{galleryItem.likes}</p>
        </div>
    );
}