using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nano_Paste_MVC.Models
{
    interface IPaste
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
        /// Time the paste occured
        /// </summary>
        DateTime PasteTime { get;}
    }
}
