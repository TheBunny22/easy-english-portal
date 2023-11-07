import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/joy";
import { useDrag } from "react-dnd";

const Words = {
  backgroundColor: "#3399ff",
  color: "#fff",
  border: "1px solid #0066cc",
  borderRadius: "5px",
  margin: "8px",
  cursor: "grab",
  userSelect: "none",
  transition: "background-color 0.3s",
  fontSize: "20px",
  padding: "10px",
  display: "inline-block",
  "@media (min-width: 1024px)": {
    fontSize: "24px",
  },
  "&:hover": {
    backgroundColor: "#0066cc",
  },
};

const Word = ({ word }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "WORD",
    item: { word },
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <motion.div>
      <Box
        sx={{
          ...Words,
          opacity,
        }}
        ref={drag}
      >
        {word}
      </Box>
    </motion.div>
  );
};

export default Word;
