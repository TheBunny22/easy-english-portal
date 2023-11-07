import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { FormControl, FormLabel, List, ListItem, Modal, ModalClose, ModalDialog, ModalOverflow, Switch, Typography } from "@mui/joy";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const GameWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const Question = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const Options = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  gap: 10px;
`;

const Option = styled(motion.div)`
  width: 10rem;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: 0.5px dashed lightgray;
  cursor: pointer;
  user-select: none;
  border-radius: 5px;
`;

const CorrectOption = styled(Option)`
  background-color: #2ecc71;
  color: #fff;
`;

const WrongOption = styled(Option)`
  background-color: #e74c3c;
  color: #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #27ae60;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const ScoreBar = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin: 1.5rem 0;
`;

const ShowScoreButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const PreviousButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;

  &:hover {
    background-color: #2980b9;
  }
`;

const questions = [
  // Your questions array remains the same.
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "lonfdomn"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2"],
    answer: "H2O",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "Jane Austen", "William Shakespeare"],
    answer: "William Shakespeare",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen"],
    answer: "Carbon dioxide",
  },
];

const BlanksGame = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [showScorePopup, setShowScorePopup] = useState(false);

  const handleOptionClick = (option) => {
    if (isCorrect === null) {
      setSelectedOption(option);
      if (option === questions[currentQuestion].answer) {
        setIsCorrect(true);
        setScore(score + 1);
      } else {
        setIsCorrect(false);
      }
    }
  };
  const [layout, setLayout] = React.useState(undefined);
  const [scroll, setScroll] = React.useState(true);
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowScorePopup(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setScore(0);
    setShowScorePopup(false);
  };

  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
  }, [currentQuestion]);

  return (
    <AnimatePresence>
      <FloatingButton
        onClick={() => {
          setLayout("fullscreen");
        }}
      > <MenuOpenIcon />
      </FloatingButton>
      <Container>
        <GameWrapper>
          <ScoreBar>Score: {score}</ScoreBar>
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Question>{questions[currentQuestion].question}</Question>
            <Options>
              {questions[currentQuestion].options.map((option) =>
                isCorrect === true &&
                option === questions[currentQuestion].answer ? (
                  <CorrectOption
                    key={option}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </CorrectOption>
                ) : isCorrect === false && option === selectedOption ? (
                  <WrongOption
                    key={option}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </WrongOption>
                ) : (
                  <Option
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    whileHover={{ backgroundColor: "#3498db" }}
                  >
                    {option}
                  </Option>
                )
              )}
            </Options>
            <ButtonContainer>
              <PreviousButton
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
              >
                Previous
              </PreviousButton>
              {currentQuestion < questions.length - 1 ? (
                <Button onClick={handleNextQuestion}>Next Question</Button>
              ) : (
                <>
                  <Button onClick={handleReset}>Reset</Button>
                  <ShowScoreButton onClick={() => setShowScorePopup(true)}>
                    Show Score
                  </ShowScoreButton>
                </>
              )}
            </ButtonContainer>
          </motion.div>
        </GameWrapper>
        <Modal open={showScorePopup} onClose={() => setShowScorePopup(false)}>
          <ModalDialog color="neutral" variant="outlined">
            <ModalClose />
            <Typography level="h3">
              Your Score: {score}/{questions.length}
            </Typography>

            {questions.map((q, index) => (
              <Typography key={index}>
                {"(" + (index + 1) + ")."} {q.question} - {q.answer}
              </Typography>
            ))}
          </ModalDialog>
        </Modal>
      </Container>
      <Modal
        open={!!layout}
        onClose={() => {
          setLayout(undefined);
        }}
      >
        <ModalOverflow>
          <ModalDialog aria-labelledby="modal-dialog-overflow" layout={layout}>
            <ModalClose />
            <Typography id="modal-dialog-overflow" level="h2">
              Overflow content
            </Typography>
            <FormControl
              orientation="horizontal"
              sx={{ bgcolor: "background.level2", p: 1, borderRadius: "sm" }}
            >
              <FormLabel>Long content</FormLabel>
              <Switch
                checked={scroll}
                onChange={(event) => setScroll(event.target.checked)}
                sx={{ ml: "auto" }}
              />
            </FormControl>
            {scroll && (
              <List>
                {[...Array(100)].map((item, index) => (
                  <ListItem key={index}>Item number ({index})</ListItem>
                ))}
              </List>
            )}
          </ModalDialog>
        </ModalOverflow>
      </Modal>
    </AnimatePresence>
  );
};

export default BlanksGame;
