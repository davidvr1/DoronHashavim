using Services;

namespace Massenger.classes
{
    public class MessageService : IMessageService
    {
        public Dictionary<int, List<string>> messagesByWorkerId { get; set; }

        public IEnumerable<string> GetMessages(int workerId)
        {
            if (messagesByWorkerId.Keys.Contains(workerId))
            {
                return messagesByWorkerId[workerId];
            }
            return null;
        }

        public void SendMessage(int workerId, string msg)
        {
            if (messagesByWorkerId.Keys.Contains(workerId))
            {
                messagesByWorkerId[workerId].Add(msg);
            }
            else
            {
                messagesByWorkerId.Add(workerId, new List<string> { msg });
            }
        }
    }
}
