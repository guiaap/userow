CREATE TABLE users (
    id              INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name            VARCHAR(255) NOT NULL,
    email           VARCHAR(254) NOT NULL,
    password_hash   VARCHAR(255) NOT NULL,
    role            VARCHAR(20) NOT NULL DEFAULT 'user',
    last_login      TIMESTAMPTZ,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_users_role 
        CHECK (role IN ('admin', 'manager', 'user'))
);

CREATE UNIQUE INDEX uq_users_email_lower ON users (lower(email));

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_set_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    WHEN (
        (OLD.name, OLD.email, OLD.password_hash, OLD.role)
        IS DISTINCT FROM
        (NEW.name, NEW.email, NEW.password_hash, NEW.role)
    )
    EXECUTE FUNCTION set_updated_at();