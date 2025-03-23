# 🌅 Background Change Effect ---

# 📌 Overview ---

The Background Change Effect is an interactive image comparison slider that allows users to drag a vertical divider to reveal parts of an overlaying image dynamically. This can be used for before-and-after effects, such as showing an edited vs. original image.

# 🎯 Features ---

✅ Interactive drag-based image comparison
✅ Smooth transition effect with a draggable line
✅ Fully responsive design for mobile and desktop
✅ Lightweight JavaScript for better performance

# 🛠️ Technologies Used ---

HTML – Structure of the page

CSS – Styling and animations

JavaScript – Handles the interactive image comparison

# 🚀 How It Works ---

1️⃣ Two images are stacked on top of each other, with the original image on top inside .img-wrap.
2️⃣ The .img-wrap width changes dynamically as the user moves the cursor over .img-box.
3️⃣ JavaScript listens to mouse movements (onmousemove) and updates the .img-wrap width.
4️⃣ A draggable vertical line (#line) moves in sync with the cursor, creating a smooth transition effect.

# 📂 Project Structure ---

/project-folder
│── index.html         # Main HTML file
│── style.css          # Styling file
│── script.js          # JavaScript logic (if separated)
│── images/
│   ├── background.png # Background image
│   ├── transparent.png # Transparent overlay
│   ├── original.jpg   # Original image for comparison
│   ├── arrow.png      # Drag arrow indicator

# 🔧 How to Use ---

1️⃣ Download or Clone the Repository

git clone https://github.com/Rohit9102/background-change.git

2️⃣ Open index.html in a browser.

3️⃣ Move your mouse over the image to reveal the background.

# 📜 License ---

This project is open-source and available under the MIT License.

