import React from 'react';
import { HEADER } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Image } from 'react-bootstrap';

export const Header = (props) => {
    const { loading, error, data } = useQuery(HEADER);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{JSON.stringify(error)}</p>;
    const header = data.header.data.attributes;   
        
    return (
        <header className='bg-primary p-5 text-center'>
            <h1 className='display-2 text-white'>{ header.title }</h1>
            <small style={{fontSize:'30px', color: '#aaa', borderTop: '1px solid #aaa', textTransform: 'uppercase'}}>{ header.motto }</small>
        </header>
    );
}