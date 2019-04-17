using System;
using Xunit;
using aspnetcorevue.Controllers;

public class HomeControllerTests
{
    [Fact]
    public void PassingAddTest()
    {
        Assert.Equal(4, HomeController.Add(2,2));
    }
   
}