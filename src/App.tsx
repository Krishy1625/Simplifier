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
    <div className="flex flex-col items-center justify-start min-h-screen bg-white pt-8">
      <h1 className="text-4xl font-bold mb-8 text-purple-900">Simplifier Dashboard</h1>
      <input
        type="text"
        placeholder="Enter target URL or IP"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 mb-4 w-full max-w-md text-purple-900"
      />
      <button
        onClick={runScan}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Run Scan
      </button>
      {result && (
        <div className="mt-8 w-full max-w-md bg-gray-100 p-4 rounded">
          <pre className="whitespace-pre-wrap">{result}</pre>
        </div>
      )}
    </div>                                
  );
}