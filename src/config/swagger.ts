import swaggerAutogen from 'swagger-autogen';
import * as dotenv from 'dotenv';
dotenv.config();

// CORS issue
// const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '8080';

const doc = {
    info: {
        version: 'v1.0.0',
        title: 'Swagger Demo Project',
        description: 'Implementation of Swagger with TypeScript'
    },
    servers: [
        {
            url: `http://localhost:${port}/${process.env.API_ROUTES_PREFIX}`,
            description: ''
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            }
        },
        schemas: {
            AuthLoginBody: {
                $login: 'mario',
                $password: 'password'
            }
        }
    }
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['../routes/api.ts'];

void swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);