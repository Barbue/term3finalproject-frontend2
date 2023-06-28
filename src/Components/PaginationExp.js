import React from 'react'
import Button from 'react-bootstrap/Button';


                     // deconstructed props
const PaginationExp = ({totalExpressions, expressionsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
    
     
                        // ensures that page is created for tickets that do not fill the tickets per page number
    for(let i = 1; i <= Math.ceil(totalExpressions / expressionsPerPage); i++)
    {
     pages.push(i)
    }
    

  return (
    <div className="pages2">
        {
           pages.map((page, i) => {

           return <Button  variant="success"  key={i} onClick={() => { setCurrentPage(page) } }>{page}</Button> 

          }) 
        }

    </div>
  )
}

export default PaginationExp




