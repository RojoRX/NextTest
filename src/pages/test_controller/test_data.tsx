import React, { useState } from 'react';
import { Form, Alert, Button, FormControl, Container, Row, Col } from 'react-bootstrap';

function DataInput() {
  const [dataText, setDataText] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleCheck = () => {
    setShowWarning(dataText.length < 8);
    if (!showWarning) {
      // Enviar el dato por un fetch a la dirección http://localhost:3002/examples
      fetch('https://evil-riddle-production.up.railway.app/examples', {
        method: 'POST',
        body: JSON.stringify({ data: dataText }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
    setShowMessage(true);
  };

  return (
    <Container className="justify-content-center align-items-center">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Form className="mx-auto w-75">
            <Form.Group controlId="formBasicData">
              <FormControl
                type="text"
                placeholder="Verifique si su seguridad ha sido vulnerada"
                value={dataText}
                onChange={(e) => setDataText(e.target.value)}
              />
              {showMessage && (
                <div>
                  {showWarning ? (
                    <Alert variant="warning">
                      El dato es demasiado corto. Debe tener al menos 8 caracteres.
                    </Alert>
                  ) : (
                    <Alert variant="success">Su seguridad no ha sido vulnerada.</Alert>
                  )}
                </div>
              )}
            </Form.Group>
            <br />
            <Button className="offset-4" variant="primary" onClick={handleCheck}>
              Comprobar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default DataInput;
