import React from 'react'
import Button from 'react-bootstrap/Button';


                     // deconstructed props
const PaginationVerbs = ({totalVerbs, verbsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
    
     
                        // ensures that page is created for verbs that do not fill the verbs per page number
    for(let i = 1; i <= Math.ceil(totalVerbs / verbsPerPage); i++)
    {
     pages.push(i)
    }
    

  return (
    <div className="pages">
        {
           pages.map((page, i) => {

           return <Button className='pagesButton'  variant="success"  key={i} onClick={() => { setCurrentPage(page) } }>{page}</Button> 

          }) 
        }

    </div>
  )
}

export default PaginationVerbs