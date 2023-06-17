/*
    - Author:   Claudio S.
    - Fecha:    2023-06-10
*/

CREATE TABLE country(
	country_id CHAR(2) PRIMARY KEY,
	country_name VARCHAR(50) NOT NULL
);

CREATE TABLE gender(
	gender_id CHAR(1) PRIMARY KEY,
	description VARCHAR(9) NOT NULL
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    dni VARCHAR(9) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    user_pass VARCHAR(16) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender CHAR(1) NOT NULL,
    FOREIGN KEY (gender) REFERENCES gender(gender_id)
);

CREATE TABLE address(
	address_id SERIAL PRIMARY KEY,
	user_id INT NOT NULL,
	street VARCHAR(100) NOT NULL,
	num VARCHAR(10) NOT NULL,
	city VARCHAR(40) NOT NULL,
	country_id CHAR(2) NOT NULL,
	FOREIGN KEY (country_id) REFERENCES country(country_id),
	FOREIGN KEY (user_id) REFERENCES users(user_id) 
);

CREATE TABLE debt(
	debt_id SERIAL PRIMARY KEY,
	dni VARCHAR(9) NOT NULL NOT NULL,
	description VARCHAR(50) NOT NULL,
	entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, -- O Periodo?
	total INT NOT NULL,
	dues INT NOT NULL,
	quota_value INT NOT NULL,
	FOREIGN KEY (dni) REFERENCES users(dni)
);

CREATE TABLE debt_detail(
	debt_id INT NOT NULL,
	total_paid INT NOT NULL,
	due INT NOT NULL,
	FOREIGN KEY (debt_id) REFERENCES debt(debt_id)
);

/*
DROP TABLE gender;
DROP TABLE country;
DROP TABLE users;
DROP TABLE address;
*/

-- ALTER ROLE clacscode SET search_path TO debthub_dev;