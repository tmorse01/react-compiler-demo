"use client"; // Runs in the browser

import { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 border border-white rounded bg-gray-900">
      <h2 className="text-xl font-bold">Client Component</h2>
      <p className="mt-2">Count: {count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="mt-3 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
      >
        Increment
      </button>
    </div>
  );
}
