import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardGroup,
  ListGroup,
  Nav,
  Button,
} from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../components/PageTitle";

import cardImg from "../../assets/images/small/img-1.jpg";
import cardImg2 from "../../assets/images/small/img-4.jpg";
import cardImg3 from "../../assets/images/small/img-2.jpg";
import cardImg4 from "../../assets/images/small/img-3.jpg";
import cardImg5 from "../../assets/images/small/img-5.jpg";
import cardImg6 from "../../assets/images/small/img-6.jpg";
import cardImg7 from "../../assets/images/small/img-7.jpg";

interface CardGroupDetailsTypes {
  id: number;
  image: string;
  title: string;
  text: string;
  subtext: string;
}

const CardWithImage = () => {
  return (
    <Card>
      <Card.Img src={cardImg} />
      <Card.Body>
        <Card.Title as="h5">Card title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. With supporting text below as a natural
          lead-in to additional content.
        </Card.Text>
        <Link to="#" className="btn btn-primary waves-effect waves-light">
          Button
        </Link>
      </Card.Body>
    </Card>
  );
};

const CardWithImage2 = () => {
  return (
    <Card>
      <Card.Img src={cardImg3} />
      <Card.Body>
        <Card.Title as="h5">Card title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title.
        </Card.Text>
      </Card.Body>

      <ListGroup variant="flush">
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      </ListGroup>

      <Card.Body>
        <Card.Link href="#" className="text-custom">
          Card link
        </Card.Link>
        <Card.Link href="#" className="text-custom">
          Another link
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

const CardWithImage3 = () => {
  return (
    <Card>
      <Card.Img src={cardImg4} />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. With supporting text below as a natural
          lead-in to additional content.
        </Card.Text>
        <Link to="#" className="btn btn-primary waves-effect waves-light">
          Button
        </Link>
      </Card.Body>
    </Card>
  );
};

const CardWithTitleAndImage = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title as="h5">Card title</Card.Title>
        <Card.Subtitle as="h6" className="text-muted">
          Support card subtitle
        </Card.Subtitle>
      </Card.Body>
      <Card.Img src={cardImg2} className="img-fluid" />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#" className="text-custom">
          Card link
        </Card.Link>
        <Card.Link href="#" className="text-custom">
          Another link
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

const CardWithSpecialTitle = () => {
  return (
    <Card as={Card.Body}>
      <Card.Title as="h5">Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Link to="#" className="btn btn-primary waves-effect waves-light">
        Go somewhere
      </Link>
    </Card>
  );
};

const CardWithHeader = () => {
  return (
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title as="h5">Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to="#" className="btn btn-primary waves-effect waves-light">
          Go somewhere
        </Link>
      </Card.Body>
    </Card>
  );
};

const CardWithHeaderAndQuote = () => {
  return (
    <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="card-bodyquote mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer>
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

const CardWithHeaderAndFooter = () => {
  return (
    <Card className="text-xs-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

const CardWithImageCaps = ({
  position,
  image,
}: {
  position: string;
  image: string;
}) => {
  return (
    <>
      <Card>
        {position === "top" && <Card.Img variant={position} src={image} />}
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
        {position === "bottom" && <Card.Img variant={position} src={image} />}
      </Card>
    </>
  );
};

const CardWithImageOverlay = () => {
  return (
    <>
      <Card className="text-white">
        <Card.Img src={cardImg7} alt="" />
        <Card.ImgOverlay>
          <Card.Title className="text-white">Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>
            <small>Last updated 3 mins ago</small>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

const ColoredCards = () => {
  const colors = [
    "primary",
    "success",
    "info",
    "warning",
    "danger",
    "blue",
    "pink",
    "dark",
  ];

  return (
    <>
      <Col md={4}>
        <Card className="text-white bg-secondary">
          <Card.Body>
            <Card.Title as="h5" className="text-white">
              Special title treatment
            </Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Link to="#" className="btn btn-light btn-sm waves-effect">
              Button
            </Link>
          </Card.Body>
        </Card>
      </Col>
      {(colors || []).map((color, index) => {
        return (
          <Col md={4} key={index}>
            <Card
              className={classNames("text-white", "text-xs-center", [
                `bg-${color}`,
              ])}
            >
              <Card.Body>
                <blockquote className="card-bodyquote mb-0">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

const ColoredTextCards = ({ color, name }: { color: string; name: string }) => {
  return (
    <Card>
      <Card.Body className={classNames("text-" + color)}>
        <Card.Title as="h5">{name} card title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const BorderdCards = () => {
  const colors = [
    {
      variant: "primary",
      name: "Primary",
    },
    {
      variant: "success",
      name: "Success",
    },
    {
      variant: "danger",
      name: "Danger",
    },
  ];

  return (
    <>
      {(colors || []).map((item, index) => {
        return (
          <Col md={4} key={index}>
            <Card
              className={classNames(
                "text-white",
                [`bg-${item.variant}`],
                "mb-3"
              )}
            >
              <Card.Header className={classNames([`bg-${item.variant}`])}>
                Header
              </Card.Header>
              <Card.Body>
                <Card.Title as="h4" className="text-white">
                  {item.name} card title
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
      {(colors || []).map((item, index) => {
        return (
          <Col md={4} key={index}>
            <Card
              className={classNames(
                "border",
                [`border-${item.variant}`],
                "mb-3"
              )}
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title
                  as="h4"
                  className={classNames([`text-${item.variant}`])}
                >
                  {item.name} card title
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

const HorizontalCards = () => {
  return (
    <>
      <Col md={6}>
        <Card className="mb-3">
          <Row className="g-0">
            <Col md={4}>
              <Card.Img src={cardImg5} className="img-fluid" />
            </Col>

            <Col md={8}>
              <Card.Body>
                <Card.Title as="h5">Card Title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="mb-3">
          <Row className="g-0">
            <Col md={8}>
              <Card.Body>
                <Card.Title as="h5">Card Title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Col>
            <Col md={4}>
              <Card.Img src={cardImg6} className="img-fluid" />
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

const CardWithGroup = ({ item }: { item: CardGroupDetailsTypes }) => {
  return (
    <Card>
      <Card.Img src={item.image} />
      <Card.Body>
        <Card.Title as="h5">{item.title}</Card.Title>
        <Card.Text>{item.text}</Card.Text>
        <Card.Text>
          <small className="text-muted">{item.subtext}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const CardsWithNavigation = ({ variant }: { variant: "tabs" | "pills" }) => {
  return (
    <>
      <Card className="text-center">
        <Card.Header>
          <Nav variant={variant} defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link className="cursor-pointer" href="#first">
                Active
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="cursor-pointer" href="#link">
                Link
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="cursor-pointer" href="#disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

const GridCards = () => {
  return (
    <>
      <Col>
        <Card>
          <Card.Img src={cardImg7} />
          <Card.Body>
            <Card.Title as="h5">Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card as={Card.Body}>
          <blockquote className="card-bodyquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer>
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img src={cardImg} />
          <Card.Body>
            <Card.Title as="h5">Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card as={Card.Body}>
          <blockquote className="card-bodyquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
            <footer>
              <small>
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card as={Card.Body} className="text-xs-center">
          <Card.Title as="h5">Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img src={cardImg3} className="img-fluid" />
        </Card>
        <Card as={Card.Body} className="text-xs-right">
          <blockquote className="card-bodyquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer>
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card as={Card.Body}>
          <Card.Title as="h5">Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card>
      </Col>
    </>
  );
};

const Cards = () => {
  const CardGroupDetails: CardGroupDetailsTypes[] = [
    {
      id: 1,
      image: cardImg,
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      subtext: "Last updated 3 mins ago",
    },
    {
      id: 2,
      image: cardImg3,
      title: "Card title",
      text: "This card has supporting text below as a natural lead-in to additional content.",
      subtext: "Last updated 3 mins ago",
    },
    {
      id: 3,
      image: cardImg4,
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
      subtext: "Last updated 3 mins ago",
    },
  ];

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Base UI", path: "/ui/cards" },
          { label: "Cards", path: "/ui/cards", active: true },
        ]}
        title={"Cards"}
      />

      <Row>
        <Col lg={6} xl={3}>
          <CardWithImage />
        </Col>

        <Col lg={6} xl={3}>
          <CardWithImage2 />
        </Col>

        <Col lg={6} xl={3}>
          <CardWithImage3 />
        </Col>

        <Col lg={6} xl={3}>
          <CardWithTitleAndImage />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <CardWithSpecialTitle />
        </Col>
        <Col lg={6}>
          <CardWithSpecialTitle />
        </Col>
      </Row>

      <Row>
        <Col lg={4}>
          <CardWithSpecialTitle />
        </Col>
        <Col lg={4}>
          <CardWithSpecialTitle />
        </Col>
        <Col lg={4}>
          <CardWithSpecialTitle />
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <CardWithHeader />
        </Col>

        <Col md={4}>
          <CardWithHeaderAndQuote />
        </Col>

        <Col md={4}>
          <CardWithHeaderAndFooter />
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <CardWithImageCaps position={"top"} image={cardImg5} />
        </Col>

        <Col md={4}>
          <CardWithImageCaps position={"bottom"} image={cardImg6} />
        </Col>

        <Col md={4}>
          <CardWithImageOverlay />
        </Col>
      </Row>

      <Row>
        <ColoredCards />
      </Row>

      <Row>
        <Col md={4}>
          <ColoredTextCards color={"primary"} name={"Primary"} />
        </Col>

        <Col md={4}>
          <ColoredTextCards color={"secondary"} name={"Secondary"} />
        </Col>

        <Col md={4}>
          <ColoredTextCards color={"success"} name={"Success"} />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <h4 className="mb-4">Card Group</h4>

          <CardGroup>
            {(CardGroupDetails || []).map((item, index) => {
              return <CardWithGroup item={item} key={index} />;
            })}
          </CardGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4 className="my-4">Navigation</h4>

          <Row>
            <Col md={6}>
              <CardsWithNavigation variant={"tabs"} />
            </Col>
            <Col md={6}>
              <CardsWithNavigation variant={"pills"} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4 className="mb-4">Horizontal Card</h4>
          <Row>
            <HorizontalCards />
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4 className="mb-4">Card styles</h4>
          <Row>
            <BorderdCards />
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4 className="mb-4">Grid Cards</h4>
          <Row className="row-cols-1 row-cols-md-3 g-3">
            <GridCards />
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Cards;
