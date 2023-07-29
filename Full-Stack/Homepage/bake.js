const secret = "bake";
let progress = 0;
document.addEventListener("keypress", (e) => {
	const key = e.key.toLowerCase();
	if (key === secret[progress]) progress++;
	else progress = 0;
	if (progress === secret.length) window.location.href = "./bake.html";
});