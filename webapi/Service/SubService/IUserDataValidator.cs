namespace webapi.Service.SubService;

public interface IUserDataValidator
{
    public bool ValidateUsername(string username);
    public bool ValidatePasswordRegex(string password);
    public bool ValidateEmailRegex(string email);
}