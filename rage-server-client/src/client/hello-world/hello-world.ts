mp.events.add('playerReady', () => {
  mp.gui.chat.push('Hello World! - client123');
  mp.browsers.new('package://cef/src/modules/hello-world/index.html');
  mp.gui.chat.push('browser opened');
});
