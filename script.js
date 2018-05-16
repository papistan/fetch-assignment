let copy = ['Her Turn', 'For the one who knows best', 'Bestsellers. For the best Mom.']

let cta = ['GIFTS FOR MOM', 'GEAR FOR MOM', 'SHOP FOR MOM']

let images = ['image1.jpg', 'image2.jpg', 'image3.jpg']

// Main Logic
function enablerInitHandler() {
  createDynamic();
  registerEventListeners();
};

function registerEventListeners() {
  image=document.getElementById("image");
  image.addEventListener("click", handleClick)
}

function handleClick() {
  Enabler.exitOverride("Exit", exitURL);
}

// Create Initial Dynamic Content
function createDynamic() { 
  logo=document.getElementById("logo");
  logo.setAttribute('src','logowhite.png');
  imageLoader(images[0])
  imageOptions()
  copyLoader(copy[0])
  copyOptions()
  ctaLoader(cta[0])
  ctaOptions()
  }

function imageLoader(imagePick) {
  image=document.getElementById("image");
  image.setAttribute('src', imagePick);

}

function copyLoader(copyPick) {
  copyText=document.getElementById("copy-text");
  copyText.innerHTML = copyPick
}

function ctaLoader(ctaPick) {
  ctaText=document.getElementById("cta-text");
  ctaText.innerHTML = ctaPick
}

// IMAGES 
// Image options display
function imageOptions(){
  imagesDisplayArea=document.getElementById("images-display-area")
  images.forEach(function(nextImage){
    let newImage = createNewImageElement(nextImage) 
    imagesDisplayArea.appendChild(newImage)
  });
}

// onclick handler for images
function selectNewImage(e){
  imageLoader(e.target.currentSrc)
}

function createNewImageElement(nextImage){
  let newImage = document.createElement("IMG")
  newImage.setAttribute('src', nextImage)
  newImage.addEventListener('click', selectNewImage)
  newImage.classList.add("images-display")
  return newImage
}
// Intake new image
function createNewImage(nextImage){
  imagesDisplayArea=document.getElementById("images-display-area")
  let newImage = createNewImageElement(nextImage)
  imagesDisplayArea.appendChild(newImage)
}

// COPY 
// Copy options handler
function copyOptions(){
  copyDisplayArea=document.getElementById("copy-display-area")
  copy.forEach(function(nextCopy){
    let newCopy = createNewCopyElement(nextCopy)
    copyDisplayArea.appendChild(newCopy)
  });
}

function createNewCopyElement(text){
  let newCopy = document.createElement("P")
  let newCopyText = document.createTextNode(text)
  newCopy.appendChild(newCopyText)
  newCopy.classList.add("copy-display")
  newCopy.addEventListener('click', selectNewCopy)
  return newCopy
}

// onclick handler for copy
function selectNewCopy(e){
  copyLoader(e.srcElement.innerText)
}

// Intake new copy
function createNewCopy(nextCopy){
  copyDisplayArea=document.getElementById("copy-display-area")
  let newCopy = createNewCopyElement(nextCopy)
  copyDisplayArea.appendChild(newCopy)
}


// CTA 
// CTA options handler
function ctaOptions(){
  ctaDisplayArea=document.getElementById("cta-display-area")
  cta.forEach(function(nextCta){
    let newCta = createNewCtaElement(nextCta)
    ctaDisplayArea.appendChild(newCta)
  });
}

// Create text node
function createNewCtaElement(text){
  let newCta = document.createElement("P")
  let newCtaText = document.createTextNode(text.toUpperCase())
  newCta.appendChild(newCtaText)
  newCta.classList.add("cta-display")
  newCta.addEventListener('click', selectNewCta)
  return newCta
}

// onclick handler for cta
function selectNewCta(e){
  ctaLoader(e.srcElement.innerText)
}

// Intake new cta
function createNewCta(nextCta){
  ctaDisplayArea=document.getElementById("cta-display-area")
  let newCta = createNewCtaElement(nextCta)
  ctaDisplayArea.appendChild(newCta)
}

// On window load, wait for Enabler to initialize
window.onload = () => {
  // if (Enabler.isInitialized()) {
    enablerInitHandler();
  // } else {
  // Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler)}
}
