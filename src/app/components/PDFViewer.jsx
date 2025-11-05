export default function PDFViewer({ fileUrl }) {
  return (
    <div className="w-full h-full">
      <iframe
        title="Visor PDF"
        src={`/pdfjs/web/viewer.html?file=${encodeURIComponent(fileUrl)}`}
        className="w-full h-full border-0 rounded-lg shadow-lg"
      />
    </div>
  );
}
