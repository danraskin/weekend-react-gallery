import GalleryItem from '../GalleryItem/GalleryItem.jsx'

export default function GalleryList ({galleryList}) {
    return (
        <>
            <div>EATING FILTH AND TRANSFORMING IT
                {galleryList.map(item => (
                        <GalleryItem
                            galleryItem={item}
                            key={item.id}
                        />
                ))}
            </div>
        </>
    );
}

