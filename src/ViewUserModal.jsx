import React,{useState,useContext,useEffect} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Table} from './ViewUserTable'
 const ViewUserModal = ()=> {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}  className="modalButton">
          View User
        </Button>
        <div className="viewUsderModal">
        <Modal show={show} onHide={handleClose}  dialogClassName="modal-xl">
          <Modal.Header closeButton>
            <Modal.Title>View User</Modal.Title>
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
        </div>
      </>
    );
  }
  export default ViewUserModal;