PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  name TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO leads VALUES(1,'ugufr@tesd.de','ugue','2024-12-09 01:43:40');
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('leads',1);
