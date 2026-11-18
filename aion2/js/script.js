document.querySelector("#checkStats").addEventListener("click", checkStats);
getNews();

async function checkStats() {
  let selection = document.querySelector("#statSelect").value;
  let results = document.querySelector("#statResults");
  if (selection === "") {
    results.textContent = "Please select an option.";
    return;
  }
  try {
    let appID = "3393110";
    let url;
    if (selection === "players") {
      url = `https://proxy.cors.dev/https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appID}`;
    } else {
      url = `https://proxy.cors.dev/https://api.steampowered.com/IUserReviewsService/GetAppReviews/v1/?appID=${appID}`;
    }
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    
    let data = await response.json();
    console.log(data);
    if (selection === "players") {
      results.textContent = `Current Players: ${data.response.player_count}`;
    } else {
      results.textContent = `Total Reviews: ${data.query_summary.total_reviews}`;
    }
  } catch (error) {
    console.error(error);
    results.textContent = "Unable to retrieve current statistics.";
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
    document.querySelector("#newsURL1").href = data.appnews.newsitems[0].url;

    document.querySelector("#newsTitle2").textContent = data.appnews.newsitems[1].title;
    document.querySelector("#newsURL2").href = data.appnews.newsitems[1].url;

    document.querySelector("#newsTitle3").textContent = data.appnews.newsitems[2].title;
    document.querySelector("#newsURL3").href = data.appnews.newsitems[2].url;
  } catch (error) {
    console.error(error);
    document.querySelector("#results").textContent = "Unable to retrieve recent news.";
  }
}
