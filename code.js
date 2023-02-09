let obj = fetch("https://raw.githubusercontent.com/SwatiThorat21/Twitter-clone/main/index.json").
then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data.tweets);
    let tweetContainer = document.querySelectorAll('.tweet');
    data.tweets.forEach(tweet => {
        // tweetContainer.innerHTML = `
        // <div>
        //       <img src="${tweet.profile-image}" class="my_photo" alt="vaibhav" />
        //     </div>
        //     <div class="tweet_content">
        //       <h3>
        //         <span id="profile_name">Vaibhav Matere</span>
        //         <img src="images/india-flag.png" class="tweetContent_icon" /> <span class="tweet_id"> @vaibhav_matere .
        //           23h</span>
        //       </h3>
        //       <p class="p-1">Started learning <span style="color:#1da1f2" class="hashtag_link">@figma</span> in detailed today from <span
        //           style="color:#1da1f2" class="hashtag_link">FrontendMasters</span> and now it's down!<span
        //           style="color:#1da1f2" class="hashtag_link">#figmadown</span>!</p>
        //       <div class="tweet_reply_links">
        //         <div id="comment_icon"><i class="fa-regular fa-comment icons-2" id="icon-1"></i> 5</div>
        //         <div id="retweet_icon"><i class="fa-solid fa-retweet icons-2" id="icon-2"></i> 1</div>
        //         <div id="like_icon"><i class="fa-regular fa-heart icons-2" id="icon-3"></i> 24</div>
        //         <div id="views_icon"><i class="fa-sharp fa-solid fa-chart-simple icons-2" id="icon-4"></i> 4,441</div>
        //         <div id="share_icon"><i class="fa-solid fa-arrow-up-from-bracket icons-2" id="icon-5"></i></div>
        //       </div>
        //     </div>
        //     <div id="more">
        //       <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        //     </div>

        // `
        console.log(tweet['profile-image']);
        
    });
   
})


