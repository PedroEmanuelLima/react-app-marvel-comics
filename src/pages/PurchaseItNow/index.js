import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { MapComponent } from '../../components/MapComponent';

export const PurchaseItNow = props => {

    const [id] = useState(props.match.params.id);

    return (
        <Container className="d-block">
            <Form>
                <div className="border p-3 mb-4 rounded">
                    <h3 className="mb-4">Personal Data</h3>

                    <div className="row">
                        <div className="col">
                            <FormGroup className="form-floating mb-3">
                                <Input type="text" className="form-control" id="firstName" placeholder="First Name" />
                                <Label for="firstName">First Name</Label>
                            </FormGroup>
                        </div>
                        <div className="col">
                            <FormGroup className="form-floating mb-3">
                                <Input id="lastName" className="form-control" type="text" name="lastName" placeholder="Last Name" />
                                <Label for="lastName">Last Name</Label>
                            </FormGroup>
                        </div>

                        <div className="col">
                            <FormGroup className="form-floating mb-3">
                                <Input id="emailAddress" className="form-control" type="email" name="name" placeholder="Email Addres" />
                                <Label for="emailAddress">Email Address</Label>
                            </FormGroup>
                        </div>
                    </div>
                </div>

                <div className="border p-3 rounded">
                    <h3 className="mb-4">Payment Data</h3>

                    <div className="row">
                        <div className="col">
                            <FormGroup className="form-floating mb-3">
                                <Input type="text" className="form-control" id="cardNumber" placeholder="Credit Card Number" />
                                <Label for="cardNumber">Credit Card Number</Label>
                            </FormGroup>
                        </div>

                        <div className="col">
                            <FormGroup className="form-floating mb-3">
                                <Input type="text" className="form-control" id="expirationData" placeholder="Expiration Data" />
                                <Label for="expirationData">Expiration Data</Label>
                            </FormGroup>
                        </div>

                        <div className="col">
                            <FormGroup className="form-floating mb-3">
                                <Input type="email" className="form-control" id="cvc" placeholder="CVC" />
                                <Label for="cvc">CVC</Label>
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </Form>

            <MapComponent
                center={{ lat: -7.254107, lng: -39.039949}}
            />
        </Container>
    );
};