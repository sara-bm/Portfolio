import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import instagram from "../../Assets/Projects/instagram.png";
import chatbot from  "../../Assets/Projects/chatbot (2).jpg";
import aisearch from "../../Assets/Projects/ai search.jpeg";
import sentiment from  "../../Assets/Projects/sentiment.png";
import chotbotEcommerce from "../../Assets/Projects/ecommerce.jpg"
import recolyse from  "../../Assets/Projects/recolyse.png"
import uni from "../../Assets/Projects/uni.png"
function Projects() {
  return (

    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Akadinia"
              description="Scraped product data from three major fashion marketplaces, providing real-time updates. Developed a notification feature that alerts users when a product reaches their desired price. Additionally, built a recommendation system using JavaScript to suggest similar products based on user preferences. "
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aisearch}
              isBlog={false}
              title="AppFinderAI"
              description="AppFinderAI is an intelligent chatbot that uses advanced AI models like BERT and LLaMA to understand user needs and preferences. Instead of generating text responses, it suggests relevant SaaS products and applications based on the user's requirements. With its strong NLP capabilities, SaaSMatch interprets queries and provides accurate product recommendations, making it easier to find the right software solutions. It was letter implemented In my current company recent project."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instagram}
              isBlog={false}
              title="Recolyse V1"
              description="I was responsible for scraping data from Facebook and Instagram, analyzing metrics like follower demographics (e.g., country and age), and generating insights such as engagement trends (e.g., recent likes and followers). Additionally, I developed functionality for posting directly to Instagram through the platform, providing a seamless user experience for managing social media data and interactions."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={true}
              title="Sentiment Analysis"
              description="
A sentiment analysis project using NLTK, TextBlob, Flair, and DeepMoji to assess text polarity and emotion. I designed to be impelemented in various for application like customer feedback analysis and social media sentiment tracking."
              ghLink="https://github.com/sara-bm/sentiment-analysis"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chotbotEcommerce}
              isBlog={true}
              title="Ecommerce Chatbot"
              description="Developed an intelligent eCommerce chatbot integrated with the Gadget platform, using Dialogflow APIs. The chatbot assists users by answering product queries, recommending items, handling FAQs, and guiding them through the purchasing process."
              ghLink="https://github.com/sara-bm/Gadgy-Ecommerce-Platform"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uni}
              isBlog={true}
              title="My University"
              description="Since we were facing issues with paper demands and long lines of people, I developed a university website to streamline processes and improve efficiency. The website offers online access to important resources such as admission forms, course information, and event schedules, reducing the need for in-person visits and paper documentation."
             ghLink="https://github.com/sara-bm/My-University"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recolyse}
              isBlog={false}
              title="Recolyse"
              description="Recolyse is a startup solution where I was responsible for developing the screen and camera recording features, implementing trimming functionality using FFmpeg, and working on the development of a recommendation system utilizing large language models (LLM)."
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
