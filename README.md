## Overview 🌏

The IndHist backend service is a RESTful API, designed to provide geographical and cultural information about India. It serves as the data source for the IndHist React Native mobile application and potentially other clients. It uses PostgreSQL for persistent data storage and Redis for caching to ensure fast and efficient data delivery.

## Features

*   **State-Wise Information:** Provides comprehensive details about each state and union territory in India, including geographical features, cultural sites, and tourist attractions.
*   **Filtering:** Supports filtering of data based on various criteria such as rivers, lakes, mountains, and tourist places.
*   **Caching:** Implements Redis caching to improve performance and reduce database load.
*   **RESTful API:** Follows RESTful principles for easy integration with frontend applications.

## Technologies Used

*   [Node.js](https://nodejs.org/en/): JavaScript runtime environment
*   [Express.js](https://expressjs.com/): Web application framework for Node.js
*   [PostgreSQL](https://www.postgresql.org/): Relational database management system
*   [Redis](https://redis.io/): In-memory data structure store, used as a cache
*   [dotenv](https://www.npmjs.com/package/dotenv): Zero-dependency module that loads environment variables from a `.env` file

## Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/en/) (v14 or higher)
*   [npm](https://www.npmjs.com/) (Node Package Manager)
*   [PostgreSQL](https://www.postgresql.org/)
*   [Redis](https://redis.io/)

## Setup and Installation

1.  **Clone the repository:**

    ```
    git clone https://github.com/indhist/indhist-backend.git
    cd indhist-backend
    ```

2.  **Install dependencies:**

    ```
    npm install
    ```

3.  **Configure environment variables:**

    *   Create a `.config` in root directory then create `.env` file in the `.config` directory based on the `.env.example` file.
    *   Update the `.env` file with your PostgreSQL and Redis credentials.  A sample is provided below:

    ```
    PORT=3032
    DB_HOST=localhost
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=indhist_db
    REDIS_HOST=localhost
    REDIS_PORT=6379
    ```

4.  **Set up the PostgreSQL database:**

    *   Create a database named `indhist_dev_db` (or whatever you specified in your `.env` file):

        ```
        CREATE DATABASE indhist_db;
        ```

    *   Run the database migrations (if applicable - add this step if you're using migrations):

        ```
        dbmate up
        ```
        - If `dbmate` is not installed refer: [dbmate npm](https://www.npmjs.com/package/dbmate) , [dbmate github](https://github.com/amacneil/dbmate) 

5.  **Start the server:**

    ```
    npm start
    ```

    or for development:

    ```
    npm run dev
    ```

    The server will start on the port specified in your `.env` file (default is 3032).

## Caching Strategy

The backend uses Redis to cache frequently accessed data, such as state information. This reduces the load on the PostgreSQL database and improves response times.

*   When a request is made for state information, the server first checks if the data is available in the Redis cache.
*   If the data is found in the cache, it is returned directly to the client.
*   If the data is not found in the cache, the server retrieves it from the PostgreSQL database, stores it in the Redis cache, and then returns it to the client.
*   The cache is automatically updated whenever state information is modified.  (Note: implement this if you have update/create functionality).

## Contributing

We welcome contributions to the IndHist project!  Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Write clear and concise commit messages.
4.  Submit a pull request with a detailed description of your changes.

## Contact

If you have any questions or need further information, feel free to reach out to us:

**Team IndHist**  
📧 [indhist99@gmail.com](mailto:indhist99@gmail.com)

---

Thank you for your interest in IndHist! We hope our project helps you explore the rich geographical and cultural heritage of India. Happy coding! 🚀
