import React,{useState,useContext,useEffect} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
 const AddClientModal = ()=> {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="modalButton">
         Add Client
        </Button>
  
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Add Client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Client Name</label>
              <input type="text" class="form-control" id="formGroupExampleInput"  required/>
            </div>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default AddClientModal;