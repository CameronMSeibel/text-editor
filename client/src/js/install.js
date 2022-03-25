const butInstall = document.getElementById('buttonInstall');

let installPrompt;


// Logic for installing the PWA
// Prevent default event behavior and save event for button click
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installPrompt = event;
    butInstall.style.visibility = "visible";

    
});

// If installPrompt is defined, prompt user for install on click
butInstall.addEventListener('click', async () => {
    if(installPrompt !== null){
        installPrompt.prompt();
        const {outcome} = await installPrompt.userChoice;
        console.log(outcome)
        if(outcome === "accepted"){
            // If accepted, no need for button
            butInstall.setAttribute("disabled", true);
            butInstall.style.visibility = "hidden";
        }
    }
});



// Cool
window.addEventListener('appinstalled', (event) => {
    console.log("App installed.")
});
