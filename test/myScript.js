function changeImage(element) {
    // element = document.getElementById('myGIF');
    if (element.src.match("agif2opt")) {
        element.src = "https://media1.giphy.com/media/JITf9GFnGp72M/source.gif"
    } else {
        element.src = "https://www.thisiscolossal.com/wp-content/uploads/2018/04/agif2opt.gif"
    }
    $(this).hide();
}

function judgeNone() {
    if (document.getElementById("password").value == "") {
        var profile = {
            firstName: "Hongjian",
            lastName: "Su",
            birth: 1996e6
        }
    }
}

$(document).ready(function () {
    $("p").click(function () {
        $(this).hide();
    })
})
