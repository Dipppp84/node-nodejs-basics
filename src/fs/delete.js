import path from "path"
import fs from "fs";
import {fileURLToPath} from "url"

export const remove = async () => {
    const myPath = path.join(fileURLToPath(import.meta.url), '..', 'files', 'fileToRemove.txt');
    await fs.promises.rm(myPath).catch(reason => {
        if (reason) throw new Error('FS operation failed');
    });
};