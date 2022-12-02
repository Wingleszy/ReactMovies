import React from "react"
import { Movies } from "../components/Movies"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
        state = {
            movies: [],
            loading: true
        }

        handleCategory = (event) => {
            this.setState({category: event.target.value})
        }

        handleSearch = (searchIndex, type) => {
            this.setState({loading: true})
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchIndex}${type !== "all" ? `&type=${type}` : ""}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
        }

        componentDidMount() {
           fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=interstellar`)
           .then(response => response.json())
           .then(data => this.setState({movies: data.Search, loading: false}))
        }

    render() {

        const {loading} = this.state

        return <main className="container content">
            <Search cb={this.handleSearch} searchCategory={this.handleCategory}/>
            {
                !loading ? <Movies movies={this.state.movies}/> : <Preloader />
            }
        </main>
    }
}

export {Main} 
