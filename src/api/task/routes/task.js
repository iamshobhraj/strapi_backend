module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/tasks',
            handler: 'task.create',
            config: {
                auth: false,
            }
        },

        {
            method: 'GET',
            path: '/tasks',
            handler: 'task.find',
            config: {
                auth: false,
            } 
        },

        {
            method: 'GET',
            path: '/tasks/:id',
            handler: 'task.findOne', 
            config: {
                auth: false,
            }
        },

        {
            method: 'PATCH',
            path: '/tasks/:id',
            handler: 'task.update',
            config: {
                auth: false,
            } 
        },

        {
            method: 'DELETE',
            path: '/tasks/:id',
            handler: 'task.delete', 
            config: {
                auth: false,
            }
        }
    ]
};
