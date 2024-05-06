import React, { useContext } from "react";
import { Alert, Form } from "react-bootstrap";
import { TicketContext } from "../../Context/TicketContext";
import { AuthContext } from "../../Context/AuthContext";
import("./Modal.css");

const Modal = ({ closeModal }) => {
  const { user } = useContext(AuthContext);
  const {
    ticketInfo,
    updateTicketInfo,
    ticketError,
    isTicketSubmitting,
    successMessage,
    submitTicket,
  } = useContext(TicketContext);
  const handleChange = (e) => {
    updateTicketInfo({
      ...ticketInfo,
      userId: user._id,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <span onClick={() => closeModal(false)} role="button">
            X
          </span>
        </div>
        <div className="title">
          <h3>Create a new ticket</h3>
          {ticketError ? (
            <Alert variant="danger" dismissible>
              {ticketError}
            </Alert>
          ) : null}
          {successMessage ? (
            <Alert variant="success" dismissible>
              {successMessage}
            </Alert>
          ) : null}
        </div>
        <div className="body">
          <Form onSubmit={submitTicket}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={ticketInfo.title}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="select category"
                name="category"
                value={ticketInfo.category}
                onChange={handleChange}
              >
                <option>Select category</option>
                <option value="Hardware">Hardware</option>
                <option value="Software">Software</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Department</Form.Label>
              <Form.Select
                aria-label="select department"
                onChange={handleChange}
                value={ticketInfo.department}
                name="department"
              >
                <option>Select your department</option>
                <option value="IT">IT</option>
                <option value="Operations">Operations</option>
                <option value="Finance">Finance</option>
                <option value="Accounts">Accounts</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Urgency</Form.Label>
              <Form.Select
                aria-label="select urgency"
                onChange={handleChange}
                value={ticketInfo.urgency}
                name="urgency"
              >
                <option>Select urgency</option>
                <option value="Emergency">Emergency</option>
                <option value="Critical">Critical</option>
                <option value="Medium">Medium</option>
                <option value="Can Wait">Emergency</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                onChange={handleChange}
                value={ticketInfo.description}
                name="description"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="duration"
                name="duration"
                value={ticketInfo.duration}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <div className="footer">
              <button>{isTicketSubmitting ? "Submitting..." : "Submit"}</button>
              <button onClick={() => closeModal(false)} id="cancelBtn">
                Cancel
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
