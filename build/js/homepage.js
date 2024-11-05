let button1 = document.getElementById("BMIbtn");

button1.addEventListener("click", () => {
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("output1");
  const bmiOutput = document.getElementById("BMIoutput");
  bmiOutput.style.display = "block";
  let height_status = false,
    weight_status = false;

  if (height === "" || isNaN(height) || height <= 0) {
    document.getElementById("height_error").innerHTML =
      "Please provide a valid height";
  } else {
    document.getElementById("height_error").innerHTML = "";
    height_status = true;
  }

  if (weight === "" || isNaN(weight) || weight <= 0) {
    document.getElementById("weight_error").innerHTML =
      "Please provide a valid weight";
  } else {
    document.getElementById("weight_error").innerHTML = "";
    weight_status = true;
  }

  if (height_status && weight_status) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = "Under weight : " + bmi;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = "Normal : " + bmi;
    } else {
      result.innerHTML = "Over weight : " + bmi;
    }
  } else {
    alert("The form has errors");
    result.innerHTML = "";
  }
});

fetch(
  "https://api.spoonacular.com/recipes/random?apiKey=514bff3015454e7f9b2cecb750e09eb0&number=2"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    if (data && data.recipes && data.recipes.length > 0) {
      const recipes = data.recipes;

      const recipeContainer = document.getElementById("recipeContainer");

      const html = recipes
        .map((recipe) => {
          const instructionWords = recipe.instructions.split(" ");
          const shortInstructions = instructionWords.slice(0, 100).join(" ");

          return `
            <li>
                <a href="#" class="block group">
                  <img
                    src="${recipe.image}"
                    class="object-cover w-full rounded aspect-square"
                  />

                  <div class="mt-3">
                    <h3
                      class="font-bold text-[#7F411C] group-hover:underline group-hover:underline-offset-4"
                    >
                    ${recipe.title}
                    </h3>

                    <p class="mt-1 text-sm text-[#fdfdfd]">
                    ${shortInstructions}
                    </p>
                  </div>
                </a>
            </li>
          `;
        })
        .join("");

      recipeContainer.innerHTML = html;
    } else {
      console.error("No recipes found in the response.");
    }
  })
  .catch((error) => console.error("Error fetching data:", error));

let button2 = document.getElementById("Lossbtn");
let isShowingAll = false;
button2.addEventListener("click", () => {
  const LossOutput = document.getElementById("MoreLoss");

  if (isShowingAll) {
    LossOutput.style.display = "none";
    button2.innerHTML = "Show All";
  } else {
    LossOutput.style.display = "inline";
    button2.innerHTML = "Show Less";
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=514bff3015454e7f9b2cecb750e09eb0&number=3"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data && data.recipes && data.recipes.length > 0) {
          const recipes = data.recipes;

          const recipeContainer2 = document.getElementById("recipeContainer2");

          const html = recipes
            .map((recipe) => {
              const instructionWords = recipe.instructions.split(" ");
              const shortInstructions = instructionWords
                .slice(0, 100)
                .join(" ");

              return `
                <li>
                    <a href="#" class="block group">
                      <img
                        src="${recipe.image}"
                        class="object-cover w-full rounded aspect-square"
                      />
    
                      <div class="mt-3">
                        <h3
                          class="font-bold text-[#7F411C] group-hover:underline group-hover:underline-offset-4"
                        >
                        ${recipe.title}
                        </h3>
    
                        <p class="mt-1 text-sm text-[#fdfdfd]">
                        ${shortInstructions}
                        </p>
                      </div>
                    </a>
                </li>
              `;
            })
            .join("");

          recipeContainer2.innerHTML = html;
        } else {
          console.error("No recipes found in the response.");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  isShowingAll = !isShowingAll;
});

let button3 = document.getElementById("Gainbtn");
let isShowingAll_1 = false;

fetch(
  "https://api.spoonacular.com/recipes/random?apiKey=514bff3015454e7f9b2cecb750e09eb0&number=2"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    if (data && data.recipes && data.recipes.length > 0) {
      const recipes = data.recipes;

      const recipeContainer3 = document.getElementById("recipeContainer3");

      const html = recipes
        .map((recipe) => {
          const instructionWords = recipe.instructions.split(" ");
          const shortInstructions = instructionWords.slice(0, 100).join(" ");

          return `
          <li>
          <a href="#" class="block group">
            <img
              src="${recipe.image}"
              class="object-cover w-full rounded aspect-square"
            />

            <div class="mt-3">
              <h3
                class="font-bold text-[#7F411C] group-hover:underline group-hover:underline-offset-4"
              >
              ${recipe.title}
              </h3>

              <p class="mt-1 text-sm text-[#262424]">
              ${shortInstructions}
              </p>
            </div>
          </a>
        </li>
          `;
        })
        .join("");

      recipeContainer3.innerHTML = html;
    } else {
      console.error("No recipes found in the response.");
    }
  })
  .catch((error) => console.error("Error fetching data:", error));
button3.addEventListener("click", () => {
  const GainOutput = document.getElementById("MoreGain");

  if (isShowingAll_1) {
    GainOutput.style.display = "none";
    button3.innerHTML = "Show All";
  } else {
    GainOutput.style.display = "inline";
    button3.innerHTML = "Show Less";
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=514bff3015454e7f9b2cecb750e09eb0&number=3"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data && data.recipes && data.recipes.length > 0) {
          const recipes = data.recipes;

          const recipeContainer4 = document.getElementById("recipeContainer4");

          const html = recipes
            .map((recipe) => {
              const instructionWords = recipe.instructions.split(" ");
              const shortInstructions = instructionWords
                .slice(0, 100)
                .join(" ");

              return `
              <li>
              <a href="#" class="block group">
                <img
                  src="${recipe.image}"
                  class="object-cover w-full rounded aspect-square"
                />
    
                <div class="mt-3">
                  <h3
                    class="font-bold text-[#7F411C] group-hover:underline group-hover:underline-offset-4"
                  >
                  ${recipe.title}
                  </h3>
    
                  <p class="mt-1 text-sm text-[#262424]">
                  ${shortInstructions}
                  </p>
                </div>
              </a>
            </li>
              `;
            })
            .join("");

          recipeContainer4.innerHTML = html;
        } else {
          console.error("No recipes found in the response.");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  isShowingAll_1 = !isShowingAll_1;
});

function sendEmail() {
  Email.send({
    SecureToken: "c27e6a59-9540-41f1-b0f1-ada501feb2a0",
    To: "BodyBalanceBites7@gmail.com",
    From: "BodyBalanceBites7@gmail.com",
    Subject: "This is the subject",
    Body: "Message :" + document.getElementById("message").value,
  }).then((message) => alert(message));
}
