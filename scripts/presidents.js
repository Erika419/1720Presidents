//grab the presidents data from the file
import { presidents } from "../data/presidents.mjs";
console.log(presidents);

//reference ID's from the file
const displayPresidents = document.querySelector("#showPresidents");


//response to btn-all being clicked
document.querySelector('#btn-all').addEventListener('click', (el) => {
    showFilteredPresidents(presidents)
    console.log(el.target.id)
    updateSubNav(el.target.id)
});

//response to btn-unaffiliated being clicked
document.querySelector('#btn-unaffiliated').addEventListener('click', (el) => {
    
    /*this loops through all the presidents, runs the filter on it to check if 
    presidents.party = unafiliated. If it does, it only shows the unaffiliated presidents */
    const  filteredPresidents = presidents.filter((president) => president.party ==="Unaffiliated");
    showFilteredPresidents(filteredPresidents)
    updateSubNav(el.target.id)
    
});

//response to btn-federalist being clicked
document.querySelector('#btn-federalist').addEventListener('click', (el) => {
    
    /*this loops through all the presidents, runs the filter on it to check if 
    presidents.party = unafiliated. If it does, it only shows the unaffiliated presidents */
    const  filteredPresidents = presidents.filter((president) => president.party ==="Federalist");
    showFilteredPresidents(filteredPresidents)
    updateSubNav(el.target.id)
    
});

//response to democratic-republican being clicked
document.querySelector('#btn-democratic-republican').addEventListener('click', (el) => {
    
    /*this loops through all the presidents, runs the filter on it to check if 
    presidents.party = democraticrepublican. If it does, it only shows the democratic republican presidents */
    const  filteredPresidents = presidents.filter((president) => president.party==="Democratic-Republican");
    showFilteredPresidents(filteredPresidents)
    updateSubNav(el.target.id)
    
});

//response to democratic being clicked
document.querySelector('#btn-democratic').addEventListener('click', (el) => {
    
    /*this loops through all the presidents, runs the filter on it to check if 
    presidents.party = democratic. If it does, it only shows the democratic presidents */
    const  filteredPresidents = presidents.filter((president) => president.party==="Democratic");
    showFilteredPresidents(filteredPresidents)
    updateSubNav(el.target.id)
    
});

//response to whig being clicked
document.querySelector('#btn-whig').addEventListener('click', (el) => {
    
    /*this loops through all the presidents, runs the filter on it to check if 
    presidents.party = whig. If it does, it only shows the whig presidents */
    const  filteredPresidents = presidents.filter((president) => president.party==="Whig");
    showFilteredPresidents(filteredPresidents)
    updateSubNav(el.target.id)
    
});

//response to republican being clicked
document.querySelector('#btn-republican').addEventListener('click', (el) => {
    
    /*this loops through all the presidents, runs the filter on it to check if 
    presidents.party = republican. If it does, it only shows the republican presidents */
    const  filteredPresidents = presidents.filter((president) => president.party==="Republican");
    showFilteredPresidents(filteredPresidents)
    updateSubNav(el.target.id)
    
});


//WAYFINDING on Buttons
function updateSubNav(buttonID) {
    //remove current class from all buttons
    const allButtons= document.querySelectorAll('.partyNav button')
    console.log(allButtons)
    allButtons.forEach((btn) => (btn.className=""));

    //add the current class to the current button
    document.querySelector(`#${buttonID}`).className= "current"
}

//shows all movies
function showFilteredPresidents(filteredPresidents) {
    /*this wipes out anything on the page
    so if you click a button multiple times,
    it doesn't recreate the list over and over again*/
    displayPresidents.innerHTML = ""

    filteredPresidents.forEach((president) => {

        // Create the name
        const presidentName = document.createElement("h2");
        presidentName.innerText = president.name;

        // Create the party
        const presidentParty = document.createElement("p");
        presidentParty.innerText = `Party: ${president.party}`;

        // Create the start/end year
        const presidentTerm = document.createElement("p");
        const endYear = president.endYear ?? "Present";
        presidentTerm.innerText = `Term: ${president.startYear} - ${endYear}`;

        // Create the president image
        const presidentImage = document.createElement("img");
        
        presidentImage.src= president.image;
        presidentImage.alt = president.name;
        presidentImage.loading = "lazy";
        presidentImage.width = 200;
        presidentImage.height = 400;

        // Create the card
        const presidentCard = document.createElement("section");
        presidentCard.classList.add(president.party.replaceAll(" ", "-"));

        // Add everything to the president card
        presidentCard.appendChild(presidentName);
        presidentCard.appendChild(presidentParty);
        presidentCard.appendChild(presidentTerm);
        presidentCard.appendChild(presidentImage);
    
         // Add the presdient card to the webpage
        displayPresidents.appendChild(presidentCard);
    });
};

// images user first sees when they visit site
showFilteredPresidents(presidents)