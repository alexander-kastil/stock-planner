using Microsoft.EntityFrameworkCore;

namespace Integrations
{
    public partial class StockDataContext : DbContext
    {
        public StockDataContext()
        {
        }

        public StockDataContext(DbContextOptions<StockDataContext> options)
            : base(options)
        {
        }

        public DbSet<StockPrice> StockPrices { get; set; }
    }
}