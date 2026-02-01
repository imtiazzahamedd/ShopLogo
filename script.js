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

setInterval(() => {
  document.getElementById("datetime").innerHTML = new Date().toLocaleString();
}, 1000);
