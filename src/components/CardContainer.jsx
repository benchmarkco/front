import React from 'react'

const CardContainer = (props) => {
  return (
    <div className="album py-5 bg-dark">
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {props.children}
            </div>
        </div>
    </div>
  )
}

export default CardContainer