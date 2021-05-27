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

        public IActionResult Index(string id)
        {
            string datahold = string.Empty;
            if(!String.IsNullOrWhiteSpace(id))
            {
                List<PasteModel> model = new List<PasteModel>();
                model.Add(new PasteModel("AE35", "Wow this is really Cool\n\n\nReality can be whatever I want", DateTime.Now));


                return Json(model[0]);
                //return View("ViewPaste", pasteModel);
            }
            else
            {
                return View("Index", datahold);
            }    
        }
        public IActionResult Privacy()
        {
            return View();
        } 

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
