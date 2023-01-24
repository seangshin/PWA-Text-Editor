const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
  console.log("beforeinstallprompt");
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  console.log("hidden");
  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();
  
  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);
  
});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
  console.log("appinstalled", event);
});
