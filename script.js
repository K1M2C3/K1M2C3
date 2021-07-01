/* .js files add interaction to your website */

var displayScript = 
document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var favoriteAnimal = document.getElementById("favoriteAnimal").value;
    var favoriteProduct = document.getElementById("favoriteProduct").value;
        var animalTesting = document.getElementById("animalTesting").value;
displayScript.innerHTML = "My favorite animal is" + favoriteAnimal + "and my favorite product is" + favoriteProduct + ". My favorite product" + animalTesting + "get tested on animals.";
}


