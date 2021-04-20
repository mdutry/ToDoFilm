import React, {useContext } from 'react';
import {DatasInputContext} from '../../context/DatasInputContext';
import { Link } from 'react-router-dom';
import MdPOublie from './MdPOublie';

function DirectionMdPOublie () {
    
   const DatasInputContext = useContext(DatasInputContext)
   const DatasUserContext = useContext(DatasUserContext)

   return (
        <div>
                            {(DatasInputContext.email=== DatasUserContext.email )&& usercontext.password('') } 
​
                        
​
                           <Link to='/connexion'>
                              <button >Inscription</button>
                           </Link>   
                 </div>
        )
        
    }
    
    export default DirectionMdPOublie;