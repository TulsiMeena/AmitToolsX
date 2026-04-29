from playwright.sync_api import sync_playwright, expect
import os

def verify_pdf_tools(page):
    # Go to the tools page
    # Since it's a static file, we can use the absolute path
    path = os.path.abspath("tools.html")
    page.goto(f"file://{path}")

    # Check if PDF Tools section is visible
    pdf_header = page.get_by_role("heading", name="PDF Tools")
    expect(pdf_header).to_be_visible()

    # Check for specific tool buttons
    images_to_pdf_btn = page.locator("#create-pdf-from-images")
    expect(images_to_pdf_btn).to_be_visible()
    expect(images_to_pdf_btn).to_have_text("Convert to PDF")

    merge_pdfs_btn = page.locator("#merge-pdfs-btn")
    expect(merge_pdfs_btn).to_be_visible()
    expect(merge_pdfs_btn).to_have_text("Merge PDFs")

    # Take screenshot
    page.screenshot(path="/home/jules/verification/pdf_tools_final.png", full_page=True)
    print("Screenshot saved to /home/jules/verification/pdf_tools_final.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Set viewport to a common desktop size
            page.set_viewport_size({"width": 1280, "height": 800})
            verify_pdf_tools(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
