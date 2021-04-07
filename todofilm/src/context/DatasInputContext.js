import React, { Component, createContext } from 'react';

export const DatasInputContext = createContext();

class DatasInputContextProvider extends Component {
    state = {
        prenom: '',
        nom: '',
        email: '',
        password: '',
        passwordVerif: '',
        conditionPrenom: false,
        conditionNom: false,
        conditionEmail: false,
        conditionPasswordInit: false,
        conditionPasswordVerif: false,
        filtreRecherche: "",
        filtreYear: "",
        filtreGenre: "",
        filtrePays: "",
        filtreActeur: "",
        filtreRealisateur: "",
        filtreDureeMin: 0,
        filtreDureeMax: 0,
        filtreNote: 0,
        filtreRecompense: ""
    }

    functionRecupValue = (id, value) => {
        
        if (id === 'prenom') {
            this.setState({
                prenom: value
            })
        }
        else if (id === 'nom') {
            this.setState({
                nom: value
            })
        }
        else if (id === 'email') {
            this.setState({
                email: value
            })
        }
        else if (id === 'passwordInit') {
            this.setState({
                password: value
            })
        }
    }

    functionDisabledButton = (id, condition) => {
        switch (id) {
            case 'prenom' :
                this.setState({
                    conditionPrenom: condition
                })
                break;
            case 'nom' :
                this.setState({
                    conditionNom: condition
                })
                break;
            case 'email' :
                this.setState({
                    conditionEmail: condition
                })
                break;
            case 'passwordInit' :
                this.setState({
                    conditionPasswordInit: condition
                })
                break;
            case 'passwordVerif' :
                this.setState({
                    conditionPasswordVerif: condition
                })
                break;
        }
    }
    
    render() { 
        return (
            <DatasInputContext.Provider value={{...this.state, functionRecupValue: this.functionRecupValue, functionDisabledButton: this.functionDisabledButton}}>
                {this.props.children}
            </DatasInputContext.Provider>
        );
    }
}
 
export default DatasInputContextProvider;