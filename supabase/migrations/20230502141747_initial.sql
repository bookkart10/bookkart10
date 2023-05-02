create type "public"."availabe_for" as enum ('SELL', 'RENT');

create type "public"."book_type" as enum ('OLD', 'NEW');

create type "public"."related_to" as enum ('FRICTION', 'NON_FRICTION');

create type "public"."status" as enum ('PENDING', 'DISPATCHED', 'READY_FOR_DELIVERY', 'DELIVERED');

create table "public"."address" (
    "address_id" uuid not null default gen_random_uuid(),
    "pincode" integer not null,
    "area_and_street" text not null,
    "city_town" text not null,
    "state" text not null,
    "landmark" text not null
);


create table "public"."books" (
    "book_id" uuid not null default gen_random_uuid(),
    "book_name" text not null,
    "price_id" uuid not null,
    "category" text not null,
    "publisher" text not null,
    "author_name" text not null,
    "description" text not null,
    "image" text not null,
    "ratings" text not null,
    "language" text not null,
    "book_type" book_type not null default 'NEW'::book_type,
    "availabe_for" availabe_for not null default 'SELL'::availabe_for
);


create table "public"."category" (
    "category_id" uuid not null default gen_random_uuid(),
    "category_name" text not null,
    "related_to" related_to not null
);


create table "public"."events" (
    "event_id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "duration" timestamp(3) without time zone not null,
    "organiser_details_id" uuid not null,
    "location_id" uuid not null
);


create table "public"."events_org_details" (
    "organiser_details_id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "address" timestamp(3) without time zone not null,
    "ph_no" text not null,
    "mail_id" text not null
);


create table "public"."location" (
    "loc_id" uuid not null default gen_random_uuid(),
    "loc_address" text not null,
    "city" timestamp(3) without time zone not null,
    "state" text not null,
    "country" text not null,
    "image" text not null
);


create table "public"."order" (
    "order_id" uuid not null default gen_random_uuid(),
    "order_date" timestamp(3) without time zone not null,
    "address_id" uuid not null,
    "payment_id" uuid not null,
    "status" status not null default 'PENDING'::status
);


create table "public"."payment" (
    "payment_id" uuid not null default gen_random_uuid(),
    "payment_type" text not null,
    "payment_date" timestamp(3) without time zone not null,
    "price" integer not null
);


create table "public"."price_details" (
    "price_id" uuid not null default gen_random_uuid(),
    "selling_price" integer not null,
    "actual_price" integer not null,
    "discount" integer not null
);


create table "public"."rating" (
    "book_id" uuid not null,
    "user_id" uuid not null,
    "rating_id" uuid not null default gen_random_uuid(),
    "rating_value" integer not null
);


create table "public"."readlist" (
    "id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "book_id" uuid not null,
    "book_name" text not null,
    "description" text not null,
    "user_id" uuid not null
);


create table "public"."user" (
    "user_id" uuid not null default gen_random_uuid(),
    "username" text not null,
    "mail_id" text not null,
    "ph_no" text not null,
    "address_id" uuid not null,
    "password" text not null,
    "profile_image" text not null
);


CREATE UNIQUE INDEX address_pkey ON public.address USING btree (address_id);

CREATE UNIQUE INDEX books_pkey ON public.books USING btree (book_id);

CREATE UNIQUE INDEX category_category_name_key ON public.category USING btree (category_name);

CREATE UNIQUE INDEX events_org_details_mail_id_key ON public.events_org_details USING btree (mail_id);

CREATE UNIQUE INDEX events_org_details_pkey ON public.events_org_details USING btree (organiser_details_id);

CREATE UNIQUE INDEX events_pkey ON public.events USING btree (event_id);

CREATE UNIQUE INDEX location_pkey ON public.location USING btree (loc_id);

CREATE UNIQUE INDEX order_pkey ON public."order" USING btree (order_id);

CREATE UNIQUE INDEX payment_pkey ON public.payment USING btree (payment_id);

CREATE UNIQUE INDEX price_details_pkey ON public.price_details USING btree (price_id);

CREATE UNIQUE INDEX rating_pkey ON public.rating USING btree (rating_id);

CREATE UNIQUE INDEX readlist_pkey ON public.readlist USING btree (id);

CREATE UNIQUE INDEX user_mail_id_key ON public."user" USING btree (mail_id);

CREATE UNIQUE INDEX user_pkey ON public."user" USING btree (user_id);

CREATE UNIQUE INDEX user_username_key ON public."user" USING btree (username);

alter table "public"."address" add constraint "address_pkey" PRIMARY KEY using index "address_pkey";

alter table "public"."books" add constraint "books_pkey" PRIMARY KEY using index "books_pkey";

alter table "public"."events" add constraint "events_pkey" PRIMARY KEY using index "events_pkey";

alter table "public"."events_org_details" add constraint "events_org_details_pkey" PRIMARY KEY using index "events_org_details_pkey";

alter table "public"."location" add constraint "location_pkey" PRIMARY KEY using index "location_pkey";

alter table "public"."order" add constraint "order_pkey" PRIMARY KEY using index "order_pkey";

alter table "public"."payment" add constraint "payment_pkey" PRIMARY KEY using index "payment_pkey";

alter table "public"."price_details" add constraint "price_details_pkey" PRIMARY KEY using index "price_details_pkey";

alter table "public"."rating" add constraint "rating_pkey" PRIMARY KEY using index "rating_pkey";

alter table "public"."readlist" add constraint "readlist_pkey" PRIMARY KEY using index "readlist_pkey";

alter table "public"."user" add constraint "user_pkey" PRIMARY KEY using index "user_pkey";

alter table "public"."books" add constraint "books_price_id_fkey" FOREIGN KEY (price_id) REFERENCES price_details(price_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."books" validate constraint "books_price_id_fkey";

alter table "public"."events" add constraint "events_location_id_fkey" FOREIGN KEY (location_id) REFERENCES location(loc_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."events" validate constraint "events_location_id_fkey";

alter table "public"."events" add constraint "events_organiser_details_id_fkey" FOREIGN KEY (organiser_details_id) REFERENCES events_org_details(organiser_details_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."events" validate constraint "events_organiser_details_id_fkey";

alter table "public"."order" add constraint "order_address_id_fkey" FOREIGN KEY (address_id) REFERENCES address(address_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."order" validate constraint "order_address_id_fkey";

alter table "public"."order" add constraint "order_payment_id_fkey" FOREIGN KEY (payment_id) REFERENCES payment(payment_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."order" validate constraint "order_payment_id_fkey";

alter table "public"."rating" add constraint "rating_book_id_fkey" FOREIGN KEY (book_id) REFERENCES books(book_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."rating" validate constraint "rating_book_id_fkey";

alter table "public"."rating" add constraint "rating_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "user"(user_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."rating" validate constraint "rating_user_id_fkey";

alter table "public"."readlist" add constraint "readlist_book_id_fkey" FOREIGN KEY (book_id) REFERENCES books(book_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."readlist" validate constraint "readlist_book_id_fkey";

alter table "public"."readlist" add constraint "readlist_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "user"(user_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."readlist" validate constraint "readlist_user_id_fkey";

alter table "public"."user" add constraint "user_address_id_fkey" FOREIGN KEY (address_id) REFERENCES address(address_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."user" validate constraint "user_address_id_fkey";


