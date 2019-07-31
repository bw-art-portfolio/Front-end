
import React from 'react';
import Home from '../containers/Home';



const ArtistList = props => {
    console.log('artistslist', props)
    return (
        <div>
            { props.artists.map((artist) => (
                <div>
                    <Home
                        firstName={artist.fname}
                        lastName={artist.lname}
                        avatar={artist.avatar}
                        image={artist.src}
                        alt={artist.alt}
                        likes={artist.likes}
                        key={artist.id}
                        
                    />
              </div>

            ))}
        </div>
    )
}

export default ArtistList;




