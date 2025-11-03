// Path: src/api/cart-data/services/cart-data.ts

import { factories } from '@strapi/strapi';
import { Context } from 'koa'; 
// Import CountResult type if available in your project's Strapi types, 
// though often it's implicitly handled by the db.query result type.

export default factories.createCoreService('api::cart-data.cart-data', ({ strapi }) => ({
  
  /**
   * Custom service method to perform bulk deletion.
   */
  // The function should still promise a number, as that's what the controller expects.
  async deleteAll(ctx: Context): Promise<number> { 
    
    let filter: any = {}; 
    
    // ... [Your filtering logic here] ...

    try {
      const { count: deletedCount } = await strapi.db.query('api::cart-data.cart-data').deleteMany({
        where: filter,
      });
      
      // 'deletedCount' is now correctly typed as a number.
      return deletedCount; 

    } catch (err: any) {
      console.error("Cart deletion service error:", err);
      throw new Error(`Failed to execute bulk deletion: ${err.message}`);
    }
  }
}));