const fastify = require('fastify')({
    logger : true
});

const routes = require('./authorization/routes');

fastify.register(routes);

fastify.listen(3000, function(err, address){
    if(err){
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listen on ${adresse}`)
})