let cases = [];

function addCase() {
  const title = document.getElementById("caseTitle").value;
  const category = document.getElementById("category").value;
  const riskLevel = document.getElementById("riskLevel").value;
  const description = document.getElementById("description").value;

  if (title.trim() === "") {
    alert("Please enter a case title.");
    return;
  }

  const newCase = {
    title: title,
    category: category,
    riskLevel: riskLevel,
    description: description,
    date: new Date().toLocaleDateString()
  };

  cases.push(newCase);
  saveCases();
  displayCases();
  clearForm();
}

function displayCases() {
  const caseList = document.getElementById("caseList");
  caseList.innerHTML = "";

  cases.forEach(function(item) {
    const card = document.createElement("div");
    card.className = "case-card risk-" + item.riskLevel;

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Category:</strong> ${item.category}</p>
      <p><strong>Risk Level:</strong> ${item.riskLevel}</p>
      <p><strong>Description:</strong> ${item.description}</p>
      <p><strong>Date:</strong> ${item.date}</p>
    `;

    caseList.appendChild(card);
  });
}

function clearForm() {
  document.getElementById("caseTitle").value = "";
  document.getElementById("description").value = "";
}

function saveCases() {
  localStorage.setItem("safetyCases", JSON.stringify(cases));
}

function loadCases() {
  const savedCases = localStorage.getItem("safetyCases");

  if (savedCases) {
    cases = JSON.parse(savedCases);
    displayCases();
  }
}

loadCases();
