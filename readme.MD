# 3 layer architecture for building REST APIs #

# This architecure divides our API into the following layers.

# The API layer (controllers) handles routing, request processing, and response generation.
# Responsabilities:
#   1. Maps URLs to specific endpoints (Controller methods.)
#   2. Requests parsing: Extracts data from incoming requests (query params, req bodies, etc)
#   3. Response generation: Creates appropriate HTTP responses with status codes and content


# The business logic layer (services) contains the core logic of the application, including business rules and data processing.
# Responsabilities:
#   1. Implement business rules
#   2. Data manipulation: Interact with the data (read or modify)
#   3. Validation: Checks the validity of the incoming data.


# The data access layer manages interactions with the data storage system.
#   The data access layer could be MongoDB driver.