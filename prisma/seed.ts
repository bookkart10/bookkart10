import { PrismaClient, related_to } from "@prisma/client";
import {faker} from "@faker-js/faker";

const Prisma = new PrismaClient();

async function main() {
    await Prisma.rating.deleteMany();
    await Prisma.order.deleteMany();
    await Prisma.payment.deleteMany();
    await Prisma.address.deleteMany();
    await Prisma.location.deleteMany();
    await Prisma.events_org_details.deleteMany();
    await Prisma.events.deleteMany();
    await Prisma.price_details.deleteMany();
    await Prisma.category.deleteMany();
    await Prisma.books.deleteMany();
    await Prisma.user.deleteMany();

}

for (let i = 0; i < 10; i++) {

     Prisma.address.create({
        data:
        {
            area_and_street: faker.address.streetAddress(),
            city_or_town: faker.address.city(),
            landmark: faker.address.street(),
            pincode: faker.datatype.number(),
            state: faker.address.state(),


        }

    })}