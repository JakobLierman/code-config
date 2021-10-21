#!/usr/bin/env node

import { existsSync } from 'fs';
import { resolve } from 'path';
import { sync } from 'cp-file';

const sourcePath = resolve(__dirname, '.husky');
const targetPath = resolve(process.cwd(), '.husky');

let writeToFile = false;
let overwriting = false;

if (existsSync(targetPath)) {
	if (process.argv.indexOf('--overwrite') !== -1) {
		writeToFile = true;
		overwriting = true;
	} else {
		console.info(' ✓ .husky folder already exists at ' + targetPath);
		console.info(
			'\n Note' +
			'\n ====' +
			'\n You may wish to use --overwrite parameter to update the .husky folder' +
			'\n'
		);
	}
} else {
	writeToFile = true;
}

if (writeToFile) {
	try {
		sync(sourcePath, targetPath);
		if (overwriting) {
			console.info(' ✓ .husky folder overwritten at ' + targetPath);
		} else {
			console.info(' ✓ .husky folder added at ' + targetPath);
		}
		console.info('Run `husky init` to finish setting up Husky');
	} catch (e) {
		console.error(
			'\n ✗ Unable to write .husky folder at ' + targetPath +
			'\n' +
			'\n Error details' +
			'\n ============='
		);
		setTimeout(function () {
			console.error(e);
			console.log('');
		}, 750);
	}
}

// TODO: Test copy
