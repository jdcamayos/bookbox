import { heroes } from '../data/heroes';


export const getBooksByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return heroes.filter( book => book.superhero.toLocaleLowerCase().includes( name )  );

}