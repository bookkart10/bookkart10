import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { hash } from "bcrypt";

const Prisma = new PrismaClient();

async function main() {
  // await Prisma.order.deleteMany();
  // await Prisma.payment.deleteMany();
  // await Prisma.readlist.deleteMany();
  // await Prisma.events.deleteMany();
  // await Prisma.location.deleteMany();
  // await Prisma.events_org_details.deleteMany();
  // await Prisma.category.deleteMany();
  await Prisma.books.deleteMany();
  //await Prisma.price_details.deleteMany();
  await Prisma.user.deleteMany();
  // await Prisma.address.deleteMany();

  const hashedPassword = await hash("password", 12);

  for (let i = 0; i < 10; i++) {
    await Prisma.user.create({
      data: {
        username: faker.name.fullName(),
        mail_id: faker.internet.email(),
        ph_no: faker.phone.number("+91 ##### #####"),
        password: hashedPassword,
        profile_image: faker.image.image(),
      },
    });
  }

  const users = await Prisma.user.findMany();

  const userIds = users.map((user) => user.id);

  for (let i = 0; i < 20; i++) {
    await Prisma.books.create({
      data: {
        book_name: faker.word.noun({
          strategy: "closest",
        }),
        book_type: faker.helpers.arrayElement(["OLD", "NEW"]),
        price: parseInt(faker.commerce.price(100, 2000)),
        available_for: faker.helpers.arrayElement(["SALE", "RENT"]),
        publisher: faker.company.name(),
        author_name: faker.name.fullName(),
        description: faker.lorem.paragraph(),
        image: faker.image.abstract(480,600,true),
        language: faker.helpers.arrayElement(["ENGLISH", "HINDI", "KANNADA"]),
        categories: faker.helpers.arrayElements([
          "Horror",
          "Thriller",
          "Drama",
          "Fantacy",
          "Crime",
        ]),
        userId: faker.helpers.arrayElement(userIds),
      },
    });
  }
}

main()
  .then(() => console.log("success"))
  .catch((e) => console.log(e))
  .finally(async () => await Prisma.$disconnect());
