using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FA19.P05.Web.Data;
using FA19.P05.Web.Features.Inventory;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FA19.P05.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController] // see: https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-3.0#apicontroller-attribute
    public class InventoryItemController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly DataContext dataContext;

        public InventoryItemController(IMapper mapper, DataContext dataContext)
        {
            this.mapper = mapper;
            this.dataContext = dataContext;
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(InventoryItemDto), 200)]
        [ProducesResponseType(typeof(StatusCodeResult), 404)]
        public async Task<ActionResult<InventoryItemDto>> Get(int id)
        {
            var queryable = dataContext.Set<InventoryItem>().Where(x => x.Id == id);
            var item = await mapper.ProjectTo<InventoryItemDto>(queryable).FirstOrDefaultAsync();
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<InventoryItemDto>>> Get()
        {
            var queryable = dataContext.Set<InventoryItem>();
            var enumerated = await mapper.ProjectTo<InventoryItemDto>(queryable).ToListAsync();
            return Ok(enumerated);
        }

        [HttpPut]
        [ProducesResponseType(typeof(InventoryItemDto), 200)]
        [ProducesResponseType(typeof(ValidationProblemDetails), 400)]
        [ProducesResponseType(typeof(ValidationProblemDetails), 404)]
        public async Task<ActionResult<InventoryItemDto>> Put(UpdateInventoryItemDto dto)
        {
            var inventoryItem = await dataContext.Set<InventoryItem>().FirstOrDefaultAsync(x => x.Id == dto.Id);
            if (inventoryItem == null)
            {
                ModelState.AddModelError(nameof(UpdateInventoryItemDto.Id), "No such inventory item");
                return NotFound(new ValidationProblemDetails(ModelState));
            }

            mapper.Map(dto, inventoryItem);
            await dataContext.SaveChangesAsync();

            return Ok(mapper.Map<InventoryItemDto>(inventoryItem));
        }


        [HttpPost]
        [ProducesResponseType(typeof(InventoryItemDto), 200)]
        [ProducesResponseType(typeof(ValidationProblemDetails), 400)]
        public async Task<ActionResult<InventoryItemDto>> Post(CreateInventoryItemDto dto)
        {
            var inventoryItem = mapper.Map<InventoryItem>(dto);
            dataContext.Add(inventoryItem);
            await dataContext.SaveChangesAsync();
            return Ok(mapper.Map<InventoryItemDto>(inventoryItem));
        }
    }
}