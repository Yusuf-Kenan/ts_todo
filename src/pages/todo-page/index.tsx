import { useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";

type TodoType = { id: number; title: string; is_done: boolean };
export default function TodoPage() {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: 1, title: "test", is_done: false },
    { id: 2, title: "test 2", is_done: true },
    { id: 3, title: "test 3", is_done: false },
  ]);
  return (
    <>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Main Page</h1>
      </div>
      <Row>
        <Col sm="12">
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
                    <td>{item.is_done?"Done":"Undone"}</td>
                    <td><Button variant="danger">Delete</Button></td>
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
