const d = new Date();
const year = d.getFullYear();

// document.getElementById("time").innerHTML = year;

const projects = [
	{
		name: "Web3Recap",
		description: "recap",
		image: "",
		website: "web3recap.com",
	},
	{
		name: "Widelens",
		description: "social media",
		image: "",
		website: "web3recap.com",
	},
	{
		name: "test",
		description: "test",
		image: "",
		website: "web3recap.com",
	},
	{
		name: "test",
		description: "test",
		image: "",
		website: "web3recap.com",
	},
	{
		name: "test",
		description: "test",
		image: "",
		website: "web3recap.com",
	},
	{
		name: "test",
		description: "test",
		image: "",
		website: "web3recap.com",
	},
];

const projectElement = document.getElementById("project-list");

for (let i = 0; i < projects.length; i++) {
	const name = projects[i].name;
	const description = projects[i].description;
	const image = projects[i].image;

	const nameP = document.createElement("p");
	nameP.innerHTML = name;
	const descriptionP = document.createElement("p");
	descriptionP.innerHTML = description;
	const imgElement = document.createElement("img");
	imgElement.innerHTML = image;

	const parentDiv = document.createElement("div");
	parentDiv.appendChild(nameP);
	parentDiv.appendChild(descriptionP);
	parentDiv.appendChild(imgElement);

	projectElement.appendChild(parentDiv);
}
