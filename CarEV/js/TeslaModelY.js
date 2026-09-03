document.addEventListener('DOMContentLoaded', function () {
  
  const trimColorMap = {
    'rwd': [
      { name: 'Pearl White Multi-Coat', bg: '#F8F9FA', img: 'img/TeslaModelY_1.png' },
      { name: 'Cosmic Silver',  bg: '#AEB0B2', img: 'img/TeslaModelY_2.png' },
	  { name: 'Stealth Grey',  bg: '#3A3D40', img: 'img/TeslaModelY_3.png' },
      { name: 'Diamond Black',   bg: '#0F0F11', img: 'img/TeslaModelY_4.png' }
    ],
    'long range rwd': [
      { name: 'Pearl White Multi-Coat', bg: '#F8F9FA', img: 'img/TeslaModelY_1.png' },
      { name: 'Cosmic Silver',  bg: '#AEB0B2', img: 'img/TeslaModelY_2.png' },
	  { name: 'Stealth Grey',  bg: '#3A3D40', img: 'img/TeslaModelY_3.png' },
      { name: 'Diamond Black',   bg: '#0F0F11', img: 'img/TeslaModelY_4.png' }
    ],
    'long wheelbase': [
      { name: 'Pearl White Multi-Coat', bg: '#F8F9FA', img: 'img/TeslaModelYL_1.png' },
      { name: 'Cosmic Silver',  bg: '#AEB0B2', img: 'img/TeslaModelYL_2.png' },
	  { name: 'Stealth Grey',  bg: '#3A3D40', img: 'img/TeslaModelYL_3.png' },
      { name: 'Diamond Black',   bg: '#0F0F11', img: 'img/TeslaModelYL_4.png' }
    ]
  };
	
	window.setupTrimColorSwitcher(trimColorMap)

});