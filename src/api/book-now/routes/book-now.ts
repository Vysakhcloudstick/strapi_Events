// Path: src/api/book-now/routes/book-now.js (or .ts)

import { factories } from '@strapi/strapi';

export default (
  { strapi } 
) => {
  const coreRouter = factories.createCoreRouter('api::book-now.book-now');
  const defaultRoutes = coreRouter.routes;

  const finalDefaultRoutes = typeof defaultRoutes === 'function' ? defaultRoutes() : defaultRoutes;

  return {
    routes: [
  
      {
        method: 'DELETE',
        path: '/book-nows/clear', 
        handler: 'book-now.deleteAll', 
        config: {
          policies: [], 
          auth: false, 
        },
      },
      
      // Spread the default routes AFTER the custom route
      ...finalDefaultRoutes, 
    ],
  };
};