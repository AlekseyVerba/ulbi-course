import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { EnvOptions } from './config/build/types/config'

export default (env: EnvOptions) => {
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    return buildWebpackConfig({
        mode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src'),
        },
        isDev,
        port: PORT,
    });
};
