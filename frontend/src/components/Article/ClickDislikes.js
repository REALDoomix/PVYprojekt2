import React from 'react';
import { useState } from "react";
import { useMutation } from '@apollo/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UPDATE_DISLIKES } from './../../utils/mutations';


export const ClickDislikes = (props) => {
    const { icon, initial, id } = props;
    const [value, setValue] = useState(initial);
    const [changeDislikes, { loading, error }] = useMutation(UPDATE_DISLIKES, {
        variables: {
          dislikes: value,
        }
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>{ JSON.stringify(error) }</p>

    return (
        <button onClick={()=>{
            setValue(initial + 1); 
            changeDislikes({ variables: { id: id, dislike: initial + 1 }}) 
        }}>
            <FontAwesomeIcon icon={icon} /> {value}
        </button>
    );
}