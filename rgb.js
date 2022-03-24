function hatter(){
    let r = parseInt(document.getElementById("piros").value),
        g = parseInt(document.getElementById("zold").value),
        b = parseInt(document.getElementById("kek").value);

    document.getElementById("red").innerHTML = r;
    document.getElementById("green").innerHTML = g;
    document.getElementById("blue").innerHTML = b;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    if(document.getElementById("hex").checked){
        document.getElementById("text").value =`#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    }
    else{
        document.getElementById("text").value = `rgb(${r},${g},${b})`;
    }
}