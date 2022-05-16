import React, { useState, useContext, useEffect } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
const AddUserModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}  className="modalButton">
        Add User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Employee Name</label>
              <input type="text" class="form-control" id="formGroupExampleInput"  />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">User Id</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput3">Password</label>
              <input type="text" class="form-control" id="formGroupExampleInput3" />
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
export default AddUserModal;