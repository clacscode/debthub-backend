/*
    - Author:   Claudio S.
    - Fecha:    2023-06-17
*/

-- Si la funcion existe, se eliminara
DO $$ 
BEGIN
    IF EXISTS (
       SELECT 1
       FROM pg_proc
       WHERE proname = 'insert_debt_detail'
    ) THEN
        DROP FUNCTION insert_debt_detail(INT);
    END IF;
END $$;


CREATE OR REPLACE FUNCTION INSERT_DEBT_DETAIL(p_debt_id INT)
RETURNS void AS $$
BEGIN
    INSERT INTO debt_detail(debt_id, total_paid, due)
    SELECT debt_detail,
        0 AS total_paid, 
        0 AS due 
    FROM debt 
    WHERE debt_id = p_debt_id;
END;
$$ LANGUAGE plpgsql;

/*
    Call SP - Parametro: debt_id
    CALL INSERT_DEBT_DETAIL(1);

*/