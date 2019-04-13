using System;

public class Filme
{
    public Guid Id { get; set; }
    public string Titulo { get; set; }
    public int Ano { get; set; }
    public double Nota { get; set; }
    public Filme[] Filmes { get; set; }
}