import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap';
import { useQuery } from '@apollo/client'
import { CATEGORIES } from '../../utils/queries';


export const CategoriesList = () => {
    const { loading, error, data } = useQuery(CATEGORIES)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    return (
        <ListGroup as="ul">
        {           
            data.categories.data.map(category => (            
                <ListGroup.Item
                    key={category.id}
                    action href={`/categories/${category.id}`}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">{ category.attributes.name }</div>
                    </div>
                    <Badge bg="primary" pill>
                    { category.attributes.articles.data.length }
                    </Badge>
                </ListGroup.Item>
            ))    
        }    
        </ListGroup>        
    );
}