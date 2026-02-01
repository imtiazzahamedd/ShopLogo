function submitFunction(event) {
  event.preventDefault();

  Swal.fire({
    title: "You have been logged in successfully!",
    icon: "success",
    draggable: true
  }).then(() => {
    window.location.href = "index.html";
  });
}

function updateDateTime() {
  const datetimeElement = document.getElementById("datetime");
  if (datetimeElement) {
    datetimeElement.innerHTML = new Date().toLocaleString();
  }
}

// Update immediately on page load
updateDateTime();

// Then update every second
setInterval(updateDateTime, 1000);
