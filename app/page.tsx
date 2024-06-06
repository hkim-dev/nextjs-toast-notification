"use client";

import { useToast } from "./contexts/toastContext";

export default function Home() {
  const { showError, showInfo, showSuccess, showWarning } = useToast();

  return (
    <main className="main-container flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2">
        <button
          className="bg-blue-300 hover:bg-blue-400"
          onClick={() => showInfo('Info', 'This is an info message')}
        >
          Show Info Toast
        </button>
        <button
          className="bg-green-300 hover:bg-green-400"
          onClick={() => showSuccess('Success', 'This is a success message')}
        >
          Show Success Toast
        </button>
        <button
          className="bg-yellow-300 hover:bg-yellow-400"
          onClick={() => showWarning('Warning', 'This is a warning message')}
        >
          Show Warning Toast
        </button>
        <button
          className="bg-red-300 hover:bg-red-400"
          onClick={() => showError('Error', 'This is an error message')}
        >
          Show Error Toast
        </button>
      </div>
    </main>
  );
}
