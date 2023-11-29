import Image from "next/image"
import Link from "next/link"


export default function login() {
    return (
        <div className='justify-center flex md:bg-gray-100 h-screen w-screen items-center'>
            <div className="bg-white rounded-md py-2 px-8 md:drop-shadow-2xl w-full max-w-lg">
                <h1 className='w-full font-bold text-2xl text-center mt-6'>Hey there, nice to see you 👋</h1>
                <h2 className="mb-3 mt-1 text-gray-500 font-semibold text-center">Create a new web.chat account</h2>

                <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <div class="relative mb-2">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <Image
                            className='object-cover'
                            src="/assets/MailIcon.svg"
                            width={20}
                            height={20}
                            alt="React Logo"
                        />
                    </div>
                    <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="yaroslav@web.chat" />
                </div>

                <label for="input-group-2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <div class="relative mb-2">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <Image
                            className='object-cover'
                            src="/assets/PasswordIcon.svg"
                            width={20}
                            height={20}
                            alt="React Logo"
                        />
                    </div>
                    <input type="password" id="input-group-2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your password" />
                </div>

                <button type="button" class=" mt-5 mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full">
                    Sign up
                </button>
                <p className="text-center mt-4">
                    Already have an account?{" "}
                    <Link href={"/auth/login"} className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>

                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                    <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
                </div>

                <div className='flex justify-center w-full mb-6'>
                    <button
                        className="px-6 py-3 border flex gap-2 border-base-300 rounded-lg text-content bg-base-100 w-full
                             hover:border-blue-300 hover:text-content hover:shadow transition duration-150 text-center hover:bg-base-200 justify-center"
                    >

                        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                        <span>Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
