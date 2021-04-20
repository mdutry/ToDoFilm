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

    const datasInputContext = useContext(DatasInputContext)
    const datasUserContext = useContext(DatasUserContext)       
           
    return(
    <div className='bloc-identify background-yellow'>
​
                  <div className='full-logo'>
                               <Logo />
                       </div>
​
               <div className='bloc-identify-input'>
                               <h1>Mot de passe oublié</h1>
                     
                                  
                                   <InputComponent id='email-input' placeholder='Adresse mail' type='email'  />
​
                                      {(datasInputContext.email=== datasUserContext.email)?
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
