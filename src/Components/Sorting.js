import React from 'react';
import Button from 'react-bootstrap/Button';


const Sorting = (props) => {
       
        const {
            sortWordsAsc, 
            sortWordsDsc,
        } = props

return (
   <div>
     
   
   <Button variant="success" size="sm" onClick={() => {sortWordsAsc()
          }}>Asc</Button>
          {" "}

   <Button variant="success" size="sm" onClick={() => {sortWordsDsc()
          }}>Dsc</Button>

  </div>

  )
};

export default Sorting
  






















