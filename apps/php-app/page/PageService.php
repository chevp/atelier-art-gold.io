<?php

class PageService
{
    // Database connection parameters
    private static $servername = '';
    private static $username = '';
    private static $password = '';
    private static $dbname = '';

    /**
     * Finds content by its name and returns it if found.
     * 
     * @param string $name The name of the content to be searched.
     * @return object|null An object containing content details, or null if not found.
     */
    public static function findOneContentByName($name)
    {
        // Establish database connection
        $conn = PageService::connect_data_table_db();

        // Prepare the SQL query to fetch the content by name and ensure it's public
        $stmt = $conn->prepare("SELECT entity_type, content_type, content 
                                FROM elmnt 
                                WHERE name = ? 
                                AND visibility = 'public'");

        // Bind the name parameter to the SQL query
        $stmt->bind_param("s", $name);

        // Execute the query
        $stmt->execute();

        // Bind the result columns to variables
        $stmt->bind_result($out_entity_type, $out_content_type, $out_content);

        // Initialize the data variable to store the result
        $data = null;

        // Fetch the results and populate the $data object
        while ($stmt->fetch()) {
            $data = new \stdClass();  // Create a new stdClass object
            $data->content = $out_content;
            $data->content_type = $out_content_type;
            $data->entity_type = $out_entity_type;
        }

        // Close the database connection
        $conn->close();

        // Return the fetched data, or null if no content was found
        return $data;
    }

    /**
     * Establishes a connection to the database.
     * 
     * @return mysqli The database connection object.
     * @throws Exception If the connection fails.
     */
    private static function connect_data_table_db()
    {
        // Create a new connection to the database
        $conn = new mysqli(PageService::$servername, PageService::$username, 
                           PageService::$password, PageService::$dbname);
        
        // Check if the connection was successful
        if ($conn->connect_error) {  
            // Throw an exception if the connection fails
            throw new Exception("PageService: Database Connection failed.");
        }

        // Enable strict error reporting for mysqli
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

        // Set the character set to utf8mb4 for better Unicode support
        $conn->set_charset("utf8mb4");

        // Return the connection object
        return $conn;
    }
}
?>