// List of categories
const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((item) => {
  // Title of the category
  const categoryTitle = item.querySelector("h2").textContent;

  // Find all <li> inside of <ul>
  const subItems = item.querySelectorAll("ul li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${subItems.length}`);
});
