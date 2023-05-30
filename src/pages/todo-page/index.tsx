import { useState } from "react";
import { Button, Col, Modal, Row, Table, Form } from "react-bootstrap";

type TodoType = { id: number; title: string; is_done: boolean };

export default function TodoPage() {
  const [show, setShow] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoType[]>([
    { id: 1, title: "test", is_done: false },
    { id: 2, title: "test 2", is_done: true },
    { id: 3, title: "test 3", is_done: false },
  ]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = Object.fromEntries(data.entries());
    todos.push({
      id: todos.length+1,
      title: value.title as string,
      is_done: value.is_done ? true : false,
    });

    setTodos([...todos]);
    handleClose()
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>To Do</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="type your to do..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check name="is_done" type="checkbox" label="Done?" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
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
              {todos.map<JSX.Element>((item: TodoType, index: number) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                      <input
                        className="me-3"
                        type="checkbox"
                        checked={item.is_done}
                      />
                      {item.is_done ? "Done" : "Undone"}
                    </td>
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
