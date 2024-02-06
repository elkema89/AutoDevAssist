const FrontService = require('../sevices/frontend.services');
const service = new FrontService();

const create = async (req, res)=> {
    try{
        const response = await service.create(req.body);
        res.json({succers: true, data: response});
    }catch(error){
        res.status(500).send({succes:false,message: error.message});
    }
}
const get = async (req, res) =>{
    try {
        const response = await service.find();
        res.json(response)
    } catch (error) {
        res. status(500).send({succes: false, message: error.message});
    }
}
const getById = async (req, res )=>{
    try {
        const {id}= req.params;
        const response = await service.findOne(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({succes: false, message: error.message});
    }
}
const update = async( req , res) =>{
    try {
        const{id} = req.params;
        const body = rew.body;
        const response= await service.update(id, body);
        res.json(response);
    } catch (error) {
        res.status(500).send({succes:false, message: error.message});
    }
}
const _delete = async (req, res)=>{
    try {
        const {id} = req.params;
        const response = await service.delete(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({succes: false, message: error.message})
    }
}
module.exports = {create, get, getById, update, _delete}