fetch(
  "/home/mda215/Bootcamp/Week10/Intersection_Observer_Demo/public/image_links.json"
)
  .then((res) => res.json())
  .then((data) => console.log(data));

// async function readImageUrls() {
//   const response = await fetch("./image_links");
//   if (!response.ok) {
//     throw new Error("Could not read image_URLS json");
//   }
//   return response.json();
// }

// console.log(readImageUrls());
