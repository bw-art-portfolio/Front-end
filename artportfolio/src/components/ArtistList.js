import axios from 'axios';
import { Component } from 'react';



class ArtistList extends Component {
    constructor() {
        super();
        this.state = {
            artists: [
                // artistId: '',
                // fname: '',
                // lname: '',
                // email: '',
                // avatar: '',
                //     photos: [
                //         {
                //             photoId: '',
                //             src: '',
                //             description: '',
                //             alt: '',
                //             likes: '',
                //             createdAt: ''
                //         },
                //     ],
            ],
        }

        componentDidMount() {
            axios
                .get('https://artportfoliobw.herokuapp.com/artists/:artistId')
                .then((res => {
                    console.log("artist", res.data)
                    this.setState({ artists: res.data })
                })
                    .catch(err => {
                        console.log("error", err)
                    })
        }
    }