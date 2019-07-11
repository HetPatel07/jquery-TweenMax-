var element = document.getElementById('main');

TweenMax.to("#main", 1, {
    opacity: "1",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%) rotate(0)",
    
});
TweenMax.to("#para", 1, {
    position: "relative",
    top: "50%",
    left: "0%",
    opacity: "1",
    transform: "translateY(-50%)",
    
    delay: "0.5",
});

console.log(element);
