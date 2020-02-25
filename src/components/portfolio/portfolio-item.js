import React from 'react';
import { Link } from 'react-router-dom'


export default function portfolioItems(props) {
    //  data that well need:
    // - background image: thumb_image_url
    // - logo
    // - description: description
    // - id: id
    const { id, description, thumb_image_url, logo } = props.item
    return (
        <div>
            <div>{description}</div>
            <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    );
}
