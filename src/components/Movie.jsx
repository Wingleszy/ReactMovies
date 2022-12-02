import React from "react"


export function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props
    return <div id={id} className="card">
        <div className="card-image waves-effect waves-block waves-light">
            {poster === "N/A" ? <img className="activator" src={`https://via.placeholder.com/300x425?text=${title}`} alt=""/> : <img className="activator" src={poster} alt=""/>}
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">{type}</i></span>
            <p>{year}</p>
        </div>
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
    </div>
}