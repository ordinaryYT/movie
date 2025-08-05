
import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Jellyfin Clone</h1>
      <p className="mt-2 text-gray-600">Welcome to the movie platform.</p>
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
