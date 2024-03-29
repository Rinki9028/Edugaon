import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <MenuIcon onClick={handleShow} style={{ color: 'white' }}></MenuIcon>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as a placeholder. In real life, you can have the elements
          you have chosen, like text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
