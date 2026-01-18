let cid = "";

document.addEventListener("DOMContentLoaded", () => {
  const m = document.getElementById("m");
  const p = document.getElementById("p");
  const a = document.getElementById("a");
  const q = document.getElementById("q");

  fetch("/captcha")
    .then(r => r.json())
    .then(d => {
      cid = d.id;
      q.innerText = d.q;
    });

  window.register = function () {
    fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mobile: m.value,
        password: p.value,
        cid: cid,
        ans: a.value
      })
    })
    .then(r => r.json())
    .then(d => {
      if (d.ok) {
        alert("Registered successfully");
        location.href = "index.html";
      } else {
        alert(d.msg);
      }
    });
  };
});
