/* !! ANYONE WHO WORKS ON THIS ORGINIZE YOUR WORK AS SHOWN BELOW !! */

/* Index Page */
/* body {
    color: black;
    border-radius: 8px;
} */

/* Index Page */
/* body {
    color: black;
    border-radius: 8px;
} */
// SAME CONCEPT JUST DIFFERENT LANGUAGE

// Index Page
// Sample Code for list/map
//define button and form//
const popUpForm = document.getElementById("contents_list");
const popUpFrom2 = document.getElementById('contents_map');
var list = document.getElementById("contents_listB");
var map = document.getElementById('contents_mapB');
//Form Pop-Up//
//button.onclick = () => {window.open('hello!')};//

//button function//
list.addEventListener("click", function() {
  document.getElementById("contents_list").style.display = "grid";
  document.getElementById('contents_map').style.display = 'none';
});

map.addEventListener('click', function() {
  document.getElementById('contents_map').style.display = 'block';
  document.getElementById('contents_list').style.display = 'none';
});

// Restaurant Pages

function search_item() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('searches');
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}