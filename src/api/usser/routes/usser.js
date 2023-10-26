module.exports = {
    routes: [
        {
            method: "POST",
            path: "/auth/register",
            handler: "usser.register",
            config: {
                auth: false,
            },
        },

        {
            /*we use POST method for login because the user credentials will be exposed in url for other method.
            with https, the body of POST is encrypted so this is more secure for user credential*/
            method: "POST",
            path: "/auth/login",
            handler: "usser.login",
            config: {
                auth: false,
            },
        },

        {
            method: "GET",
            path: "/ussers",
            handler: "usser.find",
            config: {
                auth: false,
            },
        },
    ],
};
