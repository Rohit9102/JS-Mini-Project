# Age Calculator --- 

## Description ---

This project is a simple Age Calculator built using HTML, CSS, and JavaScript. It allows users to input their birthdate and calculates their exact age in years, months, and days.

## Technologies Used ---

HTML: Structure of the age calculator.

CSS: Styling and layout.

JavaScript: Logic for calculating the age.

## Features ---

Allows users to enter their birthdate.

Calculates and displays age in years, months, and days.

Ensures that future dates cannot be selected.

Clean and user-friendly UI with a responsive design.

## Installation & Usage ---

Clone the repository:

git clone https://github.com/yourusername/age-calculator.git

Open the project folder and run index.html in a browser.

Enter a valid birthdate and click the Calculate button to see your age.

## Code Structure ---

### HTML (index.html) --- 

Defines the structure of the age calculator.

Contains an input field for selecting a date.

Includes a button to calculate the age.

### CSS (style.css) ---

Styles the age calculator UI.

Uses a gradient background and responsive design for better user experience.

### JavaScript (script.js) ---

Retrieves the birthdate entered by the user.

Ensures the date selected is not in the future.

Calculates the age using the difference between the current date and the birthdate.

Displays the age dynamically on the screen.

## How the Code Works ---

### Age Calculation (calculateAge())

Fetches the input date from the user.

Converts it into a JavaScript Date object.

Compares it with the current date to determine the years, months, and days.

Displays the result dynamically on the webpage.

### Input Validation

Ensures that the selected date is not in the future.

Displays an error message if no date is selected.

### Improvements & Suggestions

Allow users to input custom date formats.

Add additional UI enhancements and animations.

Include an option to calculate the age difference between two dates.

Improve mobile responsiveness for better user experience.

## License

This project is open-source and available under the MIT License.