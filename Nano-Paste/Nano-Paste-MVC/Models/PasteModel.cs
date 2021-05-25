using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nano_Paste_MVC.Models
{
    public class PasteModel : IPaste
    {
        private readonly string _pasteID;
        private readonly string _pasteData;
        private readonly DateTime _pasteTime;
        public PasteModel(string pasteID, string pasteData, DateTime pasteTime)
        {
            _pasteID = pasteID;
            _pasteData = pasteData;
            _pasteTime = pasteTime;
        }
        public string PasteID {get { return _pasteID; } }
        public string PasteData {get { return _pasteData; } }
        public DateTime PasteTime { get { return _pasteTime; } }
    }
}
