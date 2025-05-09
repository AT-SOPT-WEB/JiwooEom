import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
    scrollBehavior: 'smooth',
    fontSize: '10px', // 1rem = 10px (기존에는 16px로 설정했다가 합세 연습할 겸 10px로 설정)
  });

  globalStyle('body', {
    margin: '0',
    padding: '0',
    fontFamily: `'Arial', 'Apple SD Gothic Neo', 'Segoe UI', sans-serif`,
    backgroundColor: 'rgb(245, 245, 245)',
    boxSizing: 'border-box',
  });