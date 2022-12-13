import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import PropTypes from "prop-types";
// import Image from "next/image";

const Blog = ({ image, title, subtitle, text, color }) => {
  return (
    <Card>
      {/* <Image alt="Card image cap" src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/ea/ac/8b/caption.jpg?w=500&h=400&s=1'} />
       */}
       <img src={image}></img>
      <CardBody className="p-4">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText className="mt-3 text-muted">{text}</CardText>
        <Button color={color}>~100 Attendants</Button>
      </CardBody>
    </Card>
  );
};

Blog.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
};
export default Blog;
