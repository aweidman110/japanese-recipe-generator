function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instruction");

  let apiKey = "bb204t34cebbo506a6ab37d911c00dfb";
  let context =
    "You are a skilled chef in Japan who is passionate about cooking. Your mission is to provide a delightful recipe that aligns with the user's instructions. Make sure to the title bold. Make sure to include detailed instructions in basic HTML and separate each line with a <br />. The user is counting on your culinary expertise!";
  let prompt = `User instructions: Generate a recipe for ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a recipe for ${instructionsInput.value}</div>`;

  console.log("Generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
