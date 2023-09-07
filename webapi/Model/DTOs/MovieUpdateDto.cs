namespace webapi.Model.DTOs;

public record MovieUpdateDto(long Id, string Title, string[] Cast, string Summary);