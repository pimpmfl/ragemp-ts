import { initDatabase } from '../database';

mp.events.add('playerChat', (player: PlayerMp) => {
  player.outputChatBox('Hello World! - server');
});

mp.events.add('packagesLoaded', async () => {
  await initDatabase();
});
