import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

export const rename = async () => {
    const oldPath = path.join(fileURLToPath(import.meta.url), '..', 'files', 'wrongFilename.txt');
    const newPath = path.join(fileURLToPath(import.meta.url), '..', 'files', 'properFilename.md');
    if (!fs.existsSync(oldPath) || fs.existsSync(newPath))
        throw new Error('FS operation failed');
    await fs.promises.rename(oldPath, newPath);
};