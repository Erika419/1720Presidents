   const button = document.getElementById('button');
    const myList = document.getElementById('quality');
    const form = document.getElementById('myForm');
    const message = document.querySelector("#message");
    const height = document.getElementById('height');
    const width = document.getElementById('width');
    const depth = document.getElementById('depth');


    button.addEventListener('click', function (event) {

    // Get the dropdown value
    const quality = Number(myList.value);

    //form from submitting
    event.preventDefault();

    // Gets user inputs
    const requiredInputs = form.querySelectorAll("input[required]");

    // Check if all required inputs are filled
    let complete = true;
    requiredInputs.forEach(input => {
        if (input.value === "") {
            complete = false;
        }
    });

     //calculates the square feet of paint 
            function paint() {
                //gets user input using the name attribute and converts it to a number
                const roomWidth = Number(document.querySelector('[name="width"]').value);
                const roomDepth = Number(document.querySelector('[name="depth"]').value);
                const wallHeight = Number(document.querySelector('[name="height"]').value);
                //calculates the area of the ceiling
                const ceilingArea = roomWidth * roomDepth;
                //calculates the area of all four walls
                const wallArea = 2 * (roomWidth * wallHeight) + 2 * (roomDepth * wallHeight);
                //calculates the gallons of paint required for each paint type based on the paint quality
                const flatPaint = Math.ceil(ceilingArea / quality);
                const semiGloss = Math.ceil(wallArea / quality);
                const primer = Math.ceil((ceilingArea + wallArea) / quality);

                return `
                <h3>Paint Supplies</h3>
                <ul id="listStyle">
                <li>You need ${flatPaint} gallons of flat paint.</li>
                <li>You need ${semiGloss} gallons of semi-gloss paint.</li>
                <li>You need ${primer} gallons of primer.</li>   
                </ul>`
            }

    //calculates the square feet of carpet and the amount of tack strip
        function carpet(){
            //calculates perimeter of the room to determine how much tack strip is needed
            const strip = Number(document.getElementById('width').value *2) + Number(document.getElementById('depth').value *2);
            //calculates the area of the room to determine how much carpet is needed
            const area = Number(document.getElementById('width').value) * Number(document.getElementById('depth').value);
            //converts from square feet to square yards and rounds up to the nearest whole number
            const squareYards = Math.ceil(area/9);
             return `
             <h3>Carpet Supplies</h3>
             <ul id="listStyle">
             <li>You need ${squareYards} square yards of carpet.</li>
             <li>You need ${strip} square feet of tack strip.</li>
             </ul>`
        }

    // Check the dropdown and do a window pop-up if form is not complete
    if (myList.value === "none") {
        complete = false;
    }
    if (!complete) {
        alert("Please complete the form.");
    // if it is complete, then it will calculate the square feet/yards of paint or carpet
    } else {
        //Add the carpet calculations underneath the paint results.
         message.innerHTML = paint() + carpet();
    } 

    });



