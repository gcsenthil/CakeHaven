const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);

document
  .getElementById("orderForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Collect form data
    const formData = {
      customerName: document.getElementById("customerName").value,
      customerEmail: document.getElementById("customerEmail").value,
      customerPhone: document.getElementById("customerPhone").value,
      cakeType: document.getElementById("cakeType").value,
      cakeSize: document.getElementById("cakeSize").value,
      deliveryDate: document.getElementById("deliveryDate").value,
      specialInstructions: document.getElementById("specialInstructions").value,
      orderStatus: "Pending", // Default value
    };

    console.log("Form Data:", JSON.stringify(formData));

    try {
      // Send POST request using Fetch API
      const response = await fetch(
        "https://cakehaven.azurewebsites.net/api/PostOrder?code=Qt7ktyOgD9v_eZul-xfPE8XlhW87EmkwcCQ1KRrJj5cHAzFus0iGSA==",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Handle response
      if (response.ok) {
        // If successful, show success message
        const data = await response.json(); // Assuming the server sends JSON back
        console.log("Server response:", data);

        // Display success message
        document.getElementById("successMessage").classList.remove("hidden");
        document.getElementById("orderForm").reset(); // Reset the form after submission
      } else {
        // Handle errors (e.g., validation or server error)
        const errorData = await response.json(); // Assuming the server sends error details
        console.error("Error:", errorData);

        // Display error message
        alert(
          "There was an issue with your order: " +
            (errorData.message || "Please try again later.")
        );
      }
    } catch (error) {
      // Handle network or fetch errors
      console.error("Request failed:", error);
      alert(
        "There was a network error. Please check your connection and try again."
      );
    }
  });
