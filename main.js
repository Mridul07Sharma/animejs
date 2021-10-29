var controlsProgressEl = document.querySelector(' .progress');

var tl = anime.timeline({
  direction: 'alternate',
  loop: true,
  duration: 500,
  easing: 'easeInOutSine',
  update: function(anim) {
    controlsProgressEl.value = tl.progress;
  }
});

tl
.add({
  targets: ' .box.red',
  translateX: 270,
})
.add({
  targets: ' .box.blue',
  translateX: 270,
}, '-=100')
.add({
  targets: ' .box.green',
  translateX: 270,
}, '-=100');

document.querySelector(' .play').onclick = tl.play;
document.querySelector(' .pause').onclick = tl.pause;
document.querySelector(' .restart').onclick = tl.restart;

controlsProgressEl.addEventListener('input', function() {
  tl.seek(tl.duration * (controlsProgressEl.value / 100));
});


anime({
  targets: '.line-drawing-demo .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});
anime({
  targets: '.yellow',
  translateX: 250,
  direction: 'alternate',
  loop: true,
  easing: 'linear'
});

anime({
  targets: '.red1',
  translateX: 270,
  easing: 'easeInElastic(1, .6)'
});

anime({
  targets: '.blue1',
  translateX: 270,
  easing: 'easeOutElastic(1, .6)'
});

anime({
  targets: '.green1',
  translateX: 270,
  easing: 'easeInOutElastic(1, .6)'
});

anime({
  targets: '.yellow1',
  translateX: 270,
  easing: 'easeOutInElastic(1, .6)'
});