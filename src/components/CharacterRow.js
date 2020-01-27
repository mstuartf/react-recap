import React from 'react';

const CharacterRow = ({field, value}) => (
    <div className='w-full mt-4 flex justify-between'>
        <div className='text-gray-500 capitalize'>
            {field}
        </div>
        <div className='text-gray-700'>
            {value}
        </div>
    </div>
);

export default CharacterRow;
