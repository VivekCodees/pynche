import Image from "next/image";

import Image2 from "../../../../public/Image2.jpg";
import kilometre_zero_1 from "../../../../public/kilometre_zero_1.png";
import kilometre_zero_2 from "../../../../public/kilometre_zero_2.png";
// import Image4 from "../../../../public/Image4.jpg";

//Fonts
import { Adamina, Alegreya } from "next/font/google";

const adamina = Adamina({ subsets: ["latin"], weight: '400' });
const alegreya = Alegreya({ subsets: ["latin"] });

const EventPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative h-[50vh] md:h-[70vh] w-full">
                <Image src={Image2} alt="Forest Fusion" layout="fill" objectFit="cover" className="z-0" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className={`text-white text-3xl md:text-6xl font-bold ${adamina.className}`}>KILOMETRE ZERO</h1>
                </div>
            </div>

            {/* About Section */}
            <div className="p-4 md:p-8 lg:p-16">
                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mt-5 mb-4 ${adamina.className} font-light text-[#35420C]`}>ABOUT THE EVENT</h2>
                <p className={`text-base md:text-lg lg:text-xl mb-4 ${alegreya.className}`}>
                Pynche&apos;s - Kilometre Zero, an innovative event promoting local food consumption and artistic expression, took place in Kyrdemkulai, Ri-Bhoi on Saturday. Organized by Dalarympei Sabrina Kharmawphlang, Lamerphylla Damesha Kharsati, and Maya Ika Lamar, this second edition of the initiative attracted around 50 participants. The event featured a forage aisle curated by Kharmawphlang and Chef Ahme, showcasing farm-fresh ingredients including meat and shrimp. Interactive cooking sessions led by culinary expert Kharmawphlang highlighted the satisfaction of using local ingredients and traditional techniques. Art therapist Lamar facilitated mural painting activities, emphasizing the connection between humans and nature, and the therapeutic benefits of artistic expression.

                </p>
            </div>

            {/* Images Section */}
            <div className="md:p-8 p-5 lg:p-16">
                <Image src={kilometre_zero_1} alt="Event Image 1" className="" />
            </div>

            <div className="p-4 md:p-8 lg:p-16">
                <p className={`text-base md:text-lg lg:text-xl mb-4 ${alegreya.className}`}>
                The event underscored the &apos;Kilometre Zero&apos; concept, which advocates for consuming quality products close to their production source to ensure freshness, seasonality, and biodiversity. By combining culinary experiences with art therapy, the organizers aimed to promote sustainability, environmental stewardship, and self-expression. Guests participated in planting biodegradable seed sheets as a symbolic gesture of environmental care. Kharsati, who works in the social sector, emphasized the holistic nature of the initiative, considering both environmental and personal well-being. Following the success of this event and its inaugural edition in Faridabad last December, the trio plans to host their third session in Himachal Pradesh this autumn, continuing their mission to reconnect people with nature and promote conscious consumption.
                </p>
            </div>

            {/* Images Section */}
            <div className="md:p-8 p-5 lg:p-16">
                <Image src={kilometre_zero_2} alt="Event Image 1" className="" />
            </div>

        </div>
    );
};

export default EventPage;
