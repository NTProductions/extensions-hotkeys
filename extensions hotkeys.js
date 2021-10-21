var csInterface = new CSInterface();

window.addEventListener("keydown", function(res) {
	res.altKey;
    res.ctrlKey;
    res.key;
    res.shiftKey;
});

// you can also apply event listeners to specific elements
var inputBox = document.getElementById("input");
inputBox.addEventListener("keyup", function(resTwo) {
    if(resTwo.length > 0) {
        csInterface.evalScript('search('+JSON.stringify(resTwo)+')', function(searchRes) {
            alert(searchRes);
        });
    }
});