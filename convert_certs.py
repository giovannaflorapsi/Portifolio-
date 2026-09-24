import fitz
import os
import glob

cert_dir = r"C:\Users\guigu\Downloads\PEX 2\Flora Portifolio\public\images\certificados"
pdfs = glob.glob(os.path.join(cert_dir, "*.pdf"))

for pdf_path in pdfs:
    print(f"Converting {pdf_path}...")
    doc = fitz.open(pdf_path)
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        # render at high resolution (dpi 200)
        pix = page.get_pixmap(dpi=200)
        out_path = f"{os.path.splitext(pdf_path)[0]}_page{page_num+1}.jpeg"
        pix.save(out_path)
        print(f"Saved {out_path}")
