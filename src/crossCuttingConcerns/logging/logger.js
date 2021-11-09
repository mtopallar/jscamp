export class BaseLogger {
    log(data){
        console.log("Default logger"+data)
    }
}

export class ElasticLogger extends BaseLogger {
    //base log u ezdik
    log(data){
        console.log("Logged to Elastic"+data)
    }
}

export class MongoLogger extends BaseLogger {
    log(data){
        console.log("Logged to Mongo" + data)
    }
}