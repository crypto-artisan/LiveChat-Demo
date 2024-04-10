import React from "react";
import { Row, Col } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import FAQs from "../../components/FAQs";

interface RawFaqs {
  id: number;
  question: string;
  answer: string;
}

// FAQ component
const FAQ = () => {
  const rawFaqs: RawFaqs[] = [
    {
      id: 1,
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 2,
      question: "Is safe use Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 3,
      question: "Why use Lorem Ipsum?",
      answer:
        "Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet oratio iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus te. Ne primis suavitate disputando nam. Mutat convenirete.",
    },
    {
      id: 4,
      question: "When can be used?",
      answer:
        "Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet oratio iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus te. Ne primis suavitate disputando nam. Mutat convenirete.",
    },
    {
      id: 5,
      question: "How many variations exist?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 6,
      question: "License & Copyright",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 7,
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 8,
      question: "Is safe use Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Extra Pages", path: "/pages/faq" },
          { label: "FAQs", path: "/pages/faq", active: true },
        ]}
        title={"FAQs"}
      />

      <Row>
        <Col>
          <div className="text-center">
            <i className="h1 mdi mdi-comment-multiple-outline text-muted"></i>
            <h3 className="mb-3">Frequently Asked Questions</h3>
            <p className="text-muted">
              Nisi praesentium similique totam odio obcaecati, reprehenderit,
              dignissimos rem temporibus ea inventore alias!
              <br /> Beatae animi nemo ea tempora, temporibus laborum facilis
              ut!
            </p>

            <button
              type="button"
              className="btn btn-success waves-effect waves-light mt-2 me-1"
            >
              <i className="mdi mdi-email-outline me-1"></i> Email us your
              question
            </button>
            <button
              type="button"
              className="btn btn-primary waves-effect waves-light mt-2"
            >
              <i className="mdi mdi-twitter me-1"></i> Send us a tweet
            </button>
          </div>
        </Col>
      </Row>

      {/* question/answer */}
      <FAQs rawFaqs={rawFaqs} containerClass={"pt-5"} />
    </React.Fragment>
  );
};

export default FAQ;
