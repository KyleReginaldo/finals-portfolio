
  // Audio player
  var audioPlayer = document.querySelector('.audio-player');
  var musicPlayer = document.getElementById('music-player');

  // Carousel buttons
  var rollenAudioButton = document.getElementById('rollenAudio');
  var correcheAudioButton = document.getElementById('correcheAudio');
  var brettAudioButton = document.getElementById('brettAudio');
  var FrancisAudioButton = document.getElementById('francisAudio');
  var PatrickAudioButton = document.getElementById('patrickAudio');
  var JavierAudioButton = document.getElementById('JavierAudio');

  gsap.to(musicPlayer, { opacity: 0,y: 100, duration: 0.3 });


  // Function to play the audio and show the player
  function playAudio(event) {
    // Set the audio source
    audioPlayer.src = event.target.getAttribute('link');

    // Show the music player with animation
    gsap.to(musicPlayer, { opacity: 1,y: -10, duration: 0.3 });

    // Play the audio
    audioPlayer.play();
  }

  // Function to pause the audio and hide the player
  function pauseAudio() {
    // Pause the audio
    audioPlayer.pause();

    // Hide the music player with animation
    gsap.to(musicPlayer, { opacity: 0,y: 100, duration: 0.3 });
  }

  // Add event listeners to the carousel buttons
  rollenAudioButton.addEventListener('mouseover', playAudio);
  rollenAudioButton.addEventListener('mouseout', pauseAudio);


  brettAudioButton.addEventListener('mouseover', playAudio);
  brettAudioButton.addEventListener('mouseout', pauseAudio);

  FrancisAudioButton.addEventListener('mouseover', playAudio);
  FrancisAudioButton.addEventListener('mouseout', pauseAudio);

  correcheAudioButton.addEventListener('mouseover', playAudio);
  correcheAudioButton.addEventListener('mouseout', pauseAudio);

  PatrickAudioButton.addEventListener('mouseover', playAudio);
  PatrickAudioButton.addEventListener('mouseout', pauseAudio);

  JavierAudioButton.addEventListener('mouseover', playAudio);
  JavierAudioButton.addEventListener('mouseout', pauseAudio);