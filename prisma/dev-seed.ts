import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const greetingsToCreate = ['hello', 'cześć', 'hi', 'good day', 'hey'];

async function main() {
    await prisma.greeting.createMany({
        data: greetingsToCreate.map((greeting) => ({ content: greeting })),
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
