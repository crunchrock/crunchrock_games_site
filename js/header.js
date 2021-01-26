const updatePadding = () => {
    let header = document.querySelector("header");
    let style = getComputedStyle(header);
    let headerHeight = style.height;
    let wrapper = document.getElementById("top-image");
    let wrapperStyle = getComputedStyle(wrapper);
    let wrapperPadding = wrapperStyle.paddingTop;
    document.getElementById("top-image").style.paddingTop = headerHeight;
}

setInterval(updatePadding, 500);