-- Create the database (if it doesn't already exist)
CREATE DATABASE IF NOT EXISTS your_database_name;

-- Use the created database
USE your_database_name;

-- Create the 'elmnt' table
CREATE TABLE IF NOT EXISTS elmnt (
    id INT AUTO_INCREMENT PRIMARY KEY,        -- Unique identifier for each entry
    name VARCHAR(255) NOT NULL,                -- The name of the content
    entity_type VARCHAR(50) NOT NULL,          -- Type of the entity (e.g., page, plugin)
    content_type VARCHAR(50) NOT NULL,         -- Content type (e.g., text/html, text/css)
    content TEXT NOT NULL,                     -- The actual content to be served
    visibility ENUM('public', 'private') NOT NULL DEFAULT 'public', -- Visibility status of the content
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp of when the content was created
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Timestamp for updates
);

-- Add an index on 'name' for faster lookups
CREATE INDEX idx_name ON elmnt(name);