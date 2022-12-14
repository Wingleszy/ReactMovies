import React from 'react';
import { Movie } from './Movie';

function Movies(props) {

    const {movies = []} = props

    return <div className="movies">
        {movies.length ? movies.map((movie, ind) => {
            return <Movie key={ind} {...movie}/>
        })
        : 
            <h4>Ничего не найдено</h4>
    }
    </div>;
}

export { Movies };