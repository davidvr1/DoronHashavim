using Massenger.modals;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace Massenger.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MessangerController : ControllerBase
    {
        private IOrganizationService _organizationService { get; set; }

        private readonly ILogger<MessangerController> _logger;

        public MessangerController(ILogger<MessangerController> logger, IOrganizationService OrganizationService)
        {
            _organizationService = OrganizationService;

            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetWorkerlist()
        {
            var workersList = _organizationService.GetWorkerList().Select(x => new WorkerMinInfo
            {
                DepartmentName = x.DepartmentType.ToString(),
                FullName = x.Name + " " + x.LastName,
                WorkerTitle = x.WorkerType.ToString(),
                Id = x.Id
            });

            return Ok(workersList);
        }
    }
}
