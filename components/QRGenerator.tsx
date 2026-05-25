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
    });

    setQr(qrData);
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <h1 className="text-3xl font-bold">
        QR Generator
      </h1>

      <input
        type="text"
        placeholder="ใส่ URL หรือข้อความ"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-3 rounded-xl"
      />

      <button
        onClick={generateQR}
        className="bg-black text-white p-3 rounded-xl"
      >
        Generate QR
      </button>

      {qr && (
        <img
          src={qr}
          alt="QR Code"
          className="w-64 h-64"
        />
      )}
    </div>
  );
}