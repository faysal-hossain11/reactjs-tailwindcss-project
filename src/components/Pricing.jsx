import { useState } from "react";


const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        { name: "Start", monthlyPrice: 19, yearlyPrice: 199, description: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.", green: "/src/assets/images/sheepGreen.png" },
        { name: "Advance", monthlyPrice: 39, yearlyPrice: 399, description: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.", green: "/src/assets/images/sheepGreen.png" },
        { name: "Premium", monthlyPrice: 59, yearlyPrice: 599, description: "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.", green: "/src/assets/images/sheepGreen.png"}
    ]

    return (
        <div className="mt-24 px-5 lg:px-0">
            <div className="text-center">
                <div>
                    <h2 className="font-bold lg:text-[64px] md:text-[50px] text-[32px] text-primary font-primaryFont">Here are all our plans</h2>
                    <p className="text-[16px] text-tartiary font-primaryFont font-semibold md:w-1/3 mx-auto mb-20">A simple paragraph is comprised of three major components. The which is often a declarative sentence.</p>
                </div>
                <div>
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="text-primary font-primaryFont font-semibold text-2xl mr-8">Monthly</span>
                        <div className="w-16 h-7 bg-secondary rounded-full transition-all duration-300 ease-in-out">
                            <div className={`w-7 h-7 rounded-full transition-all duration-300 ease-in-out ${isYearly ? "bg-primary ml-9" : "bg-gray-500"}` }></div>
                        </div>
                        <span className="text-primary font-semibold text-2xl ml-8 font-primaryFont">Yearly</span>
                    </label>
                    <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                </div>
            </div>
            {/* pricing card */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 mt-[100px] gap-12">
                {
                    packages.map((pkg, index) => <div key={index} className=" py-10 md:px-6 px-4 rounded-2xl shadow-3xl ">
                        <h3 className="text-[40px] text-primary font-bold font-primaryFont mb-7 text-center">{pkg.name}</h3>
                        <p className="text-center text-[16px] font-primaryFont mb-[37px] font-medium text-tartiary">{pkg.description}</p>
                        <p className="text-[60px] font-bold text-secondary text-center mb-8">
                            {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`} <span className="text-[18px] text-tartiary">/ {isYearly ? "year" : "month"}</span>
                        </p>
                        <ul>
                            <li className="flex items-center gap-4 px-4 py-3 space-y-2 text-[20px] font-semibold text-[#000]"> <img src={pkg.green} alt="" className="w-5 h-5" /> Videos of Lessons</li>
                            <li className="flex items-center gap-4 px-4 py-3 space-y-2 text-[20px] font-semibold text-[#000]"> <img src={pkg.green} alt="" className="w-5 h-5" /> Homework check</li>
                            <li className="flex items-center gap-4 px-4 py-3 space-y-2 text-[20px] font-semibold text-[#000]"> <img src={pkg.green} alt="" className="w-5 h-5" /> Additional practical task</li>
                            <li className="flex items-center gap-4 px-4 py-3 space-y-2 text-[20px] font-semibold text-[#000]"> <img src={pkg.green} alt="" className="w-5 h-5" /> Monthly conferences </li>
                            <li className="flex items-center gap-4 px-4 py-3 space-y-2 text-[20px] font-semibold text-[#000]"> <img src={pkg.green} alt="" className="w-5 h-5" />Personal advice from teachers</li>
                        </ul>
                        <div className="mt-7 flex justify-center">
                            <button className="btnPrimary">Get started</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Pricing;