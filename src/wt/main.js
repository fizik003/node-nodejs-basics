import  { Worker } from 'worker_threads';
import  os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const numCores = os.cpus().length;
    const results = await Promise.all(
        Array.from({ length: numCores }, (_, i) => {
            return new Promise((resolve) => {
                const worker = new Worker(path.resolve(__dirname, 'worker.js'));
                worker.once('message', (data) => {
                    resolve({ status: 'resolved', data });
                });
                worker.once('error', () => {
                    resolve({ status: 'error', data: null });
                });
                worker.once('exit', (code) => {
                    if (code !== 0) {
                        resolve({ status: 'error', data: null });
                    }
                });
                worker.postMessage(10 + i);
            });
        })
    );
    console.log(results);
};

await performCalculations();