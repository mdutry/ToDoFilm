import React, { Component, createContext } from 'react';

export const WishlistContext = createContext();

class WishlistContextProvider extends Component {
    state = {
        movieListe: [],
        serieListe: [],
        personListe: []
    }

    addMovie = (target) => {
        this.state.movieListe.push(target)
    }

    removeMovie = (target) => {
        const array = this.state.movieListe
        const index = array.indexOf(target)
        array.splice(index, 1)
        this.setState({
            movieListe: array
        })
    }

    addSerie = (target) => {
        this.state.serieListe.push(target)
    }

    removeSerie = (target) => {
        const array = this.state.serieListe
        const index = array.indexOf(target)
        array.splice(index, 1)
        this.setState({
            serieListe: array
        })
    }

    addPerson = (target) => {
        this.state.personListe.push(target)
    }

    removePerson = (target) => {
        const array = this.state.personListe
        const index = array.indexOf(target)
        array.splice(index, 1)
        this.setState({
            personListe: array
        })
    }

    render() {
        return (
            <WishlistContext.Provider
                value={{
                    ...this.state,
                    addMovie: this.addMovie,
                    removeMovie: this.removeMovie,
                    addSerie: this.addSerie,
                    removeSerie: this.removeSerie,
                    addPerson: this.addPerson,
                    removePerson: this.removePerson
                }}
            >
                {this.props.children}
            </WishlistContext.Provider>
        );
    }
}
 
export default WishlistContextProvider;