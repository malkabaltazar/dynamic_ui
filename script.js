function toggle() {
  let dropdown = document.getElementsByClassName('dropdown')[0]
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  };
};

let button = document.getElementsByClassName('toggle')[0];
button.addEventListener('click', toggle);

let navbar = document.getElementsByClassName('navbar')[0];
let hamburger = document.getElementById('hamburger').children[0];
let span = document.getElementsByClassName('close')[0];

hamburger.onclick = function() {
  navbar.style.display = 'block';
}

span.onclick = function() {
  navbar.style.display = 'none';
  document.getElementsByClassName('dropdown')[0].style.display = 'none';
}

window.addEventListener('resize', function() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    navbar.style.display = 'block';
  } else {
    navbar.style.display = 'none';
    document.getElementsByClassName('dropdown')[0].style.display = 'none';
  };
});

// image slider

let images = Array.from(document.getElementById('images').children);
let circles = Array.from(document.getElementById('circles').children);

function fillCircle() {
  circles.map(j => j.innerHTML = '&#x25CB;')
  let i = images.indexOf(document.getElementById('images').children[0]);
  circles[i].innerHTML = '&#x25CF;';
};

circles.pop().addEventListener('click', next);

function next() {
  let current = document.getElementById('images').children[0];
  current.parentNode.removeChild(current);
  document.getElementById('images').appendChild(current);
  fillCircle();
};

circles.shift().onclick = function() {
  let last = document.getElementById('images').lastElementChild;
  last.parentNode.removeChild(last);
  document.getElementById('images').prepend(last);
  fillCircle();
};

for (var i = 0; i < circles.length; i++) {
  let j = i
  circles[j].addEventListener('click', function() {
    while (document.getElementById('images').children[0] != images[j]) {
      next();
    };
  });
};

setInterval(next, 5000);
