using System;
using Microsoft.AspNetCore.Mvc;

public class FilmeController : Controller
{
    //This action at /Campeonato/Index can bind form data 
    /*[HttpPost]
    public Filme Index(Filme filmes)
    {
        return filmes;
    }*/
    /* public IActionResult Index(Filme filme){
        return View(filme);   
        
    } */

    //This action at /Person/IndexFromBody can bind JSON 
    [HttpPost]
    [Route("Campeonato/Index")]
    public IActionResult IndexFromBody([FromBody] Filme filme){
        return Json(filme);           
    } 
    [HttpGet]
    public IActionResult BomDia()
    {
        return Content("Bom dia... hoje você acordou cedo!");
    }

    /*private IActionResult DoSomething(Filme filme){
        // do something with the person here
        // ...

        return Json(filme);
    }*/
    
}

