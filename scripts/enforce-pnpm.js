const userAgent = process.env.npm_config_user_agent || '';

if (!userAgent.includes('pnpm')) {
  console.error(
    '\n❌ You must use pnpm to install dependencies in this monorepo.\n' +
    '   👉 Install pnpm: npm i -g pnpm\n' +
    '   👉 Then run: pnpm install\n'
  );
  process.exit(1);
}