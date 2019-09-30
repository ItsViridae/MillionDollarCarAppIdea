using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FA19.P05.Web.Data;
using FA19.P05.Web.Features.Authorization;
using FA19.P05.Web.Features.Inventory;
using FA19.P05.Web.Features.ShoppingCart;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FA19.P05.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingCartController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        public ShoppingCartController(IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        //gets Specific Customers Shopping Cart Items
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(IEnumerable<InventoryItemDto>), 200)]
        [ProducesResponseType(typeof(StatusCodeResult), 404)]
        public async Task<ActionResult<IEnumerable<InventoryItemDto>>> Get(int id)
        {
            var entity = _context.Set<User>()
                .Where(x => x.Id == id);
            var items = await _mapper.ProjectTo<InventoryItemDto>(entity).ToListAsync();

            return Ok(items);
        }

        //Adds Inventory Items to Customer ShoppingCart, return User ShoppingCart
        //[HttpPost("user/{userId}/item/{itemId}")]
        //[ProducesResponseType(typeof(CustomerInventoryItemDto), 200)]
        //[ProducesResponseType(typeof(ValidationProblemDetails), 400)]
        //public async Task<ActionResult<CustomerInventoryItemDto>> Post(int userId, int itemId)
        //{
        //    var user = await _context.Set<User>().FindAsync(userId);
        //    var item = await _context.Set<InventoryItem>().FindAsync(itemId);

        //    var customerInventoryItem = new CustomerInventoryItem
        //    {
        //        InventoryItemId = item.Id,
        //        InventoryItem = item,
        //        UserId = user.Id,
        //        User = user
        //    };

        //    user.ShoppingCartItems.Add(customerInventoryItem);
        //    await _context.SaveChangesAsync();

        //    return Created("someUrlToFindTheItem", _mapper.Map<CustomerInventoryItemDto>(customerInventoryItem));
        //}
    }
}