import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import moreIcon from '../assets/img/more.svg';
import lessIcon from '../assets/img/less.svg';

import './styles.css';

const ModalComponent = (props) => {

  const [showVariants, setShowVariants] = useState(false);

  const {
    buttonLabel,
    className,
  } = props;

  const {
    title,
    description,
    characters,
    creators,
    series,
    variants,
    price
  } = props.comicModal;

  const [modal, setModal] = useState(false);

  const capitalize = str => {
    if (typeof str !== 'string') {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.substr(1);
  }

  const handleShowVariants = () => {
    if (showVariants) {
      setShowVariants(false)
    } else {
      setShowVariants(true)
    }
  }

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle} className={className}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <p>Description: {description != null ? <p>{description}</p> : "UNDEFINED"}</p>
          {characters.length > 0
            ? <p>Personagens: {characters.map(character =>
              <span key={characters.indexOf(character).toString()}>
                {character.name}.
                </span>)}
            </p>
            : ""
          }
          {creators.length > 0
            ? creators.map(creator => (
              <p key={creators.indexOf(creator).toString()}>
                {capitalize(creator.role)}:
                <span>{creator.name}. </span>
              </p>))
            : "Creators: NOT LISTED"
          }
          {series != null
            ? <p>Series: <span>{series}.</span></p>
            : ""
          }
          <dl>
            <dt>Variants:
              <span className="btn" onClick={handleShowVariants}>
                {variants.length}
                {showVariants ? <img src={lessIcon} alt="less" /> : <img src={moreIcon} alt="more" />}
              </span><br />
            </dt>
            {showVariants
              ? variants.length > 0
                ? variants.map(variant => (
                  <dd key={variants.indexOf(variant).toString()}>
                    {variant.name}.
                  </dd>))
                : "NONEXISTENT"
              : ""
            }
          </dl>
          <p className="mt-3 mb-3">Price:
            {price > 0 ? price : " UNAVAILABLE"}
          </p>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-between">
          <Link className="btn btn-outline-success" to={"/purchase"}>Purchase it Now</Link>
          <span className="btn btn-outline-danger" onClick={toggle}>Close</span>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComponent;