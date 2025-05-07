import { useState } from "react"

export default function BusinessOverview({ profitPerUnit = 20 }) {
  const [targetProfit, setTargetProfit] = useState(40000)
  const [fixedCost, setFixedCost] = useState(5000)

  const isProfitValid = profitPerUnit > 0
  const requiredUnits = isProfitValid
    ? Math.ceil((targetProfit + fixedCost) / profitPerUnit)
    : 0

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">ภาพรวมธุรกิจ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">🎯 เป้าหมายกำไรต่อเดือน (บาท)</label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            value={targetProfit}
            onChange={(e) => setTargetProfit(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">💸 ต้นทุนแฝง/คงที่ (บาท)</label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            value={fixedCost}
            onChange={(e) => setFixedCost(parseFloat(e.target.value) || 0)}
          />
        </div>
      </div>

      <div className="mt-4 text-lg">
        {isProfitValid ? (
          <p>✅ คุณต้องขายอย่างน้อย <strong>{requiredUnits}</strong> ชิ้น/เดือน เพื่อให้ได้กำไรตามเป้า</p>
        ) : (
          <p className="text-red-600">❌ กำไรต่อชิ้นติดลบหรือไม่ถูกต้อง กรุณากลับไปตั้งค่าที่หน้าแรก</p>
        )}
      </div>
    </div>
  )
}