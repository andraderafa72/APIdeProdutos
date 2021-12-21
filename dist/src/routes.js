"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', function (req, res) { return res.json({ status: 'ativo' }); });
exports.router.get('/produtos', function (request, response) {
    console.log('chamado');
    var products = [
        {
            name: 'Produto A',
            price: 150,
            description: 'lorem ipsum dolor sit ammet consectetur',
            estoque: 12,
        },
        {
            name: 'Produto B',
            price: 150,
            description: 'lorem ipsum dolor sit ammet consectetur',
            estoque: 12,
        },
        {
            name: 'Produto C',
            price: 150,
            description: 'lorem ipsum dolor sit ammet consectetur',
            estoque: 12,
        },
        {
            name: 'Produto D',
            price: 150,
            description: 'lorem ipsum dolor sit ammet consectetur',
            estoque: 12,
        },
        {
            name: 'Produto E',
            price: 150,
            description: 'lorem ipsum dolor sit ammet consectetur',
            estoque: 12,
        },
        {
            name: 'Produto F',
            price: 150,
            description: 'lorem ipsum dolor sit ammet consectetur',
            estoque: 12,
        },
        {
            name: 'Produto G',
            price: 150,
            description: 'lorem ipsum dolor sit ammet consectetur',
            estoque: 12,
        },
        {
            name: 'Produto H',
            price: 150,
            description: 'lorem ipsum dolor sit ammet consectetur',
            estoque: 12,
        },
        {
            name: 'Produto I',
            price: 150,
            description: 'lorem ipsum dolor sit ammet consectetur',
            estoque: 12,
        },
        {
            name: 'Produto J',
            price: 150,
            description: 'lorem ipsum dolor sit ammet consectetur',
            estoque: 12,
        },
    ];
    return response.status(200).json({
        products: products,
    });
});
