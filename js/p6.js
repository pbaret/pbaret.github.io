function set3DViewer() {
    const pauseBtn = document.querySelector('#pauseBtn');
    pauseBtn.style.display="none";
  };
  function play() {
    const playBtn = document.querySelector('#playBtn');
    const pauseBtn = document.querySelector('#pauseBtn');
    playBtn.style.display="none";
    pauseBtn.style.display="block";
    const modelViewer = document.querySelector('#animated');
    modelViewer.play();
  };
  function pause() {
    const playBtn = document.querySelector('#playBtn');
    const pauseBtn = document.querySelector('#pauseBtn');
    playBtn.style.display="block";
    pauseBtn.style.display="none";
    const modelViewer = document.querySelector('#animated');
    modelViewer.pause();
  };
  function sliderInput() {        
      var slider = document.getElementById("timeSlider");    
      const modelViewer = document.querySelector('#animated');
      modelViewer.currentTime = slider.value * 12.5 / 100;
  };

  (() => {
      const modelViewer = document.querySelector('#animated');
      var slider = document.getElementById("timeSlider");

      self.setInterval(() => {
          slider.value = (modelViewer.currentTime / 12.5 * 100);
      }, 100.0);
  })();