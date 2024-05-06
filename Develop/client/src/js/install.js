const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
 // Store the triggered events
 window.deferredPrompt = event;

 // Remove the hidden class from the button.
 butInstall.classList.toggle('hidden', false);
});

// Click event handler for the `butInstall` element
butInstall.addEventListener('click', async () => {
const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     window.alert('You have already installed this application!');
     return;
    }
  
    // Show prompt
    promptEvent.prompt();

    butInstall.classList.toggle('hidden', true);
});

// Handler for when application is installed
window.addEventListener('appinstalled', (event) => {
window.alert('Notes successfully downloaded!');
// Clear prompt
window.deferredPrompt = null;
butInstall.classList.toggle('hidden', true);
});
