import React from 'react';
import {Link} from "react-router-dom";

const MyLink = (props) => {

    if (props.to && props.to.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
        props = {
            ...props,
            rel: "nofollow noopener",
            target: '_blank'
        }
    }

    return (
        <Link {...props}/>
    )

};

export default MyLink;
