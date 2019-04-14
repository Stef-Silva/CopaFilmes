using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace aspnetcorevue.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]        
        public IActionResult IndexFromBody([FromBody]List<Filme> filmes){            
            if (ModelState.IsValid)
            {                
                Console.WriteLine("### --- INDEX FROM BODY --- ###");
                foreach(var filme in filmes)
                {
                    Console.WriteLine(filme.Titulo);
                }                 
            }
            else
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                    .Where(y=>y.Count>0)
                                    .ToList();
            }
            //return Json(filmes);         
            return Json(new { Result = String.Format("Fist item in list: '{0}'", filmes[0].Titulo) });
        }
        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
