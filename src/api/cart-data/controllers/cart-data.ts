/**
 * cart-data controller
 */
import { factories } from '@strapi/strapi';
// Import Context for better type safety in TypeScript (assuming this is a .ts file)
import { Context } from 'koa'; 

export default factories.createCoreController('api::cart-data.cart-data', ({ strapi }) => ({
  // ... (Your existing findOne method)

  async findOne(ctx: Context) {
    const { id } = ctx.params;

    // Force lookup using the numeric primary key (id)
    const entity = await strapi.db.query('api::cart-data.cart-data').findOne({
      where: { id },
    });

    if (!entity) {
      return ctx.notFound('Cart Data Not Found');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },

  // ... (Your existing update method)

  async update(ctx: Context) {
    const { id } = ctx.params;
    const { data } = ctx.request.body; // Extract the 'data' object from the request body

    if (!data) {
        return ctx.badRequest('Missing "data" object in request body');
    }

    // Use the core service to handle the update logic
    const entity = await strapi.db.query('api::cart-data.cart-data').update({
        where: { id },
        data: data, // Pass the extracted data
    });

    if (!entity) {
        return ctx.notFound('Cart Data Not Found for Update');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },

  async delete(ctx: Context) {
    const { id } = ctx.params;

    // Force lookup and deletion using the numeric primary key (id)
    const entity = await strapi.db.query('api::cart-data.cart-data').delete({
        where: { id },
    });

    if (!entity) {
        // If the item wasn't found to delete
        return ctx.notFound('Cart Data Not Found for Deletion');
    }

    // The delete action typically returns the deleted entity
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },

  async deleteAll(ctx: Context) {
    try {
      // Delegate the bulk deletion logic to the service layer
      const deletedCount = await strapi.service('api::cart-data.cart-data').deleteAll(ctx);

      // Return a successful response with the count
      return ctx.send({ 
        data: {
          message: `${deletedCount} cart items deleted successfully.`,
          count: deletedCount
        }
      }, 200);

    } catch (err: any) {
      // Handle errors from the service layer
      strapi.log.error(`Error during deleteAll: ${err.message}`, { error: err });
      return ctx.badRequest('Could not perform bulk deletion.', { details: err.message });
    }
  },
}));