import cp from "child_process"
import path from "path";
import {fileURLToPath} from "url";

export const spawnChildProcess = async (args) => {
    const srcPath = path.join(fileURLToPath(import.meta.url), '..', 'files', 'script.js');
    const child = cp.fork(srcPath, args);
};