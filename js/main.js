// Start Search
const button = document.getElementById("myButton");
let navbar = document.querySelector(".navbar-nav");
let inputCreated = false;

button.onclick = function() {
if (!inputCreated) {
    const input = document.createElement("input");
    input.type = "text";
    input.name = "myInput";
    input.style.cssText = "color:red; caret-color:red; height: 35px; background-color: none; outline: none; border: 1px solid white; border-radius: 5px;";
    navbar.appendChild(input);
    inputCreated = true;
} else if (inputCreated === false) {
    navbar.removeChild(input);
}
};
// End Search


// Start Photo

// Get Slider Items
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"))

var nextButton // Get Slider Items
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"))

var nextButton = document.getElementById("next")
var prevButton = document.getElementById("prev")

var slidesCount = sliderImages.length

nextButton.onclick = nextSlide
prevButton.onclick = prevSlide

var currentSlide = 1;

var slideNumberElement = document.getElementById('slide-number');

var paginationElement = document.createElement("ul")
paginationElement.setAttribute('id', 'pagination-ul');

for (var i = 1; i <= slidesCount; i++) {
    // let li1 = document.createElement("li")
    // let li1text = document.createTextNode("All")
    // li1.appendChild(li1text)
    // li1.setAttribute("data-index", i)

    // let li2 = document.createElement("li")
    // let li2text = document.createTextNode("Degsin")
    // li2.appendChild(li2text)
    // li2.setAttribute("data-index", i)

    // let li3 = document.createElement("li")
    // let li3text = document.createTextNode("App")
    // li3.appendChild(li3text)
    // li3.setAttribute("data-index", i)

    // let li4 = document.createElement("li")
    // let li4text = document.createTextNode("count")
    // li4.appendChild(li4text)
    // li4.setAttribute("data-index", i)

    // paginationElement.appendChild(li1)
    // paginationElement.appendChild(li2)
    // paginationElement.appendChild(li3)
    // paginationElement.appendChild(li4)

    var paginationItem  = document.createElement("li")
    paginationItem.setAttribute("data-index", i)
    paginationItem.appendChild(document.createTextNode(i))
    paginationElement.appendChild(paginationItem)
}

document.getElementById("indicators").appendChild(paginationElement)

var paginationCreatedUl = document.getElementById('pagination-ul');

var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (let i = 0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute("data-index"))
        theChecker()
    }
}

theChecker()

function nextSlide() {
    if (nextButton.classList.contains("disabled")) {
        return false
    } else {
        currentSlide++
        theChecker()
    }
}
function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
        return false
    } else {
        currentSlide--
        theChecker()
    }
}

function theChecker() {

    removeAllActive()

    slideNumberElement.textContent = `Slide#` + (currentSlide) + ` Of ` + (slidesCount)

    sliderImages[currentSlide - 1].classList.add("active")
    
    paginationCreatedUl.children[currentSlide - 1].classList.add("active")
    
    // Check If Current Slide Is The First
    if (currentSlide == 1) {
        prevButton.classList.add("disabled")
    } else {
        prevButton.classList.remove("disabled")
    }
    if (currentSlide == slidesCount) {
        nextButton.classList.add("disabled")
    } else {
        nextButton.classList.remove("disabled")
    }
}
function removeAllActive() {
    sliderImages.forEach(function (img){
        img.classList.remove("active")
    });  
    paginationsBullets.forEach(function (bullet){
        bullet.classList.remove("active")
    });
}
