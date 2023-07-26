﻿using webapi.Model;

namespace webapi.Service
{
    public interface IReservationService<T>
    {
        HashSet<T> GetAll();
        bool ReserveIfPossible(Reservation reservation);
    }
}