import React from 'react';
import ArtistProfile from '../containers/ArtistProfile';

//needs to pull specific to one artist, images. 

const Artist = props => {
    // console.log('artistslist', props)
    
    return (
        <div>
            { props.artists.map((artist) => (
                <div>
                    <ArtistProfile
                        desc={artist.description}
                        image={artist.src}
                        alt={artist.alt}
                        likes={artist.likes}
                        photoId={artist.photos}
                    />
              </div>

            ))}
        </div>
    )
}

export default Artist;


