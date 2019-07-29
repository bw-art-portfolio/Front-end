import axios from 'axios';
import React, { Component } from 'react';



// class ArtistList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             artists: [ ],
//         }
//     }
//     componentDidMount() {
//         axios
//             .get('https://artportfoliobw.herokuapp.com/')
//             .then(res => {
//                 console.log(res)
//                 this.setState({ artists: res.data })})
//             .catch(err => {
//                 console.log("error", err)})

//     }

//     render () {
//         return (
//             <div>

//             </div>
//         );
//     }
// }

// export default ArtistList;