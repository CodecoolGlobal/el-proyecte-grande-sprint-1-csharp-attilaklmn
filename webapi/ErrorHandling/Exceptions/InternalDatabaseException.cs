namespace webapi.Exceptions;

public class InternalDatabaseException : Exception
{
    public InternalDatabaseException(string message) : base(message)
    {
    }
}