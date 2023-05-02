/*import { PrismaClient, related_to } from "@prisma/client";
import {faker} from "@faker-js/faker";

const Prisma = new PrismaClient();

async function main() {
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
//create many records in tourist
const address = await Prisma.address.findFirst();
  
for (let i = 0; i < 6; i++) {
    await Prisma.user.create({
      data: {
        username: faker.name.fullName(),
        mail_id: faker.internet.email(),
        ph_no: faker.phone.number("+91 ##### #####"),
        address_id: address?.address_id!,
        password: faker.internet.password(),
        profile_image: faker.image.image(),
      }
    });
};

const price_details = await Prisma.price_details.findMany();
const category = await Prisma.category.findMany();

for (let i = 0; i < 6; i++) {
    const book_type = ["Old","New"];
    const available_for = ["Sell","Rent"];

    await Prisma.books.create({
      data: {
        book_name: faker.lorem.text(),
        book_type: "NEW",
        price_id: ,
        available_for:  book_type [randomIndex],
        category: ,
        Publisher: faker.company.name(),
        author_name: faker.lorem.text(),
        description: faker.lorem.paragraph(),
        image: faker.image.image(),
      }
    });
};
        await Prisma.category.create({
        const related_to = ["friction","Non_friction"];
        const randomIndex = Math.floor(Math.random() * related_to.length);
            data: {
              category_name: faker.lorem.words(),
              related_to: related_to[randomIndex],
            }
        });

for (let i = 0; i < 6; i++) {
    const book_type = ["Old","New"];
    const randomIndex = Math.floor(Math.random() * book_type.length);
 
    await Prisma.price_details.create({
      data: {
        selling_price: faker.commerce.price(100,2000),
        actual_price: faker.commerce.price(50,1800),
        discount: faker.commerce.price(0,80),
      }
    });
};

const events_org_details = await Prisma.events_org_details.findMany();
const location = await Prisma.location.findMany();

for (let i = 0; i < 6; i++) {

    await Prisma.events.create({
      data: {
        name: faker.company.name(),
        duration: faker.date.betweens('2022-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z'),
        organiser_details_id: events_org_details,
        location_id: location,
      }
    });


    await Prisma.events_org_details.create({
        data: {
          name: faker.company.name(),
          ph_no: faker.phone.number(),
          mail_id: faker.internet.email(),
        }
    });

    await Prisma.location.create({
        data: {
          loc_address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: faker.address.country(),
          image: faker.image.imageUrl(),
          
    });

    await Prisma.address.create({
        data: {
          pincode: faker.address.zipCode(),
          Area_and_street: faker.address.streetAddress(),
          city_or_town: faker.address.city(),
          state: faker.address.state(),
          landmark: faker.address.streetName(),
    
    });

    await Prisma.payment.create({
    const payment_type = ["Cash","UPI",];
    const randomIndex = Math.floor(Math.random() * payment_type.length);
        data: {
          payment_type: payment_type[randomIndex]
    });
    
    
};*/



        

    