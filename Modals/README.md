# 📌 Modal Window Project

This project shows how to build a **modal window** with an overlay using HTML, CSS, and JavaScript.  
The modal can be opened with buttons and closed in multiple ways (close button, overlay click, or Escape key).

---

## ✨ Features
- Three buttons (`Show modal 1`, `Show modal 2`, `Show modal 3`) to open the modal.  
- Modal can be closed by:
  - Clicking the **× (close button)**  
  - Clicking on the **overlay (dark background)**  
  - Pressing the **Escape key** on the keyboard  
- Overlay dims the background and prevents clicking on the page while modal is open.  

---

## 📂 Files
- **index.html** → Page structure (buttons, modal, overlay)  
- **style.css** → Styles for modal, overlay, and hidden state  
- **script.js** → JavaScript to control open/close actions  

---

## ⚡ How It Works

### 1. HTML
- Three buttons with the class `.show-modal` open the modal.  
- The modal (`.modal`) contains some text and a **close button** (`.close-modal`).  
- The overlay (`.overlay`) covers the entire screen behind the modal.  
- Both modal and overlay start hidden by default using the `.hidden` class.  

```html
<div class="modal hidden">
  <button class="close-modal">&times;</button>
  <h1>I'm a modal window 😍</h1>
  <p>Modal content goes here...</p>
</div>
<div class="overlay hidden"></div>

