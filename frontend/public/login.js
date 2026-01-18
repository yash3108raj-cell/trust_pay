function login() {
  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      mobile: document.getElementById("m").value,
      password: document.getElementById("p").value
    })
  })
  .then(r => r.json())
  .then(d => {
    if (d.ok) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      alert(d.msg);
    }
  })
  .catch(() => alert("Server error"));
}
