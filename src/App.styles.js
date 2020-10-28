import { createUseStyles } from 'react-jss';

export default createUseStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
  },
  colorSwatchContainer: {
    display: 'flex',
  },
  colorSwatch: {
    margin: '1.5rem 0.5rem 0',
    padding: 0,
    width: '25px',
    height: '25px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  colorString: {
    fontFamily: 'monospace',
    wordWrap: 'break-word',
    maxWidth: 'calc(75px * 8)',
    width: '50%',
  }
});
