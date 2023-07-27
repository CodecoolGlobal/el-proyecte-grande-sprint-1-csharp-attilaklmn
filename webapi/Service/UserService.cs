using webapi.Model;

namespace webapi.Service;

public class UserService : IUserService
{
    public bool LoginUser(UserModelDTO userModelDto)
    {
        return true;
    }

    public bool RegisterUser(RegistrationModelDTO registrationModelDto)
    {
        return true;
    }
}