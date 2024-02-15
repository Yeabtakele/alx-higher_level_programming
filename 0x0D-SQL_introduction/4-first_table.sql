-- Write a script that creates a table called first_table in the current database in your MySQL server.
CREATE TABLE IF NOT EXISTS `%%DATABASE_NAME%%`.`first_table` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

