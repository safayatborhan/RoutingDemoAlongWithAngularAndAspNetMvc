using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RoutingDemo.Controllers
{
    public class RouterDemoController : Controller
    {
        // GET: RouterDemo
        public ActionResult First()
        {
            return View();
        }

        public ActionResult Second()
        {
            return View();
        }
    }
}