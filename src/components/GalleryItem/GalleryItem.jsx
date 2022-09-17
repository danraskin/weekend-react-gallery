export default function ({galleryItem, likeItem}) {




    return (
        <div className="itemCard">
            <form >
                <img className="itemImg" src={galleryItem.path} />
            </form>
            <input type="button" value="Like" onClick={e => likeItem(galleryItem.id)} />
            <p>🦑{galleryItem.likes}</p>
        </div>
    );
}