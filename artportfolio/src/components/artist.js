import React, { Component } from 'react';
import axios from 'axios';

class Artist extends Component {
    state = {
        artists: []
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.artists.map(artist => (
                        <li key={artist.id}>
                            {artist.fname}
                        </li>
                    ))}
                </ul>
            </div>

        );
    }

    componentDidMount() {
        const headers = {
            Authorization: localStorage.getItem('token')
        }

        axios
            .get(https://artportfoliobw.herokuapp.com/artists/, {headers})
            .then(res => {
                this.setState({ artists: res.data });
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export default Artist;