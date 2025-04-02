const {StatusCodes} = require('http-status-codes')
const AppError = require('../utils/errors/app-errors')

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log(error);
            
        }
    }

    async destroy(data){
        try {
            const response = await this.model.destroy({
                where : {
                        id:data
                }
            });
            return response;
        } catch (error) {
            console.log(error);
            
        }
    }

    async get(data){

        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            console.log(error);
            
        }
        
    }

    async getAll(){
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.log(error);
            
        }
    }

    async update(id, data){
        try {
            const response = await this.model.update(data,{
                where:{
                    id:id
                }
            })
            return response;
        } catch (error) {
            console.log(error);
            
        }
    }

}

module.exports= CrudRepository;