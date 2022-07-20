import React from "react";
import "./Products.css";
import SidebarFilter from "./SidebarFilter";
import Card from "./Card";
import monitor1 from "../../images/monitor1.webp";
import monitor2 from "../../images/monitor2.webp";
import monitor3 from "../../images/monitor3.webp";
import monitor4 from "../../images/monitor4.webp";
import monitor5 from "../../images/monitor5.webp";
import monitor6 from "../../images/monitor6.webp";
import tastatura1 from "../../images/tast1.webp";
import tastatura2 from "../../images/tast2.webp";
import racunar1 from "../../images/racunar1.webp";
import racunar2 from "../../images/racunar2.webp";

const Products = () => {

    const proizvodi = [
        {
            src: monitor1,
            name: "ACER NITRO QG241Y",
            id: 86366,
            opis: "Acer Nitro QG241Y Gaming Monitor, Full HD, 75 Hz, 23.8inch, 1ms, ZeroFrame, FreeSync, VGA / HDMI*2",
            cijena: "158.40",
            proizvodjac: "Acer",
            kategorija: "monitor"
        },
        {
            src: monitor2,
            name: "BENQ GL2780E",
            id: 75428,
            opis: "BenQ 27inch GL2780E LED crni monitor",
            cijena: "193.00",
            proizvodjac: "BENQ",
            kategorija: "monitor"
        },
        {
            src: monitor3,
            name: "SAMSUNG LC27RG50FQRXEN",
            id: 91946,
            opis: "SAMSUNG Gaming Monitor CRG5 Curved 27inch Full HD, 240Hz, 4ms, 3000:1, DP / HDMI*2",
            cijena: "298.10",
            proizvodjac: "Samsung",
            kategorija: "monitor"
        },
        {
            src: monitor4,
            name: "LENOVO 66D6GAC2EU",
            id: 100139,
            opis: "Lenovo G25-20 24.5inch / TN 1920x1080 / 165Hz / 1ms / HDMI,DP / AMD FreeSync / crna",
            cijena: "299.50",
            proizvodjac: "Lenovo",
            kategorija: "monitor"
        },
        {
            src: monitor5,
            name: "GIGABYTE M27F-EK FHDR",
            id: 87243,
            opis: "Gigabyte 27inch M27F-EK FHD Gaming Monitor Rezolucija: 1.920 x 1.080 Tip ekrana: TFT LCD Tip panela: IPS Pozadinsko osvetljenje: Edge-LED",
            cijena: "306.10",
            proizvodjac: "Gigabyte",
            kategorija: "monitor"
        },
        {
            src: monitor6,
            name: "DELL S3222DGM",
            id: 95393,
            opis: "Dell 31.5inch S3222DGM 165Hz QHD FreeSync Gaming zakrivljeni monitor",
            cijena: "452.50",
            proizvodjac: "Dell",
            kategorija: "monitor"
        },
        {
            src: tastatura1,
            name: "KINGSTON HYPERX ORIGINS",
            id: 89238,
            opis: "Kingston HX-KB6RDX-US HyperX Origins Mechanical Gaming tastatura",
            cijena: "123.80",
            proizvodjac: "Kingston",
            kategorija: "tastatura"
        },
        {
            src: tastatura2,
            name: "KINGSTON HYPERX ALLOY FPS RGB",
            id: 89237,
            opis: "Kingston HX-KB1SS2-US HyperX Alloy FPS RGB Mechanical Gaming tastatura",
            cijena: "122.50",
            proizvodjac: "Kingston",
            kategorija: "tastatura"
        },
        {
            src: racunar1,
            name: "MC BASE GAMER PRO 5.6X",
            id: 94531,
            opis: "MC BASE GAMER PRO 5.6X - AMD RYZEN 5 5600X 3.70 GHz (4.60 GHz) / ASUS STRIX B550-F GAMING Ploca / ASUS ROG-STRIX-RX6600XT-O8G-GAMING",
            cijena: "1499.00",
            proizvodjac: "MC Base",
            kategorija: "racunar"
        },
        {
            src: racunar2,
            name: "MC BASE TUF PRO GAMER R9.5950X V1",
            id: 94529,
            opis: "MC Base TUF PRO Gamer R9.5950X V1 - AMD Ryzen9 5950X 16-cores / 32-threads 3.40 GHz (4.90 GHz) / ASUS ROG RYUJIN 360 CPU Kuler / TUF GAMING X570-PLUS ",
            cijena: "3999.00",
            proizvodjac: "MC Base",
            kategorija: "racunar"
        }
    ]

    return (
        <div className="products-main-container">
            <SidebarFilter />
            <div className="display-products">
                {proizvodi.map(proizvod => 
                    <Card 
                    key={proizvod.id} 
                    src={proizvod.src} 
                    name={proizvod.name} 
                    opis={proizvod.opis} 
                    cijena={proizvod.cijena} 
                    />
                )}
                {console.log(proizvodi)}
            </div>
            
        </div>
    )
}


export default Products;