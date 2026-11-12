
// COSC 1315 - List of Items Assignment
// My 10 favorite items using an array and a loop

// Create an array with 10 favorite items
var favoriteItems = [
    "Computers",
    "Technology",
    "Cars",
    "Soccer",
    "Traveling",
    "Music",
    "Movies",
    "Video Games",
    "Programming",
    "Spending Time with Family"
];

// Get the HTML list element
var favoriteList = document.getElementById("favorite-list");

// Use a for loop to display all items
for (var i = 0; i < favoriteItems.length; i++) {

    // Create a new list item
    var listItem = document.createElement("li");

    // Add the array item to the list
    listItem.textContent = favoriteItems[i];

    // Display the item on the webpage
    favoriteList.appendChild(listItem);
}
