import Container from "react-bootstrap/Container";
import Navbarbg from "../component/navbar";
import React, { Component } from "react";
import { Input, Typography, Button, Table } from "antd";
import { range, compile, evaluate, simplify, parse, abs } from "mathjs";
import { Routes, Route, Link } from "react-router-dom";
import { InputGroup, FormControl, Navbar, Nav } from "react-bootstrap";


class LUDecomposion extends React.Component {

    render() {
        return (
            <div>
              <Navbar bg="primary" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">LU-Decomposion</Navbar.Brand>
                </Container>
              </Navbar>
              <Container>
                <br></br>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Row</InputGroup.Text>
                  <FormControl
                    placeholder="Input your Function"
                    name="fx"
                    style={{ width: 250 }}
      
                  />
                </InputGroup>
                {/*-----------------------------------------------------------------------------------------------------------    */}
      
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Columns</InputGroup.Text>
                  <FormControl
                    size="large"
                    placeholder="Input your Xl"
                    name="x1"
                    style={{ width: 200 }}
                  />
                  <ul></ul>
                </InputGroup>
              </Container>
              {/*-----------------------------------------------------------------------------------------------------------    */}
              <Container style={{ display: "flex" }}>
                <Button
                  type="submit"
                  variant="success"
                  size="lg"
                  block
                  style={{
                    width: "555px",
                    height: "40px",
                  }}
                >
                  CAL
                </Button>
                <ul> </ul>
                <Button
                  type="submit"
                  variant="success"
                  size="lg"
                  block
                  style={{
                    width: "555px",
                    height: "40px",
                  }}
                >
                  API
                </Button>
              </Container>
            </div>
          );
    }
  }
  export default LUDecomposion ;