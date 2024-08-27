import {PrismaClient} from '@prisma/client';

export default defineEventHandler(async (event) => {
    const client = new PrismaClient()
    const { email, password } = await readBody(event)


    console.log(email, password)

    return await client.user.create({
        data: {
            email, password
        },
    })
})