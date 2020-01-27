export const fetchCharacters = (id) => {

    let url = 'https://rickandmortyapi.com/api/character/';

    if (id) {
        url += id;
    }

    return fetch(url, {method: 'get',})
        .then(response => response.json());


};
