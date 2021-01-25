const updatePadding = () => {
let header = document.querySelector("header");
let style = getComputedStyle(header);
let headerHeight = style.height;
let wrapper = document.getElementById("top-image");
setTimeout(console.log(wrapper), 3000)
let wrapperStyle = getComputedStyle(wrapper);
let wrapperPadding = wrapperStyle.paddingTop;
setTimeout(console.log(wrapperPadding), 3000)
document.getElementById("top-image").style.paddingTop = headerHeight;
}

setInterval(updatePadding, 500);