import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

export const read = async () => {
    const myPath = path.join(fileURLToPath(import.meta.url), '..', 'files', 'fileToRead.txt');
    const readStream = fs.createReadStream(myPath);
    readStream.pipe(process.stdout);
};