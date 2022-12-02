import React from "react";

class Search extends React.Component {
    state = {
        search: "interstellar",
        category: "all"
    }

    handleFilter = (event) => {
        this.setState({category: event.target.dataset.type})
        this.props.cb(this.state.search, this.state.category)
    }


    render() {
        return <div className="row">
            <div className="input-field">
                <input
                    className="validate"
                    placeholder="Search"
                    type="search"
                    value={this.state.search}
                    onChange={(e) => { this.setState({ search: e.target.value }) }}
                    onKeyUp={(e) => {
                        if (e.keyCode === 13) {
                            e.preventDefault()
                            this.props.cb(this.state.search, this.state.category)
                        }
                    }}
                />
                <button className="btn btn-search" onClick={() => { this.props.cb(this.state.search, this.state.category) }}>Search</button>
            </div>
            <form action="#">
                <p>
                    <label>
                        <input name="group1" type="radio" checked={this.state.category === "all"} data-type="all" onChange={this.handleFilter}/>
                        <span>All</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" type="radio" checked={this.state.category === "movie"} data-type="movie" onChange={this.handleFilter}/>
                        <span>Movies</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" type="radio" checked={this.state.category === "series"} data-type="series" onChange={this.handleFilter}/>
                        <span>Series</span>
                    </label>
                </p>
            </form>
        </div>
    }
}

export { Search }