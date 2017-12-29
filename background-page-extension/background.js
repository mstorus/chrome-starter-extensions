window.alert('background page loaded');

chrome.commands.onCommand.addListener((command) => {
  if (command === 'my-command') {
    window.alert('my command handled');
  }
});
