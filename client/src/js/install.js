const butInstall = document.getElementById('buttonInstall');

let installPrompt;


// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installPrompt = event;
    butInstall.style.visibility = "visible";

    
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if(installPrompt !== null){
        installPrompt.prompt();
        const {outcome} = await installPrompt.userChoice;
        console.log(outcome)
        if(outcome === "accepted"){
            butInstall.setAttribute("disabled", true);
            butInstall.style.visibility = "hidden";
        }
    }
});



// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("App installed.")
});
