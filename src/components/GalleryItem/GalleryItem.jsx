export default function ({galleryItem}) {
    return (
        <div className="itemCard">
            <img className="itemImg" src={galleryItem.path} />
        </div>
    );
}