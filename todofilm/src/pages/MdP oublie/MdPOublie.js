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