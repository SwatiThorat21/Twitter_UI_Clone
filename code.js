function fetchTweets() {
  fetch(
    "https://raw.githubusercontent.com/SwatiThorat21/Twitter-clone/main/index.json"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let tweetsContainer = document.getElementById("tweets_container");
      let trendingTweets = document.getElementById("trending_tweets");
      let peopleYouMayKnow = document.getElementById("peopleYouMayKnow");
      let tweetsHTML = "";
      let trendingTweetsHTML = "";
      let peoplesProfile = "";

      data.tweets.forEach((tweet) => {
        let tweetHTML = `<div class="tweet">`;

        if (tweet.replied) {
          tweetHTML += `<div class="--replied">
          <i class="fa-solid fa-comment"></i>
          <p>${tweet.replied}</p>
          </div>`;
        }
        if (
          !(tweet.profileName && tweet.profileTweetID && tweet.tweetContent)
        ) {
          return;
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
      });

      tweetsContainer.insertAdjacentHTML("beforeend", tweetsHTML);

      data.trending.forEach((trend) => {
        trendingTweetsHTML += `
            <div class="trendingTweet">
            <p><span class="trending_p">${trend.trendingIn}</span><i class="fa fa-ellipsis-h" aria-hidden="true"></i></p>
            <h2>${trend.hashTag}</h2>
            <p>${trend.trendingWith}</p>
            </div>
        `;
      });
      trendingTweets.insertAdjacentHTML("beforeend", trendingTweetsHTML);

      data.whoToFollow.forEach((people) => {
        peoplesProfile += `
        <div class="people_profile">
              <img src="${people.profileImage}" alt="tusharKumarPhoto" class="my_photo" />
               <div class="people_info">
                <h3>${people.profileName}</h3>
                <p>${people.profile_id}</p>
              </div>
               <button class="follow_btn">Follow</button>
        </div>
        `;
      });
      peopleYouMayKnow.insertAdjacentHTML("beforeend", peoplesProfile);
    });
}

fetchTweets();
