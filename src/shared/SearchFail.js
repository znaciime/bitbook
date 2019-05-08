import React from "react"
import not_found from '../images/not_found.png'

const SearchFail = ({ str }) => {
    return (

        <div className="card customCard">
            <img className="card-img-top" src={not_found} alt="" />
            <div className="card-body">
                <h5 className="card-title">{str}</h5>
            </div>
        </div >
    )
}
export default SearchFail