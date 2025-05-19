const slides = [
	{
	  image: "slide1.jpg",
	  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  image: "slide2.jpg",
	  tagLine: "Tirages haute définition <span>grand format</span> pour vos bureaux et events"
	},
	{
	  image: "slide3.jpg",
	  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  image: "slide4.png",
	  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	},
	
  ];
  
  let currentSlider = 0;

  // Emplacement des images
  const srcImage = "./assets/images/slideshow/";
  
  const arrowLeft = document.querySelector(".arrow_left");
  const arrowRight = document.querySelector(".arrow_right");
  const bannerImg = document.querySelector(".banner-img");
  const tagLine = document.querySelector("#banner p");
  const dotsContainer = document.querySelector(".dots");
  const allDots = [];
  
  // Met à jour l'affichage (image, texte, bullet point)
  function updateSlider(index) {
	bannerImg.src = srcImage + slides[index]["image"];
	tagLine.innerHTML = slides[index].tagLine;
	allDots.forEach((dot, i) => {
	  dot.classList.toggle("dot_selected", i === index);
	});
  }
  
  // Création des bullets points
  for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("span");
	dot.classList.add("dot");
	//if (i === 0) dot.classList.add("dot_selected");
	dotsContainer.appendChild(dot);
	allDots.push(dot);

	// Clic sur un bullet point
	dot.addEventListener("click", () => {
	currentSlider = i;
	updateSlider(currentSlider);
	});
  }
  
  // Event Listener sur flèche droite
  arrowRight.addEventListener("click", () => {
	console.log("Flèche droite cliquée !");
	currentSlider++;
	if (currentSlider >= slides.length) currentSlider = 0;
	updateSlider(currentSlider);
  });
  
  // Event Listener sur flèche gauche
  arrowLeft.addEventListener("click", () => {
	console.log("Flèche gauche cliquée !");
	currentSlider--;
	if (currentSlider < 0) currentSlider = slides.length - 1;
	updateSlider(currentSlider);
  });

  updateSlider(currentSlider);

  

