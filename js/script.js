// random color generator
const cards = document.querySelectorAll(".card");
for(const card of cards){
    card.addEventListener("mouseover", function(){
        const randomNumber = Math.floor(Math.random() * 1677215);
        const randomCode = "#" + randomNumber.toString(16);
        card.style.backgroundColor = randomCode;
        card.style.transition = ".4s"; 
    });
}

// change location
document.getElementById("btn-blog").addEventListener("click", function(){
    window.location.href = "blog.html";
});


function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = "";
    const inputFieldValueToNumber = parseFloat(inputFieldValue);
    return inputFieldValueToNumber;
}

function getTextElementValue(id){
    const textElementField = document.getElementById(id);
    const  textElementValue = textElementField.innerText;
    return textElementValue;
}

// triangle
document.getElementById("btn-triangle").addEventListener("click", function(){
    const shapeName = getTextElementValue("triangle");
    const triangleBaseValue = getInputValue("base");
    const triangleHeightValue = getInputValue("height");
    const areaOfTriangle = 0.5 * triangleBaseValue * triangleHeightValue;

    // validation
    if(isNaN(triangleBaseValue) || isNaN(triangleHeightValue)|| triangleBaseValue < 1 || triangleHeightValue < 1){
        alert("please provide a valid number");
        return;
    }
    else{
        // show the data
        displayData(shapeName, areaOfTriangle);
    }

});


// rectangle
document.getElementById("btn-rectangle").addEventListener("click", function(){
    const shapeName = getTextElementValue("rectangle");
    const rectangleWidthValue = getInputValue("width");
    const rectangleLengthValue = getInputValue("length");
    const areaOfRectangle = rectangleWidthValue * rectangleLengthValue;

     // validation
     if(isNaN(rectangleWidthValue) || isNaN(rectangleLengthValue)|| rectangleWidthValue < 1 || rectangleLengthValue < 1){
        alert("please provide a valid number");
        return;
    }
    else{
        // show the data
        displayData(shapeName, areaOfRectangle);
    }
});

// parallelogram 
document.getElementById("btn-parallelogram").addEventListener("click", function(){
    const shapeName = getTextElementValue("parallelogram");
    const parallelogramBaseValue = getTextElementValue("parallelogram-b-value");
    const parallelogramHeightValue = getTextElementValue("parallelogram-h-value");
    const areaOfParallelogram = parallelogramBaseValue * parallelogramHeightValue;

    // show the data
    displayData(shapeName, areaOfParallelogram);
});

// Rhombus
document.getElementById("btn-rhombus").addEventListener("click", function(){
    const shapeName = getTextElementValue("rhombus");
    const rhombusDiagonalValue1 = getTextElementValue("rhombus-d1-value");
    const rhombusDiagonalValue2 = getTextElementValue("rhombus-d2-value");
    const areaOfRhombus = 0.5 * parseFloat(rhombusDiagonalValue1) * parseFloat(rhombusDiagonalValue2);

    // show the data
    displayData(shapeName, areaOfRhombus);
});


function displayData(shapeName, totalArea, convert){
    const container = document.getElementById("tbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${1}</td>
    <td>${shapeName}</td>
    <td>${totalArea}</td>
    <td>${convert}</td>
    `;
    container.appendChild(tr);
}
