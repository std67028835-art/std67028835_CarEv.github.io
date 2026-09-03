document.addEventListener('DOMContentLoaded', function () {
  

  const trimColorMap = {
    'pro': [
      { name: 'Horizon White', bg: '#F5F7FA', img: 'img/GeelyEx5_white.png' },
      { name: 'Harbour Grey',  bg: '#686D71', img: 'img/GeelyEx5_Grey.png' },
	  { name: 'Harbour Grey',  bg: '#686D71', img: 'img/GeelyEx5_black.png' },
      { name: 'Space Black',   bg: '#16181A', img: 'img/GeelyEx5_clay.png' }
    ],
    'max': [
      { name: 'Horizon White', bg: '#F5F7FA', img: 'img/GeelyEx5_white.png' },
      { name: 'Harbour Grey',  bg: '#686D71', img: 'img/GeelyEx5_Grey.png' },
	  { name: 'Harbour Grey',  bg: '#686D71', img: 'img/GeelyEx5_black.png' },
      { name: 'Space Black',   bg: '#16181A', img: 'img/GeelyEx5_clay.png' }
    ],
    'max+': [
      { name: 'Horizon White', bg: '#F5F7FA', img: 'img/GeelyEx5_white.png' },
      { name: 'Harbour Grey',  bg: '#686D71', img: 'img/GeelyEx5_Grey.png' },
	  { name: 'Harbour Grey',  bg: '#686D71', img: 'img/GeelyEx5_black.png' },
      { name: 'Space Black',   bg: '#16181A', img: 'img/GeelyEx5_clay.png' }
    ]
  };
	
	window.setupTrimColorSwitcher(trimColorMap)

});