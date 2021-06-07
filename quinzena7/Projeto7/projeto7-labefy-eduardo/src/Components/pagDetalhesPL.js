// import React from 'react'
// import axios from 'axios'

// export default class pagDetalhesPL extends React.Component {
//     state = {
//         musicas: [],
//         procurar: ""
//     }

//     cuidaProcurar = (e) => {
//         this.setState({procurar: e.target.value})
//     }
    

//     pegarMusicas = async() => {
        
//         procurarLista = (busca) => {
//             const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${busca}`
//             axios.get(url, {
//                 headers: {
//                     Authorization: "eduardo-veloso-munoz"
//                 }
//             })
//         }
//         const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`
//     }

//     render () {
//         return (
//             <div>
//                 <h1>Detalhes das Playlists</h1>
//                 <input
//                     placeholder={"Digite o nome"}
//                     value={this.state.procurar}
//                     onChange={this.cuidaProcurar}
//                 />
//                 <button onClick={this.procurarLista}>Procurar</button>
//             </div>
//         )
//     }
// }