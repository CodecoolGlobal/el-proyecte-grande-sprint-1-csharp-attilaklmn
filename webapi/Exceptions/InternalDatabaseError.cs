namespace webapi.Exceptions;

public class InternalDatabaseError : Exception
{
    public InternalDatabaseError(string message) : base(message)
    {
    }
}