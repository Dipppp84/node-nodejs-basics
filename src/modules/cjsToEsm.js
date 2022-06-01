import path from "path";
import fs from "fs";
import {release, version} from "os";
import {fileURLToPath} from "url";
import {createServer as createServerHttp} from "http";
import {} from './files/c.js';

const jsonA = JSON.parse(
    await fs.promises.readFile(
        path.join(fileURLToPath(import.meta.url), '..', 'files', 'a.json')
    )
);
const jsonB = JSON.parse(
    await fs.promises.readFile(
        path.join(fileURLToPath(import.meta.url), '..', 'files', 'b.json')
    )
);

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = jsonA;
} else {
    unknownObject = jsonB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const filename = path.join(fileURLToPath(import.meta.url));
console.log(`Path to current file is ${filename}`);
const dirname = path.join(fileURLToPath(import.meta.url), '..');
console.log(`Path to current directory is ${dirname}`);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});