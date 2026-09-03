document.addEventListener('DOMContentLoaded', function () {
  
  const trimColorMap = {
    'premium': [
      { name: 'Surge White', bg: '#F5F7FA', img: 'img/BYDatto3_white.png' },
      { name: 'Harbour Grey',  bg: '#686D71', img: 'img/BYDAtto3_Grey.png' },
    ],
    'extended': [
      { name: 'Surge White', bg: '#F5F7FA', img: 'img/BYDatto3_white.png' },
      { name: 'Harbour Grey',  bg: '#686D71', img: 'img/BYDAtto3_Grey.png' },
      { name: 'Quantum Black',   bg: '#16181A', img: 'img/BYDatto3_black.png' },
      { name: 'Space Grey', bg: '#50535B', img: 'img/BYDAtto3_Space.png' }
    ]
  };
	
  window.setupTrimColorSwitcher(trimColorMap);
});