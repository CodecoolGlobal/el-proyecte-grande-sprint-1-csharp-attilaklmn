using System.Text.RegularExpressions;

namespace webapi.Service.SubService;

public class UserDataValidator : IUserDataValidator
{
    public bool ValidateUsername(string username)
    {
        return username.Length >= 5;
    }

    public bool ValidatePasswordRegex(string password)
    {
        string regexPattern = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$";
        return Regex.IsMatch(password, regexPattern);
    }
    
    public bool ValidateEmailRegex(string email)
    {
        string regexPattern = @"^[^\s@]+@[^\s@]+\.[^\s@]+$";
        return Regex.IsMatch(email, regexPattern);
    }
    
}