import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Col, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <Row xs={"auto"} >
            {device.brands.map(brand =>
                <Col key={brand.id}>
                    <Card
                        style={{cursor: 'pointer'}}
                        className={'p-1'}
                        onClick={()=>device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    >
                        {brand.name}
                    </Card>
                </Col>
            )}
        </Row>
    );
});

export default BrandBar;