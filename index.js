const links = [
	"./full-stack/Dasmotos%20Arts%20and%20Crafts/index.html",
    "./full-stack/portfolio/index.html",
    "./full-stack/Chess-Club/index.html",
    "./full-stack/Homepage/index.html",
    "./full-stack/Tea%20Cozy/index.html",
    "./full-stack/Capstone%20Fotomatic/index.html"
];
const aTags = document.getElementsByTagName('a');
for (const i = 0; i < links.length; i++) {
	aTags[i].href = links[i]
}
