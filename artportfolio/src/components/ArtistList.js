import axios from 'axios';
import React, { Component } from 'react';

export default class ArtistList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            'fname': '',
            'lname': '',
            'avatar': '',
            'src': '',
            'alt': '',

        }
    }

    componentDidMount() {
        axios
            .get('https://artportfoliobw.herokuapp.com/')
            .then(res => {
                console.log('res', res)
                this.setState({ artists: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                {this.state.artists.map(artist => {
                    return (
                        <Home
                            name={artist.fname}
                            avatar={artist.avatar}
                            Image={artist.src}
                            Imgalt={artist.alt}
                            key={artist.id}
                        />
                    )
                })}

            </div>
        )
    }

}


