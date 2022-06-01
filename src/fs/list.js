import fs from "fs";
import path from "path"
import {fileURLToPath} from "url"

export const list = async () => {
    const myPath = path.join(fileURLToPath(import.meta.url), '..', 'files');
    console.log(await fs.promises.readdir(myPath).catch(reason => {
        if (reason) throw new Error('FS operation failed');
    }));
};