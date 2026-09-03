<script>
  const evStations = [
    // --- PEA VOLTA ---
    {name:"PEA VOLTA บายพาสชลบุรี", area:"อ.เมืองชลบุรี", cat:"pea", lat:13.3622989, lng:101.0159313},
    {name:"PEA VOLTA บ้านบึง", area:"อ.บ้านบึง", cat:"pea", lat:13.3343017, lng:101.0788024},
    {name:"PEA VOLTA พัทยาใต้", area:"อ.บางละมุง (พัทยา)", cat:"pea", lat:12.9246630, lng:100.8674240},
    {name:"PEA VOLTA พัทยาตะวันออก", area:"อ.บางละมุง (พัทยา)", cat:"pea", lat:12.9226823, lng:100.8841165},

    // --- EleX by EGAT ---
    {name:"EleX by EGAT บ้านบึง", area:"อ.บ้านบึง", cat:"egat", lat:13.3024173, lng:101.1399364},
    {name:"EleX by EGAT แสนสุข-บางแสน", area:"อ.เมืองชลบุรี", cat:"egat", lat:13.2477951, lng:100.9346356},
    {name:"EleX by EGAT พัทยา (สุขุมวิท)", area:"อ.บางละมุง (พัทยา)", cat:"egat", lat:12.9116439, lng:100.8961965},
    {name:"EleX by EGAT พัทยา (ราชวรุณ)", area:"อ.บางละมุง (พัทยา)", cat:"egat", lat:12.9208131, lng:100.8594990},

    // --- EV Station PluZ / PTT ---
    {name:"EV Station PluZ พัทยากลาง", area:"อ.บางละมุง (พัทยา)", cat:"pluz", lat:12.9503124, lng:100.8908239},
    {name:"PTT Station EV สุขุมวิท พัทยา", area:"อ.บางละมุง (พัทยา)", cat:"pluz", lat:12.8831052, lng:100.8990622},
    {name:"PTT Station EV พัทยาเหนือ", area:"อ.บางละมุง (พัทยา)", cat:"pluz", lat:12.9826469, lng:100.9191268},
    {name:"PTT Station EV อ่างศิลา", area:"อ.เมืองชลบุรี", cat:"pluz", lat:13.3271328, lng:100.9386289},

    // --- Tesla Supercharger ---
    {name:"Tesla Supercharger บิ๊กซี บายพาสชลบุรี", area:"อ.เมืองชลบุรี", cat:"tesla", lat:13.3166727, lng:100.9592308},
    {name:"Tesla Supercharger เซ็นทรัล เฟสติวัล พัทยา บีช", area:"อ.บางละมุง (พัทยา)", cat:"tesla", lat:12.9347399, lng:100.8833045},

    // --- แบรนด์เอกชนอื่นๆ ---
    {name:"Evolt บ้านบึง (มาบไผ่)", area:"อ.บ้านบึง", cat:"other", lat:13.3316750, lng:101.0831255},
    {name:"Evolt มอเตอร์เวย์7 ศรีราชา", area:"อ.ศรีราชา", cat:"other", lat:13.1075560, lng:100.9867500},
    {name:"Evolt สำเภาทอง เมืองชลบุรี", area:"อ.เมืองชลบุรี", cat:"other", lat:13.3388089, lng:100.9647508},
    {name:"Evolt โตโยต้า พัทยา", area:"อ.บางละมุง (พัทยา)", cat:"other", lat:12.9898973, lng:100.9242411},
    {name:"Evolt ฮอลิเดย์อินน์ พัทยา", area:"อ.บางละมุง (พัทยา)", cat:"other", lat:12.9478580, lng:100.8856450},
    {name:"Sharge เขาคันทรง ศรีราชา", area:"อ.ศรีราชา", cat:"other", lat:13.0812171, lng:101.1217220},
    {name:"EleXA บางพระ ศรีราชา", area:"อ.ศรีราชา", cat:"other", lat:13.2415196, lng:100.9955826},
    {name:"EleXA สุรศักดิ์ ศรีราชา", area:"อ.ศรีราชา", cat:"other", lat:13.1500071, lng:100.9679140},
    {name:"EleXA หนองกะขะ พานทอง", area:"อ.พานทอง", cat:"other", lat:13.4217378, lng:101.0990421},
    {name:"EA Anywhere โรงแรมโมริโน ศรีราชา", area:"อ.ศรีราชา", cat:"other", lat:13.1191920, lng:100.9994681},
    {name:"Charge+ สุขุมวิท พัทยา", area:"อ.บางละมุง (พัทยา)", cat:"other", lat:12.9555788, lng:100.9079259},
    {name:"Charge+ คลองกิ่ว บ้านบึง", area:"อ.บ้านบึง", cat:"other", lat:13.2292710, lng:101.1504160},
    {name:"Charge+ ห้วยกะปิ เมืองชลบุรี", area:"อ.เมืองชลบุรี", cat:"other", lat:13.3329122, lng:100.9773042},
    {name:"ChargePlus บางพระ ศรีราชา", area:"อ.ศรีราชา", cat:"other", lat:13.2131226, lng:100.9959793},
    {name:"Chargeplus บายพาสชลบุรี", area:"อ.เมืองชลบุรี", cat:"other", lat:13.360588, lng:101.013706},
    {name:"Chargeplus บางแสน", area:"อ.เมืองชลบุรี", cat:"other", lat:13.289921, lng:100.912790},
    {name:"MG Super Charge บ่อวิน ศรีราชา", area:"อ.ศรีราชา", cat:"other", lat:13.0560864, lng:101.0974541},
    {name:"ProCharge สุขุมวิท พัทยา", area:"อ.บางละมุง (พัทยา)", cat:"other", lat:12.9400779, lng:100.9034796},
    {name:"Shell Recharge สำเภาทอง เมืองชลบุรี", area:"อ.เมืองชลบุรี", cat:"other", lat:13.2896920, lng:100.9407610},
    {name:"EV ONE บายพาสชลบุรี (คาลเท็กซ์)", area:"อ.เมืองชลบุรี", cat:"other", lat:13.3664131, lng:101.0173282}
  ];

  const catMeta = {
    pea:   {label:"PEA VOLTA",              color:"#B6FF3F"},
    egat:  {label:"EleX by EGAT",           color:"#2FD1C5"},
    pluz:  {label:"EV Station PluZ / PTT",  color:"#FFB020"},
    tesla: {label:"Tesla Supercharger",     color:"#E23E3E"},
    other: {label:"แบรนด์เอกชนอื่นๆ",         color:"#6E8CA0"}
  };

  const map = L.map('ev-map', { scrollWheelZoom:false }).setView([13.15, 100.98], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
  }).addTo(map);

  evStations.forEach(s => {
    const meta = catMeta[s.cat];
    const icon = L.divIcon({
      className: '',
      html: `<div style="
        width:14px;height:14px;border-radius:50%;
        background:${meta.color};border:2.5px solid #0C1F2E;
        box-shadow:0 1px 3px rgba(0,0,0,0.4);
      "></div>`,
      iconSize: [14,14],
      iconAnchor: [7,7]
    });
    L.marker([s.lat, s.lng], {icon}).addTo(map)
      .bindPopup(`<strong>${s.name}</strong><br/>${meta.label}<br/>${s.area}`);
  });

  document.getElementById('evStationCount').textContent = evStations.length;

  // ---------- ขอบเขตจังหวัดชลบุรี (เส้นปะ) + พื้นที่นอกจังหวัดสีเทาจาง ----------
  // ดึงขอบเขตจังหวัดจริงจาก OpenGISData-Thailand (ข้อมูลเปิด อ้างอิงจากกรมแผนที่ทหาร)
  // โหลดฝั่งเบราว์เซอร์ตอนรัน จึงต้องมีอินเทอร์เน็ต ถ้าโหลดไม่สำเร็จจะข้ามส่วนนี้ไปเฉยๆ ไม่กระทบส่วนอื่นของแผนที่
  const PROVINCE_GEOJSON_URL = 'https://cdn.jsdelivr.net/gh/chingchai/OpenGISData-Thailand@master/provinces.geojson';
  const WORLD_RING = [[85,-180],[85,180],[-85,180],[-85,-180]]; // กรอบใหญ่ครอบทั้งแผนที่ สำหรับตัดรู (mask)

  fetch(PROVINCE_GEOJSON_URL)
    .then(res => res.json())
    .then(geo => {
      const feature = geo.features.find(f => {
        const vals = Object.values(f.properties || {}).map(v => String(v).trim());
        return vals.includes('ชลบุรี') || vals.some(v => /chon\s*buri/i.test(v));
      });
      if (!feature) { console.warn('ไม่พบขอบเขตจังหวัดชลบุรีในไฟล์ GeoJSON'); return; }

      // ดึงทุกวงแหวน (ring) ของ Polygon/MultiPolygon มาเป็นรู mask (แปลง [lng,lat] -> [lat,lng])
      const polygons = feature.geometry.type === 'Polygon'
        ? [feature.geometry.coordinates]
        : feature.geometry.coordinates; // MultiPolygon
      const holes = [];
      polygons.forEach(poly => {
        poly.forEach(ring => holes.push(ring.map(c => [c[1], c[0]])));
      });

      // 1) พื้นที่นอกจังหวัด = เทาจาง (ใช้กรอบโลกเป็นวงนอก + รูปจังหวัดเป็นรู)
      L.polygon([WORLD_RING, ...holes], {
        stroke: false,
        fillColor: '#C7D0CD',
        fillOpacity: 0.62,
        interactive: false
      }).addTo(map);

      // 2) เส้นขอบจังหวัดชลบุรี แบบเส้นปะ
      const boundary = L.geoJSON(feature, {
        style: { color: '#0C1F2E', weight: 2.5, dashArray: '7 6', fill: false }
      }).addTo(map);

      map.fitBounds(boundary.getBounds(), { padding: [24, 24] });
    })
    .catch(err => console.warn('โหลดขอบเขตจังหวัดไม่สำเร็จ:', err));
</script>