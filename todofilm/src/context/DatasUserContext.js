import React, { Component, createContext } from 'react';
import {datasInputComponent} from '../datas/datasInputComponent'

export const DatasUserContext = createContext();

class DatasUserContextProvider extends Component {
    state = {
        prenom: '',
        nom: '',
        email: '',
        password: ''
    }

    showData = () => {
        this.setState({
            prenom: datasInputComponent.prenom,
            nom: datasInputComponent.nom,
            email: datasInputComponent.email,
            password: datasInputComponent.password
        })
    }

    render() { 
        return (
            <DatasUserContext.Provider value={{...this.state, showData: this.showData}}>
                {this.props.children}
            </DatasUserContext.Provider>
        );
    }
}
 
export default DatasUserContextProvider;