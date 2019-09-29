using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FA19.P05.Web.Features.ShoppingCart
{
    //public class CustomerInventoryItemConfiguration : IEntityTypeConfiguration<CustomerInventoryItem>
    //{
    //    public void Configure(EntityTypeBuilder<CustomerInventoryItem> builder)
    //    {
    //        builder.HasKey(x => new { x.InventoryItemId, x.UserId });

    //        builder.HasOne(x => x.InventoryItem)
    //            .WithMany(x => x.Users)
    //            .HasForeignKey(x => x.InventoryItemId);

    //        builder.HasOne(x => x.User)
    //            .WithMany(x => x.InventoryItems)
    //            .HasForeignKey(x => x.UserId);
    //    }
    //}
}
