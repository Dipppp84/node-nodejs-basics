import wt from "worker_threads";

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    wt.parentPort.on('message', n => {
        wt.parentPort.postMessage({status: 'resolved', data: nthFibonacci(n)});
    });
};
sendResult()