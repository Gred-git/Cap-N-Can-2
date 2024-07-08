import React from "react";

import './Search.css';
import GalleryContainer from '../../src/components/GalleryContainer/GalleryContainer.js'; 


const galleryItems = [
    {
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },
    {
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    }];
 
const Search = () => {
    return (
        
        <div className="Search">

        <header className="Search-header">

            <p> Welcome to Cap N' Can </p>

            <GalleryContainer galleryItems={galleryItems} />


        </header>


        </div>
    );
};
 
export default Search;