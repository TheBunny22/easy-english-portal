import React from 'react';
import { Box } from '@mui/joy';
import { useDrop } from 'react-dnd';

const WordContainer = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'LETTER',
    drop: (item) => onDrop(item.letter),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const containerStyles = {
    border: `2px dashed ${isOver ? 'green' : 'gray'}`,
    padding: '8px',
    width: '200px',
  };

  return (
    <Box
      ref={drop}
      sx={containerStyles}
    >
      {children}
    </Box>
  );
};

export default WordContainer;
