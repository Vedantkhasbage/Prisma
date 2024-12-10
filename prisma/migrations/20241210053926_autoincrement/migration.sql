-- AlterTable
CREATE SEQUENCE todos_todoid_seq;
ALTER TABLE "todos" ALTER COLUMN "todoId" SET DEFAULT nextval('todos_todoid_seq');
ALTER SEQUENCE todos_todoid_seq OWNED BY "todos"."todoId";
