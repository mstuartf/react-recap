import React, {useState, useEffect} from 'react'
import {fetchCharacters} from "../api/characters";
import Loading from './Loading';
import CharacterRow from './CharacterRow';
import MyLink from './MyLink';

const CharacterDetail = props => {

  const [state, setState] = useState({detail: undefined});

  useEffect(() => {
    fetchCharacters(props.match.params.id).then(resp => {
      setState(s => ({...s, detail: resp}))
    });
  }, [props.match.params.id]);

  if (!state.detail) {
    return <Loading/>
  }

  const {detail} = state;

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
          <MyLink to="/characters" className='no-underline hover:underline text-blue-500 text-lg'>Back</MyLink>
        </div>
      </div>
    </div>
  );

};

export default CharacterDetail
