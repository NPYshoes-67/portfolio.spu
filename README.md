# Developer Portfolio — Starter

เว็บไซต์ Portfolio ส่วนตัวแบบ One Page ธีม Dark Navy / Electric Blue สำหรับสาย IT / Software / Web Development

## โครงสร้างไฟล์

```
portfolio/
├── index.html            หน้าเว็บหลัก (ทุก Section)
├── assets/
│   ├── css/
│   │   └── style.css     ดีไซน์ทั้งหมด (ตัวแปรสี, Layout, Responsive, Animation)
│   ├── js/
│   │   └── script.js     Navbar, Scroll Reveal, Typing Effect, Lightbox, Scrollspy, ฟอร์ม
│   └── images/           ใส่รูปภาพจริงของคุณที่นี่ (โปรไฟล์, โปรเจกต์, กิจกรรม)
└── README.md
```

## วิธีแก้ไขข้อมูลส่วนตัว

เปิดไฟล์ `index.html` แล้วค้นหาข้อความในวงเล็บเหลี่ยม เช่น `[ชื่อ-นามสกุล]`, `[ตำแหน่ง]`, `[อายุ]`
แล้วแทนที่ด้วยข้อมูลจริงของคุณ ส่วนที่ควรแก้ไขหลัก ๆ ได้แก่:

- Hero section: ชื่อ, ชื่อเล่น, ตำแหน่งที่สนใจ (ในตัวแปร `roles` ของ `script.js` ด้วย), คำแนะนำตัว
- About: ข้อมูลส่วนตัว, เป้าหมาย
- Experience / Education: ใส่ประวัติจริง หรือปล่อย Placeholder ไว้ก่อนได้
- Skills: ปรับรายการเทคโนโลยีตามที่คุณถนัดจริง
- Projects: ใส่รูป ชื่อ คำอธิบาย และลิงก์ Demo / GitHub จริง
- Contact: Email, เบอร์โทร, Social Media

## รูปภาพ

นำรูปภาพของคุณไปวางไว้ที่ `assets/images/` แล้วแทนที่กล่อง Placeholder (`<div class="avatar-placeholder">`,
`.project-thumb`, `.gallery-item`) ด้วยแท็ก `<img>` ที่ชี้ไปยังไฟล์รูปนั้น

## Deploy

โปรเจกต์นี้เป็น Static Site (HTML/CSS/JS ล้วน) จึงสามารถ Deploy ได้ทันทีบน:

- **GitHub Pages**: Push โฟลเดอร์นี้ขึ้น repository แล้วเปิดใช้งาน GitHub Pages ในหน้า Settings
- **Vercel**: Import repository แล้ว Deploy โดยไม่ต้องตั้งค่า Build Command
- **Netlify**: ลากโฟลเดอร์นี้วางในหน้า Netlify Drop หรือเชื่อมต่อกับ Git repository

## หมายเหตุ

- ฟอร์มติดต่อยังไม่ได้เชื่อมต่อ Backend จริง (แสดงผลเป็น UI เท่านั้น ตามที่ระบุในฟอร์ม)
- ห้ามลืมลบข้อความ Placeholder ที่เหลือทั้งหมดก่อนนำไปใช้งานจริง
