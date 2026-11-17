document.querySelector("#checkPriceButton").addEventListener("click", checkPrice);

async function checkPrice(event) {
  try {
    let itemID = "610610016";
    let serverID = "11101";
    let url = `https://aion2.exchange/api/items/${itemID}?server=${serverID}`;
    let response = await fetch(url)
    let data = await response.json();
    console.log(data);
    document.querySelector("#results").textContent = data.price;
  } catch (error) {
    console.error(error);
    document.querySelector("#results").textContent = "Unable to retrieve marketplace prices.";
  }
}
