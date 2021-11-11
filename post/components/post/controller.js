const TABLA = 'post';

module.exports = function(injectedStore) {
    let store = injectedStore;
    if (!store){
        store = require('../../../store/mysql');
    }

    function list(){
        return store.list(TABLA);
    }

    function get(id){
        return store.get(TABLA, id);
    }

    async function upsert(body){
        const post = {
            text: body.text,
            user: body.user
        }

        //validamos si el 
        if(body.id){
            post.id = nanoid.id();
        }
        
        return store.upsert(TABLE, post);

    }



    return {
        list,
        get,
        upsert,
    };
}



