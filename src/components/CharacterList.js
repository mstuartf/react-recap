import React, {Component} from 'react'
import {fetchCharacters} from "../api/characters";
import Loading from './Loading';
import CharacterCard from './CharacterCard';

class CharacterList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        fetchCharacters().then(resp => this.setState({...this.state, characters: resp.results}));
    }

    render() {

        if (!this.state.characters.length) {
            return (
                <Loading/>
            )
        }

        const {characters} = this.state;
        const url = this.props.match.url;

        return (
            <div className='p-8 max-w-3xl m-auto'>
                {characters.map(character => <CharacterCard key={character.id} character={character} url={url}/>)}
            </div>
        )
    }
}

export default CharacterList
