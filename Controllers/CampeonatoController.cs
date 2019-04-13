using System;
using Microsoft.AspNetCore.Mvc;

public class FilmeController : Controller
{
    [HttpPost]
    public Filme Index(Filme filme)
    {
        return filme;
    }
}

