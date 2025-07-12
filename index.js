function submitData(name, email) {
  // Create an object with the user data
  const userData = {
    name: name,
    email: email
  };

  // Make a POST request with fetch
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  })
  .then(function(response) {
    // Convert the response to JSON
    return response.json();
  })
  .then(function(data) {
    // Create a new paragraph element
    const p = document.createElement("p");
    // Put the returned id inside the paragraph
    p.textContent = data.id;
    // Add the paragraph to the page
    document.body.appendChild(p);
  })
  .catch(function(error) {
    // Create a paragraph for the error message
    const p = document.createElement("p");
    p.textContent = error.message;
    document.body.appendChild(p);
  });
}
