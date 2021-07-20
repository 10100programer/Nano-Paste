using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Nano_Paste_MVC.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Nano_Paste_MVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        [HttpPost]
        [Route("/API/MkPaste")]
        public IActionResult CreateNewPaste(PasteModel paste)
        {
            PasteModel model = paste;
            return StatusCode(501);
        }
        [HttpGet]
        [Route("/API/getPaste/{PID}")]
        [Route("/API/GetSampleData")]
        [EnableCors("AllowCrossOrigin")]
        public JsonResult RetreveSinglePaste(string PID = "0")
        {
            PasteModel model = new PasteModel();
            model.LikeCount = 12;
            model.NanoTrack = "127.0.0.1";
            model.PasteData = "for\nscore\nand\nseven\nyears\nago...";
            model.PasteID = PID;
            model.PasteTime = DateTime.Now;
            model.PasteUser = "Anon";
            model.PostTitle = "MIT License";
            return new JsonResult(model);
        }
    }
}