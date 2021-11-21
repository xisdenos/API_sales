import SaleRepository from "../repositories/sale.repository.js";
import ClientRepository from "../repositories/client.repository.js";
import ProductRepository from "../repositories/product.repository.js";

async function createSale(sale){
    if(!await ClientRepository.getClient(sale.client_id)){
        throw new Error("Client ID não encontrado")}

    const product = await ProductRepository.getProduct(sale.product_id);

    if(!product){
        throw new Error("Produto não encontrado")}

    if(product.stock > 0){
        sale = await SaleRepository.insertSale(sale);
        product.stock--;
        await ProductRepository.updateProduct(product);
        return sale
    } else {
        throw new Error("Sem estoque do produto informado!")
    }
    
    product.stock

    return await SaleRepository.insertSale(sale);
}

async function getSales(product_id){
    if(product_id){
        return await SaleRepository.getSalesByProductId(product_id);
    }
    return await SaleRepository.getSales();
}

async function getSale(id){
    return await SaleRepository.getSale(id)
}

async function deleteSale(id){
    const sale = await SaleRepository.getSale(id)
    if(sale){
        await ProductRepository.getProduct(sale.product_id);
        await SaleRepository.deleteSale(id);
        product.stock++;
        await ProductRepository.updateProduct(product);
    } else {
        throw new Error("O id de sale informado não existe.");
    }
}

async function updateSale(sale){
    if(!await ClientRepository.getClient(sale.client_id))
    { throw new Error("Client ID não encontrado")}

    if(!await ProductRepository.getProduct(sale.product_id))
    { throw new Error("Product ID não encontrado")}

    return await SaleRepository.updateSale(sale)
}
export default{
    createSale,
    getSales,
    getSale,
    deleteSale,
    updateSale
}