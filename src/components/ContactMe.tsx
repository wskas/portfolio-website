import { useState } from "react"



const ContactMe = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    return(
        <div id="contactme" className="w-full mt-auto flex justify-center items-center">
            <form className="flex flex-col max-w-lg w-full">
                <h2 className="text-4xl font-bold text-white mb-8">Contact Me</h2>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="mb-4 p-3 rounded text-gray border border-gray-400 focus:outline-none focus:border-blue-500"
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="mb-4 p-3 rounded text-gray border border-gray-400 focus:outline-none focus:border-blue-500"
                />
                <textarea 
                    placeholder="Message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    className="mb-4 p-3 rounded text-gray border border-gray-400 focus:outline-none focus:border-blue-500 h-32 resize-none"
                />
                <button 
                    type="submit" 
                    className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent font-bold py-3 px-6 rounded hover:from-amber-600 hover:via-orange-700 hover:to-yellow-600 transition-all duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactMe