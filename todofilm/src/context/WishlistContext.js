import React, { Component, createContext } from 'react';

export const WishlistContext = createContext();

class WishlistContextProvider extends Component {
    state = {
        liste: []
    }

    addMovie = (target) => {
        this.setState({
            liste: this.state.liste.concat(target)
        })
    }

    removeMovie = (target) => {
        const array = [this.state.liste]
        const index = array.indexOf(target)
        array.splice(index, 1)
        this.setState({
            liste: array
        })
    }

    render() { 
        return (
            <WishlistContext.Provider value={{...this.state, addMovie: this.addMovie, removeMovie: this.removeMovie}}>
                {this.props.children}
            </WishlistContext.Provider>
        );
    }
}
 
export default WishlistContextProvider;