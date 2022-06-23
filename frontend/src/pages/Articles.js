import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { ArticlesGrid } from '../components/Article/ArticlesGrid';


export default function Articles() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search') ? searchParams.get('search') : "";
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h2 className="text-center p-2 mt-3 text-primary text-uppercase">Articles</h2>
                </Col>
            </Row>
            <ArticlesGrid sort="releasedAt:desc" search={search} categoryId="" categoryShortname="" />
        </Container>
    );
}