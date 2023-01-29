window.addEventListener("load", main, false);

function main(e) {
  setInterval(jsLoaded, 3);

  function jsLoaded() {
    const words_of_english_lyrics = document.querySelectorAll("div.cd_txt.cd_width05.cd_style");
    if (words_of_english_lyrics != null) {
      for (i = 0; i < words_of_english_lyrics.length; i++) {
        words_of_english_lyrics[i].style.width = "0.9em";
      }
    }
  }
}
