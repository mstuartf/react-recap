import React from 'react';
import {Link} from "react-router-dom";

const MyLink = ({to}) => {

    let props = {to};

    if (to && to.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
        // it's an external link
        props = {
            ...props,
            rel: "nofollow noopener",
            target: '_blank'
        }
    }

    return (
        <Link to={to}/>
    )

};

export default MyLink;
