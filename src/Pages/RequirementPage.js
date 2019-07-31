import React, { Component } from "react";
import "./RequirementPageCss.css";
import {
  Button,
  FormControl,
  Form,
  Nav,
  Navbar,
  Carousel,
  Col,
  Row,
  InputGroup
} from "react-bootstrap";
import Header from "./Header";
export default class RequirementPage extends Component {
  render() {
    return (
      <div className="headerBody">
        <Header>
          <div style={{ paddingLeft: "20%", paddingRight: "20%" }}>
            <br />
            <div className="bodyColor">
              <Form>
               
                {/* -------------------------------------- */}

                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label><b>From</b></Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="From"
                      // defaultValue="Mark"
                    />

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>
                    <b>To</b> 
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="To"
                      // defaultValue="Otto"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>
                    <b> Date of Travel</b></Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="Date"
                        placeholder="Date"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </Form.Row>

                {/* +++++++++++++++++++++++++++++++++++++++++++++ */}

                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                    <b>Type of Flight</b>  
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Domestic "
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="International "
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
                {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}
                <Form.Group as={Row} controlId="exampleForm.ControlSelect2">
                  <Form.Label column sm={2}>
                   <b> Transport Type</b>
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control as="select" multiple>
                      <option>One Way</option>
                      <option>Multi City</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Form>

              {/* ___________________________________ */}

              <Form>
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                     <b> Class</b>
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="First Class"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                      />
                      <Form.Check
                        type="radio"
                        label="Business Class"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios4"
                      />
                      <Form.Check
                        type="radio"
                        label="Economy Class"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios5"
                      />
                    </Col>
                  </Form.Group>
                </fieldset>

                {/* ---------------------------------- */}

                <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                  <Form.Label column sm={2}>
                   <b> Category</b>
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control as="select">
                      <option>Infant [0-2]</option>
                      <option>Children [2-12]</option>
                      <option>Adult [Above 12]</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Form>

              <div className="centerStyle">
                <button style={{ backgroundColor: "rgb(60, 179, 113)" }}>
                 <b>Search</b>  <i class="material-icons">flight</i>
                </button>
              </div>
              <br/>
            </div>
          </div>
        </Header>
      </div>
    );
  }
}
