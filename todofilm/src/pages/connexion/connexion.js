import React, {Component} from 'react';
import InputComponent from '../../components/InputComponent';
import Logo from '../../components/Logo';
import '../../styles/general.css';
import {datasUser} from '../../datas/datasUser'
import {datasInputComponent} from '../../datas/datasInputComponent';
import { Link } from 'react-router-dom';
import {informationText} from '../../datas/informationText'
import './connexion.css';
class connexion extends Component {



    connexionDatas =()=> {
        datasInputComponent.email=datasUser.email
        datasInputComponent.password=datasUser.password
       
    }
    render() {

        
        
        
        return(

             
            
            <div className='bloc-identify background-yellow'>

                <div className='full-logo'>
                    <Logo />
                 </div>

                  <div className='bloc-identify-input'>
                     <h1>Connexion</h1>

                       <InputComponent id='email-input' placeholder='Adresse mail' type='email'  />

                       <InputComponent id='passwordInit-input' placeholder='Mot de passe' type='password'  />

                  <div className="bloc-identify-Mdpo">
                     <Link to="/mot-de-passe-oublie" >
                       {informationText.MdP_Oublie}
                     </Link>
                     </div>
                     {(datasInputComponent.email===datasUser.email &&  datasInputComponent.password===datasUser.password)?
                        <Link to='/recherche' className='bloc-identify-button' >
                       <button >Valider</button>
                     </Link> :
                      <button disabled>valider</button> 
                      }

                </div>
            </div>    
        )
    }
}
export default connexion;