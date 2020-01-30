import React, {useEffect, useState} from 'react'
import {fetchCharacters} from "../api/characters";
import Loading from './Loading';
import CharacterCard from './CharacterCard';

const CharacterList = props => {

  const [state, setState] = useState({characters: []});

  useEffect(() => {
    fetchCharacters().then(resp => {
      setState(s => ({...s, characters: resp.results}))
    });
  }, []);

  if (!state.characters.length) {
    return <Loading/>
  }

  const {characters} = state;
  const url = props.match.url;

  return (
    <div className='p-8 max-w-3xl m-auto'>
      {characters.map(character => <CharacterCard key={character.id} character={character} url={url}/>)}
    </div>
  )

};

export default CharacterList
