import { Component } from 'react';
import Axios from 'axios';

class Pokedex extends Component {
  constructor() {
    super()
    this.state = {
      pokemonName: 'Pikachu',
      pokemonImage: ''
    }
  }

// async componentDidMount() {
//   const res = await Axios.get(`https://pokeapi.co/api/v2/${this.state.pokemonName}`)
// }

componentDidMount() {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`).then((res) => {
      this.setState({
        pokemonImage: res.data.sprites.front_default
      });
    })
  }

componentDidUpdate(prevProps, prevState) {
  if (this.state.pokemonName === '') {
    return
  }
  if (prevState.pokemonName === this.state.pokemonName) {
    return
  }
  // is the current state the same? This stops constant refreshing
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`).then((res) => {
      this.setState({
        pokemonImage: res.data.sprites.front_default
      })
    }).catch((err) => {
      this.setState({
        pokemonImage: ''
      })
    })
}

  render() {
    return(
      <div>
      {/* input component*/
      /* state to hold the image: this will be a URL string */
      /* this will be come the src of an HTML img tag, */
      /* which references the image stored in state */}
      <h1>Fischer-Price My First Pokedex</h1>
      <input value={this.state.pokemonName} onChange={(e) => {this.setState({pokemonName: e.target.value.toLowerCase()})}} />
          <div>
            <img src={this.state.pokemonImage}/>
          </div>
      </div>
    )
  }

}




export default Pokedex;
