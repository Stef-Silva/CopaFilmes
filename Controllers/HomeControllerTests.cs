using System;
using Xunit;
using aspnetcorevue.Controllers;

public class HomeControllerTests
{
    [Fact]
    public void PassingAddTest()
    {
        Assert.Equal(4, HomeController.Test(2,2));
    }
   
}