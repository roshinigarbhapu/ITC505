// JavaScript code to solve a problem and display interface in the content section
// Problem: Display the current date and time in the main content area

function displayDateTime() {
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();
    document.getElementById('interface').innerHTML = `<p>Current Date and Time: ${dateTimeString}</p>`;
}

// Call the function when the page loads
window.onload = function() {
    displayDateTime();
    // Display last modified date in the footer
    document.getElementById('last-modified').textContent = document.lastModified;
};
