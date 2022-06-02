import zlib from 'zlib'
import fs from 'fs'
import path from "path";
import {fileURLToPath} from "url";

export const decompress = async () => {
    const sourcePath = path.join(fileURLToPath(import.meta.url), '..', 'files', 'archive.gz');
    const destinationPath = path.join(fileURLToPath(import.meta.url), '..', 'files', 'fileToCompress.txt');
    const source = fs.createReadStream(sourcePath);
    const destination = fs.createWriteStream(destinationPath);
    const gzip = zlib.createUnzip();
    source.pipe(gzip)
        .pipe(destination);
};