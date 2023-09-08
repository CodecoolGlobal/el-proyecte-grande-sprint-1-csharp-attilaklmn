# Use the official .NET Core 6 SDK image as the build environment
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app

# Copy the compiled application files (e.g., .dll files) into the container
COPY ./bin/Release/net6.0/publish/ ./

# Use the official .NET Core 6 runtime image for the final image
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime
WORKDIR /app

# Copy the compiled application files from the build stage into the final image
COPY --from=build /app ./

# Expose the port your .NET app listens on (if needed)
EXPOSE 80

# Define the command to run your .NET app
CMD ["dotnet", "webapi.dll"]
