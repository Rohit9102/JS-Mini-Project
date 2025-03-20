# Subscription Page ---

## Overview ---
This is a coming soon subscription page that allows users to subscribe for updates about a new website launch. The page includes a subscription form where users enter their email, and the data is submitted to Google Sheets using a Google Apps Script.

## Features ---
✅ Responsive "Coming Soon" webpage.
✅ Email Subscription Form to collect user emails.
✅ Google Apps Script Integration for form submissions.
✅ Success Message displayed after subscription.
✅ Background Image & Gradient Overlay for an attractive look.
 
## Technologies Used ---

### HTML: Page structure and form elements.

### CSS: Styling, responsive design, and animations.

### JavaScript: Handles form submission and success messages.

### Google Apps Script: Processes form submissions and stores data in Google Sheets.

## How It Works ---

The user enters their email in the input field.
The form submits data to Google Sheets via Google Apps Script.
A thank you message is displayed upon successful submission.
The email is stored in Google Sheets for later use.

## Setup Instructions ---

1️⃣ Clone the Repository ---

git clone https://github.com/your-username/subscription-page.git

Open the folder and launch index.html in a browser.

2️⃣ Set Up Google Apps Script ---

Open Google Sheets.

Click Extensions > Apps Script.

Paste the following script:

function doPost(e) {
  var sheet = SpreadsheetApp.openById("YOUR_SHEET_ID_HERE").getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.Email, new Date()]);
  return ContentService.createTextOutput("Success");
}

Click Deploy > New Deployment and choose Web App.

Set access to Anyone and deploy it.

Copy the generated Web App URL.

3️⃣ Configure Your JavaScript File ---

Open index.html.

Replace 'YOUR_GOOGLE_SCRIPT_URL_HERE' with the Web App URL from Step 6.

Important Notes

⚡ Google Apps Script Required – You must deploy a Google Apps Script to store form data.
⚡ Replace YOUR_GOOGLE_SCRIPT_URL_HERE with your actual script URL.
⚡ Ensure form access is set to “Anyone” in Google Apps Script deployment settings.

## Future Enhancements ---
🔹 Email Verification – Validate emails before submission.
🔹 Database Storage – Store emails in a database instead of Google Sheets.
🔹 Email Notifications – Send confirmation emails to subscribers.
🔹 Countdown Timer – Add a countdown for website launch.

## Author ---

This Subscription Page was designed as a simple email collection tool.

📜 License: Open-source (MIT License)