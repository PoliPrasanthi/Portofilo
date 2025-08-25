document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("data-body");

  let storedData = JSON.parse(localStorage.getItem("contactData")) || [];

  if (storedData.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="3" class="text-center text-muted">No messages found.</td></tr>`;
  } else {
    storedData.forEach(entry => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${entry.name}</td>
        <td>${entry.email}</td>
        <td>${entry.message}</td>
      `;
      tableBody.appendChild(row);
    });
  }
});
