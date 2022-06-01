import fs from "fs";
import path from "path"
import {fileURLToPath} from "url"

export const create = async () => {
    const myPath = path.join(fileURLToPath(import.meta.url), '..', 'files','fresh.txt');
    await fs.promises.writeFile(myPath, 'I am fresh and young', {flag: 'ax'}).catch(reason => {
        if (reason) throw new Error('FS operation failed');
    });
};