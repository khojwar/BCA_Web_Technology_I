// 1. Basic GET Request
// Fetch data from a public API and log the response.

fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10')
  .then(response => response.json()) // Parse JSON from response
  .then(data => console.log(data)) // Log the data
  .catch(error => console.error('Error:', error)); // Handle errors


