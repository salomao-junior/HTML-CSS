document
  .getElementById("subscribe_container_form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const github = document.getElementById("github").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    const newUser = {
      firstName,
      lastName,
      email,
      github,
      phoneNumber,
    };

    fetch("http://localhost:3000/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then(() => {
        alert("User saved successfully!");
        document.getElementById("subscribe_container_form").reset();
      })
      .catch(() => {
        alert("Error saving data.");
      });
  });
