using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nano_Paste_MVC.Models
{
    public interface IPaste
    {
        /// <summary>
        /// String identifer as stored in the database
        /// </summary>
        string PasteID { get;}
        /// <summary>
        /// String data as stored in the database
        /// </summary>
        string PasteData { get;}
        /// <summary>
        /// NanoTrack will be the generated code for the users ip address
        /// </summary>
        string NanoTrack { get;}
        /// <summary>
        /// Username support future proofing
        /// </summary>
        string PasteUser { get;}
        string PostTitle { get; }
        /// <summary>
        /// Time the paste occured
        /// </summary>
        DateTime PasteTime { get;}
        UInt64 LikeCount { get; }
        
    }
}
