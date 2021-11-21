import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";

async function createProduct(product){
    if(await SupplierRepository.getSupplier(product.supplier_id)){
    return await ProductRepository.insertProduct(product);
    }
    throw new Error("Supplier id não encontrado")
}

async function getProducts(){
    return await ProductRepository.getProducts();
}

async function getProduct(id){
    return await ProductRepository.getProduct(id)
}

async function deleteProduct(id){
    return await ProductRepository.deleteProduct(id)
}

async function updateProduct(product){
    if(await SupplierRepository.getSupplier(product.supplier_id)){
    return await ProductRepository.updateProduct(product)
    }
    throw new Error("Supplier id não encontrado!")
}
export default{
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}