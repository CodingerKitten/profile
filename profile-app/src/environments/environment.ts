/**
 * The environment file is used to store the configuration of the application.
 * It contains the configuration settings for the application, such as the API URL and the environment type.
 */

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

//Add production environment here