export default function ShopeeProfitDashboard({ onProfitChange }) {
  const profit = 20;
  onProfitChange(profit);
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">Shopee Profit Dashboard (Mock)</h2>
      <p>กำไรต่อชิ้น: {profit} บาท</p>
    </div>
  );
}
