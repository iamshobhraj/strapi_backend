const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
    async register(ctx) {
        const data = ctx.request.body;
        try{
            const entity = await strapi.service('api::usser.usser').create({data});
            ctx.body = 'you successfully registered';
        } catch (err) {
            ctx.body = {err};
        }
        
    },

    async login(ctx){
        const data = ctx.request.body;
        try{
            const entity = await strapi.db.query('api::usser.usser').findOne({
                    where: {username: data.username}
                });
            const validPassword = await bcrypt.compare(data.password,entity.password);
            if(!validPassword){
                ctx.throw(400,'Invalid Password');
            }
            const token = jwt.sign({id: entity.id},
                'nitp', 
                {expiresIn: '6h',});
            return token;
        } catch(err) {
            ctx.body = {err};
        }
    },

    async find(ctx) {
        // return ctx.request.header.authorization.replace('Bearer ', '');
        const token = ctx.request.header.authorization.replace('Bearer ', '');
        return jwt.verify(token, 'nitp', async function (err, decoded) {
            if (err) {
                ctx.body = 'fail';
            } else {
            const entity = await strapi.entityService.findMany('api::usser.usser', {
                fields: ['createdAt', 'username', 'email']
            });
            return entity;
            }
        });
        // if (decoded) {
        //     ctx.body = 'pass';
        // } else {
        //     ctx.body = 'fail';
        // }


    //     if (decoded) {
    //         const entity = await strapi.service('api::usser.usser').find();
    //         return entity;
    //   }
    }
}
