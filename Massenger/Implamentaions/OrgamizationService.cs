using Services;
using Services.DataObjects;
namespace Massenger.classes
{
    public class OrgamizationService : IOrganizationService
    {
        public IEnumerable<Worker> workersList { get; set; }
        public OrgamizationService()
        {
            workersList = new List<Worker>();
            Services.OrganizationService svc = new OrganizationService();
            workersList = svc.GetWorkerList();
        }
        public IEnumerable<Worker> GetWorkerList()
        {
            return workersList;
        }
    }
}
