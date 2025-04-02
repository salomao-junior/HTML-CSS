const form = document.getElementById("subscribe_container_form");

form.addEventListener("submit", formSubmit);

async function formSubmit(event) {
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

  try {
    const response = await fetch("http://localhost:3000/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error();
    }

    alert("User saved successfully!");
    document.getElementById("subscribe_container_form").reset();
  } catch (error) {
    alert("Error saving data. Please try again.");
  }
}
