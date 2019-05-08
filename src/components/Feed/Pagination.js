import React from 'react'

const Pagination = (props) => {

    const pages = []

    for (let i = 0; i < props.pages; i++) {
        pages.push(<li key={i} className={`page-item ${props.currPage === i ? "disabled" : ""}`}>
            <div className="page-link" onClick={() => props.handlePage(i)}>{i + 1}</div>
        </li>)
    }

    return <nav className="mt-5" aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
            <li className={`page-item ${props.currPage === 0 ? "disabled" : ""}`}>
                <div className="page-link" tabIndex="-1" onClick={props.prev}>Previous</div>
            </li>
            {pages}
            <li className={`page-item ${props.currPage === props.pages - 1 ? "disabled" : ""}`}>
                <div className="page-link" onClick={props.next}>Next</div>
            </li>
        </ul>
    </nav>
}

export default Pagination