import {Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './books.css'


export const SearchBooks = ({handleSearch, fetchMethod}) => {
    return (
        <>
           <Form
              onSubmit={fetchMethod} >
            <Form.Group controlId="formSearch" className='searchGroup'>
              <Form.Control type='search'
              placeholder='search books' className='searchField' 
              onChange={(e) => {
                handleSearch(e)
              }} />
            <button className='search-btn' type='submit'>Search</button>
              
            </Form.Group>
            </Form>     
        </>
    )
}