
function displayInfo(event) {
  event.preventDefault(); 

  const nameInput = document.getElementById('name');
  const addressSelect = document.getElementById('address');
  const phoneInput = document.getElementById('phoneNumber');
  const displayInfoDiv = document.getElementById('displayInfo');

  const name = nameInput.value.trim();
  const address = addressSelect.value.trim();
  const phoneNumber = phoneInput.value.trim();

  // Check if any of the fields are empty
  if (name === '' || address === '' || phoneNumber === '') {
      displayInfoDiv.innerHTML = '<p>Please enter all the information.</p>';
      return; // Stop further execution
  }

  console.log("Button clicked");
  console.log("Name:", name);
  console.log("Address:", address);
  console.log("Phone Number:", phoneNumber);

  const infoHTML = `
      <h2>Order Information</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
  `;
  displayInfoDiv.innerHTML = infoHTML;
}

function changecolor() {
  var selectedOption = document.getElementById("menu");
  var colorfulText = document.getElementById("colorfulText");
  var message = document.getElementById("colorMessage");

  var selectedOptionText = selectedOption.options[selectedOption.selectedIndex].text;

  colorfulText.style.color = "black";

  switch (selectedOption.value) {
      case "option1":
          colorfulText.style.color = "red";
          message.innerHTML = "<strong>You chose " + selectedOptionText + ".</strong>";
        
          break;
      case "option2":
          colorfulText.style.color = "blue";
          message.innerHTML = "<strong>You chose " + selectedOptionText + ".</strong>";
          break;
      case "option3":
          colorfulText.style.color = "green";
          message.innerHTML = "<strong>You chose " + selectedOptionText + ".</strong>";
        break;
        default:
          colorfulText.style.color = "black";
          message.textContent = "";
  }
}
