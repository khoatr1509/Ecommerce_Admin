import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import { React, useState, useEffect } from 'react'
import ProjectTables from "../../src/components/dashboard/ProjectTable";
import { doc, onSnapshot, getFirestore, updateDoc,arrayUnion} from "firebase/firestore";
import app from '../../firebase';

const db = getFirestore(app);

const Tables = () => {

  const [pay_list, updateTrip] = useState([]);
    
    useEffect(() => {
        const unsub = onSnapshot(doc(db, "payment", "HrSXH4rJgvMHeAlgjvom"), 
            (doc) => {
                console.log("Current data: ", doc.data().payment_list);
                console.log("Current data: ", doc.data().payment_list[0]);
                // console.log(typeof(doc.data().trip_list));
                updateTrip(doc.data().payment_list);
        });
    },[])

    console.log(pay_list);
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <ProjectTables />
      </Col>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-3*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Trip orders
          </CardTitle>
          <CardBody className="">
            <Table bordered striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Trip Name</th>
                  <th>Price</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {
                  pay_list.map((pay) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <tr>
                        <th scope="row"></th>
                        <td>{pay.tripName}</td>
                        <td>{pay.price}</td>
                        <td>
                        <select name="cars" id="cars">
                          <option value="volvo">Processing</option>
                          <option value="mercedes">Cancel</option>
                          <option value="audi">Finished</option>
                        </select>
                        </td>
                      </tr>
                    )
                  }) 
                }
                
                {/* <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr> */}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-3*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Table with Hover
          </CardTitle>
          <CardBody className="">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col> */}
    </Row>
  );
};

export default Tables;
