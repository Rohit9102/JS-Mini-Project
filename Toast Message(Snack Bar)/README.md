# Toast Notification Project ---

## Overview ---

This project implements a toast notification system using HTML, CSS, and JavaScript. Users can trigger different types of notifications (Success, Error, Invalid) by clicking corresponding buttons.

## Features ---

Displays toast notifications with different messages and styles.

Notifications include an icon and disappear after 5 seconds.

Different colors for success (green), error (red), and invalid (orange) messages.

Smooth animation for toast appearance and disappearance.

## Technologies Used ---

HTML

CSS

JavaScript

## How the Code Works --- 

User Interaction: When a user clicks a button (Success, Error, or Invalid), the showToast(msg, type) function is triggered.

Creating a Toast Message: The function dynamically creates a <div> element for the toast notification and assigns it a class based on the type (success, error, or invalid).

Adding an Icon: An <img> element is created and assigned an image based on the notification type.

Displaying the Toast: The toast message is appended to the #toastBox container, which positions it at the bottom-right of the screen.

Auto-Removal: The toast notification automatically disappears after 5 seconds using setTimeout(() => { toast.remove(); }, 5000);.

## How to Use ---

Open index.html in a browser.

Click any of the buttons (Success, Error, Invalid) to trigger a toast notification.

The notification will appear at the bottom-right corner and disappear automatically.

## Installation --- 

Clone the repository:

git clone https://github.com/your-repo/toast-notification.git

Open the index.html file in a browser.

## Possible Improvements ---

Add sound effects when a notification appears.

Allow custom duration settings for each notification.

Implement a close button to dismiss notifications manually.

Use local storage to remember notification settings.



## License ---

This project is open-source and available under the MIT License.

