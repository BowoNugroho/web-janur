import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layout";
import wal from "@/Assets/wal.jpg";
import office from "@/Assets/office.jpg";
import { TbMathGreater } from "react-icons/tb";
import { motion } from "framer-motion";

const About = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        // Memeriksa apakah sudah menggulir ke bawah
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            // setIsScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };
    const variants2 = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    const variants3 = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    return (
        <Layout>
            <div className="about ">
                <div className="pt-24">
                    <div
                        className="h-[200px]   w-full bg-center"
                        style={{
                            backgroundImage: `url(${wal})`,
                            backgroundSize: `2000px`,
                        }}
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        >
                            <span className="flex justify-center pt-10 text-white font-bold lg:text-[45px] md:text-[35px] text-[25px]">
                                Tentang Kami
                            </span>
                            <p className="flex justify-center text-white lg:text-[16px] md:text-[14px] text-sm">
                                home <TbMathGreater className="h-6" />
                                <span className="underline">tentang kami</span>
                            </p>
                        </motion.div>
                    </div>
                </div>
                <div className="container mx-auto py-2">
                    <div className="grid lg:grid-cols-2  grid-cols-1  gap-4 pt-14 px-5">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants2}
                            className="box lg:order-1 order-2"
                        >
                            <h1 className="lg:text-2xl md:text-lg text-sm font-bold mb-4">
                                Tentang Kami
                            </h1>
                            <p className="mb-4 leading-8 lg:text-[16px] md:text-[14px] text-sm">
                                Kami adalah tim profesional yang berdedikasi
                                dalam bidang dekorasi acara, termasuk siraman,
                                pernikahan, rias wajah, dan anyaman janur.
                                Dengan pengalaman bertahun-tahun, kami memahami
                                betapa pentingnya setiap detail dalam
                                menciptakan suasana yang memukau dan berkesan.
                            </p>
                            <p className=" leading-8 lg:text-[16px] md:text-[14px] text-sm">
                                Kami percaya bahwa setiap acara adalah unik, dan
                                kami berkomitmen untuk menghadirkan desain yang
                                sesuai dengan keinginan dan tema acara Anda. Tim
                                kami terdiri dari ahli dekorasi, perias, dan
                                pengrajin janur yang memiliki passion tinggi
                                dalam seni dan budaya, siap membantu mewujudkan
                                impian Anda.
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants3}
                            className="box lg:order-2 order-1"
                        >
                            <img
                                src={office}
                                alt=""
                                className="rounded-3xl lg:h-[400px] md:h-[300px] h-[250px]"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;
