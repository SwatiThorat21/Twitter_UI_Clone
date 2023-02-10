function fetchTweets() {
  fetch(
    "https://raw.githubusercontent.com/SwatiThorat21/Twitter-clone/main/index.json"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.tweets);
      let tweets_Container = document.getElementById("tweets_container");
      let tweetsHTML = "";
      data.tweets.forEach((tweet) => {
        let tweetHTML = '';
        if (tweet.replied) {
          tweetHTML += `<div class="--replied">
            <i class="fa-solid fa-comment"></i>
            <p>${tweet.replied}</p>
            </div>`;
        }
        
        //   `
        //   <div class="--replied">
        //     <i class="fa-solid fa-comment"></i>
        //     <p>${tweet.replied}</p>
        //   </div>
        // <!-- ///// first tweet-->
        // <div class="tweet">
        //     <div>
        //       <img src="${tweet.profile_image}" class="my_photo" alt="johnErlichman" />
        //     </div>
        //     <div class="tweet_content">
        //       <h3>
        //         <span id="profile_name">${tweet.profile_name}</span>
        //         <img src="images/blue-tick.png" class="tweetContent_icon" /> <span class="tweet_id">${tweet.tweet_id}</span>
        //       </h3>
        //       <p class="p">
        //         <span class="p-1">${tweet.tweet_content}<img src="${tweet.tweetContent_handsDown}" class="tweetContent_icon">
        //         </img><img src="${tweet.tweetContent_thread}"class="tweetContent_icon"></img></span>
        //       </p>
        //       <img src="${tweet.tweet_content_image}" class="tweet_image" alt="ElonMusk">
        //       <div class="tweet_reply_links">
        //         <div id="comment_icon"><i class="fa-regular fa-comment icons-2" id="icon-1"></i> ${tweet.comments}</div>
        //         <div id="retweet_icon"><i class="fa-solid fa-retweet icons-2" id="icon-2"></i> ${tweet.retweet}</div>
        //         <div id="like_icon"><i class="fa-regular fa-heart icons-2" id="icon-3"></i> ${tweet.likes}</div>
        //         <div id="views_icon"><i class="fa-sharp fa-solid fa-chart-simple icons-2" id="icon-4"></i> ${tweet.views}</div>
        //         <div id="share_icon"><i class="fa-solid fa-arrow-up-from-bracket icons-2" id="icon-5"></i></div>
        //       </div>
        //     </div>
        
        //     <div id="more">
        //       <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        //     </div>
        //   `;

        tweetsHTML += tweetHTML;
      });
      tweets_Container.insertAdjacentHTML("beforeend", tweetsHTML);
    });
}

fetchTweets();
