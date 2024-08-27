"use client";

import { useState } from "react";
import { z } from "zod";

export default function Home() {
    const [errors, setErrors] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [hobbies, setHobbies] = useState([]);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const mySchema = z.object({
                name: z.string().min(3),
                email: z.coerce.string().email().min(5),
                hobbies: z
                    .array(z.string().min(2))
                    .min(1, { message: "Hobbies is required" }),
            });

            const response = mySchema.safeParse({
                name: name,
                email: email,
                hobbies: hobbies,
            });

            if (!response.success) {
                let errArr: any[] = [];
                const { errors: err } = response.error;
                for (var i = 0; i < err.length; i++) {
                    errArr.push({ for: err[i].path[0], message: err[i].message });
                }
                setErrors(errArr);
                throw err;
            }

            setErrors([]);
            setSuccess(true);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const closeSuccessPopup = () => {
        setSuccess(false);
    };

    return (
        <main className="flex flex-col mb-16">

            <form
                className="flex flex-col gap-3"
                method="post"
                onSubmit={onSubmit}
            >
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-breakerBay100 shadow-md rounded-sm px-3 py-2 text-black outline-none transition focus:border-blue-500 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                        required
                    />
                    <div className="mt-1 text-xs text-red-500">
                        {errors.find((error) => error.for === "name")?.message}
                    </div>
                </div>
                <div>

                    <input
                        type="text"
                        placeholder="Vorname"
                        className="w-full bg-breakerBay100 shadow-md rounded-sm px-3 py-2 text-black outline-none transition focus:border-blue-500 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                        required
                    />
                    <div className="mt-1 text-xs text-red-500">
                        {errors.find((error) => error.for === "name")?.message}
                    </div>
                </div>
                <div>

                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full bg-breakerBay100 shadow-md rounded-sm px-3 py-2 text-black outline-none transition focus:border-blue-500 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                        required
                    />
                    <div className="mt-1 text-xs text-red-500">
                        {errors.find((error) => error.for === "email")?.message}
                    </div>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Nachricht"
                        className="w-full bg-breakerBay100 shadow-md rounded-sm px-3 py-2 text-black outline-none transition focus:border-blue-500 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                        required
                    />
                    <div className="mt-1 text-xs text-red-500">
                        {errors.find((error) => error.for === "email")?.message}
                    </div>
                </div>

                <div className="text-end">
                    <button
                        type="submit"
                        className="bg-gradient-to-tr from-breakerBay300 to-breakerBay400 text-gimblet50 px-3  py-2 rounded-sm shadow-md disabled:cursor-not-allowed disabled:opacity-30"
                        disabled={isLoading}
                    >
                        {isLoading ? "Saving..." : "absenden"}
                    </button>
                </div>
            </form>
            {/* Success Popup */}
            {success && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-md text-center">
                        <p className="text-green-500 text-lg font-semibold mb-4">
                            Data Successfully Saved!
                        </p>
                        <button
                            className="bg-gradient-to-tr from-breakerBay300 to-breakerBay400 text-gimblet50 px-3  py-2 rounded-sm shadow-md"
                            onClick={closeSuccessPopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </main>
    );
}