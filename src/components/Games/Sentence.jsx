import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/joy";
import { useDrop } from "react-dnd";

const Sentences = {
  backgroundColor: "#33cc33",
  color: "#fff",
  border: "2px dashed rgb(0, 153, 0)",
  borderRadius: "10px",
  marginBottom: "15px",
  fontSize: "24px",
  padding: "15px 5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width: 1024px)": {
    fontSize: "36px",
  },
};

const Initmsg = {
  color: "lightgrey",
  fontSize: "small",
  padding: "0.6rem",
};

const Sentence = ({ sentence, onDrop }) => {
  const [, drop] = useDrop({
    accept: "WORD",
    drop: (item) => onDrop(item.word),
  });

  return (
    <motion.div>
      <Box sx={Sentences} ref={drop}>
        {sentence === "" ? (
          <Typography sx={Initmsg}>Drag & Drop</Typography>
        ) : (
          sentence
        )}
      </Box>
    </motion.div>
  );
};

export default Sentence;
