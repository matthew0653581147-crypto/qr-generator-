"use client";

import { useState } from "react";
import QRCode from "qrcode";

export default function QRGenerator() {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");

  const generateQR = async () => {
    if (!text) return;

    const qrData = await QRCode.toDataURL(text, {
      width: 300,
      margin: 2,
      color: {
        dark: "#0f172a", // สีตัว QR น้ำเงินเข้มเกือบดำเพื่อให้ตัดกับพื้นหลังการ์ดขาว
        light: "#ffffff",
      },
    });

    setQr(qrData);
  };

  return (
    /* 1. พื้นหลังมืดไล่เฉดสีลึก */
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden bg-[#05070f]">
      
      {/* 2. เพิ่มเอฟเฟกต์แสงเรืองรอยขนาดใหญ่ (Ambient Glow) สีสันชัดเจนขึ้น */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-cyan-500/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* 3. เส้นตารางเทคโนโลยี เพิ่มความโมเดิร์น */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* 4. การ์ดแก้วแบบโปร่งแสงจริง (Glassmorphism แท้) */}
      <div className="relative z-10 w-full max-w-md bg-white/[0.07] backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] rounded-3xl p-8 border border-white/[0.12] flex flex-col gap-6 transition-all duration-500 hover:border-white/[0.22] hover:shadow-purple-500/10 hover:shadow-2xl">
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          {/* ปรับสีไอคอนให้เข้ากับธีมมืดรีเฟล็กซ์ */}
          <div className="inline-flex p-3 bg-white/[0.06] text-purple-300 rounded-2xl mb-2 border border-white/[0.08]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.875 15.75a1.125 1.125 0 0 1-1.125-1.125v-1.5a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 0 1 1.125 1.125v1.5a1.125 1.125 0 0 1-1.125 1.125h-1.5ZM13.5 18.75a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 0 1 1.125 1.125v1.5a1.125 1.125 0 0 1-1.125 1.125h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5ZM18.75 18.75a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 0 1 1.125 1.125v1.5a1.125 1.125 0 0 1-1.125 1.125h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5Z" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            QR Code Generator
          </h1>
          <p className="text-sm text-slate-400">แปลงลิงก์หรือข้อความของคุณให้เป็น QR Code ในพริบตา</p>
        </div>

        {/* Input & Button Section */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider pl-1">
            ข้อความหรือ URL ที่ต้องการ
          </label>
          <input
            type="text"
            placeholder="เช่น https://my-awesome-website.com"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-white/[0.1] focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 p-3.5 rounded-2xl outline-none transition-all duration-200 text-white bg-white/[0.05] placeholder:text-slate-500 text-sm"
          />

          <button
            onClick={generateQR}
            disabled={!text}
            className="mt-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:opacity-90 text-white p-3.5 rounded-2xl font-medium shadow-lg shadow-purple-600/20 active:scale-[0.98] transition-all duration-150 disabled:opacity-30 disabled:pointer-events-none"
          >
            สร้าง QR Code
          </button>
        </div>

        {/* Result QR Code Section */}
        {qr && (
          <div className="mt-2 pt-6 border-t border-white/[0.08] flex flex-col items-center justify-center">
            <div className="bg-white p-4 rounded-3xl shadow-2xl">
              <img
                src={qr}
                alt="QR Code"
                className="w-56 h-56 rounded-lg"
              />
            </div>
            <p className="text-xs text-purple-300 mt-4 animate-pulse">✨ พร้อมใช้งานแล้ว สแกนได้เลย!</p>
          </div>
        )}

        {/* 👤 ส่วนแสดงชื่อผู้สร้าง */}
        <div className="mt-2 pt-4 border-t border-white/[0.08] flex items-center justify-center gap-1.5 text-xs text-slate-400 font-medium">
          <span>Created by</span>
          <span className="text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-full font-semibold border border-purple-500/20 hover:bg-purple-500/20 transition-colors duration-150 cursor-pointer">
            แมทธิวสุดหล่อ
          </span>
        </div>

      </div>
    </div>
  );
}