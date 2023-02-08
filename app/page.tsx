import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'


function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
            <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
            <div className='flex space-x-2 text-center'>
                <div>
                    <div className="flex flex-col items-center justify-centermb-5">
                        {/* Sun Icon */}
                        <SunIcon className="h-8 w-8" />
                        <h2>Examples</h2>
                    </div>

                    <div className="space-y-2">
                        <p className="infoText">"Explain how ChatGPT works"</p>
                        <p className="infoText">"Do recruiters know if you use chatGPT for outreach?"</p>
                        <p className="infoText">"Tell me how many applications jr swe's typically submit before scoring a jobby-job?"</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-centermb-5">
                        {/* Sun Icon */}
                        <BoltIcon className="h-8 w-8" />
                        <h2>Capabilities</h2>
                    </div>

                    <div className="space-y-2">
                        <p className="infoText">"Change the ChatGPT model to use"</p>
                        <p className="infoText">"Messages are stored in FireBase's Firestore"</p>
                        <p className="infoText">"Hot Toast notificatons when ChatGpt is thinking!"</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-centermb-5">
                        {/* Sun Icon */}
                        <ExclamationTriangleIcon className="h-8 w-8" />
                        <h2>Limitations</h2>
                    </div>

                    <div className="space-y-2">
                        <p className="infoText">"May occasionally generate incorrect information"</p>
                        <p className="infoText">"May occasionally produce harmful instructions or biased content"</p>
                        <p className="infoText">"Limited knowledge of world and events after 2021"</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomePage;