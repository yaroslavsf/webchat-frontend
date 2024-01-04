import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { usePreferences } from './provider/PreferencesProvider'
import { useEffect } from 'react'



export default function techstack() {
    const router = useRouter()
    const [JSFramework, setJSFramework] = useState('React')
    const [CSSFramework, setCSSFramework] = useState('Tailwind')
    const { userPreferences, updatePreferences } = usePreferences();

    //initial preferences
    useEffect(() => {
        updatePreferences({ Js: "React", Css: "Tailwind" })
    }, []);

    return (
        <main className='flex justify-center items-center w-screen h-screen bg-gray-50 dark:bg-gray-700'>
            <div className='bg-white dark:bg-gray-800 rounded-md drop-shadow-2xl'>
                <div className="flex justify-end">
                    <button type="button" className="py-2.5 px-5 me-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={() => { router.push("/build/main/ashdjfhlkjhasfdjk") }}
                    >
                        Skip
                    </button>
                </div>
                <div className="py-2 px-8">
                    <h3 className="font-bold text-md mt-2 text-center text-gray-600 dark:text-gray-300">(Advanced)</h3>
                    <h1 className="font-bold text-xl mb-3 text-center dark:text-gray-100">Choose your tech-stack</h1>
                    <h2 className="font-bold text-md mt-2 text-center text-gray-600 dark:text-gray-300 mb-3">JavaScript Framework:</h2>
                    <div className="flex">
                        <div className={`rounded-md shadow-lg p-3 border border-solid border-gray-200 mx-2 flex justify-center items-center transition-all ${JSFramework === "React" && "bg-gray-200 dark:bg-gray-600"}`}
                            onClick={
                                () => {
                                    setJSFramework('React')
                                    updatePreferences({ Js: "React" });
                                }
                            }
                        >
                            <Image
                                className='object-cover'
                                src="/assets/ReactIcon.png"
                                width={50}
                                height={50}
                                alt="React Logo"
                            />
                        </div>
                        <div className={`rounded-md shadow-lg p-3 border border-solid border-gray-200 mx-2 flex justify-center items-center transition-all ${JSFramework === "Angular" && "bg-gray-200 dark:bg-gray-600"}`}
                            onClick={
                                () => {
                                    setJSFramework('Angular')
                                    updatePreferences({ Js: "Angular" });
                                }
                            }
                        >
                            <Image
                                className='object-cover'
                                src="/assets/AngularIcon.png"
                                width={50}
                                height={50}
                                alt="Angular Logo"
                            />
                        </div>
                        <div className={`rounded-md shadow-lg p-3 border border-solid border-gray-200 mx-2 flex justify-center items-center transition-all ${JSFramework === "Vue" && "bg-gray-200 dark:bg-gray-600"}`}
                            onClick={
                                () => {
                                    setJSFramework('Vue')
                                    updatePreferences({ Js: "Vue" });
                                }
                            }
                        >
                            <Image
                                className='object-cover'
                                src="/assets/VueIcon.png"
                                width={50}
                                height={50}
                                alt="Vue Logo"
                            />
                        </div>
                        <div className={`rounded-md shadow-lg p-3 border border-solid border-gray-200 mx-2 flex justify-center items-center transition-all ${JSFramework === "NoFramework" && "bg-gray-200 dark:bg-gray-600"}`}
                            onClick={
                                () => {
                                    setJSFramework('NoFramework')
                                    updatePreferences({ Js: "Vanilla JavaScript" });
                                }
                            }
                        >
                            <Image
                                className='object-cover'
                                src="/assets/NoFramework.png"
                                width={50}
                                height={50}
                                alt="No Framework Icon"
                            />
                        </div>


                    </div>
                    <h2 className="font-bold text-md mt-2 text-center text-gray-600 dark:text-gray-300 mb-3">CSS Framework:</h2>
                    <div className="flex justify-center">
                        <div className={`rounded-md shadow-lg p-3 border border-solid border-gray-200 mx-2 flex justify-center items-center transition-all ${CSSFramework === "Tailwind" && "bg-gray-200 dark:bg-gray-600"}`}
                            onClick={
                                () => {
                                    setCSSFramework('Tailwind')
                                    updatePreferences({ Css: "Tailwind" });
                                }
                            }
                        >
                            <Image
                                className='object-cover'
                                src="/assets/TailwindIcon.png"
                                width={50}
                                height={50}
                                alt="Tailwind Icon"
                            />
                        </div>
                        <div className={`rounded-md shadow-lg p-3 border border-solid border-gray-200 mx-2 flex justify-center items-center transition-all ${CSSFramework === "NoCSSFramework" && "bg-gray-200 dark:bg-gray-600"}`}
                            onClick={
                                () => {
                                    setCSSFramework('NoCSSFramework')
                                    updatePreferences({ Css: "Vanilla CSS" });
                                }
                            }
                        >
                            <Image
                                className='object-cover'
                                src="/assets/NoFramework.png"
                                width={50}
                                height={50}
                                alt="No Framework Icon"
                            />
                        </div>
                    </div>

                    <button type="button" className=" mt-5 mb-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
                        onClick={() => { router.push("/build/main/ashdjfhlkjhasfdjk") }}
                    >Continue</button>
                </div>
            </div>
        </main>
    )
}
