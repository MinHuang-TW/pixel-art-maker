import { createUseStyles } from 'react-jss';

export default createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridTemplateColumns: 'repeat(8, 1fr)',
    width: '80vw',
    height: '50vw',
    maxWidth: 'calc(75px * 8)',
    maxHeight: 'calc(75px * 5)',
    outline: '2px solid black',
    margin: '2.5rem auto',
  },
  cell: {
    cursor: 'pointer',
    border: '2px solid black',
    background: 'white',
    transition: 'all 200ms linear',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
});
