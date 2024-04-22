import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Input } from "../../components/Input";
import { Image } from "../../components/Image";
import Button from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";
import moment from "moment";
import axiosClient from "../../axios";
import { useUser } from "../../contexts/UserContext";
import { Textarea } from "../../components/TextArea";

type data = {
  [key: string]: string;
};

export const Profile = () => {
  const { currentUser } = useAuth();
  const { fetchMe, fetchProfile, userProfile } = useUser();
  const inputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<data>({
    firstname: "",
    lastname: "",
    bio: "",
  });
  const [selectedImage, setSelectedImage] = useState<string | null>();
  const [imagePreview, setImagePreview] = useState<File | null>();

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        // await fetchMe();
        await fetchProfile();
        setSelectedImage(userProfile?.avatar);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchMe]); // Dependency array includes fetchMe

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (selectedImage) {
        const formData = new FormData();
        formData.set("avatar", selectedImage);
        const response = await axiosClient.post(
          "/profile/update/avatar",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderContent = (value: any) => {
    return value ?? <span className="text-slate-300 select-none">Empty</span>;
  };

  return (
    <div className="lg:px-20 p-7 lg:py-12">
      <div className="w-full">
        <h1 className="text-3xl">Profile</h1>
        <div className="flex flex-col justify-center md:px-20 sm:px-3 pt-10">
          <div className="flex justify-around flex-wrap lg:gap-20 gap-10">
            <div>
              <div className="text-center">
                <h1 className="text-2xl">Avatar</h1>
              </div>
              <form
                className={`${
                  selectedImage ? "mb-5 " : ""
                }rounded-full w-[150px] h-[150px]`}
                encType="multipart/form-data"
                onSubmit={handleImageUpload}
              >
                <label className="flex mt-5 justify-center items-center w-full h-full bg-slate-200 rounded-full text-white text-center cursor-pointer hover:bg-gray-300">
                  {selectedImage ? (
                    <Image
                      className="w-full h-full rounded-full object-cover"
                      src={selectedImage}
                      alt="User Avatar"
                    />
                  ) : (
                    <></>
                  )}
                  <Input
                    name="profile_picture"
                    type="file"
                    id="image_upload"
                    ref={inputRef}
                    className="sr-only bg-gray-700"
                    placeholder="image"
                    onChange={(e) => {
                      const file = e.target.files;
                      if (file) {
                        setImagePreview(file[0]);
                      }
                    }}
                  />
                  {selectedImage ? (
                    <></>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-3"
                      >
                        <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3" />
                      </svg>
                      <span className="text-black p-2 text-sm font-medium">
                        Upload Profile Picture
                      </span>
                    </div>
                  )}
                </label>
                {selectedImage ? (
                  <div className="flex justify-center mt-2 gap-5">
                    <Button
                      className="rounded-sm text-white p-1 hover:bg-gray-300"
                      color="transparent"
                      onClick={() => {
                        if (inputRef.current) {
                          setImagePreview(null);
                          inputRef.current.value = "";
                        }
                      }}
                      base={false}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </Button>
                    <Button
                      className="rounded-sm text-white p-1 transparent hover:bg-gray-300"
                      base={false}
                      type="submit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                        <polyline points="7 3 7 8 15 8"></polyline>
                      </svg>
                    </Button>
                  </div>
                ) : (
                  <></>
                )}
              </form>
            </div>
            <div>
              <div className="md:block hidden text-center">
                <h1 className="text-2xl">User Details:</h1>
              </div>
              <div className="h-full flex flex-col justify-center ">
                <h1>
                  Full Name:{" "}
                  {currentUser.firstname?.length == 0 &&
                  currentUser.lastname?.length == 0 ? (
                    <span>
                      {" "}
                      {currentUser.firstname + " " + currentUser.lastname}
                    </span>
                  ) : (
                    <span className="text-slate-300 select-none">Not Found!</span>
                  )}
                </h1>
                <h1>Username: {renderContent(currentUser.username)}</h1>
                <h1>Email: {renderContent(currentUser.email)}</h1>
                <h1>
                  Created:{" "}
                  {renderContent(moment(currentUser.created_at).fromNow())}
                </h1>
                <h1>Role: {renderContent(currentUser.role_name)}</h1>
              </div>
            </div>
          </div>
          <hr className="mt-10" />
          <div className="mt-5 md:px-4">
            <h1 className="text-2xl">Add info</h1>
            <div className="flex justify-center mt-10">
              <form className="w-[500px]">
                <div className="grid justify-between gap-5">
                  <div className="flex gap-5 w-full">
                    <Input
                      placeholder="First Name"
                      type="text"
                      name="firstname"
                      onChange={handleChange}
                      value={data.firstname}
                    />
                    <Input
                      placeholder="Last Name"
                      type="text"
                      name="lastname"
                      onChange={handleChange}
                      value={data.lastname}
                    />
                  </div>
                  <div className="w-full">
                    <Textarea
                      className="h-40"
                      resize={false}
                      placeholder="bio"
                      name="bio"
                      onChange={handleChange}
                      value={data.bio}
                    ></Textarea>
                  </div>
                  <div className="text-center">
                    <Button
                      className="text-white rounded-sm px-5 py-2"
                      base={false}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
