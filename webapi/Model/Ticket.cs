﻿using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Model
{
    public class Ticket
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public Screening Screening { get; set; } = null!;
        public Seat Seat { get; set; } = null!;
        public bool Finalized { get; set; }

        public void SetFinalized()
        {
            Finalized = true;
        }
    }
}
