using Microsoft.AspNetCore.Mvc;

namespace ApiBench.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        [Route("test")]
        public async Task<IActionResult> Index()
        {
            List<string> responses = new List<string>();
            for (int i = 0; i < 10; i++)
            {
                using (HttpClient client = new HttpClient())
                {
                    string url = "";
                    UriBuilder builder = new UriBuilder(url);
                    HttpResponseMessage response = await client.GetAsync(builder.Uri);

                    string content = await response.Content.ReadAsStringAsync();
                    responses.Add(content);
                }
            }
            return Ok(responses);
        }
    }
}
