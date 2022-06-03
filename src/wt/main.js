import wt from "worker_threads";
import path from "path";
import {fileURLToPath} from "url";

export const performCalculations = async () => {
    const arrWorkers = [];
    const myPath = path.join(fileURLToPath(import.meta.url), '..', 'worker.js');
    for (let i = 0; i < process.env.NUMBER_OF_PROCESSORS; i++) {
        arrWorkers.push(new wt.Worker(myPath));
        arrWorkers[i].postMessage(10 + i);
    }
    const result = new Array(arrWorkers.length);
    for (let i = 0; i < arrWorkers.length; i++) {
        result[i] = new Promise(resolve => {
            arrWorkers[i].on('message', obj => {
                resolve(result[i] = obj);
            });
            arrWorkers[i].on('error', () => {
                resolve(result[i] = {status: 'error', data: null});
            });
        });
    }
    console.log(await Promise.all(result));
};