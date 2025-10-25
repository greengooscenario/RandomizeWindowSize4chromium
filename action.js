// Listen for clicks on the browser action icon
chrome.action.onClicked.addListener(async (tab) => {
  // Get current window
  const currentWindow = await chrome.windows.getCurrent();
  // Get screen info to avoid resizing off-screen
  const screen = await chrome.system.display.getInfo();
  const maxWidth = screen[0].workArea.width;
  const maxHeight = screen[0].workArea.height;
  // Random delta between -12 and +12
  const delta = Math.floor(Math.random() * 25) - 12;
  // Calculate new dimensions, ensuring they fit on screen
  const newWidth = Math.min(maxWidth, Math.max(100, currentWindow.width + delta));
  const newHeight = Math.min(maxHeight, Math.max(100, currentWindow.height + delta));
  // Resize the window
  await chrome.windows.update(currentWindow.id, {
    width: newWidth,
    height: newHeight
  });
});


