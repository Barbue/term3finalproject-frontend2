import React from 'react'
import Button from 'react-bootstrap/Button';


                     // deconstructed props
const PaginationFavoriteWords = ({totalFavoriteWords, favoriteWordsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
    
     
                        // ensures that page is created for tickets that do not fill the tickets per page number
    for(let i = 1; i <= Math.ceil(totalFavoriteWords / favoriteWordsPerPage); i++)
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

export default PaginationFavoriteWords