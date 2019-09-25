using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FA19.P05.Web.Features.Dealerships
{
    public class DealershipConfiguration : IEntityTypeConfiguration<Dealership>
    {
        public void Configure(EntityTypeBuilder<Dealership> builder)
        {
            builder.Property(x => x.SalesPhoneNumber)
                .HasMaxLength(12)
                .IsRequired();

            builder.OwnsOne(x => x.Address);

            builder.Property(x => x.StoreName)
                .HasMaxLength(64)
                .IsRequired();

            builder.Property(x => x.OpenHours)
                .HasMaxLength(64)
                .IsRequired();
        }
    }
}