fetch("http://localhost:5000/events")
  .then(response => response.json())
  .then(data => data.forEach(renderEvent))

// connects the fetch request to the form rendered in index.html, and calls a POST request with the inputted title, 
// creates a new json object in the process
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;

  fetch("http://localhost:5000/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: title })
  })
    .then(response => response.json())
    .then(renderEvent)
})

// renders the event by adding it to the HTML ul called #event-list
function renderEvent(event) {
  const li = document.createElement("li");
  li.textContent = event.title;
  document.querySelector("#event-list").appendChild(li)
}