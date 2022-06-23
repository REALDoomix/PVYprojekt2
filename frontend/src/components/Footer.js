import React from 'react';
import { Image } from 'react-bootstrap';
import './Footer.css';


export const Footer = () => {
    let year = new Date().getFullYear() - 1;
    return (
        <footer className='bg-dark mt-3 p-3 text-center'>
            <p className='copyright'>&copy; {year} - Ročníkový projekt IT2 - autor: <b>Aleš Najser</b></p>
        </footer>
    );
}