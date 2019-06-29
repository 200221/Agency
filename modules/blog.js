document.getElementById("video-btn").onclick = function () {
    let video = `<iframe width="360" height="300" src="https://www.youtube.com/embed/bh-klGboIg8"
 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>`;
    document.getElementById("video").style.background = "none";
    document.getElementById("video").innerHTML = video;
    document.getElementById("video").autoplay = 1;
}
