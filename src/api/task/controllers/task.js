//we can also use core controllers and just edit them for our use case but i wrote all the crud operations
module.exports = {
    async create(ctx) {
        const data = ctx.request.body.data;
        const entity = await strapi.service('api::task.task').create({data});
        return entity;
      },
      

    async find(ctx) {
        const entity = await strapi.service('api::task.task').find();
        return entity;
      },

    async findOne(ctx) {
        const {id} = ctx.params;
        const {query} = ctx;
        const entity = await strapi.service('api::task.task').findOne(id, query);
        return entity;
      },

    async update(ctx) {
        const {id} = ctx.params;
        const data = ctx.request.body.data;
        const entity = await strapi.service('api::task.task').update(id, {data});
        return entity;
      },

    async delete(ctx) {
        const {id} = ctx.params;
        const {query} = ctx;
        const entity = await strapi.service('api::task.task').findOne(id, query);
        strapi.service('api::task.task').delete(id, query);
        return ctx.ok('deleted' + entity)
      }
};
