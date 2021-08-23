import React, { Component, createContext } from 'react';

export const DatasInputContext = createContext();

class DatasInputContextProvider extends Component {
    state = {
        filtreMovie: "",
        filtreSerie: "",
        filtrePerson: "",
        remoteSearch: false
    }

    functionRecupValue = (id, value) => {
        switch (id) {
            case "movie" :
                this.setState({
                    filtreMovie: value,
                    remoteSearch: !this.state.remoteSearch
                })
                break;
            case "serie" :
                this.setState({
                    filtreSerie: value,
                    remoteSearch: !this.state.remoteSearch
                })
                break;
            case "person" :
                this.setState({
                    filtrePerson: value,
                    remoteSearch: !this.state.remoteSearch
                })
                break;
        }
    }

    remoteSearchMovie = (id) => {
        if (id === 'movie') {
            this.setState({
                filtreMovie: '',
                remoteSearch: !this.state.remoteSearch
            })
        } else if (id === 'serie') {
            this.setState({
                filtreSerie: '',
                remoteSearch: !this.state.remoteSearch
            })
        } else if (id === 'person') {
            this.setState({
                filtrePerson: '',
                remoteSearch: !this.state.remoteSearch
            })
        } else {
            this.setState({
                filtreMovie: '',
                filtreSerie: '',
                filtrePerson: '',
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
                    remoteSearchMovie: this.remoteSearchMovie
                }}
            >
                {this.props.children}
            </DatasInputContext.Provider>
        );
    }
}
 
export default DatasInputContextProvider;