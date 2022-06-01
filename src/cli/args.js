export const parseArgs = () => {
    for (let i = 2; i < process.argv.length; i += 2) {
        process.stdout.write(`${process.argv[i]} is ${process.argv[i + 1]}`);
        if ((i + 2) < process.argv.length)
            process.stdout.write(', ');
    }
};