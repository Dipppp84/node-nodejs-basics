import {Transform} from "stream";

export const transform = async () => {
    class MyTransform extends Transform {
        _transform(chunk, encoding, callback) {
            callback(null, chunk.reverse().toString().trimStart() + '\n');
        }
    }

    const myTransform = new MyTransform();
    process.stdin
        .pipe(myTransform)
        .pipe(process.stdout);
};