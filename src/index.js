// const email = document.getElementById("email");

// email.addEventListener("input", (event) => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an email address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });
const city = 'Israel';
const apiKey = 'd63972b3d5c94796b4f164912231012';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

const getDate = async () => {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error fetching data:', error.message);
  }
};

getDate();

