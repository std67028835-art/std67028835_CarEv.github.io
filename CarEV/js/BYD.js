document.addEventListener('DOMContentLoaded', function () {
  
  // 1. กำหนดข้อมูลรูปภาพและสีสำหรับแต่ละรุ่นย่อย
  const trimColorMap = {
    'standard': [
      { name: 'Horizon White', bg: '#F5F7FA', img: 'img/BYDSeal6_white.png' },
      { name: 'Harbour Grey',  bg: '#686D71', img: 'img/BYDSeal6_Grey.png' },
      { name: 'Space Black',   bg: '#16181A', img: 'img/BYDSeal6_Black.png' }
    ],
    'dynamic': [
      { name: 'Horizon White', bg: '#F5F7FA', img: 'img/BYDSeal6_white.png' },
      { name: 'Harbour Grey',  bg: '#686D71', img: 'img/BYDSeal6_Grey.png' },
      { name: 'Space Black',   bg: '#16181A', img: 'img/BYDSeal6_Black.png' }
    ],
    'premium': [
      { name: 'Horizon White', bg: '#F5F7FA', img: 'img/BYDSeal6_white.png' },
      { name: 'Harbour Grey',  bg: '#686D71', img: 'img/BYDSeal6_Grey.png' },
      { name: 'Space Black',   bg: '#16181A', img: 'img/BYDSeal6_Black.png' },
      { name: 'Ash green', bg: '#8A9A86', img: 'img/BYDSeal6_AshGreen.png' }
    ]
  };
	
	window.setupTrimColorSwitcher(trimColorMap)

});