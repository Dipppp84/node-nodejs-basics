import crypto from 'crypto'
import fs from 'fs'
import path from "path";
import {fileURLToPath} from "url";

export const calculateHash = async () => {
    const myPath = path.join(fileURLToPath(import.meta.url), '..', 'files', 'fileToCalculateHashFor.txt');
    const dataFile = await fs.promises.readFile(myPath);
    const hash = crypto.createHash('sha256');
    console.log(hash.update(dataFile).digest('hex'))
};