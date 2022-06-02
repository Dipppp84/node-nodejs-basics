import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

export const write = async () => {
    const myPath = path.join(fileURLToPath(import.meta.url), '..', 'files', 'fileToWrite.txt');
    const writeStream = fs.createWriteStream(myPath);
    process.stdin.pipe(writeStream);
}