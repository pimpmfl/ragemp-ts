import path from 'node:path';
import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { minimatch } from 'minimatch';
import { build } from 'esbuild';

const buildScriptsDirectory = path.resolve();
const rootDirectory = path.resolve(buildScriptsDirectory, '../');
const buildOutput = path.resolve(rootDirectory, 'dist');
const sourcePath = path.resolve(rootDirectory, 'rage-server-client/src');

// These files will not be changed or removed during the build step
const preserved = [
  'node_modules/**/*',
  'ragemp-server*',
  'BugTrap-x64.dll',
  'bin/**/*',
  'dotnet/**/*',
  'maps/**/*',
  'plugins/**/*',
  'client_packages/game_resources/**/*',
  'client_packages/cef/**/*'
];

const isPathPreserved = (filePath) => {
  const relativePath = path.relative(buildOutput, filePath).replace(/\\/g, '/');
  return preserved.some((pattern) => {
    return minimatch(relativePath, pattern, { matchBase: true, dot: true });
  });
};

// Iterates through all the files and sub-directories of a given directory
// It first checks if the file or directory is preserved, if it is, it will be skipped
// Recursively goes through the contents of the directory and looks for preserved files
const collectRemovables = (directory) => {
  let removables = [];
  for (const entry of readdirSync(directory)) {
    const fullPath = path.join(directory, entry);
    const stats = statSync(fullPath);

    if (isPathPreserved(fullPath)) {
      continue;
    }

    if (stats.isDirectory()) {
      const subRemovables = collectRemovables(fullPath);

      if (subRemovables.length > 0) {
        removables = removables.concat(subRemovables);
      }
    } else {
      removables.push(fullPath);
    }
  }

  return removables;
};

const cleanUp = () => {
  if (!existsSync(buildOutput)) {
    console.error(`Could not find: ${buildOutput}.`);
    return;
  }

  const removables = collectRemovables(buildOutput);
  removables.reverse().forEach((target) => {
    rmSync(target, { recursive: true, force: true });
    console.log(`[Removed] ${target}`);
  });
};

const copyFileSafe = (from, to) => {
  const directory = path.dirname(to);
  mkdirSync(directory, { recursive: true });
  copyFileSync(from, to);
  console.log(`[Copied] ${from} -> ${to}`);
};

const copyFiles = () => {
  const filesToCopy = [
    {
      from: path.resolve(rootDirectory, 'rage-server-client/package.json'),
      to: path.resolve(buildOutput, 'package.json')
    },
    {
      from: path.resolve(rootDirectory, 'rage-server-client/conf.json'),
      to: path.resolve(buildOutput, 'conf.json')
    },
    {
      from: path.resolve(rootDirectory, '.env'),
      to: path.resolve(buildOutput, '.env')
    }
  ];

  filesToCopy.forEach(({ from, to }) => {
    if (existsSync(from)) {
      copyFileSafe(from, to);
    } else {
      console.error(`[Skipped] File not found: ${from}`);
    }
  });
};

// Setup
cleanUp();
copyFiles();

const generateConfig = async (isServerBuild) => {
  const subDirectory = isServerBuild ? 'server' : 'client';
  const input = path.resolve(sourcePath, `${subDirectory}/index.ts`);
  const outputFile = path.resolve(buildOutput, isServerBuild ? 'packages/core/index.js' : 'client_packages/index.js');

  await build({
    bundle: true,
    metafile: true,
    platform: 'node',
    entryPoints: [input],
    outfile: outputFile,
    sourcemap: false,
    target: ['node14'],
    minify: true
  });
};

export default [generateConfig(true), generateConfig(false)];
