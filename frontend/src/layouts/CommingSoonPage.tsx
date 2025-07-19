import './CommingSoon.css';

export default function CommingSoonPage() {
    return (
        <>
            <div className="coming-soon-page min-h-screen flex flex-col items-center justify-between text-center relative">
                <div className="fisrstContainer ">
                    {/* <div className="icons w-full flex flex-wrap relative ">
                        <div className="icon w-1/2 z-10">

                            <img src="assets/tasa.png" alt="tasa" width={"80px"} height={"80px"} />
                            
                        </div>
                         <div className="icon w-1/2 flex justify-end z-10">

                            <img src="assets/tasa.png" alt="tasa" width={"80px"} height={"80px"} />
                            
                        </div>
                         <div className="icon w-1/3 z-10">

                            <img src="assets/bndk.png" alt="tasa" width={"80px"} height={"80px"} />
                            
                        </div>
                         <div className="icon w-1/3 flex justify-end z-10">

                         

                             {/* Content 
                  
                            
                        </div>
                         <div className="icon w-1/3 z-10 flex justify-end">

                            <img src="assets/tasa.png" alt="tasa" width={"80px"} height={"80px"} />
                            
                        </div>
                        <div className="icon w-1/2 z-10 end">

                            <img src="assets/tasa.png" alt="tasa" width={"80px"} height={"80px"} />
                            
                        </div>
                         <div className="icon w-1/2 flex justify-end z-10 end">

                            <img src="assets/tasa.png" alt="tasa" width={"80px"} height={"80px"} />
                            
                        </div>
                        
                        
                    </div> */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 p-3">
                        <svg width="160" height="90" viewBox="0 0 190 104" fill="none" xmlns="http://www.w3.org/2000/svg"

                        >
                            <path d="M158.531 12.8208H154.163C136.899 12.8208 122.893 26.8265 122.893 44.091V92.2096C122.893 48.3204 87.3238 12.7514 43.4346 12.7514H34.5597C29.1516 2.69782 17.4339 -2.22498 6.34027 0.964443C4.32954 1.51913 2.38817 2.35115 0.585449 3.39118C8.00432 3.32184 14.8685 8.17531 17.0872 15.5942C18.0579 18.9223 17.9886 22.389 16.8792 25.6478C16.8792 25.7171 16.8792 25.7865 16.8792 25.7865C16.8792 25.7865 16.8792 25.7865 16.8792 25.8558C16.8792 25.9251 16.8792 26.0638 16.8099 26.1331C15.9085 28.9066 15.8392 31.888 16.6712 34.7307C17.0179 35.9094 17.5032 37.0188 18.1273 38.0588C23.5354 36.7414 29.0822 36.3254 34.6291 36.8108V98.1031C34.6291 101.015 36.9864 103.373 39.8985 103.373H60.0751C62.9872 103.373 65.3446 101.015 65.3446 98.1031V61.2168H67.2166C76.5076 61.2168 84.0651 68.7743 84.0651 78.0652V98.1031C84.0651 101.015 86.4225 103.373 89.3346 103.373H128.648C131.56 103.373 133.917 101.015 133.917 98.1031V46.1017C133.917 39.7922 136.483 34.1067 140.573 30.0159C144.803 25.7865 150.696 23.2211 157.144 23.3597C169.625 23.6371 179.47 34.176 179.47 46.6564V98.1031C179.47 101.015 181.828 103.373 184.74 103.373C187.652 103.373 190.009 101.015 190.009 98.1031V43.883C190.009 26.6185 176.004 12.6128 158.739 12.6128M27.9729 19.7543C26.8635 20.101 25.6155 20.0316 24.5755 19.5463C23.9514 19.2689 23.6741 18.5756 23.9514 17.9516C24.2288 17.3276 24.9221 17.0502 25.5461 17.3276C26.1008 17.6049 26.7248 17.6049 27.2795 17.4662C28.6662 17.0502 29.4289 15.6635 29.0129 14.2768C28.5276 12.5434 26.3782 11.7114 24.7834 13.0981C24.2288 13.5835 23.9514 14.2075 23.9514 14.9702C23.9514 15.6635 23.3967 16.1489 22.7034 16.1489C22.01 16.1489 21.5247 15.5942 21.5247 14.9008C21.594 12.4741 23.3274 10.4634 25.8235 10.1167C28.2502 9.77003 30.6769 11.3647 31.3703 13.7221C32.133 16.3569 30.6076 19.061 27.9729 19.8236" fill="white" />
                        </svg>
                    </div>

                    {/* Top Background Image */}
                    <img
                        src="/assets/up.png"
                        alt="Top Decoration"
                        className="first rounded absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 max-h-[300px] object-cover z-0"
                    />
                    {/* content */}
                  
   <div className=" w-full flex flex-col items-center  mt-20 relative z-10 py-3">
                        <h1 className="text-3xl font-bold mt-4" style={{
                            color: 'white',
                            textShadow: "2px 2px 4px #1c7a80"
                        }}>
                            MONKEY BREW
                        </h1>
                        <p className="text-lg text-gray-700"
                            style={{
                                color: 'white',
                                textShadow: "2px 2px 4px #1c7a80"
                            }}
                        >speciality coffee</p>

                        <button className="mt-4 px-11 py-2 text-white rounded-full shadow-lg transition border-none outline-none"
                            style={{ backgroundColor: "#1c7a80",
                                    "boxShadow": "#1c7a80 0px 0px 15px 5px"
                             }}>
                            Get 25% Discount
                        </button>
                    </div>
                   
                </div>

                {/* Middle Background Image */}
                <div className="secondcontainer">

                    <img
                        src="/assets/down.png"
                        alt="Middle Decoration"
                        className="second absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-h-[350px] object-cover  z-0"

                    />
                </div>

                {/* Bottom Background Image */}
                <img
                    src="/assets/down.png"
                    alt="Bottom Decoration"
                    className="third absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-h-[300px] object-cover z-0"
                />



                {/* Countdown Timer */}
                <div className="time  text-3xl font-bold relative z-10" style={{ color: "#1c7a80" }}>
                    22D : 12H : 24M : 30S
                </div>

                {/* Coming Soon Text */}
                <h2 className="coming-soon-text text-[5rem] font-extrabold mt-8 relative z-10"
                    style={{ marginBottom: "10px" }}
                >
                    COMING <br /> SOON
                </h2>

                {/* Bottom Button */}
                <button className=" px-16 py-3 text-white rounded-full text-lg font-semibold transition relative z-10"
                    style={{ backgroundColor: "#1c7a80",
                          "boxShadow": "#1c7a80 0px 0px 15px 5px"
                     }}>
                    Get 25% Discount
                </button>

                {/* Footer Text */}
                <p className=" px-4 font-bold relative z-10" style={{ color: "#1c7a80", padding: "20px" }}>
                    Sign up with your data and get a 25% discount on your order on our store,
                    <br />
                    and subscribe to get our updates.
                </p>
                <p className="p-5 relative z-10" style={{ color: "#1c7a80" }}>
                    Terms and Conditions apply.
                </p>
            </div>
            <footer className="p-4 w-full  text-sm  text-white flex flex-col justify-center items-center gap-3"
                style={{ backgroundColor: "#1c7a80" }}
            >
                <div className="cat">
                    <svg width="80" height="40" viewBox="0 0 190 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M158.531 12.8208H154.163C136.899 12.8208 122.893 26.8265 122.893 44.091V92.2096C122.893 48.3204 87.3238 12.7514 43.4346 12.7514H34.5597C29.1516 2.69782 17.4339 -2.22498 6.34027 0.964443C4.32954 1.51913 2.38817 2.35115 0.585449 3.39118C8.00432 3.32184 14.8685 8.17531 17.0872 15.5942C18.0579 18.9223 17.9886 22.389 16.8792 25.6478C16.8792 25.7171 16.8792 25.7865 16.8792 25.7865C16.8792 25.7865 16.8792 25.7865 16.8792 25.8558C16.8792 25.9251 16.8792 26.0638 16.8099 26.1331C15.9085 28.9066 15.8392 31.888 16.6712 34.7307C17.0179 35.9094 17.5032 37.0188 18.1273 38.0588C23.5354 36.7414 29.0822 36.3254 34.6291 36.8108V98.1031C34.6291 101.015 36.9864 103.373 39.8985 103.373H60.0751C62.9872 103.373 65.3446 101.015 65.3446 98.1031V61.2168H67.2166C76.5076 61.2168 84.0651 68.7743 84.0651 78.0652V98.1031C84.0651 101.015 86.4225 103.373 89.3346 103.373H128.648C131.56 103.373 133.917 101.015 133.917 98.1031V46.1017C133.917 39.7922 136.483 34.1067 140.573 30.0159C144.803 25.7865 150.696 23.2211 157.144 23.3597C169.625 23.6371 179.47 34.176 179.47 46.6564V98.1031C179.47 101.015 181.828 103.373 184.74 103.373C187.652 103.373 190.009 101.015 190.009 98.1031V43.883C190.009 26.6185 176.004 12.6128 158.739 12.6128M27.9729 19.7543C26.8635 20.101 25.6155 20.0316 24.5755 19.5463C23.9514 19.2689 23.6741 18.5756 23.9514 17.9516C24.2288 17.3276 24.9221 17.0502 25.5461 17.3276C26.1008 17.6049 26.7248 17.6049 27.2795 17.4662C28.6662 17.0502 29.4289 15.6635 29.0129 14.2768C28.5276 12.5434 26.3782 11.7114 24.7834 13.0981C24.2288 13.5835 23.9514 14.2075 23.9514 14.9702C23.9514 15.6635 23.3967 16.1489 22.7034 16.1489C22.01 16.1489 21.5247 15.5942 21.5247 14.9008C21.594 12.4741 23.3274 10.4634 25.8235 10.1167C28.2502 9.77003 30.6769 11.3647 31.3703 13.7221C32.133 16.3569 30.6076 19.061 27.9729 19.8236" fill="white" />
                    </svg>

                </div>
                All rights reserved Monkey Brew 2025
            </footer>
        </>
    )
}
