function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function toggle_links(){
  if($('.link')[0].style.display == "none" || $('.link')[0].style.display == ""){
    var time = 0;
    while(time !== 11){
      $('.link').each(function(){
        $(this).context.style.display = "block";
        $(this).context.style.opacity = time/10;
        $(this).context.style.transform = "translateY(" + (4*time - 40) + "px)";
      });
      time += 1;
      await sleep(25);
    }
  } else {
    var time = 0;
    while(time !== 10){
      $('.link').each(function(){
        $(this).context.style.opacity = 1 - time/10;
        $(this).context.style.transform = "translateY(-" + 4*time + "px)";
      });
      time += 1;
      await sleep(25);
    }
    $('.link').each(function(){
      $(this).context.style.display = "none";
    });
  }
  
}

function display_intro(){
  $('.ml12').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  anime.timeline({loop: 1})
  .add({
    targets: '.ml12 .letter',
    translateX: [30,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 500 + 30 * i;
    }
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: function(el, i) {
      return 100 + 30 * i;
    }
  });
  setTimeout(function(){
    $('.intro').hide();
    document.getElementById("front").style.backgroundImage = "url('https://ammmy.me/images/front.jpg')";
  },4600);
}