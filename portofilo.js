document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      const entry = { name, email, message };

      let storedData = JSON.parse(localStorage.getItem("contactData")) || [];
      storedData.push(entry);
      console.log(storedData);

      localStorage.setItem("contactData", JSON.stringify(storedData));
      form.reset();
      alert("Message saved successfully!");
    } else {
      alert("Please fill all fields!");
    }
  });
});
