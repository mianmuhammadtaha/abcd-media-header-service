import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from "lucide-react";
import logo from '../../assets/abcd-logo.png';
import business from '../../assets/business.svg';
import engagement from '../../assets/Engagement.svg';
import fragment from '../../assets/fragments.svg';
import mesaging from '../../assets/messaging.svg';
import optimization from '../../assets/optimization.svg';
import setting from '../../assets/setting.svg';
import newfeature from '../../assets/image.png'

export default function Header() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const ClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", ClickOutside);
        return () => {
            document.removeEventListener("mousedown", ClickOutside);
        };
    }, []);

    return (
        <header className="w-full bg-white shadow-sm py-2 relative overflow-visible z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-6">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="abcd media" className="h-10" />
                </div>

                <nav className="hidden md:flex items-center gap-8 text-gray-800 text-lg">
                    <a href="#" className="relative group transition text-gray-800 hover:text-[#AE2FE0] leading-none pb-1">
                        Home
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#AE2FE0] transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a href="#" className="relative group transition text-gray-800 hover:text-[#AE2FE0]">
                        Clients
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#AE2FE0] transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <div ref={dropdownRef} className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="relative group flex items-center gap-1 text-gray-800 hover:text-[#AE2FE0] transition"
                        >
                            Services <ChevronDown size={18} />
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#AE2FE0] transition-all duration-300 group-hover:w-full"></span>
                        </button>

                        {open && (
                            <div className="fixed top-[60px] left-0 right-0 bottom-0 z-50 bg-[#f8f9fc] pt-2 pb-6 overflow-hidden">
                                <div className="max-w-7xl mx-auto h-full">
                                    <div className="bg-[#F4F5F8] rounded-xl  w-full h-full flex flex-col">
                                        <div className="flex-1 overflow-y-auto m-4 rounded-xl">
                                            <div className="flex items-stretch min-h-0 h-full">
                                                <div className="w-1/3 bg-[#232e3f] p-6 flex flex-col h-full relative after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-px after:bg-gray-200 after:opacity-20 rounded-xl">
                                                    <h3 className="text-white text-sm font-medium mb-3">Solutions</h3>
                                                    <div className="flex flex-wrap gap-1.5 mb-6 leading-tight">
                                                        {[
                                                            'Digital Marketing',
                                                            'Social Media Management',
                                                            'SEO (Search Engine Optimization)',
                                                            'Content Creation',
                                                            'Brand Strategy',
                                                            'Performance Marketing',
                                                            'Email Marketing',
                                                            'Video Production',
                                                            'Photography',
                                                            'Web Design & Development'
                                                        ].map((item) => (
                                                            <span
                                                                key={item}
                                                                className="px-2.5 py-0.5 bg-[#394352] text-[#dfdbdd] text-xs leading-5 rounded-full hover:bg-[#4a5568] transition-colors cursor-pointer"
                                                            >
                                                                {item}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <h3 className="text-white text-sm font-medium mb-3">Expertise</h3>
                                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                                        {[
                                                            'Creative Strategy', 'UI/UX Design', 'Copywriting',
                                                            'Media Buying', 'PPC Ads', 'Influencer Marketing'
                                                        ].map((item) => (
                                                            <span
                                                                key={item}
                                                                className="px-2.5 py-0.5 bg-[#394352] text-[#dfdbdd] text-xs leading-5 rounded-full hover:bg-[#4a5568] transition-colors cursor-pointer"
                                                            >
                                                                {item}
                                                            </span>
                                                        ))}
                                                        <div className="relative group">
                                                            <span className="px-2.5 py-0.5 border border-blue-400 text-blue-400 text-xs leading-5 rounded-full cursor-pointer flex items-center gap-1.5">
                                                                Marketing Automation
                                                                <span className="bg-blue-100 text-blue-800 text-[10px] font-medium px-1.5 py-0.5 rounded-full">
                                                                    NEXT GEN
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div className="relative group">
                                                            <span className="px-2.5 py-0.5 border border-blue-400 text-blue-400 text-xs leading-5 rounded cursor-pointer flex items-center gap-1.5">
                                                                Analytics & Reporting
                                                                <span className="bg-orange-500 text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full">
                                                                    TRENDING
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="mt-6">
                                                        <h3 className="text-white text-sm font-medium mb-3">What's New</h3>
                                                        <div className="bg-[#2a3547] rounded-lg p-3">
                                                            <div className="relative aspect-video mb-2 rounded overflow-hidden">
                                                                <img
                                                                    src={newfeature}
                                                                    alt="New Feature"
                                                                    className="w-full h-full object-cover"
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                                                                    <span className="text-white text-xs font-medium">New Feature Launch</span>
                                                                </div>
                                                            </div>
                                                            <p className="text-xs text-[#dfdbdd]">Discover our latest updates and features that will help grow your business.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="w-2/3 px-3 overflow-y-auto rounded-xl">
                                                    <div className="grid grid-cols-3 gap-1 ">
                                                        <div className="bg-white p-2 shadow-sm rounded-tl-xl">
                                                            <img src={fragment} alt="fragment" className="w-8 h-8 mb-3" />
                                                            <h3 className="font-semibold mb-3 text-gray-800">Brand Development</h3>
                                                            <ul className="space-y-2 text-gray-600">
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Brand Identity</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Logo Design</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Brand Guidelines</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Packaging Design</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Rebranding</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Creative Direction</li>
                                                            </ul>
                                                        </div>

                                                        <div className="bg-white p-2 shadow-sm">
                                                            <img src={mesaging} alt="messaging" className="w-8 h-8 mb-3" />
                                                            <h3 className="font-semibold mb-3 text-gray-800">Digital Marketing</h3>
                                                            <ul className="space-y-2 text-gray-600">
                                                                <li className="hover:text-[#AE2FE0] transition-colors">SEO Services</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Google Ads</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Meta Ads</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">LinkedIn Marketing</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">MLOps</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">CPPC Campaigns</li>
                                                            </ul>
                                                        </div>

                                                        <div className="bg-white p-2 shadow-sm rounded-tr-xl">
                                                            <img src={setting} alt="setting" className="w-8 h-8 mb-3" />
                                                            <h3 className="font-semibold mb-3 text-gray-800">Social Media</h3>
                                                            <ul className="space-y-2 text-gray-600">
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Social Media Strategy</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Content Calendar</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Creatives & Graphics</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Short Videos / Reels</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">TikTok Management</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Social Media Optimization</li>
                                                            </ul>
                                                        </div>

                                                        <div className="bg-white p-2 shadow-sm rounded-bl-xl">
                                                            <img src={optimization} alt="optimization" className="w-8 h-8 mb-3" />
                                                            <h3 className="font-semibold mb-3 text-gray-800">Content Production</h3>
                                                            <ul className="space-y-2 text-gray-600">
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Video Production</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Commercial Ads</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Product Shoots</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Corporate Videos</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Motion Graphics</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Graphic Design</li>
                                                            </ul>
                                                        </div>

                                                        <div className="bg-white p-2 shadow-sm">
                                                            <img src={business} alt="business" className="w-8 h-8 mb-3" />
                                                            <h3 className="font-semibold mb-3 text-gray-800">Web & Design</h3>
                                                            <ul className="space-y-2 text-gray-600">
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Website Development</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Landing Pages</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">UI/UX</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">E-commerce Website</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Portfolio Website</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Website Redesign</li>
                                                            </ul>
                                                        </div>

                                                        <div className="bg-white p-2 shadow-sm rounded-br-xl">
                                                            <img src={engagement} alt="engagement" className="w-8 h-8 mb-3" />
                                                            <h3 className="font-semibold mb-3 text-gray-800">Business Growth</h3>
                                                            <ul className="space-y-2 text-gray-600">
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Marketing Consultation</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Lead Generation</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Sales Funnel Building</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Email Automation</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">CRM Setup</li>
                                                                <li className="hover:text-[#AE2FE0] transition-colors">Market Research</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <a href="#" className="relative group transition text-gray-800 hover:text-[#AE2FE0]">
                        Company
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#AE2FE0] transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a href="#" className="relative group transition text-gray-800 hover:text-[#AE2FE0]">
                        Contact
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#AE2FE0] transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <button className="hidden md:block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-4 py-0.5 rounded-xl shadow-md hover:shadow-lg transition">
                        Get Quote
                    </button>
                </nav>
            </div>
        </header>
    );
}