import React, { Component, createContext } from 'react';

export const DatasUserContext = createContext();

class DatasUserContextProvider extends Component {
    state = {
        prenom: '',
        nom: '',
        email: '',
        password: '',
        isAuthenticated: false
    }

    render() { 
        return (
            <DatasUserContext.Provider value={{...this.state}}>
                {this.props.children}
            </DatasUserContext.Provider>
        );
    }
}
 
export default DatasUserContextProvider;