import GalleryItem from '../GalleryItem/GalleryItem.jsx'

export default function GalleryList ({galleryList, likeItem}) {
    return (
        <>
            <div id="itemGallery">
                {galleryList.map(item => (
                        <GalleryItem
                            key={item.id}
                            likeItem={likeItem}
                            galleryItem={item}
                            
                        />
                ))}
            </div>
        </>
    );
}

