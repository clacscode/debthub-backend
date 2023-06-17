/*
    - Author:   Claudio S.
    - Fecha:    2023-06-10
*/

INSERT INTO country (country_id, country_name)
VALUES ('CL', 'CHILE');

INSERT INTO gender (gender_id, description)
VALUES ('M', 'MASCULINO');

INSERT INTO gender (gender_id, description)
VALUES ('F', 'FEMENINO');

INSERT INTO gender (gender_id, description)
VALUES ('O', 'OTRO');

INSERT INTO users(dni, first_name, last_name, email, user_pass, date_of_birth, gender)
VALUES ('198810045','CLAUDIO IGNACIO', 'SEPULVEDA SEPULVEDA', 'claud.sepulved@gmail.com', 'admin123', '1998-05-14', 'M');

INSERT INTO address(user_id, street, num, city, country_id)
VALUES (1, 'Parque Puyehue', '2374', 'Santiago', 'CL');

-- Considerar para autocompletar en logica de negocio
-- quota_value = (total/due)
-- entry_date = NOW()
INSERT INTO debt(dni, description, entry_date, total, dues, quota_value) 
VALUES ('198810045', 'Prestamo 1', 2000000, 4, 500000);
-- total_paid =+ pagoRealizado a la deuda
-- due =+ pagoRealizado a la deuda
INSERT INTO debt_detail(debt_id, total_paid, due) 
VALUES (1, 0, 0);

INSERT INTO debt(dni, description, entry_date, total, dues, quota_value) 
VALUES ('198810045', 'Prestamo 2', 50000, 5, 10000);

INSERT INTO debt_detail(debt_id, total_paid, due) 
VALUES (2, 0, 0);
