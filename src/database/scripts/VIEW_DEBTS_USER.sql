/*
    - Author:   Claudio S.
    - Fecha:    2023-06-17
*/

-- Si la vista existe, se eliminara
DO $$ 
BEGIN
    IF EXISTS (
       SELECT 1
       FROM pg_views
       WHERE viewname = 'view_debts_user'
    ) THEN
        DROP VIEW view_debts_user;
    END IF;
END $$;

CREATE OR REPLACE VIEW debthub_dev.view_debts_user
AS SELECT d.debt_id AS "ID",
    d.dni AS "RUT CLIENTE",
    d.description AS "DESCRIPCION",
    d.entry_date AS "FECHA REGISTRO",
    d.total AS "TOTAL DEUDA",
    d.dues AS "TOTAL CUOTAS",
    d.quota_value AS "VALOR CUOTA",
    dd.total_paid AS "TOTAL PAGADO",
    dd.due AS "CUOTAS PAGADAS",
    concat(concat(d.dues, '/'), dd.due) AS "CUOTAS"
   FROM debthub_dev.debt d
     JOIN debthub_dev.debt_detail dd ON d.debt_id = dd.debt_id;