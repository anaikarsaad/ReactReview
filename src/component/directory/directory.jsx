import React,{useState} from 'react';

import MenuItem from '../menu/menuItem';
import Data from './directoryData';
import './directory.scss';
const Directory =()=> {
 
  const[section,setSection]=useState(Data);
  
  

  
    return (
      <div className='directory-menu'>
        {section.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
        }

export default Directory;
