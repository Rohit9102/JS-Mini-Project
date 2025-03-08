## Quote Generator ---

This is a simple Quote Generator web application that displays random quotes. Users can generate new quotes and share them on Twitter.

# Features ---

Displays a random quote on page load

Generates a new quote when the user clicks the New Quote button

Allows users to tweet the displayed quote using the Tweet button

# How It Works ---

The webpage loads with a predefined set of quotes stored in a JavaScript array.

A random quote is selected and displayed when the page loads.

When the New Quote button is clicked, another random quote is selected and displayed.

The Tweet button opens Twitter with the current quote pre-filled, allowing the user to share it.

# Code Explanation ---

## HTML ---

A simple structure with a quote-box containing:

A title (Quote of the Day)

A blockquote element for the quote

A span element for the author

Two buttons: one to generate a new quote and another to tweet the quote

## CSS ---

Uses Playfair Display font

Styles the quote box with a white background, shadows, and centered alignment

Adds hover effects and styles for buttons

## JavaScript ---

- quotes Array: Contains multiple quotes with their authors.

- getQuote() Function:

Selects a random quote from the array.

Updates the #quote and #author elements.

- tweet() Function:

Encodes the quote and author.

Opens Twitter with a pre-filled tweet containing the selected quote.

- Page Load Functionality:

Automatically calls getQuote() to display a quote when the page loads.

## Installation & Usage --- 

Clone the repository:

" git clone https://github.com/Rohit9102/quote-generator.git "

Open index.html in a browser.

Click the New Quote button to generate quotes!. 

Click the Tweet button to share the quote on Twitter.

## Using a Quote Generator API (Optional) --- 

If you have a quote API, you can modify the getQuote() function to fetch quotes dynamically instead of using a static array. Example:

async function getQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    document.getElementById("quote").innerHTML = data.content;
    document.getElementById("author").innerHTML = data.author;
}


## Future Improvements ---

Add more quotes dynamically from an API

Enable users to save their favorite quotes

Improve UI with animations and transitions