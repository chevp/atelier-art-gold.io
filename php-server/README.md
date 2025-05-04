
# PHP Content Redirection Server

This PHP server is designed to redirect HTML content stored in a database to the client based on the URL. The server checks the URL path, matches it with predefined routes, and retrieves the corresponding content from the database if available. The content is then sent to the client with the appropriate content type, or a 404 page is displayed if no content is found.

## Features

- **Dynamic Content Delivery**: The server fetches content from a MySQL database and serves it dynamically based on the URL path.
- **Content Types**: It supports various content types (e.g., `text/html`, `text/css`) and serves the appropriate content.
- **404 Error Handling**: If no matching content is found for a given route, a 404 error page is shown.
- **Seamless Redirection**: The system checks predefined URL paths and redirects accordingly to the correct view.

## Files

### `PageService.php`
- This class handles database interactions. It retrieves content from the database based on the content name and returns it in an appropriate format.

### `index.php`
- This file includes the main logic to handle incoming requests, match the routes, and serve the corresponding content or redirect to a default 404 page if no content is found.

### `404.shtml`
- A custom 404 error page to inform the user that the page they requested could not be found.

## Database

The database must have a table named `elmnt` with at least the following columns:

- `name` (string): The name of the content.
- `entity_type` (string): Type of the entity (e.g., `page`, `plugin`).
- `content_type` (string): The content type, e.g., `text/html`.
- `content` (text): The actual content to display.
- `visibility` (string): Indicates whether the content is public or private (e.g., `public` or `private`).

## How it Works

1. **URL Matching**: The server checks the requested URL against a set of predefined paths (e.g., `/content`, `/read`, `/page`).
2. **Database Query**: If a match is found, it queries the `elmnt` table in the database to retrieve the content associated with that path.
3. **Content Delivery**: The content is then sent to the client with the correct content type (e.g., `text/html` for HTML content).
4. **404 Handling**: If no matching content is found, the user is shown a custom 404 error page.

## Example Usage

- When a user navigates to `/content/some-content`, the server will fetch the content named `some-content` from the database, and if it exists and is public, it will return the HTML content to the client.
- If no content is found for the URL, the server will redirect the user to the `404.shtml` page.

## Requirements

- PHP 7.0 or higher
- MySQL or MariaDB database
- Properly configured web server (e.g., Apache, Nginx)

## Installation

1. Clone the repository or upload the files to your web server.
2. Set up a MySQL database and create the `elmnt` table as described above.
3. Configure the database credentials in `PageService.php` (e.g., `$servername`, `$username`, `$password`, `$dbname`).
4. Ensure that the web server has access to the PHP files and is configured to handle `.php` requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
