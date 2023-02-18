// random color generator
const cards = document.querySelectorAll(".card");
for(const card of cards){
    card.addEventListener("mouseover", function(){
        const randomNumber = Math.floor(Math.random() * 1677215);
        const randomCode = "#" + randomNumber.toString(16);
        card.style.backgroundColor = randomCode;
        card.style.transition = ".5s"; 
    });
}


// change location
document.getElementById("btn-blog").addEventListener("click", function(){
    window.location.href = "blog.html";
});


// getInputValue function
function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = "";
    const inputFieldValueToNumber = parseFloat(inputFieldValue);
    return inputFieldValueToNumber;
}


// getTextElementValue function
function getTextElementValue(id){
    const textElementField = document.getElementById(id);
    const  textElementValue = textElementField.innerText;
    return textElementValue;
}


let serial = 0;


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
        serial++;
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
        serial++;
        // show the data
        displayData(shapeName, areaOfRectangle);
    }
});


// parallelogram 
document.getElementById("btn-parallelogram").addEventListener("click", function(){
    serial++;
    const shapeName = getTextElementValue("parallelogram");
    const parallelogramBaseValue = getTextElementValue("parallelogram-b-value");
    const parallelogramHeightValue = getTextElementValue("parallelogram-h-value");
    const areaOfParallelogram = parallelogramBaseValue * parallelogramHeightValue;

    // show the data
    displayData(shapeName, areaOfParallelogram);
});


// Rhombus
document.getElementById("btn-rhombus").addEventListener("click", function(){
    serial++;
    const shapeName = getTextElementValue("rhombus");
    const rhombusDiagonalValue1 = getTextElementValue("rhombus-d1-value");
    const rhombusDiagonalValue2 = getTextElementValue("rhombus-d2-value");
    const areaOfRhombus = 0.5 * parseFloat(rhombusDiagonalValue1) * parseFloat(rhombusDiagonalValue2);

    // show the data
    displayData(shapeName, areaOfRhombus);
});


// Pentagon
document.getElementById("btn-pentagon").addEventListener("click", function(){
    serial++;
    const shapeName = getTextElementValue("pentagon");
    const pentagonValueOfP = getTextElementValue("pentagon-p-value");
    const pentagonValueOfB = getTextElementValue("pentagon-b-value");
    const AreaOfPentagon = 0.5 * parseFloat(pentagonValueOfP) * parseFloat(pentagonValueOfB);

    // show the data
    displayData(shapeName, AreaOfPentagon);

});


// Ellipse 
document.getElementById("btn-ellipse").addEventListener("click", function(){
    serial++;
    const shapeName = getTextElementValue("ellipse");
    const ellipseValueA = getTextElementValue("ellipses-a-value");
    const ellipseValueB = getTextElementValue("ellipses-b-value");
    const areaOfEllipse = Math.PI * ellipseValueA * ellipseValueB;

    // show the data
    displayData(shapeName, areaOfEllipse,);
});


// displayData function
function displayData(shapeName, totalArea, convert){
    const container = document.getElementById("tbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="pt-4 text-center">${serial}</td>
    <td class="pt-4 text-center">${shapeName}</td>
    <td class="pt-4 text-center">${totalArea.toFixed(2)}cm<sup>2</sup></td>
    <td class="pt-4 text-center">
    <button class="bg-sky-500 text-white py-2 px-3 rounded-lg hover:bg-sky-600">
     convert to m<sup>2</sup>
     <button>
    </td>
    `;
    container.appendChild(tr);
}
