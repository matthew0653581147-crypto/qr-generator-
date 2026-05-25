import QRGenerator from "@/components/QRGenerator";

export default function Home() {
  return (
    // เปลี่ยนมาใช้พื้นหลังไล่ระดับสี indigo-50 ไปยัง cyan-50 เพื่อความละมุน
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-6">
      <QRGenerator />
    </main>
  );
}