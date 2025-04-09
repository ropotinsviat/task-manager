export const appConfig = {
  port: process.env.PORT || 3030,
  validationPipe: {
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  },
  cors: {
    origin: 'http://localhost:3000',
    methods: 'GET,PUT,POST,DELETE',
  },
};
