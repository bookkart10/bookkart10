import { PrismaClient, payment_type } from "@prisma/client";
import { faker } from "@faker-js/faker";

const Prisma = new PrismaClient();

async function main() {
  await Prisma.rating.deleteMany();
  await Prisma.order.deleteMany();
  await Prisma.payment.deleteMany();
  await Prisma.readlist.deleteMany();
  await Prisma.events.deleteMany();
  await Prisma.location.deleteMany();
  await Prisma.events_org_details.deleteMany();
  await Prisma.category.deleteMany();
  await Prisma.books.deleteMany();
  await Prisma.price_details.deleteMany();
  await Prisma.user.deleteMany();
  await Prisma.address.deleteMany();

  for (let i = 0; i < 6; i++) {
    await Prisma.address.create({
      data: {
        area_and_street: faker.address.streetAddress(),
        city_or_town: faker.address.city(),
        landmark: faker.address.street(),
        pincode: faker.datatype.number(),
        state: faker.address.state(),
      },
    });
  }

  const addresses = await Prisma.address.findMany();
  await Promise.all(
    addresses.map(async (address) => {
      await Prisma.user.create({
        data: {
          username: faker.name.fullName(),
          mail_id: faker.internet.email(),
          ph_no: faker.phone.number("+91 ##### #####"),
          address_id: address?.address_id!,
          password: faker.internet.password(),
          profile_image: faker.image.image(),
        },
      });
    })
  );

  for (let i = 0; i < 6; i++) {
    const booktypes = ["OLD", "NEW"];
    const randomIndex = Math.floor(Math.random() * booktypes.length);
    const available_for = ["SELL", "RENT"];
    const randomIndex1 = Math.floor(Math.random() * available_for.length);
    await Prisma.books.create({
      data: {
        book_name: faker.lorem.text(),
        //@ts-ignore
        book_type: booktypes[randomIndex],
        price: {
          create: {
            selling_price: parseInt(faker.commerce.price(100, 2000)),
            actual_price: parseInt(faker.commerce.price(50, 1800)),
            discount: parseInt(faker.commerce.price(0, 80)),
          },
        },
        //@ts-ignore
        available_for: available_for[randomIndex1],
        publisher: faker.company.name(),
        author_name: faker.lorem.text(),
        description: faker.lorem.paragraph(),
        image: faker.image.image(),
        language: "English",
        ratings: faker.datatype.number({ min: 1, max: 5 }).toString()
      },
    });
  }

  const categories = await Prisma.books.findMany();

  await Promise.all(
    categories.map(async (books) => {
      const relatedto = ["FRICTION", "NON_FRICTION"];
      const randomIndex3 = Math.floor(Math.random() * relatedto.length);
      await Prisma.category.create({
        data: {
          book_id: books?.book_id!,
          category_name: faker.random.word(),
          //@ts-ignore
          related_to: relatedto[randomIndex3],
        },
      });
    })
  );

  for (let i = 0; i < 6; i++) {
    await Prisma.events_org_details.create({
      data: {
        name: faker.company.name(),
        ph_no: faker.phone.number("+91 ##### #####"),
        mail_id: faker.internet.email(),
      },
    });
  }

  for (let i = 0; i < 6; i++) {
    await Prisma.location.create({
      data: {
        loc_address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: faker.address.country(),
        image: faker.image.image(),
      },
    });
  }

  const eventsorgdetails = await Prisma.events_org_details.findMany();
  const locations = await Prisma.location.findFirst();

  await Promise.all(
    eventsorgdetails.map(async (events_org_details) => {
      await Prisma.events.create({
        data: {
          name: faker.company.name(),
          duration: faker.date.between("2023-01-01", "2023-01-10"),
          organiser_details_id: events_org_details?.organiser_details_id!,
          location_id: locations?.loc_id!,
        },
      });
    })
  );

  const books = await Prisma.books.findMany();
  const userss = await Prisma.user.findMany();
  const randomIndex4 = Math.floor(Math.random() * books.length);

  await Promise.all(
    userss.map(async (user) => {
      await Prisma.readlist.create({
        data: {
          name: faker.lorem.word(),
          book_id: books[randomIndex4].book_id,
          book_name: faker.lorem.words(),
          description: faker.lorem.paragraph(),
          //@ts-ignore
          user_id: user.user_id,
        },
      });
    })
  );

  for (let i = 0; i < 6; i++) {
    const payment_type = ["CASH", "UPI", "NET_BANKING", "CREDIT_OR_DEBIT_CARD"];
    const randomIndex5 = Math.floor(Math.random() * payment_type.length);
    await Prisma.payment.create({
      data: {
        //@ts-ignore
        payment_type: payment_type[randomIndex5],
        payment_date: faker.date.past(),
        price: faker.datatype.number({ min: 100, max: 2000 }),
      },
    });
  }

  const addressess = await Prisma.address.findMany();
  const payments = await Prisma.payment.findMany();

  await Promise.all(
    addressess.map(async (address) => {
      const statuss = [
        "PENDING",
        "DISPATCHED",
        "READY_FOR_DELIVERY",
        "DELIVERED",
      ];
      const randomIndex6 = Math.floor(Math.random() * statuss.length);
      const randomIndex7 = Math.floor(Math.random() * payments.length);
      await Prisma.order.create({
        data: {
          //@ts-ignore
          status: statuss[randomIndex6],
          order_date: faker.date.recent(),
          address_id: address?.address_id!,
          //@ts-ignore
          payment_id: payments[randomIndex7].payment_id,
        },
      });
    })
  );

  const usersss = await Prisma.user.findMany();
  const bookss = await Prisma.books.findMany();
  const randomIndex8 = Math.floor(Math.random() * bookss.length);

  await Promise.all(
    usersss.map(async (user) => {
      await Prisma.rating.create({
        data: {
          rating_value: faker.datatype.number({ min: 1, max: 5 }),
          //@ts-ignore
          book_id: bookss[randomIndex8].book_id,
          user_id: user?.user_id!,
        },
      });
    })
  );
}
main()
  .then(() => console.log("success"))
  .catch((e) => console.log(e))
  .finally(async () => await Prisma.$disconnect());
