export const middlewares: any = [];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}