using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ReactWithAsp.Net.Models;
using System.Net.Http;
using System.Threading.Tasks;

namespace ReactWithAsp.Net.Controllers
{
    public class HomeController : Controller
    {
       
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<string> Get()
        {
            string apiUrl = ConfigurationManager.AppSettings["apiUrl"];

            using (HttpClient client = new HttpClient())
            {
                return await client.GetStringAsync(apiUrl);
            }
        }
    }
}