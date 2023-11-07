import styled from "@emotion/styled";
import React from "react";
import Banner from "../../assets/phonics.png";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";

// Define your styled components
const LessonContainer = styled.div`
  background-color: #f2f2f2;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
const LessonImage = styled.img`
  max-width: 100%;
  border: 2px solid #555;
  border-radius: 8px;
`;
const LessonImageP = styled.img`
  max-width: 100%;
  border: 2px solid #555;
  height: 600px;
  border-radius: 8px;
`;
const InteractiveList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin-bottom: 10px;
    font-size: large;
    font-weight: lighter;
    display: flex;
    align-items: center;
    & > u {
      text-decoration: none;
      color: #0078d4;
      margin-right: 5px;
    }
  }
`;
const LessonTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

const LessonContent = styled.div`
  margin: 1rem 0 1rem 1rem;
`;

const LessonMedia = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: center;
`;

const FloatingButtonMenuContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;
`;

const StyledIframe = styled.iframe`
  width: 100%; /* Adjust the width as needed */
  height: 400px; /* Adjust the height as needed */
  border: none; /* Remove the iframe border if present */
  border-radius: 8px; /* Add border radius for a rounded appearance */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a box shadow for depth */

  /* Additional styles for responsiveness */
  @media (max-width: 768px) {
    height: 250px; /* Adjust the height for smaller screens */
  }
`;

// Your lesson presentation component
function LessonPresentation() {
  const topic1 = `Lesson 1: Introduction to Phonetics  , Observation of how people say things , Description of spoken language at the level of "pronunciation" , Measurement of pronunciation events , Modeling of pronunciation behavior , Explanation of the communicative contribution of pronunciation patterns`;
  const speakWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <LessonContainer>
      <FloatingButtonMenuContainer>
        <Dropdown>
          <MenuButton>Action Menu</MenuButton>
          <Menu>
            <MenuItem onClick={() => speakWord(topic1)}>Add item</MenuItem>
          </Menu>
        </Dropdown>
      </FloatingButtonMenuContainer>
      <LessonMedia>
        <LessonImage src={Banner} alt="Lesson Image" height="100%" />
        <audio controls>
          <source src="your-audio-url.mp3" type="audio/mpeg" />
        </audio>
      </LessonMedia>

      <LessonTitle>Lesson 1: Introduction to Phonetics</LessonTitle>
      <LessonContent>
        <InteractiveList>
          <li>
            <u>Observation</u> of how people say things
          </li>
          <li>
            <u>Description</u> of spoken language at the level of
            "pronunciation"
          </li>
          <li>
            <u>Measurement</u> of pronunciation events
          </li>
          <li>
            <u>Modeling</u> of pronunciation behavior
          </li>
          <li>
            <u>Explanation</u> of the communicative contribution of
            pronunciation patterns
          </li>
        </InteractiveList>
      </LessonContent>
      <LessonContent>
        <p>Here's the International Phonetic Alphabet (IPA) chart:</p>
        <StyledIframe src="https://www.ipachart.com" title="International Phonetic Alphabet (IPA) chart"></StyledIframe>
        <p>Learn how to pronounce the sounds...</p>
      </LessonContent>
    </LessonContainer>
  );
}

export default LessonPresentation;
