import React from 'react';
import useStyles from './Grid.styles';

const offCell = {
  on: false,
  color: '#000000',
};

const Grid = ({ cells, setCells, currentColor }) => {
  const classes = useStyles();

  const updateCell = (index, defaultState) => (event) => {
    setCells(
      cells.map((cell, cellIndex) => {
        event.preventDefault();
        if (index === cellIndex) {
          if (defaultState) return defaultState;
          return {
            on: true,
            color: currentColor,
          };
        }
        return cell;
      })
    );
  };

  return (
    <div className={classes.grid}>
      {cells.map(({ on, color }, index) => (
        <div
          key={index}
          style={{ background: on ? color : '#ffffff' }}
          className={classes.cell}
          onClick={updateCell(index)}
          onContextMenu={updateCell(index, offCell)}
        />
      ))}
    </div>
  );
};

export default Grid;
