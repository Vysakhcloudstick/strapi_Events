import { factories } from '@strapi/strapi';
import { Context } from 'koa'; 

export default factories.createCoreService('api::book-now.book-now', ({ strapi }) => ({
  
  /**
   * Custom service method to perform bulk deletion of all 'Book Now' entries.
   */
  async deleteAll(ctx: Context): Promise<number> { 
    
    // In the service, the 'where' clause is optional. 
    // Since this is a dedicated deleteAll endpoint, we leave the filter empty 
    // to delete ALL entries in the collection.
    let filter: any = {}; 

    try {
      // Use deleteMany on the 'book-now' content type
      const { count: deletedCount } = await strapi.db.query('api::book-now.book-now').deleteMany({
        where: filter,
      });
      
      // Return the number of records deleted
      return deletedCount; 

    } catch (err: any) {
      console.error("Book Now deletion service error:", err);
      // Ensure the error is thrown up to the controller
      throw new Error(`Failed to execute bulk deletion: ${err.message}`);
    }
  }
}));