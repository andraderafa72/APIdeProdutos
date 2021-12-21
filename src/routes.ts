import { Router } from 'express';

export const router = Router();

router.get('/', (req, res) => res.json({ status: 'ativo' }));

router.get('/produtos', (request, response) => {
  console.log('chamado');

  const products = [
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
    products,
  });
});
