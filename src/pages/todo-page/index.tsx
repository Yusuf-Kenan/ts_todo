import { useState } from "react";
import {
  Button,
  Col,
  Modal,
  Row,
  Table,
  Form,
  InputGroup,
} from "react-bootstrap";

type TodoType = { id: number; title: string; is_done: boolean };

export default function TodoPage() {
  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState<TodoType[]>([
    { id: 1, title: "test", is_done: false },
    { id: 2, title: "test 2", is_done: true },
    { id: 3, title: "test 3", is_done: false },
  ]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="email"
                placeholder="type your to do"
                autoFocus
              />
            </Form.Group>
            <InputGroup className="mb-3 d-flex align-items-center">
            
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <Form.Label className="ms-3 mt-3">Is Done </Form.Label>
            </InputGroup>
            <InputGroup />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">ToDo Page</h1>
      </div>
      <Row>
        <Col sm="12">
          <div className="d-flex my-2 justify-content-end">
            <Button onClick={handleShow}>ADD</Button>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Done</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((item: TodoType, index: number) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.is_done ? "Done" : "Undone"}</td>
                    <td>
                      <Button variant="danger" className="btn btn-sm me-3">
                        Del
                      </Button>
                      <Button variant="warning" className="btn btn-sm">
                        Edit
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
