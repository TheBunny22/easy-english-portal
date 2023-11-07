import React, { useState } from "react";
import Word from "./Word";
import Sentence from "./Sentence";
import styled from "@emotion/styled";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useEffect } from "react";
import { Button, ButtonGroup } from "@mui/joy";

const Background = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom right, #a6c0fe, #f68084);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Arial", sans-serif;
  color: #fff;
  text-align: center;
`;

const WordsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const RestartButton = styled.button`
  background-color: #ff0066;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 18px;

  &:hover {
    background-color: #cc0055;
  }
`;
const StyledHeading = styled.h1`
  font-size: 28px;
  margin: 1rem;
  color: #333; /* Change the color as needed */
  /* Add any other styles you want for the <h1> element */
`;
const nouns = [
  "fox",
  "dog",
  "apple",
  "banana",
  "chocolate",
  "elephant",
  "guitar",
  "kangaroo",
  "mountain",
  "notebook",
  "piano",
  "rainbow",
  "sunshine",
  "umbrella",
  "violin",
  "waterfall",
  "zebra",
  "beach",
  "mountain",
  "forest",
  "city",
  "park",
  "river",
  "ocean",
  "cat",
  "dog",
  "bird",
  "fish",
  "rabbit",
  "turtle",
  "lion",
  "elephant",
  "car",
  "bike",
  "bus",
  "train",
  "plane",
  "ship",
  "book",
  "pen",
  "computer",
  "guitar",
  "camera",
  "phone",
  "shoes",
  "hat",
  "family",
  "friend",
  "teacher",
  "doctor",
  "police",
  "musician",
];
const verbs = [
  "jumps",
  "ate",
  "ran",
  "sang",
  "swam",
  "danced",
  "wrote",
  "read",
  "laughed",
  "eat",
  "drink",
  "sleep",
  "run",
  "jump",
  "swim",
  "sing",
  "dance",
  "play",
];

const adjectives = [
  "the",
  "quick",
  "brown",
  "lazy",
  "beautiful",
  "happy",
  "colorful",
  "delicious",
  "exciting",
  "peaceful",
  "today",
  "yesterday",
  "tomorrow",
  "always",
  "sometimes",
  "never",
  "with",
  "in",
  "on",
  "under",
  "beside",
  "near",
  "between",
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "happy",
  "sad",
  "angry",
  "surprised",
  "tired",
  "hungry",
  "thirsty",
];
const pronouns = [
  "I",
  "you",
  "he",
  "she",
  "it",
  "we",
  "they",
  "is",
  "am",
  "are",
  "was",
  "were",
  "has",
  "have",
  "had",
  "will",
];

const getRandomWords = (nouns, adjectives, verbs, pronouns, count) => {
  const allWords = [...nouns, ...adjectives, ...verbs];
  const selectedWords = [];
  while (selectedWords.length < count) {
    const randomIndex = Math.floor(Math.random() * allWords.length);
    const randomWord = allWords[randomIndex];
    if (!selectedWords.includes(randomWord)) {
      selectedWords.push(randomWord);
    }
  }
  return [...selectedWords, ...pronouns];
};
const DragGame = () => {
  const [words, setWords] = useState([]);
  const [sentence, setSentence] = useState("");
  const [generatedWords, setGeneratedWords] = useState([]);

  useEffect(() => {
    const randomWords = getRandomWords(nouns, adjectives, verbs, pronouns, 26);
    setWords(randomWords);
    setGeneratedWords(randomWords);
    setSentence("");
  }, []);

  const handleDrop = (word) => {
    setSentence((prevSentence) => prevSentence + " " + word);
    const updatedWords = words.filter((w) => w !== word);
    setWords(updatedWords);
  };

  const resetWord = () => {
    setSentence("");
    setWords(generatedWords);
  };

  return (
    <Background>
      <StyledHeading>Word to Sentence Drag-and-Drop Game</StyledHeading>
      <div>
        <DndProvider backend={HTML5Backend}>
          <Sentence sentence={sentence} onDrop={handleDrop} />
          <WordsWrapper>
            {words.map((word, index) => (
              <Word key={index} word={word} />
            ))}
          </WordsWrapper>
        </DndProvider>
      </div>
      <br />
      <br />
      <ButtonGroup>
        <Button variant="solid" color="primary" onClick={resetWord}>
          Reset{" "}
        </Button>

        <Button
          variant="soft"
          color="primary"
          onClick={() => {
            const words = getRandomWords(
              nouns,
              adjectives,
              verbs,
              pronouns,
              26
            );
            setWords(words);
            setGeneratedWords(words);
          }}
        >
          Genarate Words
        </Button>
      </ButtonGroup>
    </Background>
  );
};

export default DragGame;
