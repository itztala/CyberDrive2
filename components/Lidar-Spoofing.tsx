"use client"; // Required for onClick in Next.js App Router

export function DownloadButton() {
  const handleDownload = () => {
    const fileId = "13km6z3rCmGsySKKTMxbKHEdVofY5kX9s"; // Replace with your actual file ID
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(downloadUrl, "_blank");
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Download Report
    </button>
  );
}