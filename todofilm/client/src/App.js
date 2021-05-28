import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Accueil from './pages/accueil/accueil'
import Connexion from './pages/connexion/connexion'
import Inscription from './pages/inscription/Inscription'
import MdPOublie from './pages/MdP oublie/MdPOublie'
import PageRecherche from './pages/recherche/PageRecherche'
import PageFilm from './pages/page film/PageFilm'
import PageProfile from './pages/profilUser/PageProfile'
import PageWishlist from './pages/wishlist/PageWishlist'
import PageErreur from './pages/erreur/PageErreur'
import DatasUserContextProvider from './context/DatasUserContext'
import WishlistContextProvider from './context/WishlistContext'
import DatasInputContextProvider from './context/DatasInputContext'
import MdPOublieConfirm from './pages/MdP oublie/MdPOublieConfirm'

function App() {
  return (
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
  );
}

export default App;
