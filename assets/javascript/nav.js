function openNav(){
  var nav_div = document.getElementById('navDiv');
  var nav_list = document.getElementById('navList');
  nav_div.style.width = '100vw';
  nav_div.style.height = '100vh';
  nav_list.style.display = 'block';
}

function closeNav(){
  var nav_div = document.getElementById('navDiv');
  var nav_list = document.getElementById('navList');
  nav_div.style.width = '0vw';
  nav_div.style.height = '0vh';
  nav_list.style.display = 'none';
}
