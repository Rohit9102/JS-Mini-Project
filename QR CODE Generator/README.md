### QR Code Generator ---

This is a simple QR Code Generator web application that allows users to generate QR codes for any text or URL they enter.

## Features ---

Generates a QR code from user-inputted text or URLs

Displays the generated QR code instantly

Alerts users when the input field is empty

## How It Works ---

The user enters text or a URL into the input field.

When the "Generate QR Code" button is clicked, the app sends the text to an external API.

The API returns a QR code image, which is displayed on the page.

If the input field is empty, an error animation is triggered.

## Installation & Usage ---

# Clone the repository:

git clone https://github.com/Rohit9102/QR-Generator.git

Open index.html in a browser.

Enter text or a URL in the input box.

Click the Generate QR Code button.

The QR code will appear below.

## Code Explanation ---

# HTML

Contains an input box for user input

Includes a button to generate the QR code

Displays the QR code inside an img tag

# CSS

Styles the container with a centered layout

Adds hover effects and animations for a smooth UI experience

Implements an error shake effect for invalid input

# JavaScript

generateQR() Function:

Takes user input and appends it to the QR code API URL

Updates the src attribute of the img tag to display the generated QR code

Shows an error animation if the input is empty

## Future Improvements ---

Add an option to download the generated QR code

Allow customization of QR code size and colors

Enhance mobile responsiveness

