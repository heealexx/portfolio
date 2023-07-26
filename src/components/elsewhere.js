export function elsewhere(info){
  const logosContainer = document.querySelector(".elsewhere");
  for (let i = 0; i < info.length; i++){
    const logoLink = document.createElement("a");
    logoLink.className = "linkContainer";
    logoLink.href = info[i].link;
    logoLink.target = "_blank";
    const image = document.createElement("img");
    image.src = info[i].image;
    logoLink.append(image);
    logosContainer.append(logoLink);
  }
}