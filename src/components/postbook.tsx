import Button from "@/components/Button";
import Headingtext from "./Headingtext";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Formik, Field } from "formik";
import { useAppDispatch } from "../../hooks";
import { addBook } from "../../store/books.slice";
import * as Yup from "yup";
import Image from "next/image";
import { useRef, useState } from "react";
import { SupaClient } from "../../utils/supabase";

const initialValues = {
  bookname: "",
  author_name: "",
  publisher: "",
  description: "",
  langauge: "",
  category: "",
  book_type: "",
  price: "",
  available_for: "",
};

const Schema = Yup.object().shape({
  bookname: Yup.string().required(),
  author_name: Yup.string().required(),
  publisher: Yup.string().required(),
  langauge: Yup.string().required(),
  category: Yup.string().required(),
  description: Yup.string().required(),
  book_type: Yup.string().required(),
  price: Yup.number().required(),
  available_for: Yup.string().required(),
});

export default function Postbook() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [prevImageUrl, setPrevImageUrl] = useState<null | string>();
  const [imageBlob, setImageBlob] = useState<null | File>();
  const posterRef = useRef<HTMLInputElement | null>();

  return (
    <>
      <div className="flex gap-3 items-center py-10 px-40">
        <IoArrowBack
          onClick={() => router.back()}
          className="hover:cursor-pointer"
          size={25}
        />
        <Headingtext>New Post</Headingtext>
      </div>

      <div className=" border-2  p-10 flex justify-center bg-[#FFF1F1] shadow-xl rounded-xl py-10  my-6 ml-40 mr-40 gap-x-6">
        <div
          onClick={() => posterRef.current?.click()}
          className="border-2 hover:cursor-pointer active:scale-95 h-[420px_!important] w-80 relative rounded-lg flex justify-center items-center"
        >
          <Image src={prevImageUrl ?? "cover_default.svg"} alt="Poster" fill />
          <input
            type="file"
            hidden
            onChange={(e) => {
              if (e?.target?.files?.[0]) {
                const reader = new FileReader();

                reader.readAsDataURL(e.target.files[0]);

                reader.onloadend = (e) => {
                  setPrevImageUrl(reader.result as string);
                };

                setImageBlob(e.target.files[0]);
              }
            }}
            ref={(ref) => (posterRef.current = ref)}
          />
        </div>

        <div>
          <div className="space-y-4 flex flex-col">
            <Formik
              initialValues={initialValues}
              validationSchema={Schema}
              onSubmit={async (values) => {
                try {
                  if (imageBlob) {
                    dispatch(
                      addBook({
                        author: values.author_name,
                        available_for: values.available_for,
                        book_name: values.bookname,
                        book_price: values.price,
                        buyer_email: "",
                        category: values.category,
                        id: "",
                      })
                    );
                    const posterResponse = await SupaClient.storage
                      .from("posters")
                      .upload(
                        `/p/${values.bookname}-${new Date(
                          Date.now()
                        ).getTime()}`,
                        imageBlob,
                        {
                          upsert: true,
                        }
                      );
                    const posterPath = posterResponse.data?.path;
                  }
                } catch (e) {}
              }}
            >
              {({
                handleSubmit,
                values,
                handleBlur,
                touched,
                errors,
                ...props
              }) => (
                <>
                  <div className="flex flex-row ... ">
                    <label className="flex-1 px-4 whitespace-nowrap">
                      Book Name
                    </label>
                    <div className="flex flex-col w-96">
                      <Field
                        {...props}
                        name="bookname"
                        type="text"
                        placeholder="Enter Book Name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
                      />
                      {touched.bookname && errors.bookname && (
                        <span className="text-md text-red-500">
                          {errors.bookname}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-row ... ">
                    <label className="flex-1 px-4 whitespace-nowrap">
                      Author Name
                    </label>
                    <div className="flex flex-col w-96">
                      <Field
                        {...props}
                        name="author_name"
                        type="text"
                        placeholder="Enter author Name"
                        className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
                      />
                      {touched.author_name && errors.author_name && (
                        <span className="text-md text-red-500">
                          {errors.author_name}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-row ... ">
                    <label className="flex-1 px-4">Publisher</label>
                    <div className="flex flex-col w-96">
                      <Field
                        name="publisher"
                        {...props}
                        type="text"
                        placeholder="Enter publisher"
                        className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
                      />
                      {touched.publisher && errors.publisher && (
                        <span className="text-md text-red-500">
                          {errors.publisher}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-row ... ">
                    <label className="flex-1 px-4">Description</label>
                    <div className="flex flex-col w-96">
                      <Field
                        {...props}
                        name="description"
                        type="text"
                        placeholder="Description of your book"
                        className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
                      />
                      {touched.description && errors.description && (
                        <span className="text-md text-red-500">
                          {errors.description}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-row ... flex-1">
                    <label className="flex-1 px-4">Language</label>
                    <div className="flex flex-col w-96">
                      <Field
                        {...props}
                        name="langauge"
                        type="text"
                        placeholder="Enter Language"
                        className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                      shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                      pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                      focus:ring-[#958F8F] sm:text-sm sm:leading-6"
                      />
                      {touched.langauge && errors.langauge && (
                        <span className="text-md text-red-500">
                          {errors.langauge}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-row ... ">
                    <label className="flex-1 px-4">Category</label>
                    <div className="flex flex-col w-96">
                      <Field
                        {...props}
                        name="category"
                        type="text"
                        placeholder="Enter your book category"
                        className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                      shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                      pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                      focus:ring-[#958F8F] sm:text-sm sm:leading-6"
                      />
                      {touched.category && errors.category && (
                        <span className="text-md text-red-500">
                          {errors.category}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="w-full flex flex-row justify-between">
                    <label className="flex-2 px-4 whitespace-nowrap">
                      Book Type
                    </label>
                    <div className="flex flex-col w-96">
                      <Field
                        as={"select"}
                        name="book_type"
                        {...props}
                        className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                focus:ring-[#958F8F] sm:text-sm sm:leading-6"
                      >
                        <option>NEW</option>
                        <option>OLD</option>
                      </Field>
                      {touched.book_type && errors.book_type && (
                        <span className="text-md text-red-500">
                          {errors.book_type}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <label className="flex-1 px-4">Price</label>
                    <div className="flex flex-col w-96">
                      <Field
                        {...props}
                        name="price"
                        type="number"
                        placeholder="Enter your book price"
                        className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                  pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                  focus:ring-[#958F8F] sm:text-sm sm:leading-6"
                      />
                      {touched.price && errors.price && (
                        <span className="text-md text-red-500">
                          {errors.price}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-row justify-between">
                    <label className="flex-1 px-4 whitespace-nowrap">
                      Available for
                    </label>
                    <div className="flex flex-col w-96">
                      <Field
                        as={"select"}
                        {...props}
                        name="available_for"
                        className="block w-96 rounded-md border-0 py-1.5 text-gray-900 
                      shadow-sm ring-1 ring-inset ring-[#FF6D6D] placeholder:text-[#000000] 
                pl-2 placeholder:text-opacity-60 focus:ring-1 focus:ring-inset 
                focus:ring-[#958F8F] sm:text-sm sm:leading-6"
                      >
                        <option value={""}>Select Available for</option>
                        <option value={"SELL"}>SELL</option>
                        <option value={"RENT"}>RENT</option>
                      </Field>
                      {touched.available_for && errors.available_for && (
                        <span className="text-md text-red-500">
                          {errors.available_for}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex w-full gap-5 justify-between">
                    <Button fullwidth intent={"secondary"}>
                      Cancel
                    </Button>
                    <Button
                      onClick={() => handleSubmit()}
                      className="text-lg"
                      fullwidth
                      intent={"primary"}
                    >
                      Upload
                    </Button>
                  </div>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
