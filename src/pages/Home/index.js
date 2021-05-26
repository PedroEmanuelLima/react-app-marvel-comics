import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Alert, Container, Card, CardImg, CardText,
    CardBody, CardTitle
} from 'reactstrap';

import './styles.css';

import ModalComponent from '../../components/ModalComponent';
import { api } from '../../config';

const Home = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const getComics = async () => {
        await api.get('/comics')
            .then((response) => {
                // ----------------------------------------------------------------------------------------
                console.log(response.data.data.results);
                setData(response.data.data.results);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    mensagem: 'Erro: tente mais tarde!'
                })
            });
    };

    useEffect(() => {
        getComics();
    }, []);

    return (
        <div>
            {status.type === 'error' ? <Alert color="danger">{status.mensagem}</Alert> : ""}
            {data.length <= 0 && status.type === ""
                ?
                <div className="d-flex justify-content-center mt-5 pt-5">
                    <div className="spinner-border text-danger" role="status"></div>
                </div>
                :
                <Container>
                    {data.map(comic => (
                        <Card key={comic.id} className="card">
                            <CardImg className="img-comic" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`Image comic ${comic.title}`} />
                            <CardBody className="card-body">
                                <CardTitle tag="h5">{comic.title}</CardTitle>
                                <CardText>Price: {comic.prices[0].price > 0 ? comic.prices[0].price : "UNAVAILABLE"}</CardText>
                                <div className="btn-container">
                                    <Link className="btn btn-outline-success" to={"/purchase/"+comic.id}>Purchase it Now</Link>
                                    <ModalComponent
                                        buttonLabel="More"
                                        className="btn btn-light btn-outline-danger"
                                        comicModal={{
                                            title: comic.title,
                                            description: comic.description,
                                            characters: comic.characters.items,
                                            creators: comic.creators.items,
                                            series: comic.series.name,
                                            variants: comic.variants,
                                            price: comic.prices[0].price
                                        }}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    ))}

                </Container>
            }
        </div>
    );
};

export default Home;