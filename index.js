// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        const body = document.querySelector("body");
        const showId = document.createElement("h2");
        showId.innerHTML = object.id;
        body.appendChild(showId)
    })
    .catch(function(error) {
        const body = document.querySelector("body");
        const showMessage = document.createElement("h2");
        showMessage.innerHTML = error.message;
        body.appendChild(showMessage)
    })
}