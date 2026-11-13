export default () => ({
     app: {
          name: process.env.APP_NAME,
          env: process.env.APP_ENV,
          port: process.env.APP_PORT
     },
     api: {
          prefix: process.env.API_PREFIX
     },

     database: {
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          name: process.env.DB_NAME
     },

     default: {
          admin: {
               email: process.env.DEFAULT_ADMIN_EMAIL,
               password: process.env.DEFAULT_ADMIN_PASSWORD,
               name: process.env.DEFAULT_ADMIN_NAME
          },
          user: {
               password: process.env.DEFAULT_USER_PASSWORD
          }
     },

     jwt: {
          access: {
               token: process.env.JWT_ACCESS_TOKEN,
               expiresIn: process.env.JWT_ACCESS_EXPIRES,
          },
          refresh: {
               refresh: process.env.JWT_REFRESH_TOKEN,
               expiresIn: process.env.JWT_REFRESH_EXPIRES,
          }
     }



})