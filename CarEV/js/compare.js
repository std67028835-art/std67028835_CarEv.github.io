// ============================================================
// ข้อมูลรถยนต์ทั้งหมด แยกตามแบรนด์ -> รุ่น -> รุ่นย่อย (trim)
// เพิ่มรถรุ่นใหม่ในอนาคต: เพิ่ม object ใหม่ในแบรนด์ที่มีอยู่แล้ว
// หรือเพิ่มแบรนด์ใหม่ตามโครงสร้างเดียวกันนี้ได้เลย
//
// โครงสร้างของแต่ละ "รุ่น" (model):
//   name  : ชื่อรุ่นที่แสดงผล
//   image : path รูปภาพหลักของรุ่น (ใช้ร่วมกันทุกรุ่นย่อย)
//   link  : หน้ารายละเอียดรถ (car-xxxx.html)
//   trims : object รุ่นย่อย { key: { label, price, basic{}, highlight, design } }
//     - basic     : รายละเอียดเบื้องต้น (ระยะทาง/อัตราเร่ง/ความเร็ว/เวลาชาร์จ/ระบบขับเคลื่อน/ที่นั่ง)
//     - highlight : จุดเด่นเฉพาะรุ่นย่อย (หรือสิ่งที่อัปเกรดจากรุ่นย่อยก่อนหน้า)
//     - design    : ดีไซน์และฟีเจอร์ไฮไลต์
// ============================================================
const carData = {
  mg: {
    label: 'MG',
    models: {
      mgs5ev: {
        name: 'MGS5 EV Plus',
        image: 'img/MGS5EV3.png',
        link: 'car-MgS5ev.html',
        trims: {
          'D+': {
            label: 'D+',
            price: '฿749,900',
            basic: { range: '290-300 กม.', accel: '8.0 วินาที', topSpeed: '160 กม./ชม.', chargeTime: '20-25 นาที (125–165 กม.)', drivetrain: 'ขับเคลื่อนล้อหลัง (RWD)', seats: '5 ที่นั่ง' },
            highlight: 'โดดเด่นด้วยความคุ้มค่าในราคารุ่นเริ่มต้น ขับเคลื่อนล้อหลัง (RWD) ช่วงล่างอิสระ 4 ล้อ ให้ฟังก์ชันการใช้งานพื้นฐานและระบบความปลอดภัยที่ครบครันเพียงพอต่อการใช้งานในชีวิตประจำวัน',
            design: 'ไฟหน้า LED พร้อมระบบเปิด-ปิดอัตโนมัติ, หน้าจอกลางสัมผัส 12.8 นิ้ว, หน้าจอเรือนไมล์ 10.25 นิ้ว, เบาะคนขับปรับไฟฟ้า 6 ทิศทาง และระบบความปลอดภัยอัจฉริยะครบครัน'
          },
          'X+': {
            label: 'X+',
            price: '฿759,900',
            basic: { range: '290-300 กม.', accel: '8.0 วินาที', topSpeed: '160 กม./ชม.', chargeTime: '20-25 นาที (125-165 กม.)', drivetrain: 'ขับเคลื่อนล้อหลัง (RWD)', seats: '5 ที่นั่ง' },
            highlight: 'สิ่งที่อัปเกรดมาจากรุ่น D+: เปลี่ยนขนาดล้อ, เพิ่มหลังคากระจก Panoramic Sunroof เปิด-ปิดด้วยไฟฟ้า, ฝาท้ายไฟฟ้าพร้อมระบบเตะเปิดอัตโนมัติ (Hands-Free Tailgate), เปลี่ยนหน้าจอกลางสัมผัสเป็น 15.6 นิ้ว, เบาะผู้โดยสารด้านหน้าปรับไฟฟ้า 6 ทิศทาง, เบาะหนังเจาะรูระบายอากาศ, กล้องรอบทิศทาง 3 มิติ, แท่นชาร์จไร้สาย 15W และลำโพงเพิ่มเป็น 6 ตำแหน่ง',
            design: 'ไฟหน้า LED อัตโนมัติ, คอนโซลกลางดีไซน์ใหม่เปลี่ยนเกียร์เป็นแบบ Shifter ที่คอพวงมาลัย, กระจกมองข้างพับ/ปรับไฟฟ้าพร้อมไฟเลี้ยว, ระบบปัดน้ำฝนอัตโนมัติ และระบบความปลอดภัยอัจฉริยะ (ASPS) ครบครัน'
          },
          'V+': {
            label: 'V+',
            price: '฿959,900',
            basic: { range: '380-390 กม.', accel: '6.1 วินาที', topSpeed: '160 กม./ชม.', chargeTime: '20-25 นาที (165-220 กม.)', drivetrain: 'ขับเคลื่อนล้อหลัง (RWD)', seats: '5 ที่นั่ง' },
            highlight: 'สิ่งที่อัปเกรดเพิ่มจากรุ่น X+: เพิ่มพละกำลังมอเตอร์ไฟฟ้าเป็น 245 แรงม้า (แรงบิด 350 นิวตันเมตร), อัปเกรดความจุแบตเตอรี่ใหญ่ขึ้น, เพิ่มอัตราการรองรับการชาร์จเร็ว DC และเพิ่มสมรรถนะการเร่ง 0-100 กม./ชม.',
            design: 'หลังคากระจก Panoramic Sunroof ไฟฟ้า, ฝาท้ายไฟฟ้าพร้อมระบบเตะเปิดอัตโนมัติ, หน้าจอกลางสัมผัสขนาดใหญ่ 15.6 นิ้ว, เบาะนั่งคู่หน้าปรับไฟฟ้าพร้อมระบบระบายอากาศ, กล้องมองภาพรอบทิศทาง 3 มิติ และระบบความปลอดภัยอัจฉริยะครบครัน'
          }
        }
      },
      mgurban: {
        name: 'MG Urban',
        image: 'img/MGUrban1.png',
        link: 'car-MgUrban.html',
        trims: {
          'Standard': {
            label: 'Standard',
            price: '฿579,900',
            basic: { range: '305-315 กม.', accel: '8.4 วินาที', topSpeed: '160 กม./ชม.', chargeTime: '25-30 นาที (130–160 กม.)', drivetrain: 'ขับเคลื่อนล้อหน้า (FWD)', seats: '5 ที่นั่ง' },
            highlight: 'โลโก้หน้าเรืองแสง (Illuminated Logo), ฝาครอบล้อดีไซน์เฉพาะที่ช่วยลดแรงต้านทานของลม และเป็นรุ่นที่ราคาเข้าถึงง่ายที่สุดในไลน์อัป MG Urban',
            design: 'เบาะนั่งคนขับปรับไฟฟ้า 6 ทิศทาง, หน้าจอเรือนไมล์ LCD 7 นิ้ว, รองรับ Apple CarPlay/Android Auto แบบไร้สาย, ถุงลมนิรภัย 6 ตำแหน่ง, กล้องมองหลัง และระบบความปลอดภัยอัจฉริยะ (ADAS) ครบถ้วน'
          },
          'Max': {
            label: 'Max',
            price: '฿649,900',
            basic: { range: '365-375 กม.', accel: '8.4 วินาที', topSpeed: '160 กม./ชม.', chargeTime: '22 นาที (205 กม.)', drivetrain: 'ขับเคลื่อนล้อหน้า (FWD)', seats: '5 ที่นั่ง' },
            highlight: 'อัปเกรดจากรุ่น Standard: เพิ่มความจุแบตเตอรี่, เพิ่มพละกำลังมอเตอร์เป็น 160 แรงม้า, ล้ออัลลอยใหญ่ขึ้น, หน้าจอกลางสัมผัส 15.6 นิ้ว, เบาะคู่หน้าระบายอากาศ, แท่นชาร์จไร้สาย และประตูท้ายไฟฟ้า',
            design: 'โลโก้หน้าเรืองแสง, ไฟหน้า LED อัตโนมัติ, ไฟท้าย LED ดีไซน์ Union Jack, พวงมาลัยหุ้มหนัง, ระบบสั่งการด้วยเสียงขับเคลื่อนด้วย AI, กล้องรอบคัน 360 องศา และถุงลมนิรภัย 7 ตำแหน่ง'
          },
          'Ultra': {
            label: 'Ultra',
            price: '฿749,900',
            basic: { range: '365-375 กม.', accel: '8.4 วินาที', topSpeed: '160 กม./ชม.', chargeTime: '26 นาที (217 กม.)', drivetrain: 'ขับเคลื่อนล้อหลัง (RWD)', seats: '5 ที่นั่ง' },
            highlight: 'อัปเกรดจากรุ่น Max: หลังคากระจก Panoramic เปิด-ปิดไฟฟ้า, เบาะผู้โดยสารหน้าปรับไฟฟ้า 4 ทิศทาง, ระบบช่วยจอดอัจฉริยะ (SAPS), ระบบเปลี่ยนเลนอัตโนมัติ (ALC) และระบบควบคุมรถให้อยู่กึ่งกลางเลน (LCC)',
            design: 'หน้าจอกลางใหญ่ 15.6 นิ้ว พร้อมระบบมัลติมีเดียความเร็วสูง, เบาะคู่หน้าระบายอากาศ, ฝาท้ายไฟฟ้า และระบบความปลอดภัยอัจฉริยะ ADAS ครบชุด'
          }
        }
      }
    }
  },
  byd: {
    label: 'BYD',
    models: {
      bydseal6: {
        name: 'BYD Seal 6',
        image: 'img/BYDSeal6_white.png',
        link: 'car-BydSeal6.html',
        trims: {
          'Standard': {
            label: 'Standard',
            price: '฿799,900',
            basic: { range: '305-315 กม.', accel: '12.5 วินาที', topSpeed: '160 กม./ชม.', chargeTime: '28-30 นาที (175–200 กม.)', drivetrain: 'ขับเคลื่อนล้อหลัง (RWD)', seats: '5 ที่นั่ง' },
            highlight: 'ขับเคลื่อนล้อหลังด้วยมอเตอร์ไฟฟ้า ตอบสนองฉับไว สมรรถนะดี ราคาเข้าถึงง่ายที่สุดในไลน์อัป BYD Seal 6',
            design: 'หน้าจอกลางหมุนได้ด้วยไฟฟ้าขนาด 12.8 นิ้ว, หน้าจอเรือนไมล์ Digital LCD 8.8 นิ้ว, เบาะหุ้มหนังสังเคราะห์, กระโปรงหน้าใส่สัมภาระได้, กล้องรอบคัน 360 องศา และระบบจ่ายไฟภายนอก (V2L)'
          },
          'Dynamic': {
            label: 'Dynamic',
            price: '฿899,900',
            basic: { range: '355-365 กม.', accel: '10.9 วินาที', topSpeed: '160 กม./ชม.', chargeTime: '28-30 นาที (200-240 กม.)', drivetrain: 'ขับเคลื่อนล้อหลัง (RWD)', seats: '5 ที่นั่ง' },
            highlight: 'อัปเกรดความจุแบตเตอรี่ให้เดินทางไกลได้มั่นใจยิ่งขึ้น พร้อมเพิ่มระบบความปลอดภัยเชิงป้องกันก่อนเกิดเหตุ (Active Safety) ครบถ้วน',
            design: 'หน้าจอกลางหมุนได้ด้วยไฟฟ้าขนาด 12.8 นิ้ว, หน้าจอเรือนไมล์ Digital LCD 8.8 นิ้ว, เบาะหุ้มหนังสังเคราะห์, กระโปรงหน้าใส่สัมภาระได้, กล้องรอบคัน 360 องศา และระบบจ่ายไฟภายนอก (V2L)'
          },
          'Premium': {
            label: 'Premium',
            price: '฿949,900',
            basic: { range: '355-365 กม.', accel: '7.5 วินาที', topSpeed: '180 กม./ชม.', chargeTime: '28-30 นาที (200-240 กม.)', drivetrain: 'ขับเคลื่อนล้อหลัง (RWD)', seats: '5 ที่นั่ง' },
            highlight: 'มอเตอร์แรงขึ้น เร่ง 0-100 กม./ชม. ไวขึ้น ล้อขนาดใหญ่ขึ้น, หลังคากระจกบานใหญ่เปิด-ปิดไฟฟ้าพร้อมม่านบังแดด, เบาะคู่หน้าปรับไฟฟ้าพร้อมระบายอากาศ, แท่นชาร์จไร้สาย 50W และลำโพง 8 ตำแหน่ง',
            design: 'หน้าจอกลางหมุนได้ด้วยไฟฟ้าขนาด 12.8 นิ้ว, หน้าจอเรือนไมล์ Digital LCD 8.8 นิ้ว, ไฟบรรยากาศ Ambient Light, กระโปรงหน้าใส่สัมภาระได้, กล้องรอบคัน 360 องศา และระบบจ่ายไฟภายนอก (V2L)'
          }
        }
      },
      bydatto3: {
        name: 'BYD Atto 3',
        image: 'img/BYDAtto3.png',
        link: 'car-BydAtto3.html',
        trims: {
          'Premium': {
            label: 'Premium',
            price: '฿799,000',
            basic: { range: '295-305 กม.', accel: '7.9 วินาที', topSpeed: '160 กม./ชม.', chargeTime: '29 นาที (200-240 กม.)', drivetrain: 'ขับเคลื่อนล้อหน้า (FWD)', seats: '5 ที่นั่ง' },
            highlight: 'ขนาดแบตเตอรี่และระยะทางขับขี่พอดีกับการใช้งานประจำวัน และราคาเข้าถึงง่ายที่สุดในไลน์อัป',
            design: 'ห้องโดยสารสปอร์ตดีไซน์ Gym Concept, หน้าจอกลางหมุนปรับแนวตั้ง-แนวนอนด้วยไฟฟ้า และ Blade Battery ที่ปลอดภัยระดับสูง'
          },
          'Extended': {
            label: 'Extended',
            price: '฿849,000',
            basic: { range: '365-375 กม.', accel: '7.3 วินาที', topSpeed: '160 กม./ชม.', chargeTime: '29-30 นาที (250-320 กม.)', drivetrain: 'ขับเคลื่อนล้อหน้า (FWD)', seats: '5 ที่นั่ง' },
            highlight: 'เพิ่มความจุแบตเตอรี่ ขับขี่ได้ระยะทางไกลยิ่งขึ้น และรองรับกำลังไฟชาร์จ DC Fast Charge สูงสุดเพิ่มขึ้น',
            design: 'ห้องโดยสารสปอร์ตดีไซน์ Gym Concept, หน้าจอกลางหมุนปรับแนวตั้ง-แนวนอนขนาดใหญ่ 15.6 นิ้ว, ฝาท้ายเปิด-ปิดไฟฟ้า และระบบจ่ายไฟภายนอก (V2L)'
          }
        }
      }
    }
  },
  tesla: {
    label: 'TESLA',
    models: {
      teslamodel3: {
        name: 'Tesla Model 3',
        image: 'img/TeslaModel3.png',
        link: 'car-TeslaModel3.html',
        trims: {
          'Standard': {
            label: 'Standard',
            price: '฿1,149,000',
            basic: { range: '465-475 กม.', accel: '6.2 วินาที', topSpeed: '201 กม./ชม.', chargeTime: '15 นาที (220-230 กม.)', drivetrain: 'ขับเคลื่อนล้อหลัง (RWD)', seats: '5 ที่นั่ง' },
            highlight: 'ขับเคลื่อนล้อหลังด้วยมอเตอร์เดี่ยว ใช้เบาะผ้าสลับหนัง ฝาครอบล้อดีไซน์ Prismata และเป็นรุ่นราคาเข้าถึงง่ายที่สุดในไลน์อัป Model 3',
            design: 'หน้าจอกลางสัมผัส 15.4 นิ้ว, หลังคากระจกพาโนรามิกกันความร้อน, กระโปรงหน้าเก็บสัมภาระได้ และรองรับระบบช่วยขับขี่ Autopilot'
          },
          'Premium': {
            label: 'Premium',
            price: '฿1,439,000',
            basic: { range: '445-465 กม.', accel: '6.1 วินาที', topSpeed: '201 กม./ชม.', chargeTime: '15 นาที (282 กม.)', drivetrain: 'ขับเคลื่อนล้อหลัง (RWD)', seats: '5 ที่นั่ง' },
            highlight: 'อัปเกรดเบาะหนังเจาะรูพร้อมระบายอากาศ, เพิ่มจอควบคุมด้านหลัง 8 นิ้ว, ไฟบรรยากาศ Ambient Light, ลำโพง 9 ตำแหน่ง และช่วงล่างปรับความหน่วงตามความถี่',
            design: 'หน้าจอกลางสัมผัส 15.4 นิ้ว, หลังคากระจกพาโนรามิกกันความร้อน, กระโปรงหน้าเก็บสัมภาระได้ และรองรับระบบช่วยขับขี่ Autopilot'
          },
          'Performance': {
            label: 'Performance',
            price: '฿2,099,000',
            basic: { range: '460-470 กม.', accel: '3.1 วินาที', topSpeed: '262 กม./ชม.', chargeTime: '15 นาที (282 กม.)', drivetrain: 'ขับเคลื่อน 4 ล้อ (AWD)', seats: '5 ที่นั่ง' },
            highlight: 'ปรับแต่งมอเตอร์คู่ให้พละกำลังสูงสุด, ระบบขับเคลื่อน 4 ล้อ, ช่วงล่างปรับได้ (Adaptive Suspension), เบาะสปอร์ต, สปอยเลอร์คาร์บอนไฟเบอร์ และล้อ Forged',
            design: 'หน้าจอกลางสัมผัส 15.4 นิ้ว, จอควบคุมด้านหลัง 8 นิ้ว, หลังคากระจกพาโนรามิกกันความร้อน, ระบบเสียงรอบทิศทาง, กระโปรงหน้าเก็บสัมภาระได้ และรองรับ Autopilot'
          }
        }
      },
      teslamodely: {
        name: 'Tesla Model Y',
        image: 'img/TeslaModelY_4.png',
        link: 'car-TeslaModelY.html',
        trims: {
          'RWD': {
            label: 'RWD',
            price: '฿1,719,000',
            basic: { range: '410-420 กม.', accel: '5.9 วินาที', topSpeed: '160 กม./ชม.', chargeTime: '15 นาที (229 กม.)', drivetrain: 'ขับเคลื่อนล้อหลัง (RWD)', seats: '5 ที่นั่ง' },
            highlight: 'ขับเคลื่อนล้อหลังด้วยมอเตอร์เดี่ยว ระยะทางครอบคลุมการใช้งานทั่วไปอย่างลงตัว และเป็นรุ่นราคาเข้าถึงง่ายที่สุดในไลน์อัป Model Y',
            design: 'หน้าจอกลาง 15.4 นิ้ว ควบคุมครบทุกฟังก์ชัน, หลังคากระจกพาโนรามิกกันความร้อน, จอควบคุมด้านหลัง 8 นิ้ว, กระโปรงหน้าเก็บสัมภาระได้ และรองรับ Autopilot'
          },
          'Long Range RWD': {
            label: 'Long Range RWD',
            price: '฿1,849,000',
            basic: { range: '575-585 กม.', accel: '5.6 วินาที', topSpeed: '201 กม./ชม.', chargeTime: '15 นาที (267 กม.)', drivetrain: 'ขับเคลื่อนล้อหลัง (RWD)', seats: '5 ที่นั่ง' },
            highlight: 'อัปเกรดแบตเตอรี่ความจุใหญ่ขึ้น ขับขี่ได้ระยะทางไกลที่สุดในไลน์อัป Model Y และรองรับกำลังไฟชาร์จ DC Fast Charge สูงสุดเพิ่มขึ้น',
            design: 'หน้าจอกลาง 15.4 นิ้ว ควบคุมครบทุกฟังก์ชัน, หลังคากระจกพาโนรามิกกันความร้อน, จอควบคุมด้านหลัง 8 นิ้ว, กระโปรงหน้าเก็บสัมภาระได้ และรองรับ Autopilot'
          },

          'long wheelbase': {
            label: 'Long Wheelbase',
            price: '฿1,999,000',
            basic: { range: '445-455 กม.', accel: '3.7 วินาที', topSpeed: '250 กม./ชม.', chargeTime: '15 นาที (240-270 กม.)', drivetrain: 'ขับเคลื่อน 4 ล้อ (AWD)', seats: '5 ที่นั่ง' },
            highlight: 'ปรับแต่งมอเตอร์คู่ให้พละกำลังสูงสุด เร่ง 0-100 กม./ชม. ไวขึ้น ช่วงล่างสปอร์ต เบรก Performance คาลิปเปอร์สีแดง สปอยเลอร์คาร์บอนไฟเบอร์ และแป้นคันเร่ง/เบรกอลูมิเนียม',
            design: 'หน้าจอกลาง 15.4 นิ้ว, จอควบคุมด้านหลัง 8 นิ้ว, หลังคากระจกพาโนรามิกกันความร้อน, ระบบเสียงรอบทิศทาง, กระโปรงหน้า (Frunk) และรองรับ Autopilot'
          }
        }
      }
    }
  },
  geely: {
    label: 'GEELY',
    models: {
      geelyex2: {
        name: 'Geely EX2',
        image: 'img/GeelyEx2_white.png',
        link: 'car-GeelyEx2.html',
        trims: {
          'Pro': {
            label: 'Pro',
            price: '฿429,900',
            basic: { range: '300-310 กม.', accel: '11.5 วินาที', topSpeed: '130 กม./ชม.', chargeTime: '25 นาที (120-135 กม.)', drivetrain: 'ขับเคลื่อนล้อหลัง (RWD)', seats: '5 ที่นั่ง' },
            highlight: 'โดดเด่นด้วยความคุ้มค่าในราคารุ่นเริ่มต้น น้ำหนักตัวรถเบาและคล่องตัวสูง มาพร้อมหน้าจอกลางใหญ่ 14.6 นิ้ว ระบบความปลอดภัยพื้นฐานครบถ้วน และพื้นที่เก็บสัมภาระด้านหน้า (Frunk) 70 ลิตร',
            design: 'ไฟหน้า Projector Lens แบบ LED, ไฟท้าย LED, มาตรวัดดิจิทัล LCD 8 นิ้ว, เบาะหุ้มหนัง, เบรกมือไฟฟ้า EPB พร้อม Auto Brake Hold และระบบเชื่อมต่อ Flyme Audio'
          },
          'Max': {
            label: 'Max',
            price: '฿459,900',
            basic: { range: '300-310 กม.', accel: '11.5 วินาที', topSpeed: '130 กม./ชม.', chargeTime: '25 นาที (120-135 กม.)', drivetrain: 'ขับเคลื่อนล้อหลัง (RWD)', seats: '5 ที่นั่ง' },
            highlight: 'อัปเกรดจากรุ่น Pro: เพิ่ม Adaptive Cruise Control (ACC), เบรกฉุกเฉินอัตโนมัติ (AEB), เตือนออกนอกเลน (LDW), กล้องรอบคัน 360 องศาพร้อมมุมมองใต้ท้องรถ, ล้อขนาดใหญ่ขึ้น และสีตัวถังทูโทนหลังคาดำ',
            design: 'ไฟหน้า LED พร้อม Adaptive High-beam, หน้าจอกลางสัมผัสใหญ่ 14.6 นิ้ว, หน้าจอมาตรวัดดิจิทัล 8.8 นิ้ว และช่องเก็บของอเนกประสงค์กว่า 36 จุด'
          }
        }
      },
      geelyex5: {
        name: 'Geely EX5',
        image: 'img/GeelyEx5_white.png',
        link: 'car-GeelyEx5.html',
        trims: {
          'Pro': {
            label: 'Pro',
            price: '฿799,900',
            basic: { range: '375-385 กม.', accel: '6.9 วินาที', topSpeed: '175 กม./ชม.', chargeTime: '20 นาที (247 กม.)', drivetrain: 'ขับเคลื่อนล้อหน้า (FWD)', seats: '5 ที่นั่ง' },
            highlight: 'โดดเด่นด้วยความคุ้มค่าในราคารุ่นเริ่มต้น น้ำหนักตัวรถเบาที่สุด อัตราเร่งและประสิทธิภาพพลังงานคล่องตัวสูง เบาะคนขับปรับไฟฟ้า และหน้าจอกลางใหญ่ 15.4 นิ้ว',
            design: 'ไฟหน้า LED พร้อมไฟเดย์ไลท์, มือจับเปิดประตูแบบซ่อน, หน้าจอมาตรวัดดิจิทัล 10.2 นิ้ว, เบาะคนขับปรับไฟฟ้า 6 ทิศทาง, แท่นชาร์จไร้สาย 15W และกล้องรอบคัน 360 องศา'
          },
          'Max': {
            label: 'Max',
            price: '฿899,900',
            basic: { range: '370-380 กม.', accel: '7.1 วินาที', topSpeed: '175 กม./ชม.', chargeTime: '20 นาที (247 กม.)', drivetrain: 'ขับเคลื่อนล้อหน้า (FWD)', seats: '5 ที่นั่ง' },
            highlight: 'อัปเกรดจากรุ่น Pro: เพิ่มหลังคากระจก Panoramic Sunroof เปิด-ปิดไฟฟ้า, ล้อขนาดใหญ่ขึ้น, ฝาท้ายไฟฟ้า, ระบบระบายอากาศ/นวดผ่อนคลายที่เบาะ และอัปเกรดเครื่องเสียงรอบทิศทางพรีเมียม',
            design: 'ไฟหน้า LED อัตโนมัติ, มือจับเปิดประตูแบบซ่อน, หน้าจอกลางสัมผัสใหญ่ 15.4 นิ้ว, หน้าจอเรือนไมล์ดิจิทัล 10.2 นิ้ว, แท่นชาร์จไร้สาย 15W, กล้องรอบคัน 360 องศา และระบบ ADAS'
          },
          'Max+': {
            label: 'Max+',
            price: '฿989,900',
            basic: { range: '400-410 กม.', accel: '7.6 วินาที', topSpeed: '175 กม./ชม.', chargeTime: '20 นาที (265 กม.)', drivetrain: 'ขับเคลื่อนล้อหน้า (FWD)', seats: '5 ที่นั่ง' },
            highlight: 'อัปเกรดจากรุ่น Max: เพิ่มระบบ ADAS ระดับสูงแบบเต็มพิกัด, ฟังก์ชันความปลอดภัยเชิงป้องกันรอบคัน, วัสดุตกแต่งภายในหรูหรายิ่งขึ้น และอัปเดตระบบออนไลน์แบบ OTA สมบูรณ์แบบที่สุดในรุ่นท็อป',
            design: 'หลังคากระจก Panoramic Sunroof ไฟฟ้า, ฝาท้ายไฟฟ้า, หน้าจอกลางสัมผัส 15.4 นิ้ว, เบาะปรับไฟฟ้าพร้อมระบายอากาศและนวดผ่อนคลาย, แท่นชาร์จไร้สาย 15W และกล้องรอบคัน 360 องศา'
          }
        }
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {

  // ทำงานเฉพาะหน้าที่มี .compare-picker เท่านั้น (กันพังหน้าอื่น)
  var sides = document.querySelectorAll('.compare-side');
  if (sides.length === 0) return;

  sides.forEach(function (side) {
    var brandSelect = side.querySelector('.select-brand');
    var modelSelect = side.querySelector('.select-model');
    var trimSelect = side.querySelector('.select-trim');

    // ---------- เติมตัวเลือกแบรนด์ทั้งหมดจาก carData ----------
    Object.keys(carData).forEach(function (brandKey) {
      var opt = document.createElement('option');
      opt.value = brandKey;
      opt.textContent = carData[brandKey].label;
      brandSelect.appendChild(opt);
    });

    // ---------- เมื่อเลือก "แบรนด์" ----------
    // ขั้นตอนนี้แค่กรองรายชื่อรุ่นในแบรนด์นั้น ยังไม่แสดงข้อมูลรถหรือรูปใดๆ
    brandSelect.addEventListener('change', function () {
      var brandKey = brandSelect.value;

      modelSelect.innerHTML = '<option value="">เลือกรุ่น ▾</option>';
      trimSelect.innerHTML = '<option value="">เลือกรุ่นย่อย ▾</option>';
      trimSelect.disabled = true;
      resetSideData(side);

      if (!brandKey) {
        modelSelect.disabled = true;
        return;
      }

      var models = carData[brandKey].models;
      Object.keys(models).forEach(function (modelKey) {
        var opt = document.createElement('option');
        opt.value = modelKey;
        opt.textContent = models[modelKey].name;
        modelSelect.appendChild(opt);
      });

      modelSelect.disabled = false;
    });

    // ---------- เมื่อเลือก "รุ่น" ----------
    // แสดงรูปภาพของรุ่นทันที (ใช้ร่วมกันทุกรุ่นย่อย) และเปิดให้เลือก "รุ่นย่อย" ต่อ
    modelSelect.addEventListener('change', function () {
      var brandKey = brandSelect.value;
      var modelKey = modelSelect.value;

      trimSelect.innerHTML = '<option value="">เลือกรุ่นย่อย ▾</option>';
      resetTextPanels(side, 'เลือกรุ่นย่อยเพื่อดูรายละเอียด');

      if (!brandKey || !modelKey) {
        trimSelect.disabled = true;
        resetImage(side);
        return;
      }

      var car = carData[brandKey].models[modelKey];

      // แสดงรูปภาพของรุ่นทันที
      showImage(side, car);

      // เติมตัวเลือกรุ่นย่อย
      Object.keys(car.trims).forEach(function (trimKey) {
        var opt = document.createElement('option');
        opt.value = trimKey;
        opt.textContent = car.trims[trimKey].label;
        trimSelect.appendChild(opt);
      });

      trimSelect.disabled = false;
    });

    // ---------- เมื่อเลือก "รุ่นย่อย" ----------
    // ขั้นตอนนี้ค่อยดึงข้อมูลจริง (ราคา/สเปก/จุดเด่น/ดีไซน์) มาแสดงผล
    trimSelect.addEventListener('change', function () {
      var brandKey = brandSelect.value;
      var modelKey = modelSelect.value;
      var trimKey = trimSelect.value;

      if (!brandKey || !modelKey || !trimKey) {
        resetTextPanels(side, 'เลือกรุ่นย่อยเพื่อดูรายละเอียด');
        return;
      }

      var car = carData[brandKey].models[modelKey];
      var trim = car.trims[trimKey];
      renderTrimToSide(side, car, trim);
    });
  });

  // ---------- Lightbox: คลิกรูป A หรือ B เพื่อดูภาพเต็มจอ ----------
  var lightbox = document.getElementById('compareImgLightbox');
  var lightboxImg = document.getElementById('compareImgLightboxImg');
  var lightboxClose = document.getElementById('compareImgLightboxClose');

  if (lightbox && lightboxImg && lightboxClose) {
    function openLightbox(img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    }
    function closeLightbox() {
      lightbox.classList.remove('open');
    }

    // ใช้ container .compare-image เดิมเป็นตัวดักคลิก เพราะรูปข้างในถูกสร้างใหม่ทุกครั้งที่เปลี่ยนรุ่น
    document.querySelectorAll('.compare-image').forEach(function (box) {
      box.addEventListener('click', function () {
        var img = box.querySelector('img');
        if (!img) return; // ยังไม่ได้เลือกรุ่นย่อย ไม่มีรูปให้ขยาย
        openLightbox(img);
      });
    });

    lightboxClose.addEventListener('click', closeLightbox);

    // คลิกพื้นหลังนอกรูป (ไม่ใช่ปุ่มปิด) ก็ปิดได้เช่นกัน
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    // กด Esc เพื่อปิด
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // ---------- แสดงรูปภาพของรุ่น ----------
  function showImage(side, car) {
    var sideKey = side.dataset.side;
    var imageBox = document.getElementById('compare-img-' + sideKey);
    imageBox.innerHTML = '<img src="' + car.image + '" alt="รูปภาพ ' + car.name + '">';
    imageBox.classList.remove('ph');
  }

  // ---------- แสดงข้อมูลรุ่นย่อยที่เลือก(A หรือ B) ----------
  function renderTrimToSide(side, car, trim) {
    var sideKey = side.dataset.side;

    // รายละเอียดเบื้องต้น
    var basicCell = document.getElementById('basic-' + sideKey);
    if (basicCell) {
      basicCell.innerHTML =
        '<h3 style="margin-top:0;">' + car.name + ' ' + trim.label + '</h3>' +
        'ราคาทางการ: ' + trim.price + '<br>' +
        'ระยะทางวิ่ง (WLTP): ' + trim.basic.range + '<br>' +
        'อัตราเร่ง 0-100 กม./ชม.: ' + trim.basic.accel + '<br>' +
        'ความเร็วสูงสุด: ' + trim.basic.topSpeed + '<br>' +
        'เวลาชาร์จ DC (30-80%): ' + trim.basic.chargeTime + '<br>' +
        'ระบบขับเคลื่อน: ' + trim.basic.drivetrain + '<br>' +
        'ที่นั่ง: ' + trim.basic.seats;
    }

    // จุดเด่น
    var highlightCell = document.getElementById('highlight-' + sideKey);
    if (highlightCell) {
      highlightCell.innerHTML =
        '<h3 style="margin-top:0;">' + car.name + ' ' + trim.label + '</h3>' +
        trim.highlight;
    }

    // ดีไซน์
    var designCell = document.getElementById('design-' + sideKey);
    if (designCell) {
      designCell.innerHTML =
        '<h3 style="margin-top:0;">' + car.name + ' ' + trim.label + '</h3>' +
        trim.design;
    }
  }

  // ---------- ล้างรูปภาพฝั่งนั้นกลับเป็นค่าว่าง ----------
  function resetImage(side) {
    var sideKey = side.dataset.side;
    var defaultLabel = sideKey === 'a' ? 'ภาพรถยนต์ A' : 'ภาพรถยนต์ B';
    var imageBox = document.getElementById('compare-img-' + sideKey);
    imageBox.textContent = defaultLabel;
    imageBox.classList.add('ph');
  }

  // ---------- ล้างข้อความทั้ง 3 แท็บฝั่งนั้นกลับเป็นค่าว่าง ----------
  function resetTextPanels(side, message) {
    var sideKey = side.dataset.side;
    ['basic-', 'highlight-', 'design-'].forEach(function (prefix) {
      var cell = document.getElementById(prefix + sideKey);
      if (cell) cell.innerHTML = message;
    });
  }

  // ---------- ล้างข้อมูลฝั่งนั้นทั้งหมด (ตอนยังไม่เลือกรุ่น) ----------
  function resetSideData(side) {
    resetImage(side);
    resetTextPanels(side, 'เลือกรุ่นรถเพื่อดูรายละเอียด');
  }

});
