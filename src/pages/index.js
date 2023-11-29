import Image from 'next/image'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  return (
    <main className='flex justify-center items-center w-screen h-screen bg-gray-50 dark:bg-gray-700'>
      <div className='bg-white  dark:bg-gray-800 rounded-md py-2 px-8 drop-shadow-2xl'>
        <h1 className="font-bold text-xl my-6 text-center dark:text-gray-100">Start building your website</h1>
        <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type:</label>
        <select id="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3">
          <option value="personal_portfolio" selected>Personal Portfolio</option>
          <option value="b2b_marketing">B2B Marketing</option>
          <option value="b2b_web_app">B2B Web App</option>
          <option value="b2c_marketing">B2C Marketing</option>
          <option value="b2c_web_app">B2C Web App</option>
          <option value="type_other">Other</option>
        </select>

        <label for="industry" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry:</label>
        <select id="industry" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3">
          <option value="saas" selected>SaaS</option>
          <option value="agency" >Agency</option>
          <option value="finance">Finance</option>
          <option value="personal">Personal</option>
          <option value="industry_other">Other</option>
        </select>

        <label for="design" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Design:</label>
        <select id="design" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2">
          <option value="minimalistic" selected>Minimalistic</option>
          <option value="storytelling" >Storytelling</option>
          <option value="informational">Informational</option>
          <option value="bold">Bold</option>
          <option value="design_other">Other</option>
        </select>

        <button type="button" class=" mt-5 mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
          onClick={() => { router.push("/techstack") }}
        >Start building</button>
      </div>
    </main>
  )
}
