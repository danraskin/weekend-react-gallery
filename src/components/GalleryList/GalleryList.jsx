import GalleryItem from '../GalleryItem/GalleryItem.jsx'

export default function GalleryList ({getGallery}) {
    console.log('in GalleryList.jsx');
    return (
        <>
            <p>Gallery goes here</p>
            <GalleryItem />
            <img src="images/goat_small.jpg"/>
        </>
    );
}

