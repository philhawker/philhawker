import React from 'react'

const PortfolioSidebarList = (props) => {
    const portfolioList = props.data.map(portfolioItem => {  // this map will loop through all of the item data in the database and populate
        return (
            <div>
                <div>
                    <img src={portfolioItem.thumb_image_url} />
                </div>
                <h1>{portfolioItem.name}</h1>
                <h2>{portfolioItem.id}</h2>
            </div>
        )
    })


return <div>{portfolioList}</div>
}


export default PortfolioSidebarList