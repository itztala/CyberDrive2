"use client"; // Required for onClick in Next.js App Router

export function DownloadButton() {
  const handleDownload = () => {
    const fileId = "1oaA045Tp2dGg9w8HsMatHH46tymjAPr1"; // Replace with your actual file ID
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