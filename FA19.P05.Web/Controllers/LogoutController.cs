using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FA19.P05.Web.Features.Authorization;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FA19.P05.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogoutController : ControllerBase
    {
        private readonly SignInManager<User> signInManager;

        public LogoutController(SignInManager<User> signInManager)
        {
            this.signInManager = signInManager;
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return Ok();
        }
    }
}
