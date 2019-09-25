using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FA19.P05.Web.Features.Inventory
{
    public class InventoryItemConfiguration : IEntityTypeConfiguration<InventoryItem>
    {
        public void Configure(EntityTypeBuilder<InventoryItem> builder)
        {
            builder.Property(x => x.VIN)
                .HasMaxLength(24)
                .IsRequired();

            builder.Property(x => x.Make)
                .HasMaxLength(10)
                .IsRequired();

            builder.Property(x => x.Model)
                .HasMaxLength(10)
                .IsRequired();

            builder.Property(x => x.Year)
                .IsRequired();

            builder.Property(x => x.BaseCost)
                .IsRequired();
        }
    }
}