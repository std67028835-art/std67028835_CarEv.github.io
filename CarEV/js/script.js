// EV KNOWLEDGE — shared behaviours
document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.style.display === 'flex';
      nav.style.display = open ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '72px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = '#0C1F2E';
      nav.style.padding = '10px 24px 20px';
    });
  }
	
  // Compare tabs (รายละเอียดเบื้องต้น / จุดเด่น / ดีไซน์)
  document.querySelectorAll('.compare-tabs').forEach(function (tabRow) {
    var panels = document.querySelectorAll('.compare-panel');
    tabRow.querySelectorAll('.chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        tabRow.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('on'); });
        chip.classList.add('on');
        var target = chip.getAttribute('data-target');
        panels.forEach(function (p) {
          p.style.display = (p.id === target) ? 'grid' : 'none';
        });
      });
    });
  });

  // Fake selects on compare page just cycle a label (placeholder behaviour)
  document.querySelectorAll('.select-fake').forEach(function (sel) {
    sel.addEventListener('click', function () {
      alert('เชื่อมต่อกับข้อมูลรถยนต์จริงเพื่อให้เลือกแบรนด์ / รุ่นได้ที่นี่');
    });
  });

  // Tabs (เกี่ยวกับ / สเปกเพิ่มเติม)
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.tab-btn').forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.tab-panel').forEach(function (p) {
        p.classList.remove('active');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      var panel = document.getElementById('tab-' + btn.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });

});

// video หน้าหลัก (เช็คก่อนว่ามี element จริงไหม ป้องกัน error บนหน้าที่ไม่มีวิดีโอ)
document.addEventListener('DOMContentLoaded', function () {
  const iframe = document.querySelector('.video-frame');
  const playBtn = document.querySelector('.play');

  if (playBtn && iframe) {
    playBtn.addEventListener('click', () => {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*'
      );
      playBtn.style.display = 'none';
    });
  }
});



window.changeMainImageWithFade = function (imgElement, newSrc, forcePlay) {
  if (!imgElement || !newSrc) return;
  if (!forcePlay && imgElement.getAttribute('src') === newSrc) return;

  imgElement.classList.add('fading');   
	
  setTimeout(function () {
    imgElement.src = newSrc;
    imgElement.classList.remove('fading');  
    imgElement.classList.add('flash');

    setTimeout(function () {
      imgElement.classList.remove('flash');
    }, 400);
  }, 220);
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.colorway-row').forEach(function (row) {
    row.addEventListener('click', function (e) {
      var sw = e.target.closest('.swatch');
      if (!sw || !row.contains(sw)) return;

      row.querySelectorAll('.swatch').forEach(function (s) { s.classList.remove('on'); });
      sw.classList.add('on');

      var newImgSrc = sw.getAttribute('data-img');
      var mainImg = document.getElementById('carMainImg');
      window.changeMainImageWithFade(mainImg, newImgSrc);
    });
  });
});

// ================================================
// สลับแผงเนื้อหารุ่นย่อยแบบ "จางหาย -> โผล่ขึ้นมาใหม่" (fade)
// ทำเป็นฟังก์ชันกลางไว้ที่นี่ที่เดียว แล้วแปะไว้ที่ window
// เพื่อให้ไฟล์อื่น (เช่น BYD.js ตอนสลับรุ่นย่อยพร้อมเปลี่ยนสี)
// เรียกใช้ร่วมกันได้ ไม่ต้องเขียนโค้ดสลับแผงซ้ำอีกไฟล์
// ================================================
window.switchTrimPanel = function (trimLower) {
  document.querySelectorAll('.trim-panel').forEach(function (panel) {
    var isMatch  = panel.dataset.trimPanel && panel.dataset.trimPanel.toLowerCase() === trimLower;
    var isActive = panel.classList.contains('active');

    if (isMatch && !isActive) {

      panel.classList.add('active');
      panel.classList.add('fading');

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          panel.classList.remove('fading');
        });
      });

    } else if (!isMatch && isActive) {
      panel.classList.add('fading');

      setTimeout(function () {
        panel.classList.remove('active');
        panel.classList.remove('fading');
      }, 250);
    }
  });
};


// Lightbox: คลิกรูปหลัก (gallery-main) แล้วขยายครึ่งจอ พร้อมซูมเข้า-ออก
document.addEventListener('DOMContentLoaded', function () {
  var mainImg    = document.querySelector('.gallery-main img'); // รูปรถหลักในหน้า
  var lightbox   = document.getElementById('lightbox');         // กล่องดำเต็มจอ
  var lightboxImg = document.getElementById('lightboxImg');     // รูปใหญ่ข้างในกล่องดำ
  var closeBtn   = document.getElementById('lightboxClose');    // ปุ่มกากบาท
  var zoomInBtn  = document.getElementById('lightboxZoomIn');   // ปุ่ม +
  var zoomOutBtn = document.getElementById('lightboxZoomOut');  // ปุ่ม -

  // เช็คก่อนว่ามีองค์ประกอบหลักครบไหม (กันหน้าที่ไม่มีรูป/ไม่มี lightbox แล้ว error)
  if (!mainImg || !lightbox || !lightboxImg) return;

  // ---- ตัวแปรควบคุมการซูม/ลากรูป ----
  var scale = 1, minScale = 1, maxScale = 4;
  var posX = 0, posY = 0;
  var isDragging = false, startX = 0, startY = 0;

  function applyTransform() {
    lightboxImg.style.transform = 'translate(' + posX + 'px,' + posY + 'px) scale(' + scale + ')';
  }

  function resetZoom() {
    scale = 1; posX = 0; posY = 0;
    applyTransform();
  }

  function setZoom(newScale) {
    scale = Math.min(maxScale, Math.max(minScale, newScale));
    if (scale === 1) { posX = 0; posY = 0; } // กลับมา 1 เท่า ให้จัดรูปกลับไปกึ่งกลางเหมือนเดิม
    applyTransform();
  }

  // 1) คลิกที่รูปหลัก -> เปิด lightbox (เริ่มต้นที่ 1 เท่าเสมอ)
  mainImg.addEventListener('click', function () {
    lightboxImg.src = mainImg.src;   // เอารูปเดียวกันมาใส่ในกล่องขยาย (คนละไฟล์ แต่ src เดียวกัน)
    resetZoom();
    lightbox.classList.add('active'); // เปิดกล่อง (CSS จะเปลี่ยนจาก display:none เป็น flex)
  });

  // 2) คลิกปุ่มกากบาท -> ปิด lightbox
  closeBtn.addEventListener('click', function () {
    lightbox.classList.remove('active');
    resetZoom();
  });

  // 3) คลิกพื้นหลังสีดำ (นอกรูป) -> ปิด lightbox เหมือนกัน
  //    เช็คว่า "จุดที่คลิก" คือตัว lightbox เอง ไม่ใช่รูปข้างใน/กรอบ/ปุ่มต่างๆ
  //    เพื่อไม่ให้คลิกโดนรูป/ปุ่มแล้วปิดผิดจังหวะ
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      resetZoom();
    }
  });

  // 4) โบนัส: กดปุ่ม Esc บนคีย์บอร์ดก็ปิดได้เหมือนกัน (พฤติกรรมมาตรฐานที่คนคุ้นเคย)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      lightbox.classList.remove('active');
      resetZoom();
    }
  });

  // 5) ปุ่ม + / − กดเพื่อซูมเข้า-ออกทีละนิด
  if (zoomInBtn)  zoomInBtn.addEventListener('click', function () { setZoom(scale + 0.4); });
  if (zoomOutBtn) zoomOutBtn.addEventListener('click', function () { setZoom(scale - 0.4); });

  // 6) หมุนล้อเมาส์ (scroll) บนรูป เพื่อซูมเข้า-ออก
  lightboxImg.addEventListener('wheel', function (e) {
    e.preventDefault();
    setZoom(scale + (e.deltaY < 0 ? 0.25 : -0.25));
  }, { passive: false });

  // 7) ดับเบิลคลิกที่รูป สลับซูม 1 เท่า <-> 2 เท่า แบบเร็วๆ
  lightboxImg.addEventListener('dblclick', function () {
    setZoom(scale > 1 ? 1 : 2);
  });

  // 8) ลากรูปด้วยเมาส์ตอนซูมเข้าแล้ว (ลากได้เฉพาะตอน scale > 1)
  lightboxImg.addEventListener('mousedown', function (e) {
    if (scale <= 1) return;
    isDragging = true;
    lightboxImg.classList.add('dragging');
    startX = e.clientX - posX;
    startY = e.clientY - posY;
  });
  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    posX = e.clientX - startX;
    posY = e.clientY - startY;
    applyTransform();
  });
  document.addEventListener('mouseup', function () {
    isDragging = false;
    lightboxImg.classList.remove('dragging');
  });

  // 9) รองรับนิ้วบนมือถือ/แท็บเล็ต ลากรูปตอนซูมเข้าแล้วเหมือนกัน
  lightboxImg.addEventListener('touchstart', function (e) {
    if (scale <= 1 || e.touches.length !== 1) return;
    isDragging = true;
    startX = e.touches[0].clientX - posX;
    startY = e.touches[0].clientY - posY;
  }, { passive: true });
  lightboxImg.addEventListener('touchmove', function (e) {
    if (!isDragging || e.touches.length !== 1) return;
    posX = e.touches[0].clientX - startX;
    posY = e.touches[0].clientY - startY;
    applyTransform();
  }, { passive: true });
  lightboxImg.addEventListener('touchend', function () {
    isDragging = false;
  });
});

//ส่วน effects เปลี่ยนรุ่นย่อยและสี
window.setupTrimColorSwitcher = function (trimColorMap) {
  const carMainImg = document.getElementById('carMainImg');
  const colorwayRow = document.querySelector('.colorway-row');

  function updateTrimAndColors(trimName) {
    const colors = trimColorMap[trimName.toLowerCase()];
    if (!colors || colors.length === 0) return;

    window.changeMainImageWithFade(carMainImg, colors[0].img, true);

    if (colorwayRow) {
      colorwayRow.innerHTML = '';
      colors.forEach((color, index) => {
        const swatch = document.createElement('span');
        swatch.className = 'swatch' + (index === 0 ? ' on' : '');
        swatch.style.background = color.bg;
        swatch.setAttribute('data-img', color.img);
        swatch.setAttribute('title', color.name);
        colorwayRow.appendChild(swatch);
      });
    }
  }

  document.querySelectorAll('.trim-tabs').forEach(function (tabGroup) {
    tabGroup.querySelectorAll('.trim-tab').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const trimLower = btn.dataset.trim.toLowerCase();
        tabGroup.querySelectorAll('.trim-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        window.switchTrimPanel(trimLower);
        updateTrimAndColors(trimLower);
      });
    });
  });
};

//แท็บเลือกรุ่นย่อย
document.querySelectorAll('.trim-tabs').forEach(function (tabGroup) {
  tabGroup.querySelectorAll('.trim-tab').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var trim = btn.dataset.trim.toLowerCase();

      tabGroup.querySelectorAll('.trim-tab').forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');

      document.querySelectorAll('.trim-panel').forEach(function (panel) {
        if (panel.dataset.trimPanel && panel.dataset.trimPanel.toLowerCase() === trim) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
		  
      });
    });
  });
});
