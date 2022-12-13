import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
} from "reactstrap";
import Blog from "../../src/components/dashboard/Blog";
import bg1 from "../../src/assets/images/bg/bg1.jpg";
import bg2 from "../../src/assets/images/bg/bg2.jpg";
import bg3 from "../../src/assets/images/bg/bg3.jpg";
import bg4 from "../../src/assets/images/bg/bg4.jpg";
import Image from "next/image";

const BlogData = [
  {
    "id": 1,
    "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/a3/80/caption.jpg?w=500&h=400&s=1",
    "tour_name": "Cu Chi Tunnels & Mekong Delta Full-Day VIP Tour from Ho Chi Minh city",
    "agency": "By Vietnam Adventure Tours",
    "agency_info": "https://www.tripadvisor.com/Attraction_Review-g293925-d7171779-Reviews-Vietnam_Adventure_Tours-Ho_Chi_Minh_City.html",
    "review_no": "3,444",
    "recommend_percent": "98%",
    "description": "The scenic wetlands of the Mekong Delta and the fascinating war site of the Cu Chi Tunnels are two of the most visited attractions in South Vietnam. Visiting both in one day means a long day trip with up to five hours of transit time, but this VIP tour ensures you travel in style aboard a luxurious Limousine Ford transit, with plush seats, Wi-Fi, charging ports, cold drinks, and snacks.",
    "price": "from $75.99 per adult",
    "group_no": "Ages 3-99, max of 50 per group",
    "duration": "11h"
},
{
    "id": 2,
    "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/65/1a/a8/caption.jpg?w=500&h=400&s=1",
    "tour_name": "Cu Chi Tunnels from HCM City: Morning or Afternoon Guided Tour",
    "agency": "By Vietnam Adventure Tours",
    "agency_info": "https://www.tripadvisor.com/Attraction_Review-g293925-d7171779-Reviews-Vietnam_Adventure_Tours-Ho_Chi_Minh_City.html",
    "review_no": "6,173",
    "recommend_percent": "98%",
    "description": "Used by the Viet Cong during the Vietnam War, the Cu Chi Tunnels are a network of underground tunnels stretching more than 124 miles (200 kilometers). For travelers on a budget, this group tour of up to 20 people offers great value, including hotel pickup, round-trip transport, and a guided tour of the tunnels. Choose from a morning or afternoon tour to suit your schedule.",
    "price": "from $17.79 per adult",
    "group_no": "Ages 3-99, max of 500 per group",
    "duration": "6h"
},
{
    "id": 3,
    "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/a5/34/caption.jpg?w=500&h=400&s=1",
    "tour_name": "Mekong Delta Guided Tour from Ho Chi Minh city with Vinh Trang Pagoda & Lunch",
    "agency": "By Vietnam Adventure Tours",
    "agency_info": "https://www.tripadvisor.com/Attraction_Review-g293925-d7171779-Reviews-Vietnam_Adventure_Tours-Ho_Chi_Minh_City.html",
    "review_no": "3,226",
    "recommend_percent": "96%",
    "description": "With its stilted villages and scenic farms, the Mekong Delta offers enough to see that it’s difficult to see the highlights on a day trip from Ho Chi Minh, especially on your own. But this guided tour makes it possible: Visit a family home, take a horse-cart ride, and boat through canals (upgrade for a bike tour). A small group size means plenty of time to ask questions.",
    "price": "from $23.99 per adult",
    "group_no": "Ages 0-90, max of 25 per group",
    "duration": "9h"
},
{
    "id": 4,
    "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/57/fa/10/caption.jpg?w=500&h=400&s=1",
    "tour_name": "Cu Chi Tunnels and Mekong Delta Full Day Tour",
    "agency": "By Kim Travel",
    "agency_info": "https://www.tripadvisor.com/Attraction_Review-g293925-d6721127-Reviews-Kim_Travel-Ho_Chi_Minh_City.html",
    "review_no": "436",
    "recommend_percent": "96%",
    "description": "The Cu Chi Tunnels and Mekong Delta are two of the top attractions around Ho Chi Minh City—but it’s hard to visit both in one day independently. Combine them into one great day out on this door-to-door tour which starts at the Vietnam War–era fighting tunnels, continues to lunch in My Tho, and finishes with a river cruise, folk music performance, rowing boat trip, and candy workshop tour.",
    "price": "from $54.99 per adult (price varies by group size)",
    "group_no": "Ages 1-80, max of 9 per group",
    "duration": "10h"
},
{
    "id": 5,
    "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/0e/27/6d/caption.jpg?w=500&h=400&s=1",
    "tour_name": "Cu Chi Tunnels & Mekong Delta Full-Day Tour from Ho Chi Minh city",
    "agency": "By Vietnam Adventure Tours",
    "agency_info": "https://www.tripadvisor.com/Attraction_Review-g293925-d7171779-Reviews-Vietnam_Adventure_Tours-Ho_Chi_Minh_City.html",
    "review_no": "938",
    "recommend_percent": "97%",
    "description": "Tired of cramped, uncomfortable minibuses? Explore the Cu Chi Tunnels like a VIP in a comfortable Ford Transit limousine, with beer, fruit, water, and cool tissues on tap and then cruise the Mekong Delta by motorboat and rowboat. Crawl through Vietnam War–era tunnels, get a chance to fire weaponry, visit a fruit garden, and see rural life in action.",
    "price": "from $49.99 per adult",
    "group_no": "Ages 3-99, max of 50 per group",
    "duration": "11h"
},
{
    "id": 6,
    "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6f/06/d7/caption.jpg?w=500&h=400&s=1",
    "tour_name": "Ho Chi Minh City Private Half-Day Tour by U.S Army Jeep",
    "agency": "By Jeep Tour Saigon By Night",
    "agency_info": "https://www.tripadvisor.com/Attraction_Review-g293925-d8647034-Reviews-Jeep_Tour_Saigon_By_Night-Ho_Chi_Minh_City.html",
    "review_no": "214",
    "recommend_percent": "95%",
    "description": "Jeep tour is BEST choice for FAMILY and COUPLE. You can talk, share and have fun together on your private U.S Army Jeep.\n\nDue to the heavy traffic in Saigon so travelling by Jeep is the safest way to discovery local areas of Saigon. On Jeep car you can stand up and enjoy the fresh air, capture the most memorable time in Saigon.\n\nFamiliarize yourself with the history and culture of Ho Chi Minh City on a 4-hour tour. Enjoy seeing a selection of the main sights and learn about the past and present of the area. Choose from a morning or afternoon tour, each with its own unique route. \n\nThis half-day tour is the perfect activity to capture a glimpse of the historic landmarks and sites of Ho Chi Minh City such as the Reunification Palace, the War Remnants Museum, Notre Dame Cathedral, Emperor of Jade Pagoda, Ben Thanh Market...",
    "price": "from $71.00 per adult (price varies by group size)",
    "group_no": "Ages 1-89",
    "duration": "4h"
},
{
    "id": 7,
    "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/ea/ac/8b/caption.jpg?w=500&h=400&s=1",
    "tour_name": "Private Street Food Tour by Motorbike/Car with Local Students",
    "agency": "By Saigon Back Alley Tours",
    "agency_info": "https://www.tripadvisor.com/Attraction_Review-g293925-d13421912-Reviews-Saigon_Back_Alley_Tours-Ho_Chi_Minh_City.html",
    "review_no": "1,149",
    "recommend_percent": "100%",
    "description": "There’s no better way to get into the swing of Saigon than riding a motorbike. Enjoy the immediacy of scooter travel without the self-driving risks on this private guided foodie adventure. Pull up a kindergarten chair and channel Anthony Bourdain as you sample eight separate tastings at a range of street eateries. Savor city signatures from beer to banh mi sandwiches and curios such as sweet soup and barbecued scallops.",
    "price": "from $32.00 per adult (price varies by group size)",
    "group_no": "Ages 1-99",
    "duration": "4h"
},
{
    "id": 8,
    "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/2d/6c/caption.jpg?w=500&h=400&s=1",
    "tour_name": "Mekong Delta Tour with Kayaking, Boat trip, Biking and Cooking Class",
    "agency": "By Vietnam Adventure Tours",
    "agency_info": "https://www.tripadvisor.com/Attraction_Review-g293925-d7171779-Reviews-Vietnam_Adventure_Tours-Ho_Chi_Minh_City.html",
    "review_no": "538",
    "recommend_percent": "97%",
    "description": "Waterfront landscapes and farming villages make the Mekong Delta a Ho Chi Minh City must. Enjoy a wealth of activities that would be almost impossible to arrange independently on this action-packed door-to-door tour. Visit Cai Be Floating Market; tour a craft village; watch live music; sample orchard-fresh fruit; cook your own lunch; and kayak and bike through the delta.",
    "price": "from $49.00 per adult",
    "group_no": "Ages 3-99, max of 20 per group",
    "duration": "10h"
},
  // {
  //   image: bg1,
  //   title: "Trip 1",
  //   subtitle: "2 comments, 1 Like",
  //   description:
  //     "This is a wider card with supporting text below as a natural lead-in to additional content.",
  //   btnbg: "primary",
  // },
  // {
  //   image: bg2,
  //   title: "Lets be simple blog",
  //   subtitle: "2 comments, 1 Like",
  //   description:
  //     "This is a wider card with supporting text below as a natural lead-in to additional content.",
  //   btnbg: "primary",
  // },
  // {
  //   image: bg3,
  //   title: "Don't Lamp blog",
  //   subtitle: "2 comments, 1 Like",
  //   description:
  //     "This is a wider card with supporting text below as a natural lead-in to additional content.",
  //   btnbg: "primary",
  // },
  // {
  //   image: bg4,
  //   title: "Simple is beautiful",
  //   subtitle: "2 comments, 1 Like",
  //   description:
  //     "This is a wider card with supporting text below as a natural lead-in to additional content.",
  //   btnbg: "primary",
  // },
];

const Cards = () => {
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <h5 className="mb-3">Basic Card</h5>
      <Row>
        {BlogData.map((blg) => (
          <Col sm="6" lg="6" xl="3" key={blg.title}>
            <Blog
              image={blg.img_url}
              title={blg.tour_name.slice(0,14)}
              // subtitle={blg.subtitle}
              // text={blg.description}
              // color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Row>
        <h5 className="mb-3 mt-3">Alignment Text</h5>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-warning">Go somewhere</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body className="text-center">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-danger">Go somewhere</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body className="text-end">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-success">Go somewhere</Button>
            </div>
          </Card>
        </Col>
      </Row> */}
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Row>
        <h5 className="mb-3 mt-3">Colored Card</h5>
        <Col md="6" lg="3">
          <Card body color="primary" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="info" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="success" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="danger" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-warning">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-info">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-success">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-danger">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
      </Row> */}
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-Group*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Row>
        <h5 className="mb-3 mt-3">Card Group</h5>
        <Col>
          <CardGroup>
            <Card>
              <Image alt="Card image cap" src={bg1} />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <Image alt="Card image cap" src={bg2} />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <Image alt="Card image cap" src={bg3} />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row> */}
    </div>
  );
};

export default Cards;
