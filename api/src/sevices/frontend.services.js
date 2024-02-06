const {models}= require('../libs/sequelize')

class FrontService{
    constructor(){

    }
    async find(){
        const res = await models.Front.findAll();
        return res;
    }
    async findOne(id){
        const res = await models.Front.findByPk(id);
        return res;
    }
    async create(data) {
        const res = await models.Front.create(data);
        return res;
    }
    async upddate(id, data) {
        const model = await this.findOne(id)
        const res = await model.update(data);
        return res;
    }
    async delete(id){
        const model = await this.findOne(id);
        await model.destroy();
        return {deleted: true};
    }
}

module.exports = FrontService;