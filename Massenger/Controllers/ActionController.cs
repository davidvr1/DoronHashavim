using Massenger.modals;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace Massenger.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ActionController : Controller
    {
        public IMessageService _messageService { get; set; }
        public ActionController(IMessageService messageservice)
        {
            _messageService = messageservice;
        }
        [HttpGet()]
        public ActionResult GetMessages(int workerId)
        {
            var messages = _messageService.GetMessages(workerId);
            if (messages == null)
                return NotFound();
            return Ok(messages);
        }

        [HttpPost]
        public ActionResult SendMessages([FromBody] chatMessage data)
        {
            _messageService.SendMessage(data.Id, data.msg);
            return Ok();
        }





    }
}
