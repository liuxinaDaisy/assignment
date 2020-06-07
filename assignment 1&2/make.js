function make(name, attrs)
{
    var element = document.createElementNS("http://www.w3.org/2000/svg", name);
    if (attrs === undefined) attrs = {};
    for (var key in attrs) {
        element.setAttributeNS(null, key, attrs[key]);
    }
    return element;
}


function returnFloat2(value){
    value = Math.round(parseFloat(value) * 1000) / 1000;
    if (value.toString().indexOf(".") < 0) {
        value = value.toString() + ".000";
    } // www.jbxue.com
    return value;
}

function exe(n) {
    typeof n == "string" ? n = Number(n) : ''
    //console.log(n.toString(16)) 
    return n.toString(16)
}

function arrayMin(arrs){
    var min = arrs[0];
    for(var i = 1, ilen = arrs.length; i < ilen; i+=1) {
        if(arrs[i] < min) {
            min = arrs[i];
        }
    }
    return min;
}

function arrayMax(arrs){
    var max = arrs[0];
    for(var i = 1, ilen = arrs.length; i < ilen; i+=1) {
        if(arrs[i] > max) {
            max = arrs[i];
        }
    }
    return max;
}


function normalization(distribution, max, min) {
    let normalizationRatio = (distribution - min) / (max - min)
    return normalizationRatio
  }


function getResult(num){
    return parseInt(num);
  }




let a=make("line",{
    x1: 50,
    y1: 480,
    x2: 500,
    y2: 480,
    stroke: "black"
});

let b=make("line",{
    x1: 50,
    y1: 480,
    x2: 50,
    y2: 0,
    stroke: "black"
});

let c=make("circle",{
    cx: 50,
    cy: 480,
    r: 2,
    fill: "black"
});

let d=make("text",{
    x: 45,
    y: 490,
    "font-size": 10,
    "id": "texttest",
});





function plotAll(svg)
{


    // console.log(d3.interpolatePlasma(0))


    // svg.appendChild(make("rect",{
    //     x: 300,
    //     y: 0,
    //     width: 300,
    //     height: 30,
    //     fill: url(#MyGradient),
    // }));


    svg.appendChild(a);


    svg.appendChild(b);


    svg.appendChild(c);


    svg.appendChild(d);
    document.getElementById("texttest").textContent = 0;


    for (var i=0; i<scores.length; i++) {
        let color1 = normalization(emptyArr4[i], arrayMax(emptyArr4), arrayMin(emptyArr4));
        svg.appendChild(make("circle", {
            cx: (scores[i]['SATM']-250) / 1.2,
            cy: 500-(scores[i]['SATV']-220) / 1.2,
            r: scores[i]['ACT']*0.15,
            fill: d3.interpolatePlasma(color1),
            // style: "fill:#00FF00"
        }));
    }



    for (var i=0; i<11; i++) {
        svg.appendChild(make("circle", {
            cx: ((arrayMin(emptyArr1) + i*(arrayMax(emptyArr1) - arrayMin(emptyArr1)) / 10)-250) / 1.2,
            cy: 480,
            r: 2,
            fill: "black",
        }));
        svg.appendChild(make("text",{
            x: ((arrayMin(emptyArr1) + i*(arrayMax(emptyArr1) - arrayMin(emptyArr1)) / 10)-250) / 1.2 - 10,
            y: 495,
            "font-size": 10,
            "id": `texttest` + i,
        }));
        document.getElementById(`texttest` + i).textContent = arrayMin(emptyArr1) + i*(arrayMax(emptyArr1) - arrayMin(emptyArr1)) / 10;
    }


    for (var m=0; m<11; m++) {
        svg.appendChild(make("circle", {
            cx: 50,
            cy: 500-((arrayMin(emptyArr2) + m*(arrayMax(emptyArr2) - arrayMin(emptyArr2)) / 10)-220) / 1.2,
            r: 2,
            fill: "black",
        }));
        svg.appendChild(make("text",{
            x: 20,
            y: 500-((arrayMin(emptyArr2) + m*(arrayMax(emptyArr2) - arrayMin(emptyArr2)) / 10)-220) / 1.2,
            "font-size": 10,
            "id": `texttestt` + m,
        }));
        document.getElementById(`texttestt` + m).textContent = arrayMin(emptyArr2) + m*(arrayMax(emptyArr2) - arrayMin(emptyArr2)) / 10;
    }


    let svgDefs = svg.appendChild(make("defs"));

    let defsStop = svgDefs.appendChild(make("linearGradient",{"id": "MyGradient"}));

    defsStop.appendChild(make("stop",{
        offset: 0.05,
        "stop-color": d3.interpolatePlasma(0),
    }));

    defsStop.appendChild(make("stop",{
        offset: 0.5,
        "stop-color": d3.interpolatePlasma(0.5),
    }));

    defsStop.appendChild(make("stop",{
        offset: 0.95,
        "stop-color": d3.interpolatePlasma(1),
    }));

    svg.appendChild(make("rect",{
        x: 60,
        y: 10,
        width: 200,
        height: 30,
        fill: "url(#MyGradient)",
    }));

    // svg.append("text")
    // .attr("x",50)
    // .attr("y",490)
    // .text("0");

    console.log(arrayMin(emptyArr1));

}

function plotAll2(svg)
{


    svg.appendChild(a.cloneNode(true));
    svg.appendChild(b.cloneNode(true));
    svg.appendChild(c.cloneNode(true));
    svg.appendChild(d.cloneNode(true));
    document.getElementById("texttest").textContent = 0;

    for (var i=0; i<scores.length; i++) {
        let color2 = normalization(emptyArr2[i], arrayMax(emptyArr2), arrayMin(emptyArr2));
        svg.appendChild(make("circle", {
            cx: (scores[i]['ACT']-12) * 20,
            cy: 500-(scores[i]['GPA']-1.2) * 160,
            r: scores[i]['SATM']*0.008,
            fill: d3.interpolatePlasma(color2),
            // style: "fill:#00FF00"
        }));
    }


    for (var i=0; i<11; i++) {
        svg.appendChild(make("circle", {
            cx: ((arrayMin(emptyArr3) + i*(arrayMax(emptyArr3) - arrayMin(emptyArr3)) / 10)-12) * 20,
            cy: 480,
            r: 2,
            fill: "black",
        }));
        svg.appendChild(make("text",{
            x: ((arrayMin(emptyArr3) + i*(arrayMax(emptyArr3) - arrayMin(emptyArr3)) / 10)-12) * 20 - 5,
            y: 495,
            "font-size": 10,
            "id": `texttesttt` + i,
        }));
        document.getElementById(`texttesttt` + i).textContent = arrayMin(emptyArr3) + i*(arrayMax(emptyArr3) - arrayMin(emptyArr3)) / 10;
    }


    for (var m=0; m<11; m++) {
        svg.appendChild(make("circle", {
            cx: 50,
            cy: 500-((arrayMin(emptyArr4) + m*(arrayMax(emptyArr4) - arrayMin(emptyArr4)) / 10)-1.2) * 160,
            r: 2,
            fill: "black",
        }));
        svg.appendChild(make("text",{
            x: 20,
            y: 500-((arrayMin(emptyArr4) + m*(arrayMax(emptyArr4) - arrayMin(emptyArr4)) / 10)-1.2) * 160,
            "font-size": 10,
            "id": `texttestttt` + m,
        }));
        document.getElementById(`texttestttt` + m).textContent = returnFloat2(arrayMin(emptyArr4) + m*(arrayMax(emptyArr4) - arrayMin(emptyArr4)) / 10);
    }


    let svgDefs = svg.appendChild(make("defs"));

    let defsStop = svgDefs.appendChild(make("linearGradient",{"id": "MyGradient2"}));

    defsStop.appendChild(make("stop",{
        offset: 0.05,
        "stop-color": d3.interpolatePlasma(0),
    }));

    defsStop.appendChild(make("stop",{
        offset: 0.5,
        "stop-color": d3.interpolatePlasma(0.5),
    }));

    defsStop.appendChild(make("stop",{
        offset: 0.95,
        "stop-color": d3.interpolatePlasma(1),
    }));

    svg.appendChild(make("rect",{
        x: 60,
        y: 10,
        width: 200,
        height: 30,
        fill: "url(#MyGradient2)",
    }));

}



function plotAll3(svg)
{


    svg.appendChild(a.cloneNode(true));
    svg.appendChild(b.cloneNode(true));
    svg.appendChild(c.cloneNode(true));
    svg.appendChild(d.cloneNode(true));
    document.getElementById("texttest").textContent = 0;


    // console.log(arrayMax(emptyArr5));
    // console.log(arrayMin(emptyArr5));

    for (var i=0; i<scores.length; i++) {
        let color3 = normalization(emptyArr3[i], arrayMax(emptyArr3), arrayMin(emptyArr3));
        svg.appendChild(make("circle", {
            cx: (emptyArr5[i]-600) / 2,
            cy: 500-(scores[i]['GPA']-1.2) * 160,
            r: 4,
            fill: d3.interpolatePlasma(color3),
            // style: "fill:#00FF00"
        }));
    }


    for (var i=0; i<11; i++) {
        svg.appendChild(make("circle", {
            cx: ((arrayMin(emptyArr5) + i*(arrayMax(emptyArr5) - arrayMin(emptyArr5)) / 10)-600) / 2,
            cy: 480,
            r: 2,
            fill: "black",
        }));
        svg.appendChild(make("text",{
            x: ((arrayMin(emptyArr5) + i*(arrayMax(emptyArr5) - arrayMin(emptyArr5)) / 10)-600) / 2 - 13.5,
            y: 495,
            "font-size": 10,
            "id": `texttesttttt` + i,
        }));
        document.getElementById(`texttesttttt` + i).textContent = arrayMin(emptyArr5) + i*(arrayMax(emptyArr5) - arrayMin(emptyArr5)) / 10;
    }


    for (var m=0; m<11; m++) {
        svg.appendChild(make("circle", {
            cx: 50,
            cy: 500-((arrayMin(emptyArr4) + m*(arrayMax(emptyArr4) - arrayMin(emptyArr4)) / 10)-1.2) * 160,
            r: 2,
            fill: "black",
        }));
        svg.appendChild(make("text",{
            x: 20,
            y: 500-((arrayMin(emptyArr4) + m*(arrayMax(emptyArr4) - arrayMin(emptyArr4)) / 10)-1.2) * 160,
            "font-size": 10,
            "id": `texttestttttt` + m,
        }));
        document.getElementById(`texttestttttt` + m).textContent = returnFloat2(arrayMin(emptyArr4) + m*(arrayMax(emptyArr4) - arrayMin(emptyArr4)) / 10);
    }


    let svgDefs = svg.appendChild(make("defs"));

    let defsStop = svgDefs.appendChild(make("linearGradient",{"id": "MyGradient3"}));

    defsStop.appendChild(make("stop",{
        offset: 0.05,
        "stop-color": d3.interpolatePlasma(0),
    }));

    defsStop.appendChild(make("stop",{
        offset: 0.5,
        "stop-color": d3.interpolatePlasma(0.5),
    }));

    defsStop.appendChild(make("stop",{
        offset: 0.95,
        "stop-color": d3.interpolatePlasma(1),
    }));

    svg.appendChild(make("rect",{
        x: 60,
        y: 10,
        width: 200,
        height: 30,
        fill: "url(#MyGradient3)",
    }));


}