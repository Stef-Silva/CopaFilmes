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
            // Cria array pra colocar os vencedores da primeira disputa 4 filmes
                List<Filme> vDisputaUm = new List<Filme>();
                // Cria array pra colocar os vencedores da segunda disputa 2 filmes
                List<Filme> vEliminatoria = new List<Filme>();
                // Cria array pra guardar os filmes de retorno p/ o front: O Campeão e o Vice-Campeão
                List<Filme> vFinal = new List<Filme>();           
            if (ModelState.IsValid)
            {                
                Console.WriteLine("### --- INDEX FROM BODY --- ###");
                foreach(var filme in filmes)
                {
                    Console.WriteLine(filme.Titulo);                    
                }

                

                // Ordena por ordem alfabética os filmes
                Console.WriteLine("#### --- Ordenando os filmes em Ordem Alfabética... --- ####");
                filmes.Sort(SortFilmes);
                foreach (Filme filme in filmes)
                Console.WriteLine(filme.Titulo + ": " + filme.Nota);               

                // Realiza as disputas entre os 8 filmes: Primeiro vc Ultimo, Segundo vs Penultimo etc
                Console.WriteLine("#### --- Primeira disputa sendo realizada... --- ####");
                if (filmes[0].Nota > filmes[7].Nota)
                {
                    vDisputaUm.Add(filmes[0]);
                }
                else
                {
                     vDisputaUm.Add(filmes[7]);
                }

                if (filmes[1].Nota > filmes[6].Nota)
                {
                    vDisputaUm.Add(filmes[1]);
                }
                else
                {
                     vDisputaUm.Add(filmes[6]);
                }

                if (filmes[2].Nota > filmes[5].Nota)
                {
                    vDisputaUm.Add(filmes[2]);
                }
                else
                {
                     vDisputaUm.Add(filmes[5]);
                }

                if (filmes[3].Nota > filmes[4].Nota)
                {
                    vDisputaUm.Add(filmes[3]);
                }
                else
                {
                     vDisputaUm.Add(filmes[4]);
                }
                Console.WriteLine("####Resultado da primeira disputa de filmes");
                foreach (Filme filme in vDisputaUm)
                Console.WriteLine(filme.Titulo);

                // Fase eliminatória: Primeiro vencedor vs o Segundo e Terceiro vencedor vs o Quarto v
                Console.WriteLine("#### --- Fase eliminatória rolando... --- ####");
                if (vDisputaUm[0].Nota > vDisputaUm[1].Nota)
                {
                    vEliminatoria.Add(vDisputaUm[0]);
                }
                else
                {
                     vEliminatoria.Add(vDisputaUm[1]);
                }

                if (vDisputaUm[2].Nota > vDisputaUm[3].Nota)
                {
                    vEliminatoria.Add(vDisputaUm[2]);
                }
                else
                {
                     vEliminatoria.Add(vDisputaUm[3]);
                }
                Console.WriteLine("####Resultado da Eliminatória");
                foreach (Filme filme in vEliminatoria)
                Console.WriteLine(filme.Titulo);

                // Finalmente os filmes restante disputam entre si
                Console.WriteLine("### --- Disputa Final É Agora! --- ####");
                if (vEliminatoria[0].Nota > vEliminatoria[1].Nota)
                {
                    vFinal.Add(vEliminatoria[0]);
                    vFinal.Add(vEliminatoria[1]);
                }
                else
                {
                    vFinal.Add(vEliminatoria[1]);
                    vFinal.Add(vEliminatoria[0]);
                }

                foreach (Filme filme in vFinal)
                Console.WriteLine(filme.Titulo);
            }
            else
            {
                var errors = ModelState.Select(x => x.Value.Errors)
                                    .Where(y=>y.Count>0)
                                    .ToList();
            }
            return Json(vFinal);         
            //return Json(new { Result = String.Format("Vencedor item in list: '{0}'", vFinal[0].Titulo) });
        }

        public static int SortFilmes(Filme filme1, Filme filme2)
        {
            return filme1.Titulo.CompareTo(filme2.Titulo);
        }

        public static int CompareNotas(Filme filme1, Filme filme2)
        {
            return filme1.Nota.CompareTo(filme2.Nota);
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
