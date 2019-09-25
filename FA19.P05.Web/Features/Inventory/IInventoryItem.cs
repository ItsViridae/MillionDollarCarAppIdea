using System;

namespace FA19.P05.Web.Features.Inventory
{
    public interface IInventoryItem
    {
        string VIN { get; set; }

        string Make { get; set; }

        string Model { get; set; }

        int Year { get; set; }

        decimal BaseCost { get; set; }

        DateTimeOffset AddedToStockUtc { get; set; }

        int DealershipId { get; set; }
    }
}