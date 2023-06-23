create type "public"."available_for" as enum ('SALE', 'RENT');

create type "public"."book_type" as enum ('OLD', 'NEW');

create table "public"."account" (
    "id" uuid not null default gen_random_uuid(),
    "userId" uuid not null,
    "type" text not null,
    "provider" text not null,
    "providerAccountId" text not null,
    "refresh_token" text,
    "access_token" text,
    "expires_at" integer,
    "token_type" text,
    "scope" text,
    "id_token" text,
    "session_state" text
);


create table "public"."address" (
    "address_id" uuid not null default gen_random_uuid(),
    "pincode" integer not null,
    "area_and_street" text not null,
    "state" text not null,
    "landmark" text not null,
    "city_or_town" text not null
);


create table "public"."books" (
    "book_id" uuid not null default gen_random_uuid(),
    "book_name" text not null,
    "publisher" text not null,
    "author_name" text not null,
    "description" text not null,
    "image" text not null,
    "language" text not null,
    "book_type" book_type not null,
    "available_for" available_for not null default 'SALE'::available_for,
    "categories" text[],
    "price" integer not null,
    "userId" uuid
);


create table "public"."cart" (
    "id" uuid not null default gen_random_uuid(),
    "books_id" uuid,
    "userId" uuid
);


create table "public"."events" (
    "event_id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "duration" timestamp(3) without time zone not null,
    "organiser_details_id" uuid not null,
    "location" text not null
);


create table "public"."events_org_details" (
    "organiser_details_id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "ph_no" text not null,
    "mail_id" text not null
);


create table "public"."session" (
    "id" uuid not null default gen_random_uuid(),
    "sessionToken" text not null,
    "userId" uuid not null,
    "expires" timestamp(3) without time zone not null
);


create table "public"."user" (
    "username" text not null,
    "mail_id" text not null,
    "ph_no" text,
    "password" text not null,
    "profile_image" text,
    "addressAddress_id" uuid,
    "id" uuid not null default gen_random_uuid()
);


CREATE UNIQUE INDEX account_pkey ON public.account USING btree (id);

CREATE UNIQUE INDEX "account_provider_providerAccountId_key" ON public.account USING btree (provider, "providerAccountId");

CREATE UNIQUE INDEX address_pkey ON public.address USING btree (address_id);

CREATE UNIQUE INDEX books_pkey ON public.books USING btree (book_id);

CREATE UNIQUE INDEX cart_pkey ON public.cart USING btree (id);

CREATE UNIQUE INDEX events_org_details_mail_id_key ON public.events_org_details USING btree (mail_id);

CREATE UNIQUE INDEX events_org_details_pkey ON public.events_org_details USING btree (organiser_details_id);

CREATE UNIQUE INDEX events_pkey ON public.events USING btree (event_id);

CREATE UNIQUE INDEX session_pkey ON public.session USING btree (id);

CREATE UNIQUE INDEX "session_sessionToken_key" ON public.session USING btree ("sessionToken");

CREATE INDEX user_id_idx ON public."user" USING btree (id);

CREATE UNIQUE INDEX user_mail_id_key ON public."user" USING btree (mail_id);

CREATE UNIQUE INDEX user_pkey ON public."user" USING btree (id);

CREATE UNIQUE INDEX user_username_key ON public."user" USING btree (username);

alter table "public"."account" add constraint "account_pkey" PRIMARY KEY using index "account_pkey";

alter table "public"."address" add constraint "address_pkey" PRIMARY KEY using index "address_pkey";

alter table "public"."books" add constraint "books_pkey" PRIMARY KEY using index "books_pkey";

alter table "public"."cart" add constraint "cart_pkey" PRIMARY KEY using index "cart_pkey";

alter table "public"."events" add constraint "events_pkey" PRIMARY KEY using index "events_pkey";

alter table "public"."events_org_details" add constraint "events_org_details_pkey" PRIMARY KEY using index "events_org_details_pkey";

alter table "public"."session" add constraint "session_pkey" PRIMARY KEY using index "session_pkey";

alter table "public"."user" add constraint "user_pkey" PRIMARY KEY using index "user_pkey";

alter table "public"."account" add constraint "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."account" validate constraint "account_userId_fkey";

alter table "public"."books" add constraint "books_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."books" validate constraint "books_userId_fkey";

alter table "public"."cart" add constraint "cart_books_id_fkey" FOREIGN KEY (books_id) REFERENCES books(book_id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."cart" validate constraint "cart_books_id_fkey";

alter table "public"."cart" add constraint "cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."cart" validate constraint "cart_userId_fkey";

alter table "public"."events" add constraint "events_organiser_details_id_fkey" FOREIGN KEY (organiser_details_id) REFERENCES events_org_details(organiser_details_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."events" validate constraint "events_organiser_details_id_fkey";

alter table "public"."session" add constraint "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."session" validate constraint "session_userId_fkey";

alter table "public"."user" add constraint "user_addressAddress_id_fkey" FOREIGN KEY ("addressAddress_id") REFERENCES address(address_id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."user" validate constraint "user_addressAddress_id_fkey";


create policy "any 1sk75qe_0"
on "storage"."objects"
as permissive
for select
to public
using ((bucket_id = 'posters'::text));


create policy "any 1sk75qe_1"
on "storage"."objects"
as permissive
for insert
to public
with check ((bucket_id = 'posters'::text));


create policy "any 1sk75qe_2"
on "storage"."objects"
as permissive
for update
to public
using ((bucket_id = 'posters'::text));


create policy "any 1sk75qe_3"
on "storage"."objects"
as permissive
for delete
to public
using ((bucket_id = 'posters'::text));



