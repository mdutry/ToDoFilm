import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Provider } from 'react-redux'

// import store from './redux/store'
import Accueil from './pages/accueil/'
import Connexion from './pages/connexion/'
import Inscription from './pages/inscription/'
import MdPOublie from './pages/MdP oublie/MdPOublie'
import PageRecherche from './pages/recherche'
import PageFilm from './pages/page film'
import PageProfile from './pages/profilUser'
import PageWishlist from './pages/wishlist'
import PageErreur from './pages/erreur/'
import DatasUserContextProvider from './context/DatasUserContext'
import WishlistContextProvider from './context/WishlistContext'
import DatasInputContextProvider from './context/DatasInputContext'
import MdPOublieConfirm from './pages/MdP oublie/MdPOublieConfirm'

function App() {
  return (
    // <Provider store={store}>
      <DatasUserContextProvider>
        <WishlistContextProvider>
          <DatasInputContextProvider>
            <Router>

              <Switch>
                <Route exact path="/" component={Accueil} />
                <Route path="/connexion" component={Connexion} />
                <Route path="/inscription" component={Inscription} />
                <Route path="/mot-de-passe-oublie" component={MdPOublie} />
                <Route path="/mot-de-passe-oublie-modif/:token" component={MdPOublieConfirm} />
                <Route path="/recherche" component={PageRecherche} />
                <Route path="/film/:id" component={PageFilm} />
                <Route path="/profil" component={PageProfile} />
                <Route path="/wishlist" component={PageWishlist} />
                <Route component={PageErreur} />
              </Switch>
              
            </Router>
          </DatasInputContextProvider>
        </WishlistContextProvider>
      </DatasUserContextProvider>
    // </Provider>
  );
}

export default App;
