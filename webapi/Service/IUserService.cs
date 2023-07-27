using webapi.Model;

namespace webapi.Service;

public interface IUserService
{
    bool LoginUser(UserModelDTO userModelDto);
    bool RegisterUser(RegistrationModelDTO registrationModelDto);
}