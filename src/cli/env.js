export const parseEnv = () => {
    const arrRSS = [];
    for (let objKey in process.env)
        if (objKey.indexOf('RSS_') === 0)
            arrRSS.push(`${objKey}=${process.env[objKey]}`);
    console.log(arrRSS.join('; '));
};