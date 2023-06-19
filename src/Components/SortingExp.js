import React from 'react';
import Button from 'react-bootstrap/Button';


const SortingExp = (props) => {
       
        const {
            sortExpressionsAsc, 
            sortExpressionsDsc,
        } = props

return (
   <div>
     
   
   <Button variant="success" size="sm" onClick={() => {sortExpressionsAsc()
          }}>Asc</Button>
          {" "}

   <Button variant="success" size="sm" onClick={() => {sortExpressionsDsc()
          }}>Dsc</Button>

  </div>

  )
};

export default SortingExp
  



