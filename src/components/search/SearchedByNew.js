import { SearchAlert } from "./SearchAlert"
import { SearchedBookCard } from "./SearchedBookCard"
import { SearchSort } from "./SearchSort"
import { Modal } from 'react-bootstrap'


export const SearchedByNew = ({ showAlert, handleCloseAlert, setTaco, sortNew, handleAddToCurrent, handleAddToWant }) => {
    return (
        <article className="searchContent">

            <Modal show={showAlert}>
                <SearchAlert handleCloseAlert={handleCloseAlert} />
            </Modal>

            <div className="sort">
                <SearchSort setTaco={setTaco} />
            </div>
            <div className="list">
                {sortNew.map((book) => (

                    <SearchedBookCard
                        key={book?.id}
                        book={book}
                        addToCurrent={handleAddToCurrent}
                        addToWant={handleAddToWant}
                    />
                ))}
            </div>
        </article>
    )
}