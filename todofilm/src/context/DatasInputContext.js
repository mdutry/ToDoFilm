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
        filtreRealisateur: '',
        filtreDureeMin: '',
        filtreDureeMax: '',
        filtreNotePresse: '',
        filtreNoteSpectateur: '',
        filtreRecompense: '',
        remoteSearch: false
    }

    functionRecupValue = (id, value) => {
        switch (id) {
            case 'prenom' :
                this.setState({
                    prenom: value
                })
                break;
            case 'nom' :
                this.setState({
                    nom: value
                })
                break;
            case 'email' :
                this.setState({
                    email: value
                })
                break;
            case 'passwordInit' :
                this.setState({
                    password: value
                })
                break;
            case "recherche" :
                this.setState({
                    filtreRecherche: value,
                    remoteSearch: !this.state.remoteSearch
                })
                break;
            case "year" :
                this.setState({
                    filtreYear: value,
                    remoteSearch: !this.state.remoteSearch
                })
                break;
            case "genre" :
                this.setState({
                    filtreGenre: value,
                    remoteSearch: !this.state.remoteSearch
                })
                break;
            case "country" :
                this.setState({
                    filtrePays: value,
                    remoteSearch: !this.state.remoteSearch
                })
                break;
            case "actor" :
                this.setState({
                    filtreActeur: value,
                    remoteSearch: !this.state.remoteSearch
                })
                break;
            case "realisateur" :
                this.setState({
                    filtreRealisateur: value,
                    remoteSearch: !this.state.remoteSearch
                })
                break;
            case "duree-min" :
                this.setState({
                    filtreDureeMin: value,
                    remoteSearch: !this.state.remoteSearch
                })
                break;
            case "duree-max" :
                this.setState({
                    filtreDureeMax: value,
                    remoteSearch: !this.state.remoteSearch
                })
                break;
            case "note-presse" :
                this.setState({
                    filtreNotePresse: value,
                    remoteSearch: !this.state.remoteSearch
                })
            case "note-spectateur" :
                this.setState({
                    filtreNoteSpectateur: value,
                    remoteSearch: !this.state.remoteSearch
                })
                break;
            case "recompense" :
                this.setState({
                    filtreRecompense: value,
                    remoteSearch: !this.state.remoteSearch
                })
                break;
        }
    }

    functionRemoteValue = () => {
        this.setState({
            prenom: '',
            nom: '',
            email: '',
            password: '',
        })
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

    remoteSearchMovie = (id) => {
        if (id === 'recherche') {
            this.setState({
                filtreRecherche: '',
                remoteSearch: !this.state.remoteSearch
            })
        } else if (id === 'year') {
            this.setState({
                filtreYear: '',
                remoteSearch: !this.state.remoteSearch
            })
        } else if (id === 'genre') {
            this.setState({
                filtreGenre: '',
                remoteSearch: !this.state.remoteSearch
            })
        } else if (id === 'pays') {
            this.setState({
                filtrePays: '',
                remoteSearch: !this.state.remoteSearch
            })
        } else if (id === 'acteur') {
            this.setState({
                filtreActeur: '',
                remoteSearch: !this.state.remoteSearch
            })
        } else if (id === 'realisateur') {
            this.setState({
                filtreRealisateur: '',
                remoteSearch: !this.state.remoteSearch
            })
        } else if (id === 'dureeMin') {
            this.setState({
                filtreDureeMin: '',
                remoteSearch: !this.state.remoteSearch
            })
        } else if (id === 'dureeMax') {
            this.setState({
                filtreDureeMax: '',
                remoteSearch: !this.state.remoteSearch
            })
        } else if (id === 'note-presse') {
            this.setState({
                filtreNotePresse: '',
                remoteSearch: !this.state.remoteSearch
            })
        } else if (id === 'note-spectateur') {
            this.setState({
                filtreNoteSpectateur: '',
                remoteSearch: !this.state.remoteSearch
            })
        } else if (id === 'recompense') {
            this.setState({
                filtreRecompense: '',
                remoteSearch: !this.state.remoteSearch
            })
        } else {
            this.setState({
                filtreRecherche: '',
                filtreYear: '',
                filtreGenre: '',
                filtrePays: '',
                filtreActeur: '',
                filtreRealisateur: '',
                filtreDureeMin: '',
                filtreDureeMax: '',
                filtreNotePresse: '',
                filtreNoteSpectateur: '',
                filtreRecompense: '',
                remoteSearch: !this.state.remoteSearch
            })
        }
    }
    
    render() { 
        return (
            <DatasInputContext.Provider
                value={
                    {...this.state,
                    functionRecupValue: this.functionRecupValue,
                    functionRemoteValue: this.functionRemoteValue,
                    functionDisabledButton: this.functionDisabledButton,
                    remoteSearchMovie: this.remoteSearchMovie
            }}>
                {this.props.children}
            </DatasInputContext.Provider>
        );
    }
}
 
export default DatasInputContextProvider;