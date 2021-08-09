#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

const runCommand = (command) => {
	try {
		execSync(`${command}`, { stdio: 'inherit' });
	} catch (ex) {
		console.error(`Failed to execute ${command}`, ex);
		return false;
	}
	return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/davek-k/create-next-sfx-app ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn`;
const setupHuskyCommand = `cd ${repoName} && yarn husky install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) {
	process.exit(-1);
}

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) {
	process.exit(-1);
}

console.log(`Successfully installed dependencies for ${repoName}`);

console.log(`Setting up git hooks for ${repoName}`);

const setupedHusky = runCommand(setupHuskyCommand);

if (!setupedHusky) {
	process.exit(-1);
}

console.log('Successfully setuped hooks.');

console.log(
	"Everything done. Run 'cd ${repoName} && yarn dev' to start developing."
);
