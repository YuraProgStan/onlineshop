import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap';
import bigStar from '../assets/bgstar.png'
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data));
    }, [])
    // const device = {
    //     id: 1,
    //     name: 'Iphone 12 pro',
    //     price: 25000,
    //     rating: 5,
    //     img: `https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`
    // };
    // const description = [
    //     {id: 1, title: 'Оперативная память', description: '5 r6'},
    //     {id: 2, title: 'Камера', description: '12 мп'},
    //     {id: 3, title: 'Процессор', description: 'Пентиум 3'},
    //     {id: 4, title: 'Кол-во ядер', description: '2'},
    //     {id: 5, title: 'Аккамулятор', description: '4000'},
    // ]
    return (
        <Container>
            <Row>
                <Col md={4} className={'mt-3'}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL+device.img}/>
                </Col>
                <Col md={4}>
                    <Row className={'d-flex flex-column align-items-center'}>
                        <h2 style={{textAlign: 'center'}}>{device.name}</h2>
                        <div
                            className={'d-flex align-items-center justify-content-center'}
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: 'cover',
                                fontSize: 64
                            }}
                        >
                            {device.rating}</div>
                    </Row>
                </Col>
                <Col md={4} className={'mt-3'}>
                    <Card
                        className={'d-flex flex-column align-items-center justify-content-around'}
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} грн.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={'d-flex flex-column m-3'}>
                <h1>Характеристики</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}:{info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export {DevicePage};