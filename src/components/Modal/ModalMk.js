import React from 'react';

function ModalMk({ name, descripnion, time, descTime, features, descFeatures1, descFeatures2, costMk,
  descCostMk1, descCostMk2, descCostMk3, descCostMk4}) {
  return (
  <>
    <li>        
      <p>{name}</p>
    </li>
    <li>        
      <p>{descripnion}</p>
    </li>
    <li>        
      <p>{time} {descTime}</p>
    </li>
    <li>        
      <p>{features}</p>
    </li>
    <li> 
      <ul className="descriptionUl">    
        <li>   
          <p>{descFeatures1}</p>
        </li>
        <li>        
          <p>{descFeatures2}</p>
        </li>
      </ul>
    </li>
    <li>        
      <p>{costMk}</p>
    </li>
    <li>  
      <ul className="descriptionUl">     
        <li>  
          <p>{descCostMk1}</p>
        </li>
        <li>        
          <p>{descCostMk2}</p>
        </li>
        <li>        
          <p>{descCostMk3}</p>
        </li>
        <li>        
          <p>{descCostMk4}</p>
        </li>
      </ul>
    </li>
  </>
  );
}

export default ModalMk;

