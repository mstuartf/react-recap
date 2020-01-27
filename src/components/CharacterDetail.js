import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {fetchCharacters} from "../api/characters";
import Loading from './Loading';
import CharacterRow from './CharacterRow';

class CharacterDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detail: undefined
        }

    }

    componentDidMount() {
        fetchCharacters(this.props.match.params.id).then(resp => this.setState({...this.state, detail: resp}));
    }

    render() {

        if (!this.state.detail) {
            return (
                <Loading/>
            )
        }

        const { detail } = this.state;

        return (
            <div className='p-8 flex justify-center'>
                <div className='shadow flex-row items-center justify-center p-8'>
                    <img className='inline' src={detail.image}/>
                    <div className='text-lg'>
                        <CharacterRow field='name' value={detail.name}/>
                        <CharacterRow field='species' value={detail.species}/>
                        <CharacterRow field='status' value={detail.status}/>
                    </div>
                    <div className='mt-8 text-left'>
                        <Link to="/characters" className='no-underline hover:underline text-blue-500 text-lg'>Back</Link>
                    </div>
                </div>
            </div>
        );

    }

}

export default CharacterDetail
