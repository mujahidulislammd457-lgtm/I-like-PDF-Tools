// main.js — renders the tool cards, search behavior, and populates the long About article


const tools = [
{ id: "merge-pdfs", title: "Merge PDFs", desc: "Combine multiple PDF files into a single document." },
{ id: "split-pdf", title: "Split PDF (extract pages)", desc: "Extract ranges or individual pages from a PDF." },
{ id: "rotate-pages", title: "Rotate PDF pages", desc: "Rotate pages clockwise or counter-clockwise." },
{ id: "pdf-to-word", title: "Convert PDF → Word (DOCX)", desc: "Convert PDF content into an editable DOCX file." },
{ id: "watermark", title: "Add Watermark to PDF", desc: "Embed image or text watermark across pages." },
{ id: "images-to-pdf", title: "JPG/PNG → PDF", desc: "Turn images into a single PDF." },
{ id: "pdf-to-png", title: "Convert PDF → PNG images", desc: "Export each page as a PNG image." },
{ id: "pdf-to-excel", title: "Convert PDF → Excel (XLSX)", desc: "Extract tables to an Excel spreadsheet." },
{ id: "pdf-to-jpg", title: "PDF → JPG (page export using pdfjs)", desc: "Export pages as JPG using client-side rendering." },
{ id: "extract-images", title: "Extract images (basic)", desc: "Pull embedded images out of PDF files." },
{ id: "basic-compress", title: "Basic Compress (naive rasterize + rebuild)", desc: "Fast client-side compression for quick reductions." },
{ id: "reduce-size", title: "Reduce PDF Size (advanced compression)", desc: "More aggressive compression for significant savings." },
{ id: "add-signature", title: "Add Signature (draw & place)", desc: "Draw or upload a signature and place it on pages." },
{ id: "txt-to-pdf", title: "Convert TXT → PDF", desc: "Wrap plain text into a printable PDF." },
{ id: "resize-pages", title: "Resize Pages (change page dimensions)", desc: "Change page sizes and re-center content." },
{ id: "download-metadata", title: "Download metadata / info", desc: "View and download file metadata like author & dates." },
{ id: "extract-text", title: "Extract Text (to TXT/Word)", desc: "Extract selectable text from a PDF file." },
{ id: "remove-pages", title: "Remove Pages (delete selected pages)", desc: "Delete unwanted pages from a PDF." },
{ id: "reorder-pages", title: "Reorder Pages (drag & drop page order)", desc: "Rearrange pages using an intuitive drag UI." },
{ id: "add-page-numbers", title: "Add Page Numbers (header/footer)", desc: "Automatically number pages in header or footer." },
{ id: "pdf-to-html", title: "PDF to HTML (convert PDF pages to web format)", desc: "Convert page content into a clean HTML
