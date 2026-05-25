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
        dark: "#1e293b",
        light: "#ffffff",
      },
    });

    setQr(qrData);
  };

  return (
    /* พื้นหลังธีมเรียบหรู สไตล์ดาร์กเทค ไล่เฉดสีลึกผสมลวดลายลายเส้นวงจรแบบจาง ๆ */
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden bg-[#0b0f19] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-indigo-950 to-[#020617]">
      
      {/* เอฟเฟกต์แสงเรืองรอยอยู่ด้านหลังการ์ด (Ambient Glow) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* ลวดลาย Grid เส้นตารางเทคโนโลยีบาง ๆ เพิ่มมิติความหรูหรา */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* ตัวการ์ดหลักแบบ Glassmorphism (โค้ดเดิมของคุณที่ปรับแต่งให้เข้ากับธีมมืด) */}
      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-xl shadow-2xl shadow-black/40 rounded-3xl p-8 border border-white/20 flex flex-col gap-6 transition-all duration-300 hover:shadow-cyan-500/5 hover:border-white/30">
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 bg-indigo-50 text-indigo-600 rounded-2xl mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.875 15.75a1.125 1.125 0 0 1-1.125-1.125v-1.5a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 0 1 1.125 1.125v1.5a1.125 1.125 0 0 1-1.125 1.125h-1.5ZM13.5 18.75a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 0 1 1.125 1.125v1.5a1.125 1.125 0 0 1-1.125 1.125h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5ZM18.75 18.75a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 0 1 1.125 1.125v1.5a1.125 1.125 0 0 1-1.125 1.125h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5Z" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">
            QR Code Generator
          </h1>
          <p className="text-sm text-slate-500">แปลงลิงก์หรือข้อความของคุณให้เป็น QR Code ในพริบตา</p>
        </div>

        {/* Input & Button Section */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider pl-1">
            ข้อความหรือ URL ที่ต้องการ
          </label>
          <input
            type="text"
            placeholder="เช่น https://my-awesome-website.com"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border-2 border-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 p-3.5 rounded-2xl outline-none transition-all duration-200 text-slate-700 bg-slate-50/50 placeholder:text-slate-400 text-sm"
          />

          <button
            onClick={generateQR}
            disabled={!text}
            className="mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white p-3.5 rounded-2xl font-medium shadow-lg shadow-indigo-600/20 active:scale-[0.98] transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none"
          >
            สร้าง QR Code
          </button>
        </div>

        {/* Result QR Code Section */}
        {qr && (
          <div className="mt-2 pt-6 border-t border-slate-100 flex flex-col items-center justify-center">
            <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 shadow-inner">
              <img
                src={qr}
                alt="QR Code"
                className="w-56 h-56 rounded-lg"
              />
            </div>
            <p className="text-xs text-slate-400 mt-4 animate-pulse">✨ พร้อมใช้งานแล้ว สแกนได้เลย!</p>
          </div>
        )}

        {/* 👤 ส่วนแสดงชื่อผู้สร้าง */}
        <div className="mt-2 pt-4 border-t border-slate-100/60 flex items-center justify-center gap-1.5 text-xs text-slate-400 font-medium">
          <span>Created by</span>
          <span className="text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full font-semibold border border-indigo-100/50 hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-150 cursor-pointer">
            แมทธิวสุดหล่อ
          </span>
        </div>

      </div>
    </div>
  );
}