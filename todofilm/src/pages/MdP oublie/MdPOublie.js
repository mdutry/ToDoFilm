<<<<<<< Updated upstream
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputComponent from '../../components/InputComponent';
import {datasInputComponent} from '../../datas/datasInputComponent';
import '../../styles/general.css';
import {datasUser} from '../../datas/datasUser';

class MdPOublie extends Component {
    render() {
        return (

            <div className='bloc-identify background-yellow'>

                    <div className='bloc-identify-input'>
                          <h1>Mot de passe oublié</h1>

                           <InputComponent id='email-input' placeholder='Adresse mail' type='email'  />

                        
                                  {(datasInputComponent.email===datasUser.email)}?
                             <Link to='/recherche' className='bloc-identify-button' >
                                  <button >Valider</button>
                             </Link> :
                                  <button disabled>valider</button> 
                      

                </div>
            </div>
        )
    }
}
export default MdPOublie;
=======
import React, {Component, context, useContext} from 'react';
import InputComponent from '../../components/InputComponent';
import Logo from '../../components/Logo';
import '../../styles/general.css';
import {DatasUserContext} from '../../context/DatasUserContext';
import {DatasInputContext} from '../../context/DatasInputContext';
import directionMdPOublie from './directionMdPOublie';
import { Link } from 'react-router-dom';
import {informationText} from '../../datas/informationText';
  
function MdPOublie () {
​
  
    const datasInputContext = useContext(DatasInputContext)
            
           
    return(
​
        <div className='bloc-identify background-yellow'>
​
                  <div className='full-logo'>
                               <Logo />
                       </div>
​
               <div className='bloc-identify-input'>
                               <h1>Mot de passe oublié</h1>
                     
                                   <DatasInputContext id='email-input' placeholder='Adresse mail' type='email'  />
                                   <InputComponent id='email-input' placeholder='Adresse mail' type='email'  />
​
                                      {(DatasInputContext.email=== DatasUserContext.email)?
​
                         <Link to='/' className='bloc-identify-button button' id='button-MdPOublie' >
                               <button >Valider</button>
                         </Link> :
                                  <button disabled>valider</button> 
                             }
               </div>
        </div>
      )
    }
  
  export default MdPOublie;
>>>>>>> Stashed changes
