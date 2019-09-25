using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FA19.P05.Web.Features.Inventory
{
    public class InventoryOptionConfiguration : IEntityTypeConfiguration<InventoryOption>
    {
        public void Configure(EntityTypeBuilder<InventoryOption> builder)
        {
            builder.Property(x => x.Make)
                .HasMaxLength(10)
                .IsRequired();

            builder.Property(x => x.Model)
                .HasMaxLength(10)
                .IsRequired();

            builder.Property(x => x.Year)
                .IsRequired();

            builder.Property(x => x.OptionDescription)
                .HasMaxLength(1000)
                .IsRequired();

            builder.Property(x => x.Price)
                .IsRequired();
        }
    }
}