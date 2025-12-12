const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'Documentation for the API',
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 8080}/api/v1`,
      description: 'Development server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      }
    },
    
    schemas: {
      
      ////////////////// USER SCHEMAS //////////////////    
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '60c72b2f9b1e8a001f8e4caa'
          },
          name: {
            type: 'string',
            example: 'John Doe'
          },
          email: {
            type: 'string',
            example: 'jhon.doe@example.com'
          },
          roles: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['user']
          }
        }
      },
      UserInput: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'John Doe'
          },
          email: {
            type: 'string',
            example: 'jhon.doe@exmaple.com'
          },
          password: {
            type: 'string',
            example: 'password123'
          },
          roles: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['user']
          }
        }
      },

      ///////////////// ROLE SCHEMAS //////////////////
      Role: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'ID generado por MongoDB',
            example: '60c72b2f9b1e8a001f8e4caa'
          },
          name: {
            type: 'string',
            description: 'Nombre del rol',
            example: 'admin'
          }
        }
      },
      RoleInput: {
        type: 'object',
        required: ['name'],
        properties: {
          name: {
            type: 'string',
            description: 'Nombre del rol',
            example: 'admin'
          }
        }
      },

      ///////////////// PRODUCT SCHEMAS //////////////////
      Product: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'ID generado por MongoDB',
            example: '60c72b2f9b1e8a001f8e4caa'
          },
          name: {
            type: 'string',
            description: 'Nombre del producto',
            example: 'Smartphone XYZ'
          },
          description: {
            type: 'string',
            description: 'Descripción detallada del producto',
            example: 'Este smartphone tiene 128GB de almacenamiento y cámara de 48MP'
          },
          price: {
            type: 'number',
            description: 'Precio del producto',
            example: 399.99
          },
          stock: {
            type: 'number',
            description: 'Cantidad disponible en inventario',
            example: 20
          },
          category: {
            type: 'string',
            description: 'Categoría del producto',
            example: 'Electronics'
          },
          imageUrl: {
            type: 'string',
            description: 'URL de la imagen del producto',
            example: 'https://example.com/images/product.jpg'
          }
        }
      },
      ProductInput: {
        type: 'object',
        required: ['name', 'description', 'price', 'stock', 'category'],
        properties: {
          name: {
            type: 'string',
            description: 'Nombre del producto',
            example: 'Smartphone XYZ'
          },
          description: {
            type: 'string',
            description: 'Descripción detallada del producto',
            example: 'Este smartphone tiene 128GB de almacenamiento y cámara de 48MP'
          },
          price: {
            type: 'number',
            description: 'Precio del producto',
            example: 399.99
          },
          stock: {
            type: 'number',
            description: 'Cantidad disponible en inventario',
            example: 20
          },
          category: {
            type: 'string',
            description: 'Categoría del producto',
            example: 'Electronics'
          },
          imageUrl: {
            type: 'string',
            description: 'URL de la imagen del producto',
            example: 'https://example.com/images/product.jpg'
          }
        }
      },

      ///////////////// AUTH SCHEMAS //////////////////
      AuthLoginRequest: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string',
            format: 'email',
            example: 'user@example.com',
            description: 'Correo electrónico del usuario'
          },
          password: {
            type: 'string',
            example: 'password123',
            description: 'Contraseña del usuario'
          }
        }
      },
      AuthLoginResponse: {
        type: 'object',
        properties: {
          token: {
            type: 'string',
            description: 'Token JWT para autenticación',
            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
          },
          user: {
            $ref: '#/components/schemas/User'
          }
        }
      }
      
    }
  },
  security: [{
    bearerAuth: []
  }]
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/presentation/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;