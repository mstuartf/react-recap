import React from 'react';
import {Link} from "react-router-dom";

const CharacterCard = ({character, url}) => (
    <Link key={character.id} className="p-8 shadow mb-4 flex justify-between hover:bg-gray-100" to={`${url}/${character.id}`}>
        <div className='text-left'>
            <div className='text-3xl text-gray-700'>{character.name}</div>
            <div className='text-xl text-gray-500'>{character.species}</div>
        </div>
        <img className='h-32' src={character.image}/>
    </Link>
);

export default CharacterCard;
