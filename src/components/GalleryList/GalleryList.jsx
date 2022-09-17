import GalleryItem from '../GalleryItem/GalleryItem.jsx'

export default function GalleryList ({galleryList, likeItem}) {
    return (
        <>
            <div id="itemGallery">
                {galleryList.map(item => (
                        <GalleryItem
                            likeItem={likeItem}
                            galleryItem={item}
                            key={item.id}
                        />
                ))}
            </div>
        </>
    );
}

