namespace webapi.Exceptions;

public class DataConflictionException : Exception
{
    public DataConflictionException(string message) : base(message)
    {
    }
}