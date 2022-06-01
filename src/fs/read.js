import fs from "fs";
import path from "path"
import {fileURLToPath} from "url"

export const read = async () => {
    const myPath = path.join(fileURLToPath(import.meta.url), '..', 'files', 'fileToRead.txt');
    console.log(await fs.promises.readFile(myPath, {encoding: 'utf8'}).catch(reason => {
        if (reason) throw new Error('FS operation failed');
    }));
};