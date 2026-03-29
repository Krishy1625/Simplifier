import { useState } from "react";

export default function App() {
  const [target, setTarget] = useState("");
  const [result, setResult] = useState("");

  const runScan = async () => {
    const res = await fetch(`http://127.0.0.1:8000/scan?target=${target}`);
    const data = await res.json();
    setResult(data.output);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">🔍 Simplifier Dashboard</h1>

      {/* Tailwind visual test */}
      <div className="mb-6 rounded-2xl border border-cyan-300/40 bg-cyan-500/10 p-4 shadow-lg shadow-cyan-500/20 backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Tailwind Check
        </p>
        <p className="mt-1 text-sm text-cyan-100">
          If this card is tinted cyan with rounded corners and glow, Tailwind utilities are rendering.
        </p>
        <span className="mt-3 inline-flex rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-900">
          Utilities Active
        </span>
      </div>

      {/* Input Section */}
      <div className="bg-gray-800 p-4 rounded-xl shadow mb-6">
        <h2 className="text-xl mb-2">Run Scan</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter IP or domain"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="flex-1 p-2 rounded bg-gray-700 text-white"
          />
          <button
            onClick={runScan}
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
          >
            Scan
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-black p-4 rounded-xl shadow">
        <h2 className="text-xl mb-2">Scan Results</h2>
        <pre className="text-green-400 text-sm overflow-x-auto">
          {result || "No scan run yet..."}
        </pre>
      </div>

    </div>
  );
}