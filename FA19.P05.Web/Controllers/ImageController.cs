﻿using System.IO;
using System.Threading.Tasks;
using FA19.P05.Web.Data;
using FA19.P05.Web.Features.Inventory;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FA19.P05.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {

        private readonly DataContext dataContext;

        public ImageController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        // POST: api/image
        [HttpPost("Upload")]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            //Create Local Directory for Images Uploaded... If Exists, will skip this step, no exception thrown
            Directory.CreateDirectory(@"C:\InventoryImageUploads");

            var uploads = Path.Combine(@"C:\InventoryImageUploads");

            if (file.Length > 0)
            {
                // Saving it to a file structure
                using (var fileStream = new FileStream(Path.Combine(uploads, $"{file.FileName}"), FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }

                // Saving it to a database
                using (var ms = new MemoryStream())
                {
                    await file.CopyToAsync(ms);
                    var fileBytes = ms.ToArray();

                    var image = new Image
                    {
                        FileName = file.FileName,
                        ImageBytes = fileBytes
                    };

                    await dataContext.AddAsync(image);
                    await dataContext.SaveChangesAsync();

                    return Created(@"api/GetFile/", image.Id);
                }
            }

            return BadRequest();
        }

        //GET: api/image/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetFile(int id)
        {
            var image = await dataContext.Set<Image>().FindAsync(id);

            var ms = new MemoryStream(image.ImageBytes);
            var response = File(ms, "application/octet-stream", image.FileName);

            return response;
        }
    }
}