﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prodesp.Gsnet.Monitor.Domain.Interfaces.Domain
{
   
    public interface IEntityKey<TKeyType>
    {
        TKeyType Id { get; set; }
    }
}
