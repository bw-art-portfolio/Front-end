// import axios from 'axios';
import React, { Component } from 'react';
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
                        Image={artist.src}
                        alt={artist.alt}
                        key={artist.id}
                        likes={artist.likes}
                    />
              </div>

            ))}
        </div>
    )
}

export default ArtistList;




// export default class ArtistList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             aritsts: [],
//             'fname': '',
//             'lname': '',
//             'avatar': '',
//             'src': '',


//         }
//      }


//     render() {

//         return (
//             <div>

//                 {props.artists.map(artist => {
//                     return (
//                         <div>
//                         <Home
//                             name={artist.fname}
//                             avatar={artist.avatar}
//                             Image={artist.src}

//                             key={artist.id}
//                         />
//                         </div>
//                     )
//                 })}

//             </div>
//         )
//     }

// }


