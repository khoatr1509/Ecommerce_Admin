import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';

import { React, useState, useEffect } from 'react';
import app from '../../firebase';

import { doc, onSnapshot, getFirestore, updateDoc,arrayUnion} from "firebase/firestore";
const db = getFirestore(app);

const Forms = () => {

  const [agent, setAgency] = useState('')
  const [agency, updateAgency] = useState('')

  const [key, setKey] = useState('');
  const [name,setName] = useState('new trip1');

  
  console.log(name)
  const a =  {
    id: 14,
    img_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/65/1a/a8/caption.jpg?w=500&h=400&s=1",
    tour_name: name,
    agency: agency,
    agency_info: "https://www.tripadvisor.com/Attraction_Review-g293925-d7171779-Reviews-Vietnam_Adventure_Tours-Ho_Chi_Minh_City.html",
    review_no: "6,173",
    recommend_percent: "98%",
    description: "This is new trip",
    price: "$14",
    group_no: "Ages 3-99, max of 500 per group",
    duration: "6h"
  }

  function handleUpdate(e) {
    e.preventDefault();
    setName(key);
    updateAgency(agent);
    
    a.agency = agency;
    a.name = name
    updateDoc(doc(db, "TripList", "trip_"), {
      'trip_list': arrayUnion(a)
      // state: "CA",
      // country: "USA"
    },{merge: true});
  }
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Form Example
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleUpdate}>
            <FormGroup>
                <Label for="examplePassword">By Agency</Label>
                <Input
                  name="name"
                  placeholder="Agency Name"
                  type="text"
                  onChange={e => setAgency(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Name</Label>
                <Input
                  name="name"
                  placeholder="Trip Name"
                  type="text"
                  onChange={e => setKey(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Price</Label>
                <Input
                  name="price"
                  placeholder="Trip Price"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Description</Label>
                <Input
                  name="description"
                  placeholder="Description"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  This is some placeholder block-level help text for the above input. Its a bit
                  lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              {/* <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup> */}
              {/* <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input id="exampleSelectMulti" multiple name="selectMulti" type="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup> */}
              {/* <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup> */}
              {/* <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  This is some placeholder block-level help text for the above input. Its a bit
                  lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{' '}
                  <Label check>Option one is this and that—be sure to include why its great</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{' '}
                  <Label check>
                    Option two can be something else and selecting it will deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Input disabled name="radio1" type="radio" />{' '}
                  <Label check>Option three is disabled</Label>
                </FormGroup>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" /> <Label check>Check me out</Label>
              </FormGroup> */}
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
