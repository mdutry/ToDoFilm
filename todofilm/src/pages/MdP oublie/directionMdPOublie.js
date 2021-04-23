import React, {useContext } from 'react';
import {DatasInputContext} from '../../context/DatasInputContext';
import {DatasUserContext} from '../../context/DatasUserContext';
import { Link } from 'react-router-dom';
import MdPOublie from './MdPOublie';

function DirectionMdPOublie () {
    
   const datasInputContext = useContext(DatasInputContext)
   const datasUserContext = useContext(DatasUserContext)

   return (
                   <div>
                            {(datasInputContext.email=== datasUserContext.email )  &&  alert (datasInputContext.password) } 
                            <Link to='/connexion'>
                              <button >Connexion</button>
                           </Link>   
                  </div>
        )
                            
            setTimeout(DirectionMdPOublie, 5000);
   }
    
    export default DirectionMdPOublie;