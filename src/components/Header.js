import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo, titulo2}) => {
    return ( 
    
    <nav className='nav-wrapper light-blue darken-3'>
      <a href='#!' 
         className='brand-logo center'
         >{titulo}</a>
      
      
      <a href='https://www.linkedin.com/in/alejandro-obispo-a222931b7' 
         rel="noopener noreferrer" 
         target='_blank' 
         className='brand left button'
         >{titulo2}</a>
        


    </nav>


     );
}
 
Header.propTypes = {
   titulo: PropTypes.string.isRequired
}

export default Header;