document.addEventListener('DOMContentLoaded', function () {
  
  const trimColorMap = {
    'pro': [
      { name: 'Moon White', bg: '#F4F5F7', img: 'img/GeelyEx2_white.png' },
      { name: 'Nebula Beige',  bg: '#E3DDD5', img: 'img/GeelyEx2_cream.png' },
      { name: 'Star Silver',   bg: '#d9d9d9', img: 'img/GeelyEx2_Grey.png' },
      { name: 'Comet Gray', bg: '#6E737B', img: 'img/GeelyEx2_black.png' },
	  { name: 'Aurora Green', bg: '#ddf2d1', img: 'img/GeelyEx2_green.png' }
    ],
    'max': [
      { name: 'Moon White', bg: '#F4F5F7', img: 'img/GeelyEx2_white.png' },
      { name: 'Nebula Beige',  bg: '#E3DDD5', img: 'img/GeelyEx2_cream.png' },
      { name: 'Star Silver',   bg: '#d9d9d9', img: 'img/GeelyEx2_Grey.png' },
      { name: 'Comet Gray', bg: '#6E737B', img: 'img/GeelyEx2_black.png' },
	  { name: 'Aurora Green', bg: '#ddf2d1', img: 'img/GeelyEx2_green.png' }
    ]
  };
	
  window.setupTrimColorSwitcher(trimColorMap);
});