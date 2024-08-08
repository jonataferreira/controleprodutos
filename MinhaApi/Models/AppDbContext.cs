using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MinhaApi.Models
{
    public class AppDbContext : DbContext
       
{
    public DbSet<Produto> Produtos { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }
}

    }
