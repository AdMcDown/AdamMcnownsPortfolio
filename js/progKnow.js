let toTop = document.getElementById("toTop");

window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
};

toTop.onclick = topOfPage;

function topOfPage() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// function hashHandler() {
//     console.log('The hash has changed!');
//     window.location.hash = this.hash;
//     window.scroll(0, -50);
// }

// window.addEventListener('hashchange', hashHandler, false);