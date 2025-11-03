// Path: src/api/cart-data/routes/cart-data.ts

import { factories } from '@strapi/strapi';

// This ensures the core router creation happens after Strapi has loaded schemas.
export default (
  { strapi } // Inject strapi instance
) => {
  // 1. Get the routes function/array from the core router factory result.
  const coreRouter = factories.createCoreRouter('api::cart-data.cart-data');
  const defaultRoutes = coreRouter.routes;

  // 2. Resolve defaultRoutes: If it's a function, call it; otherwise, use it directly.
  const finalDefaultRoutes = typeof defaultRoutes === 'function' ? defaultRoutes() : defaultRoutes;

  return {
    routes: [
      // Spread the resolved array of default routes
      ...finalDefaultRoutes, 
      
      // Add your custom DELETE route
      {
        method: 'DELETE',
        path: '/cart-data/deleteAll',
        handler: 'api::cart-data.cart-data.deleteAll',
        config: {
          policies: [], 
        },
      },
    ],
  };
};