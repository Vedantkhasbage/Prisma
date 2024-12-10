-- CreateTable
CREATE TABLE "todos" (
    "todoId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("todoId")
);
