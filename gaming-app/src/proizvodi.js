//ovaj fajl za sada sluzi kao neka inicijalna baza podataka dok backend ne napravi bazu
import monitor1 from "./images/monitor1.webp";
import monitor2 from "./images/monitor2.webp";
import monitor3 from "./images/monitor3.webp";
import monitor4 from "./images/monitor4.webp";
import monitor5 from "./images/monitor5.webp";
import monitor6 from "./images/monitor6.webp";
import tastatura1 from "./images/tast1.webp";
import tastatura2 from "./images/tast2.webp";
import racunar1 from "./images/racunar1.webp";
import racunar2 from "./images/racunar2.webp";

import img1 from './images/Gaming-Petak.webp';
import img2 from './images/cybersale-week.webp';
import img3 from './images/LG-Ultra-Gear.webp';
import img4 from './images/steelseries.webp';
import stolica from './images/GamingStolica.webp';
import monitor from './images/GamingMonitori.webp';
import racunar from './images/GamingRacunari.webp';
import laptop from './images/GamingLaptop.webp';
import konzola from './images/Konzole.webp';
import igrice from './images/Igrice.webp';
import p1 from './images/razer.jpg';
import p2 from './images/reddragon.jpg';
import p3 from './images/msi.jpg';
import mis from './images/GamingMis.webp';
import tastatura from './images/GamingTastatura.webp';
import slusalice from './images/GamingSlusalice.webp';
import mikrofon from './images/GamingMikrofon.webp';
import podloge from './images/GamingPodloge.webp';
import webcam from './images/GamingWebcam.webp';
import gamepad from './images/Gamepad.webp';
import zvucnici from './images/GamingZvucnici.webp';
import torbe from './images/GamingBackpack.webp';
import smartwatch from './images/GamingSmartwatch.webp';
import smartphone from './images/GamingSmartphone.webp';

export const proizvodi = [
    {
        src: monitor1,
        name: "ACER NITRO QG241Y",
        id: 86366,
        description: "Acer Nitro QG241Y Gaming Monitor, Full HD, 75 Hz, 23.8inch, 1ms, ZeroFrame, FreeSync, VGA / HDMI*2",
        price: "158.40",
        provider: "Acer",
        category: "Monitori"
    },
    {
        src: monitor2,
        name: "BENQ GL2780E",
        id: 75428,
        description: "BenQ 27inch GL2780E LED crni monitor",
        price: "193.00",
        provider: "BENQ",
        category: "Monitori"
    },
    {
        src: monitor3,
        name: "SAMSUNG LC27RG50FQRXEN",
        id: 91946,
        description: "SAMSUNG Gaming Monitor CRG5 Curved 27inch Full HD, 240Hz, 4ms, 3000:1, DP / HDMI*2",
        price: "298.10",
        provider: "Samsung",
        category: "Monitori"
    },
    {
        src: monitor4,
        name: "LENOVO 66D6GAC2EU",
        id: 100139,
        description: "Lenovo G25-20 24.5inch / TN 1920x1080 / 165Hz / 1ms / HDMI,DP / AMD FreeSync / crna",
        price: "299.50",
        provider: "Lenovo",
        category: "Monitori"
    },
    {
        src: monitor5,
        name: "GIGABYTE M27F-EK FHDR",
        id: 87243,
        description: "Gigabyte 27inch M27F-EK FHD Gaming Monitor Rezolucija: 1.920 x 1.080 Tip ekrana: TFT LCD Tip panela: IPS Pozadinsko osvetljenje: Edge-LED",
        price: "306.10",
        provider: "Gigabyte",
        category: "Monitori"
    },
    {
        src: monitor6,
        name: "DELL S3222DGM",
        id: 95393,
        description: "Dell 31.5inch S3222DGM 165Hz QHD FreeSync Gaming zakrivljeni monitor",
        price: "452.50",
        provider: "Dell",
        category: "Monitori"
    },
    {
        src: tastatura1,
        name: "KINGSTON HYPERX ORIGINS",
        id: 89238,
        description: "Kingston HX-KB6RDX-US HyperX Origins Mechanical Gaming tastatura",
        price: "123.80",
        provider: "Kingston",
        category: "Tastature"
    },
    {
        src: tastatura2,
        name: "KINGSTON HYPERX ALLOY FPS RGB",
        id: 89237,
        description: "Kingston HX-KB1SS2-US HyperX Alloy FPS RGB Mechanical Gaming tastatura",
        price: "122.50",
        provider: "Kingston",
        category: "Tastature"
    },
    {
        src: racunar1,
        name: "MC BASE GAMER PRO 5.6X",
        id: 94531,
        description: "MC BASE GAMER PRO 5.6X - AMD RYZEN 5 5600X 3.70 GHz (4.60 GHz) / ASUS STRIX B550-F GAMING Ploca / ASUS ROG-STRIX-RX6600XT-O8G-GAMING",
        price: "1499.00",
        provider: "MC Base",
        category: "Racunari"
    },
    {
        src: racunar2,
        name: "MC BASE TUF PRO GAMER R9.5950X V1",
        id: 94529,
        description: "MC Base TUF PRO Gamer R9.5950X V1 - AMD Ryzen9 5950X 16-cores / 32-threads 3.40 GHz (4.90 GHz) / ASUS ROG RYUJIN 360 CPU Kuler / TUF GAMING X570-PLUS ",
        price: "3999.00",
        provider: "MC Base",
        category: "Racunari"
    }
]

export const items = [
    {
        src: img1
    },
    {
        src: img2
    },
    {
        src: img3
    },
    {
        src: img4
    }
]

export const promotions = [
    {
        src: p1
    },
    {
        src: p2
    },
    {
        src: p3
    }
]

export const periferije = [
    {
        src: mis,
        description: "Gaming Mis",
        href: "#"
    },
    {
        src: tastatura,
        description: "Gaming Tastature",
        href: "#"
    },
    {
        src: slusalice,
        description: "Gaming Slusalice",
        href: "#"
    },
    {
        src: mikrofon,
        description: "Gaming Mikrofoni",
        href: "#"
    },
    {
        src: podloge,
        description: "Gaming Podloge",
        href: "#"
    },
    {
        src: webcam,
        description: "Gaming Webcam",
        href: "#"
    },
    {
        src: gamepad,
        description: "Gamepad",
        href: "#"
    },
    {
        src: zvucnici,
        description: "Gaming Zvucnici",
        href: "#"
    },
    {
        src: torbe,
        description: "Gaming Torbe",
        href: "#"
    },
    {
        src: smartwatch,
        description: "Gaming Smartwatch",
        href: "#"
    },
    {
        src: smartphone,
        description: "Gaming Smartphone",
        href: "#"
    },
]

export const kategorije = [
    {
        src: stolica,
        description: "Gaming Stolice",
        href: "#"
    },
    {
        src: monitor,
        description: "Gaming Monitori",
        href: "#"
    },
    {
        src: racunar,
        description: "Gaming Racunari",
        href: "#"
    },
    {
        src: laptop,
        description: "Gaming Laptop",
        href: "#"
    },
    {
        src: konzola,
        description: "Konzole",
        href: "#"
    },
    {
        src: igrice,
        description: "Igrice",
        href: "#"
    }
]