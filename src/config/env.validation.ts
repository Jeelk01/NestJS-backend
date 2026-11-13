import * as Joi from 'joi';


export const envvalidationSchema = Joi.object({
     APP_NAME: Joi.string().required(),
     APP_ENV: Joi.string().valid('development', 'production', 'test'),
     APP_PORT: Joi.number().port().default(5000),

     API_PREFIX: Joi.string().default('api'),

     DB_HOST: Joi.string().required(),
     DB_PORT: Joi.number().required(),
     DB_USERNAME: Joi.string().required(),
     DB_PASSWORD: Joi.string().required(),
     DB_NAME: Joi.string().required(),

     DEFAULT_ADMIN_EMAIL: Joi.string().email(),
     DEFAULT_ADMIN_PASSWORD: Joi.string(),
     DEFAULT_ADMIN_NAME: Joi.string(),

     DEFAULT_USER_PASSWORD: Joi.string(),

     JWT_ACCESS_TOKEN: Joi.string().min(32),
     JWT_ACCESS_EXPIRES: Joi.string().default('15m'),

     JWT_REFRESH_TOKEN: Joi.string().min(32),
     JWT_REFRESH_EXPIRES: Joi.string().default('7d'),
})
