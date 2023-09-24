# In this API, I have implemented different libraries for sake of time and complexity. One of these libraries is Express. It has let me implement routing, rate limiter to prevent DoS attacks and such.

# The app has been deployed using Docker Compose using a lite version of Node called Alpine.

# MongoDB has been selected as the default database as it provides free hosting in Atlas, an easy way to modify the database documents using their driver and its quick performance.

# Further researching at the application planning, I found the  3 layer architecture for building REST APIs. This architecure divides our API into the following layers.

# The API layer (controllers) handles routing, request processing, and response generation.

# The business logic layer (services) contains the core logic of the application, including business rules and data processing.

# The data access layer manages interactions with the data storage system.
# The data access layer could be MongoDB driver.

# Main tasks completed:

# 1. Create the node server
# 2. Set the API routing
# 3. Do the database implementation
# 4. React frontend app