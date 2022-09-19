# Project Name

Weekend Reach Gallery

## Description

This project demonstrates familiarity with passing prop functions through to child components. This weekend project was completed in two shorter sessions; 3 hours for setup and routes, and 4 hours to code and test base-mode functions. Due to time constraints this weekend, the content was selected the programmer's enjoyment while working, and is not intendended to be public-facing.

## Function

    The assignment is a photo gallery with two interactive features: "like" and image toggle. 

    Gallery image data is stored as an object array on the server. object data includes an ID, a path ('/image.jpg'), a description string, and # of user 'likes.'

    Project has three stacked components:
    App (parent) -->
        GalleryList --->
            GalleryItem

**App** retrieves gallery image data and stores as 'state' through an axios GET request to server.

adds 'likes' to gallery images through axios PUT request to server. 

**GalleryList** receives image data  (gallerList) and PUT function as props from App.

loops through galleryList. for each item, calls GalleryItem component. passes PUT function (likeItem), and individual item to GalleryItem component as props.

**GalleryItem** Recieves PUT function and gallery item data as props.

stores 'toggleStatus' for item as a boolean; default is TRUE.

Item card contains a display field, a 'like' button, and a like counter. 'like' button calls likeItem function (axios method 'PUT; url '/gallery/likes/id') on user click.

user click on display field sets toggle status to boolean opposite. item image dislpays on toggle = TRUE; item discription displays on toggle = FALSE.

## Built With

- react.js
- node.js
- express
- 