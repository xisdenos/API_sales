import SaleService from "../services/sale.service.js"

async function createSale(req, res, next){
    try{
    let sale = req.body;
    if (!sale.value || !sale.date || !sale.client_id || !sale.product_id){
        throw new Error("Todos os campos são obrigatórios");
    }
        //SaleService
        res.send(await SaleService.createSale(sale));
        logger.info(`POST /sale - ${JSON.stringify(sale)}`)
    } catch(err) { 
        next(err);
    }
}

async function getSales(req, res, next){
    try{
        res.send(await SaleService.getSales())
        logger.info("GET /sale");
    } catch(err) {
        next(err);
    }
}

async function getSale(req, res, next){
    try{
        res.send(await SaleService.getSale(req.query.product_id))
        logger.info("GET /sale")
    } catch(err){
        next(err)
    }
}
async function deleteSale(req, res, next){
    try{
        res.send(await SaleService.deleteSale(req.params.id))
        logger.info("DELETE /sale")
    } catch(err){
        next(err)
    }
}

async function updateSale(req, res, next){
    try{
        let sale = req.body;
        if (!sale.sale_id || !sale.value || !sale.date || !sale.client_id || !sale.product_id){
            throw new Error("Todos os campos são obrigatórios");
        }

            sale = await SaleService.updateSale(sale)
            res.send();
            logger.info(`PUT /sale - ${JSON.stringify(sale)}`)
        } catch(err) { 
            next(err);
        }
}

export default {
    createSale,
    getSales,
    getSale,
    deleteSale,
    updateSale
}