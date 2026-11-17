document.querySelector("#checkPriceButton").addEventListener("click", checkPrice);

async function checkPrice(event) {
  try {
    /*let itemID = "610610016";
    let serverID = "11101";*/
    let characterName = "rob";
    let url = `https://api-search.plaync.com/aion2global/search/v2/character?keyword=${characterName}&region=nae&localeInfo=en-US`;
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    
    let data = await response.json();
    console.log(data);
    document.querySelector("#results").textContent = data.price;
  } catch (error) {
    console.error(error);
    document.querySelector("#results").textContent = "Unable to retrieve marketplace prices.";
  }
}
