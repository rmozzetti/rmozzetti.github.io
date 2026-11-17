document.querySelector("#checkPlayerCount").addEventListener("click", checkPlayers);
getNews();

async function checkPlayers() {
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

async function getNews() {
  try {
    let appID = "3393110";
    let url = `https://proxy.cors.dev/https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=${appID}&count=3`;
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    
    let data = await response.json();
    console.log(data);

    document.querySelector("#newsTitle1").textContent = data.appnews.newsitems[0].title;
    document.querySelector("#newsURL1").textContent = data.appnews.newsitems[0].url;

    document.querySelector("#newsTitle2").textContent = data.appnews.newsitems[1].title;
    document.querySelector("#newsURL2").textContent = data.appnews.newsitems[1].url;

    document.querySelector("#newsTitle3").textContent = data.appnews.newsitems[2].title;
    document.querySelector("#newsURL3").textContent = data.appnews.newsitems[2].url;
  } catch (error) {
    console.error(error);
    document.querySelector("#results").textContent = "Unable to retrieve recent news.";
  }
}
