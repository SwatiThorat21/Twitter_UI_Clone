async function fetchTweets() {
  let tweetsContainer = document.getElementById("tweets_container");
  let trendingTweets = document.getElementById("trending_tweets");
  let peopleYouMayKnow = document.getElementById("peopleYouMayKnow");

  let data = await getTweetdata();
  data.tweets.forEach((tweet) => {
    tweetsContainer.insertAdjacentHTML("beforeend", getHTMLforTweet(tweet));
  });

  data.trending.forEach((trend) => {
    trendingTweets.insertAdjacentHTML("beforeend", getHTMLforTrendingTweets(trend));
  });

  data.whoToFollow.forEach((people) => {
    peopleYouMayKnow.insertAdjacentHTML("beforeend", getHTMLforWhoToFollow(people));
  });
}

fetchTweets();

async function getTweetdata() {
  let response = await fetch(
    "https://raw.githubusercontent.com/SwatiThorat21/Twitter-clone/main/index.json"
  );

  let data = await response.json();

  return data;
}

let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    searchTweet(e);
  }
});

async function searchTweet(e) {
  let data = await getTweetdata();
  let searchInputText = e.target.value.toUpperCase();

  let tweetsContainer = document.getElementById("tweets_container");

  data.tweets.forEach((tweet) => {
    if (
      tweet.profileName.toUpperCase().includes(searchInputText) ||
      tweet.tweetContent.toUpperCase().includes(searchInputText)
    ) {
      tweetsContainer.innerHTML = getHTMLforTweet(tweet);
    }
  });
}

function getHTMLforTweet(tweet) {
  let tweetsHTML = "";

  let tweetHTML = `<div class="tweet">`;

  if (!(tweet.profileName && tweet.profileTweetID && tweet.tweetContent))
    return;

  if (tweet.replied) {
    tweetHTML += `<div class="--replied">
              <i class="fa-solid fa-comment"></i>
              <p>${tweet.replied}</p>
              </div>`;
  }

  if (
    tweet.profileImage &&
    tweet.profileName &&
    tweet.profileTweetID &&
    tweet.tweetContent
  ) {
    tweetHTML += `
              <div class="tweet_content">
                  <div id="tweet_profile">
                    <img src="${tweet.profileImage}" class="my_photo" alt="johnErlichman" />
                    <h3>
                      <span id="profile_name">${tweet.profileName}</span>
                      <img src="images/blue-tick.png" class="tweetContent_icon" /> <span class="tweet_id">${tweet.profileTweetID}</span>
                    </h3>
                    <div id="more">
                      <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                  </div>
                  <p class="p">
                    <span class="p-1">${tweet.tweetContent}</span>
                  </p>
              </div> `;
  }

  if (tweet.tweetContentImage) {
    tweetHTML += `
              <img src="${tweet.tweetContentImage}" class="tweet_image" alt="ElonMusk">
              `;
  }

  if (
    tweet.tweetCommentsCount &&
    tweet.tweetRetweetCount &&
    tweet.tweeLikesCount &&
    tweet.tweetViewsCount
  ) {
    tweetHTML += `
              <div class="tweet_reply_links">
                  <div id="comment_icon"><i class="fa-regular fa-comment icons-2" id="icon-1"></i> ${tweet.tweetCommentsCount}</div>
                  <div id="retweet_icon"><i class="fa-solid fa-retweet icons-2" id="icon-2"></i> ${tweet.tweetRetweetCount}</div>
                  <div id="like_icon"><i class="fa-regular fa-heart icons-2" id="icon-3"></i> ${tweet.tweeLikesCount}</div>
                  <div id="views_icon"><i class="fa-sharp fa-solid fa-chart-simple icons-2" id="icon-4"></i> ${tweet.tweetViewsCount}</div>
                  <div id="share_icon"><i class="fa-solid fa-arrow-up-from-bracket icons-2" id="icon-5"></i></div>
              </div>
              `;
  }
  tweetHTML += `</div>`;

  tweetsHTML += tweetHTML;

  return tweetsHTML;
}

function getHTMLforTrendingTweets(trend) {
  let trendingTweetsHTML = "";
  trendingTweetsHTML += `
              <div class="trendingTweet">
              <p><span class="trending_p">${trend.trendingIn}</span><i class="fa fa-ellipsis-h" aria-hidden="true"></i></p>
              <h2>${trend.hashTag}</h2>
              <p>${trend.trendingWith}</p>
              </div>
          `;
  return trendingTweetsHTML;
}

function getHTMLforWhoToFollow(people) {
  let peoplesProfileHTML = "";
  peoplesProfileHTML += `
  <div class="people_profile">
        <img src="${people.profileImage}" alt="tusharKumarPhoto" class="my_photo" />
         <div class="people_info">
          <h3>${people.profileName}</h3>
          <p>${people.profile_id}</p>
        </div>
         <button class="follow_btn">Follow</button>
  </div>
  `;
  return peoplesProfileHTML;
}
