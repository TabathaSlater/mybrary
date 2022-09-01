import { useEffect } from 'react'
import { Card } from 'react-bootstrap'


export const PlaceList = ({ libraries }) => {

  return (
    <div className='libraryCards'>
      {libraries.map((library) => {
        return (
          <Card className='place_card'
            style={{ width: '18rem' }}>
            <Card.Body>
              <h5 className='place_title'>{library?.name}</h5>
              <Card.Text>
                <div className='place_address'>Address:</div>
                <div className='place_location'>
                  {library?.location?.formatted_address}
                </div>
                <div className='place_address'>Neighborhood:</div>
                <div className='place_location'>
                  {library?.location?.neighborhood}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  )
}