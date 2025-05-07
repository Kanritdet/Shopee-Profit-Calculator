import { useState } from "react"

// Mock components: Replace with real imports in your project
import ShopeeProfitDashboard from "./ShopeeProfitDashboard"
import BusinessOverview from "./BusinessOverview"

export default function App() {
  const [activeTab, setActiveTab] = useState("calculator")
  const [profitPerUnit, setProfitPerUnit] = useState(20) // default mock

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex space-x-4 mb-6 border-b pb-2">
        <button
          className={\`px-4 py-2 font-medium \${activeTab === "calculator" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"}\`}
          onClick={() => setActiveTab("calculator")}
        >
          คำนวณกำไรสินค้า
        </button>
        <button
          className={\`px-4 py-2 font-medium \${activeTab === "overview" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"}\`}
          onClick={() => setActiveTab("overview")}
        >
          ภาพรวมธุรกิจ
        </button>
      </div>

      {activeTab === "calculator" && <ShopeeProfitDashboard onProfitChange={setProfitPerUnit} />}
      {activeTab === "overview" && <BusinessOverview profitPerUnit={profitPerUnit} />}
    </div>
  )
}