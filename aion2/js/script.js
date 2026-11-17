document.querySelector("#checkPriceButton").addEventListener("click", checkPrice);

async function checkPrice(event) {
  try {
    let appID = "3393110";
    let url = `https://proxy.cors.dev/https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appID}`;
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    
    let data = await response.json();
    console.log(data);
    document.querySelector("#results").textContent = data.response.player_count;
  } catch (error) {
    console.error(error);
    document.querySelector("#results").textContent = "Unable to retrieve current player count.";
  }
}
