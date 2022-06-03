import fs from "fs";
import path from "path"
import {fileURLToPath} from "url"

export const copy = async () => {
    const srcPath = path.join(fileURLToPath(import.meta.url), '..', 'files');
    const destPath = path.join(fileURLToPath(import.meta.url), '..', 'files_copy');

    if (!fs.existsSync(srcPath) || fs.existsSync(destPath))
        throw new Error('FS operation failed');

    await copyRecursive(srcPath, destPath);

    async function copyRecursive(src, dest) {
        if ((await fs.promises.stat(src)).isDirectory()) {
            await fs.promises.mkdir(dest);
            for (const value of (await fs.promises.readdir(src)))
                await copyRecursive(path.join(src, value), path.join(dest, value));
        } else
            await fs.promises.copyFile(src, dest);
    }
};