import React,{useState,useContext,useEffect} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Table} from './ViewClientTable'

 const ViewClientModal = ()=> {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}  className="modalButton">
         View Client
        </Button>
  
        <Modal show={show} onHide={handleClose} dialogClassName="modal-lg">
          <Modal.Header closeButton>
            <Modal.Title>View Client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Table/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default ViewClientModal;