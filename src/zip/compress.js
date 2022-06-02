import zlib from 'zlib'
import fs from 'fs'
import path from "path";
import {fileURLToPath} from "url";

export const compress = async () => {
    const sourcePath = path.join(fileURLToPath(import.meta.url), '..', 'files', 'fileToCompress.txt');
    const destinationPath = path.join(fileURLToPath(import.meta.url), '..', 'files', 'archive.gz');
    const source = fs.createReadStream(sourcePath);
    const destination = fs.createWriteStream(destinationPath);
    const gzip = zlib.createGzip();
    source.pipe(gzip)
        .pipe(destination);
};