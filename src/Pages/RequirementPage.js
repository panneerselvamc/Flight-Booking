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
import flight1 from '../images/flight1.jpg';
import flight2 from '../images/flight3.jpg';
import Header from "./Header";
export default class RequirementPage extends Component {
  render() {
    return (
      <div className="headerBody">
        
        <Header>
        <br />
          <div style={{ paddingRight:"20%" ,paddingLeft:"20%" }}>
            <br />
            <div className="bodyColor">
              <Form  style={{margin:"2%"}}>
                {/* -------------------------------------- */}

                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>
                      <b>From</b>
                    </Form.Label>
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
                      <b> Date of Travel</b>
                    </Form.Label>
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
                
                <fieldset >
                  <Form.Group as={Row} >
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
                
                <Form.Group as={Row} controlId="exampleForm.ControlSelect2" >
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

              <Form style={{margin:"2%"}}>
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

                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="ageInfant">
                    <Form.Label>
                      <b>Infant</b>
                    </Form.Label>

                    <Form.Control as="select">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="ageChildren">
                    <Form.Label>
                      <b>Children</b>
                    </Form.Label>
                    <Form.Control as="select">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="ageAdult">
                    <Form.Label>
                      <b> Adult</b>
                    </Form.Label>
                    <InputGroup>
                    <Form.Control as="select">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
              </Form>

              <div className="centerStyle">
                <button style={{ backgroundColor: "rgb(60, 179, 113)" }}>
                  <b>Search</b> <i class="material-icons">flight</i>
                </button>
              </div>
              <br />
            </div>
          </div>
          
        </Header>





        
      </div>
    );
  }
}
