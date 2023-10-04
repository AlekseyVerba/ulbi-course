export interface BuildPaths {
    entry: string
    output: string
    html: string
    src: string
}

export type BuildMode = 'production' | 'development'

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
}

export interface EnvOptions {
    mode: BuildMode
    port: number
}
