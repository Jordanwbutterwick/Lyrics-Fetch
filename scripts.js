var submit = document
  .getElementById("submit")
  .addEventListener("click", function(event) {
    event.preventDefault();
    var artistName = document.getElementById("artist").value;
    var songTitle = document.getElementById("song").value;
    var url = "https://api.lyrics.ovh/v1";
    var newUrl = url + "/" + artistName + "/" + songTitle;
    var results = document.getElementById("results");
    fetch(newUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        //   made it to the actual data
        var lyrics = data.lyrics.replace(/\n/g, "<br />");
        results.innerHTML = lyrics;
        console.log(data);
      });
  });
