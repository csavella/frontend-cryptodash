import emailjs from "emailjs-com";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Contact = () => {
  const [emailAddress, setEmailAdress] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  function sendMessage() {
    console.log("Name: " + fullName);
    console.log("Email: " + emailAddress);
    console.log("Message: " + message);
  }

  function handleNameChange(value) {
    setFullName(value);
  }
  function handleEmailChange(value) {
    setEmailAdress(value);
  }
  function handleMessageChange(value) {
    setMessage(value);
  }

  function checkEmailAddress() {
    var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (emailAddress.match(email_regex)) {
      return true;
    }
    alert("Error: please enter a valid email address");
    return false;
  }

  function sendEmail() {
    var templateParams = {
      to_name: "Chasity Savella, Eric Anderson, Chiharu Akiyama",
      from_name: "CryptoDash App",
      fullname: fullName,
      email: emailAddress,
      message: message,
    };

    if (fullName === "") {
      alert("ERROR: Name is required.");
      return;
    }

    if (emailAddress === "") {
      alert("ERROR: Email is required.");
      return;
    }

    if (!checkEmailAddress()) {
      return;
    }

    emailjs
      .send(
        "csavella_frontend",
        "template_xwnwtxf",
        templateParams,
        "user_7mBuykiL1mjdR966UDCWz"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    alert(
      "Thank you! We received your message and we will get back to you back ASAP."
    );
  }

  return (
    <div className="contact-us container">
      <div className="row contact-form z-depth-1">
        <div className="col">
          <div className="col-md-auto">
            <h2 style={{ textAlign: "center", margin: 2 + "em" }}>
              Send us a message!
            </h2>
            <Form>
              <Form.Group style={{ marginBottom: 1 + "em" }}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  as="input"
                  placeholder="Enter full name"
                  onChange={(e) => handleNameChange(e.target.value)}
                  required
                />
                <Form.Text id="fullName" name="fullName" value={fullName} />
              </Form.Group>
              <Form.Group style={{ marginBottom: 1 + "em" }}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  as="input"
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => handleEmailChange(e.target.value)}
                  required
                />
                <Form.Text
                  id="emailAddress"
                  name="emailAddress"
                  aria-describedby="emailHelp"
                  value={emailAddress}
                />
              </Form.Group>
              <Form.Group style={{ marginBottom: 1 + "em" }}>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="message"
                  value={message}
                  onChange={(e) => handleMessageChange(e.target.value)}
                  placeholder="Type a message"
                ></Form.Control>
              </Form.Group>
              <Button
                type="submit"
                variant="dark"
                className="btn btn-dark btn-block"
                onClick={() => sendEmail()}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
