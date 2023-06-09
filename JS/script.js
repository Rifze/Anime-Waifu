document.addEventListener("DOMContentLoaded", function() {
    var waifuImage = document.querySelector("#waifu-image img");
    var waifuName = document.querySelector("#waifu-name");
    var likeButton = document.querySelector("#like-button");
    var dislikeButton = document.querySelector("#dislike-button");
  
    // Function to display the waifu
    function displayWaifu(waifu) {
      waifuImage.src = waifu.image;
      waifuName.textContent = waifu.name;
      waifuImage.alt = waifu.name;
    }
  
    // Fetch random waifu from the API
    function fetchRandomWaifu() {
      fetch("https://api.waifu.pics/sfw/waifu")
        .then(function(response) {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not okay.");
        })
        .then(function(data) {
          var waifuImageURL = data.url;
          var newWaifu = {
            name: "Random Waifu",
            image: waifuImageURL
          };
          displayWaifu(newWaifu);
        })
        .catch(function(error) {
          console.error("An error occurred while fetching waifu image.", error);
        });
    }
  
    // Event listener for like button
    likeButton.addEventListener("click", function() {
      fetchRandomWaifu();
    });
  
    // Event listener for dislike button
    dislikeButton.addEventListener("click", function() {
      fetchRandomWaifu();
    });
  
    // Initial fetch of a random waifu
    fetchRandomWaifu();
    // Liked and Disliked scores
    var likedCount = 0;
    var dislikedCount = 0;

    // Function to update the scores
    function updateScores() {
    var likedScore = document.querySelector("#liked-count");
    var dislikedScore = document.querySelector("#disliked-count");

    likedScore.textContent = likedCount;
    dislikedScore.textContent = dislikedCount;
    }

    // Event listener for like button
    likeButton.addEventListener("click", function() {
    likedCount++;
    updateScores();
    fetchRandomWaifu();
    });

    // Event listener for dislike button
    dislikeButton.addEventListener("click", function() {
    dislikedCount++;
    updateScores();
    fetchRandomWaifu();
    });

    });
  