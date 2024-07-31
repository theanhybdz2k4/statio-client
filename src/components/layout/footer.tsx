const Footer = () => {
    return (
        <>
            <div className="bg-[#1E1E1E] text-white">
                <div className="container mx-auto py-15">
                    <div className="flex flex-col md:gap-8 gap-5">
                        <p className="font-bold text-4xl text-center m-0">
                            stat<span className="text-[#C50000]">io</span>
                        </p>
                        <p className="text-center text-xl">
                            Được bảo trợ truyền thông bởi
                        </p>
                        <div className="flex justify-center">
                            <img
                                className="w-20 rounded-md"
                                src="https://d1j8r0kxyu9tj8.cloudfront.net/files/oHaKGd5IGdbOfoc6su3wZpat53UVfFTPpw2a2bER.png"
                                alt="Logo"
                            />
                        </div>
                        <p className="text-3xl font-bold text-center">
                            Trung tâm Đào tạo
                        </p>
                        <div className="flex flex-col md:flex-row gap-5 justify-center items-center md:mt-0 mt-5">
                            <div
                                className="p-4 bg-[url('https://d1j8r0kxyu9tj8.cloudfront.net/files/YIhhHH4cFRgBYp8DQDTgEWotfcxguVlqsKI41d5b.png')] bg-size-100 relative">
                                <p className="text-3xl md:text-4xl text-nowrap">
                                    Thiết Kế Đồ Họa
                                </p>
                                <div className="absolute -top-6 -left-5">
                                    <img
                                        className="w-7"
                                        src="https://d1j8r0kxyu9tj8.cloudfront.net/files/CDTGp0muRHmRjkWCFTUOdKmW5NdmXYUEXzxf4ir0.png"
                                        alt="Thiết Kế Đồ Họa"
                                    />
                                </div>
                            </div>
                            <div
                                className="py-4 pe-8 bg-[url('https://d1j8r0kxyu9tj8.cloudfront.net/files/1L9B5OH5E8YD63jKMc88EGE2uNj8qdpHuwj3iGtn.png')] bg-size-100 relative">
                                <i className="text-3xl md:text-4xl text-nowrap">
                                    Đa Phương Tiện
                                </i>
                                <div className="absolute top-1 md:-right-6 -right-6">
                                    <img
                                        className="w-7"
                                        src="https://d1j8r0kxyu9tj8.cloudfront.net/files/R9xCVg48S8DhodnDFYZjokfSTseqEkhREg8AA53A.png"
                                        alt="Đa Phương Tiện"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-evenly">
                            <div
                                className="py-2 px-5p-10 px-15 text-center bg-[url('https://d1j8r0kxyu9tj8.cloudfront.net/files/Q6aCjijoKf8hQCKg8ZAQhBTiEpo1WpvTqhm10F7p.png')] bg-size-100">
                                <p className="text-3xl font-bold">10</p>
                                <p className="text-xl mt-3">Năm hoạt động</p>
                            </div>
                            <div
                                className="py-2 px-5p-10 px-15 text-center bg-[url('https://d1j8r0kxyu9tj8.cloudfront.net/files/Q6aCjijoKf8hQCKg8ZAQhBTiEpo1WpvTqhm10F7p.png')] bg-size-100">
                                <p className="text-3xl font-bold">100.000</p>
                                <p className="text-xl mt-3">Học viên</p>
                            </div>
                            <div
                                className="py-2 px-5p-10 px-15 text-center bg-[url('https://d1j8r0kxyu9tj8.cloudfront.net/files/Q6aCjijoKf8hQCKg8ZAQhBTiEpo1WpvTqhm10F7p.png')] bg-size-100">
                                <p className="text-3xl font-bold">2</p>
                                <p className="text-xl mt-3">Cơ sở HN và HCM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Footer