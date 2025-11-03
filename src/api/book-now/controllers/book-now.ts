import { factories } from '@strapi/strapi';
import { Context } from 'koa'; 

export default factories.createCoreController('api::book-now.book-now', ({ strapi }) => ({
  
  async findOne(ctx: Context) {
    const { id } = ctx.params;

    // Force lookup using the numeric primary key (id)
    const entity = await strapi.db.query('api::book-now.book-now').findOne({
      where: { id },
    });

    if (!entity) {
      return ctx.notFound('Book Now Data Not Found');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },

  async update(ctx: Context) {
    const { id } = ctx.params;
    const { data } = ctx.request.body; // Extract the 'data' object from the request body

    if (!data) {
        return ctx.badRequest('Missing "data" object in request body');
    }

    // Use the core service to handle the update logic
    const entity = await strapi.db.query('api::book-now.book-now').update({
        where: { id },
        data: data, // Pass the extracted data
    });

    if (!entity) {
        return ctx.notFound('Book Now Data Not Found for Update');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },

  async delete(ctx: Context) {
    const { id } = ctx.params;

    // Force lookup and deletion using the numeric primary key (id)
    const entity = await strapi.db.query('api::book-now.book-now').delete({
        where: { id },
    });

    if (!entity) {
        // If the item wasn't found to delete
        return ctx.notFound('Book Now Data Not Found for Deletion');
    }

    // The delete action typically returns the deleted entity
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    // This returns the deleted entity with a 200 OK status, overriding the default 204 No Content.
    return this.transformResponse(sanitizedEntity);
  },

  async deleteAll(ctx: Context) {
    try {
      // Delegate the bulk deletion logic to the service layer
      // NOTE: This requires your service file to have the deleteAll method for 'api::book-now.book-now'
      const deletedCount = await strapi.service('api::book-now.book-now').deleteAll(ctx);

      // Return a successful response with the count
      return ctx.send({ 
        data: {
          message: `${deletedCount} book-now items deleted successfully.`,
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