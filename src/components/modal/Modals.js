import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import { buttonCancel, buttonConfirm, modalP, modalTitle } from './modal.module.scss'

const Modals = ({show, handleClose, handleCancel, modalText, botonText}) => {
        return (
            <>
                <Modal show={show} onHide={handleCancel} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title className={modalTitle}>¡Atención!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className={modalP}>{modalText}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className={buttonCancel} variant="secondary" onClick={handleCancel}>
                            Cancelar
                        </Button>
                        <Button className={buttonConfirm} onClick={handleClose}>    
                            {botonText}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }


export default Modals
