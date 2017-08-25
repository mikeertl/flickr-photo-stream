import React from 'react';
import PropTypes from 'prop-types';

/**
 * A visual element containing a Flickr user's photo and associated metadata. Consists of: 
 *  photo, photoTitle (links to photo on Flickr),  author (links to author's Flickr page),
 *  description,  tags
 */
const Photocard = ({ 
    id, title, thumbnail, flickrPhotoUrl, author, flickrAuthorUrl, descriptionHtml, tags, photoCardInfo}) => {
    return (
        <div className="photo-card">
            - In PhotoCard -
             Title: {title}
        </div>
    );                    
};

Photocard.propTypes = {
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    title: PropTypes.string.isRequired,
    flickrPhotoUrl: PropTypes.string,
    author: PropTypes.string,
    flickrAuthorUrl: PropTypes.string,
    descriptionHtml: PropTypes.string,
    tags: PropTypes.string,
};

export default Photocard;
