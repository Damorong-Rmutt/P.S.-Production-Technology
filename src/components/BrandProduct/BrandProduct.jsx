import { useParams } from "react-router-dom";

export default function BrandProduct() {
  const { brand } = useParams();

  // 🔥 ข้อมูลสินค้าแต่ละแบรนด์ แยกด้วย JavaScript Object
  const brandData = {
    hikvision: {
      name: "HIKVISION",
      products: ["Dahua Camera 1", "Dahua NVR 2"],
    },
    dahua: {
      name: "DAHUA",
      products: ["Dahua Camera 1", "Dahua NVR 2"],
    },
    imou: {
      name: "IMOU",
      products: ["IMOU Camera A", "IMOU Kit B"],
    },
    ezviz: {
      name: "EZVIZ",
      products: ["EZVIZ Dome X", "EZVIZ Bullet Y"],
    },
    hilook: {
      name: "HILOOK",
      products: ["EZVIZ Dome X", "EZVIZ Bullet Y"],
    },
    wd_western_digital: {
      name: "WD Western Digital",
      products: ["EZVIZ Dome X", "EZVIZ Bullet Y"],
    },
    seagate: {
      name: "Seagate",
      products: ["EZVIZ Dome X", "EZVIZ Bullet Y"],
    },
    cyberpower: {
      name: "CyberPower",
      products: ["EZVIZ Dome X", "EZVIZ Bullet Y"],
    },
    ruijie: {
      name: "Ruijie",
      products: ["EZVIZ Dome X", "EZVIZ Bullet Y"],
    },
    reyee: {
      name: "Reyee",
      products: ["EZVIZ Dome X", "EZVIZ Bullet Y"],
    },
    tp_link: {
      name: "TP-Link",
      products: ["EZVIZ Dome X", "EZVIZ Bullet Y"],
    },
    slc: {
      name: "SLC",
      products: ["EZVIZ Dome X", "EZVIZ Bullet Y"],
    },
    germany_19: {
      name: "19-Germany",
      products: ["EZVIZ Dome X", "EZVIZ Bullet Y"],
    },
    link: {
      name: "Link",
      products: ["EZVIZ Dome X", "EZVIZ Bullet Y"],
    },
    zircon: {
      name: "Zircon",
      products: ["EZVIZ Dome X", "EZVIZ Bullet Y"],
    },
  };

  const currentBrand = brandData[brand] || {
    name: "ไม่พบแบรนด์",
    products: [],
  };

  return (
    <div>
      <h2>สินค้าแบรนด์: {currentBrand.name}</h2>
      <ul>
        {currentBrand.products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}
