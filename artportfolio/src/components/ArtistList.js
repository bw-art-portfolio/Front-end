import axios from 'axios';
import React, { Component } from 'react';
import Home from '../containers/Home';

export default class ArtistList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'fname': '',
            'lname': '',
            'avatar': '',
            'src': '',
            

        }
     }


    render() {
        // console.log("artists",  )
        return (
            <div>
                {this.state.props.artists.map(artist => {
                    return (
                        <Home
                            name={artist.fname}
                            avatar={artist.avatar}
                            Image={artist.src}
                            
                            key={artist.id}
                        />
                    )
                })}

            </div>
        )
    }

}


