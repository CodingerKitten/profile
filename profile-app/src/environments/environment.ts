export enum Environment {
    Development = 'development',
    Production = 'production'
}

export interface IEnvironment {
    production: boolean;
    api: string;
    environment: Environment;
}

export const environment: IEnvironment = {
    production: false,
    api: 'http://localhost:8000/api',
    environment: Environment.Development
};