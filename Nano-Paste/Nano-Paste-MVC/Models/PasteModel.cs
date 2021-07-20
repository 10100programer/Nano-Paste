using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nano_Paste_MVC.Models
{
    public class PasteModel : IPaste
    {
        public string PasteID       { get; set; }
        public string PasteData     { get; set; }
        public DateTime PasteTime   { get; set; }
        public string NanoTrack     { get; set; }
        public string PasteUser     { get; set; }
        public ulong LikeCount      { get; set; }
        public string PostTitle     { get; set; }
    }
} 