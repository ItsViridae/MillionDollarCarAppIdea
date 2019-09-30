using System.Collections.Generic;
using FA19.P05.Web.Features.ShoppingCart;
using Microsoft.AspNetCore.Identity;

namespace FA19.P05.Web.Features.Authorization
{
    public class User : IdentityUser<int>
    {
        public string Name { get; set; }
        public virtual ICollection<UserRole> Roles { get; set; } = new List<UserRole>();
        //public virtual ICollection<CustomerInventoryItem> ShoppingCartItems { get; set; } = new List<CustomerInventoryItem>();
    }
}