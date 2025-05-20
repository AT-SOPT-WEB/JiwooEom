import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
    scrollBehavior: 'smooth',
    fontSize: '10px', // 1rem = 10px
  });

  globalStyle('body', {
    margin: '0',
    padding: '0',
    fontFamily: `'Arial', 'Apple SD Gothic Neo', 'Segoe UI', sans-serif`,
    backgroundColor: 'rgb(255, 255, 255)',
    boxSizing: 'border-box',
  });