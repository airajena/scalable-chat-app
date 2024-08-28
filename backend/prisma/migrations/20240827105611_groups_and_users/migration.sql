-- CreateTable
CREATE TABLE "chat_groups" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(191) NOT NULL,
    "passcode" VARCHAR(20) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chat_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_users" (
    "id" SERIAL NOT NULL,
    "group_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "group_users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "chat_groups_created_at_idx" ON "chat_groups"("created_at");

-- AddForeignKey
ALTER TABLE "group_users" ADD CONSTRAINT "group_users_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "chat_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;
