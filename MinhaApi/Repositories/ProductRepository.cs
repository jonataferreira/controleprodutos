using Microsoft.EntityFrameworkCore;
using MinhaApi.Data;
using MinhaApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MinhaApi.Repositories
{
    public class ProductRepository
    {
        private readonly ApplicationDbContext _context;

        public ProductRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Produto>> GetAllProductsAsync()
        {
            return await _context.Produto.ToListAsync();
        }

        public async Task<Produto> GetProductByIdAsync(int id)
        {
            return await _context.Produto.FindAsync(id);
        }

        public async Task AddProductAsync(Produto product)
        {
            _context.Produto.Add(product);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateProductAsync(Produto product)
        {
            _context.Entry(product).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteProductAsync(int id)
        {
            var product = await _context.Produto.FindAsync(id);
            if (product != null)
            {
                _context.Produto.Remove(product);
                await _context.SaveChangesAsync();
            }
        }
    }
}
