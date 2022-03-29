function hatter(){
    let r = parseInt(document.getElementById("piros").value),
        g = parseInt(document.getElementById("zold").value),
        b = parseInt(document.getElementById("kek").value);

    document.getElementById("red").innerHTML = r;
    document.getElementById("green").innerHTML = g;
    document.getElementById("blue").innerHTML = b;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    let mod_r = "0" + r.toString(16);
    let mod_g = "0" + g.toString(16);
    let mod_b = "0" + b.toString(16);

    if(document.getElementById("hex").checked){
        document.getElementById("text").value = `#${mod_r.slice(mod_r.length - 2)}${mod_g.slice(mod_g.length - 2)}${mod_b.slice(mod_b.length  - 2)}`;
    }
    else{
        document.getElementById("text").value = `rgb(${r},${g},${b})`;
    }
}