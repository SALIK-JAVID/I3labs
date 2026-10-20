import {
  Battery,
  Bot,
  BoxSelect,
  Cable,
  Car,
  Cog,
  Cpu,
  Gauge,
  Lightbulb,
  Microchip,
  Monitor,
  Nfc,
  Package,
  Radar,
  Radio,
  Ruler,
  Thermometer,
  ToggleRight,
  Wifi,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { site } from "./site";

export type Category = "Boards" | "Sensors" | "Motors & Drivers" | "Modules" | "Robotics Kits" | "Prototyping";

export const categories: ("All" | Category)[] = ["All", "Boards", "Sensors", "Motors & Drivers", "Modules", "Robotics Kits", "Prototyping"];

export type Product = {
  id: string;
  name: string;
  category: Category;
  desc: string;
  icon: LucideIcon;
  tag?: "Bestseller" | "New" | "Lab favourite";
  /** Price in INR. Leave undefined to show "Ask for price". */
  price?: number;
  /** Photo in /public/images/shop. Products without one get an illustrated tile. */
  image?: string;
  credit?: Credit;
};

export type Credit = { title: string; artist: string; license: string; source: string };

/*
 * Catalogue shown on /shop. Product photos come from Wikimedia Commons under CC licences
 * (Wikimedia Commons / Flickr, credited on the shop page); replace them with your own product shots any time.
 * Prices are left blank ("Ask for price") until i3 Labs confirms its rates; add
 * `price: 499` to any item to display it.
 */
export const products: Product[] = [
  // Boards
  { id: "uno-r3", name: "Arduino Uno R3 (compatible)", category: "Boards", desc: "ATmega328P board with USB cable — the classic first microcontroller.", icon: Cpu, tag: "Bestseller", image: "/images/shop/uno-r3.jpg", credit: {"title": "Arduino Uno - R3.jpg", "artist": "SparkFun Electronics from Boulder, USA", "license": "CC BY 2.0", "source": "https://commons.wikimedia.org/wiki/File:Arduino_Uno_-_R3.jpg"} },
  { id: "nano", name: "Arduino Nano", category: "Boards", desc: "Breadboard-friendly ATmega328P for compact builds.", icon: Microchip, image: "/images/shop/nano.jpg", credit: {"title": "Arduino Nano Every.png", "artist": "Enirstad", "license": "CC BY-SA 4.0", "source": "https://commons.wikimedia.org/wiki/File:Arduino_Nano_Every.png"} },
  { id: "esp32", name: "ESP32 DevKit V1", category: "Boards", desc: "Dual-core Wi-Fi + Bluetooth board for IoT projects.", icon: Wifi, tag: "Lab favourite", image: "/images/shop/esp32.jpg", credit: {"title": "ESP32.jpg", "artist": "Edwiyanto", "license": "CC BY-SA 4.0", "source": "https://commons.wikimedia.org/wiki/File:ESP32.jpg"} },
  { id: "nodemcu", name: "NodeMCU ESP8266", category: "Boards", desc: "Low-cost Wi-Fi board, programmable in Arduino IDE.", icon: Radio, image: "/images/shop/nodemcu.jpg", credit: {"title": "Wemos LoLin NodeMCU V3-2874.jpg", "artist": "Raimond Spekking", "license": "CC BY-SA 4.0", "source": "https://commons.wikimedia.org/wiki/File:Wemos_LoLin_NodeMCU_V3-2874.jpg"} },
  { id: "rpi4", name: "Raspberry Pi 4 Model B (4 GB)", category: "Boards", desc: "Full Linux computer for AI, vision and Python projects.", icon: Monitor, image: "/images/shop/rpi4.jpg", credit: {"title": "Raspberry Pi 4 Model B - Side.jpg", "artist": "Laserlicht", "license": "CC BY-SA 4.0", "source": "https://commons.wikimedia.org/wiki/File:Raspberry_Pi_4_Model_B_-_Side.jpg"} },
  { id: "pico", name: "Raspberry Pi Pico", category: "Boards", desc: "RP2040 microcontroller — great for MicroPython.", icon: Microchip, tag: "New", image: "/images/shop/pico.jpg", credit: {"title": "Raspberry Pi Pico oblique.jpg", "artist": "Phiarc", "license": "CC BY-SA 4.0", "source": "https://commons.wikimedia.org/wiki/File:Raspberry_Pi_Pico_oblique.jpg"} },

  // Sensors
  { id: "hcsr04", name: "HC-SR04 Ultrasonic Sensor", category: "Sensors", desc: "Measures distance 2–400 cm. Obstacle-avoiding robots.", icon: Radar, tag: "Bestseller", image: "/images/shop/hcsr04.jpg", credit: {"title": "HC SR04 Ultrasonic sensor 1480322 3 4 HDR Enhancer.jpg", "artist": "Nevit Dilmen (talk)", "license": "CC BY-SA 3.0", "source": "https://commons.wikimedia.org/wiki/File:HC_SR04_Ultrasonic_sensor_1480322_3_4_HDR_Enhancer.jpg"} },
  { id: "ir", name: "Sharp IR Distance Sensor", category: "Sensors", desc: "Analog infrared ranging (10–80 cm) for obstacle-aware robots.", icon: ToggleRight, image: "/images/shop/ir.jpg", credit: {"title": "Sharp GP2Y0A21YK IR proximity sensor cropped.jpg", "artist": "Sharp_GP2Y0A21YK_IR_proximity_sensor.jpg: oomlout\nderivative work: Bomazi", "license": "CC BY-SA 2.0", "source": "https://commons.wikimedia.org/wiki/File:Sharp_GP2Y0A21YK_IR_proximity_sensor_cropped.jpg"} },
  { id: "dht11", name: "DHT11 Temperature & Humidity", category: "Sensors", desc: "Digital climate sensor for weather-station projects.", icon: Thermometer, image: "/images/shop/dht11.jpg", credit: {"title": "Dht11.jpg", "artist": "Edwiyanto", "license": "CC BY-SA 4.0", "source": "https://commons.wikimedia.org/wiki/File:Dht11.jpg"} },
  { id: "mpu6050", name: "MPU6050 Gyro + Accelerometer", category: "Sensors", desc: "6-axis motion sensing for balancing bots and drones.", icon: Gauge, image: "/images/shop/mpu6050.jpg", credit: {"title": "GY-521 MPU-6050 Module 3 Axis Gyroscope + Accelerometer 0487.jpg", "artist": "Nevit Dilmen (talk)", "license": "CC BY-SA 3.0", "source": "https://commons.wikimedia.org/wiki/File:GY-521_MPU-6050_Module_3_Axis_Gyroscope_%2B_Accelerometer_0487.jpg"} },
  { id: "pir", name: "PIR Motion Sensor", category: "Sensors", desc: "Detects human movement — security and automation.", icon: Radar, image: "/images/shop/pir.jpg", credit: {"title": "PIR motion sensor for Arduino oblique view.jpg", "artist": "Sjilla", "license": "CC BY-SA 4.0", "source": "https://commons.wikimedia.org/wiki/File:PIR_motion_sensor_for_Arduino_oblique_view.jpg"} },
  { id: "soil", name: "Soil Moisture Sensor", category: "Sensors", desc: "Smart irrigation and plant-care projects.", icon: Lightbulb, image: "/images/shop/soil.jpg", credit: {"title": "SparkFun Soil Moisture Sensor (with Screw Terminals)", "artist": "SparkFun Electronics", "license": "CC BY 2.0", "source": "https://www.flickr.com/photos/41898857@N04/35799069006"} },

  // Motors & drivers
  { id: "sg90", name: "SG90 Micro Servo", category: "Motors & Drivers", desc: "180° servo for robotic arms and grippers.", icon: Cog, tag: "Bestseller", image: "/images/shop/sg90.jpg", credit: {"title": "Tower Pro SG90 micro servo motor.jpg", "artist": "Suyash Dwivedi", "license": "CC BY-SA 4.0", "source": "https://commons.wikimedia.org/wiki/File:Tower_Pro_SG90_micro_servo_motor.jpg"} },
  { id: "mg996r", name: "MG996R Metal-Gear Servo", category: "Motors & Drivers", desc: "High-torque servo for heavier robot joints.", icon: Cog, image: "/images/shop/mg996r.jpg", credit: {"title": "Servomotor 01.jpg", "artist": "José Luis Gálvez (Digigalos)", "license": "CC BY-SA 2.5", "source": "https://commons.wikimedia.org/wiki/File:Servomotor_01.jpg"} },
  { id: "bo-motor", name: "Geared DC Motor", category: "Motors & Drivers", desc: "Low-speed, high-torque motor for wheels, winches and conveyors.", icon: Car, image: "/images/shop/bo-motor.jpg", credit: {"title": "Unipolar stepper motor with reduction gear mechanism.jpg", "artist": "Kushagra Keshari", "license": "CC BY-SA 4.0", "source": "https://commons.wikimedia.org/wiki/File:Unipolar_stepper_motor_with_reduction_gear_mechanism.jpg"} },
  { id: "l298n", name: "L298N Motor Driver", category: "Motors & Drivers", desc: "Dual H-bridge to drive two DC motors or one stepper.", icon: Zap, image: "/images/shop/l298n.jpg", credit: {"title": "L298N", "artist": "lespounder", "license": "CC BY-SA 2.0", "source": "https://www.flickr.com/photos/45703688@N07/20467577599"} },
  { id: "stepper", name: "28BYJ-48 Stepper + ULN2003", category: "Motors & Drivers", desc: "Precise step control for clocks, turntables and more.", icon: Cog, image: "/images/shop/stepper.jpg", credit: {"title": "28BYJ-48 unipolar stepper motor with ULN2003 driver.jpg", "artist": "Kushagra Keshari", "license": "CC BY-SA 4.0", "source": "https://commons.wikimedia.org/wiki/File:28BYJ-48_unipolar_stepper_motor_with_ULN2003_driver.jpg"} },

  // Modules
  { id: "lcd-i2c", name: "16×2 LCD with I2C", category: "Modules", desc: "Text display that needs only two data wires.", icon: Monitor, image: "/images/shop/lcd-i2c.jpg", credit: {"title": "16x2 LCD Display (cropped).jpg", "artist": "16x2_LCD_Display.jpg: oomlout\nderivative work: Bomazi", "license": "CC BY-SA 2.0", "source": "https://commons.wikimedia.org/wiki/File:16x2_LCD_Display_(cropped).jpg"} },
  { id: "relay", name: "5 V Relay Module", category: "Modules", desc: "Switch lights and appliances safely from a microcontroller.", icon: ToggleRight, image: "/images/shop/relay.jpg", credit: {"title": "SRD-05VDC-SL-C 5V one-channel relay module.jpg", "artist": "Suyash Dwivedi", "license": "CC BY-SA 4.0", "source": "https://commons.wikimedia.org/wiki/File:SRD-05VDC-SL-C_5V_one-channel_relay_module.jpg"} },
  { id: "rfid", name: "RC522 RFID Kit", category: "Modules", desc: "Reader with card and tag for attendance systems.", icon: Nfc, image: "/images/shop/rfid.jpg", credit: {"title": "RFID-RC522.jpg", "artist": "JrawX", "license": "CC0", "source": "https://commons.wikimedia.org/wiki/File:RFID-RC522.jpg"} },

  // Robotics kits
  { id: "robot-car", name: "Smart Robot Car Kit", category: "Robotics Kits", desc: "Chassis, geared motors, wheels and battery holder — build a programmable car in an afternoon.", icon: Car, tag: "Lab favourite", image: "/images/shop/robot-car.jpg", credit: {"title": "Bluetooth Arduino Car.jpg", "artist": "shreyansh232", "license": "CC BY-SA 4.0", "source": "https://commons.wikimedia.org/wiki/File:Bluetooth_Arduino_Car.jpg"} },
  { id: "arm-kit", name: "4-DOF Robotic Arm Kit", category: "Robotics Kits", desc: "Acrylic arm with servos — learn kinematics hands-on.", icon: Bot, tag: "Bestseller", image: "/images/shop/arm-kit.jpg", credit: {"title": "Braccio robotico con Arduino 01.jpg", "artist": "Nicolò Bertuccioli", "license": "CC BY-SA 4.0", "source": "https://commons.wikimedia.org/wiki/File:Braccio_robotico_con_Arduino_01.jpg"} },
  { id: "starter", name: "Arduino Starter Kit", category: "Robotics Kits", desc: "Board, sensors, LEDs, wires and a project booklet.", icon: Package, image: "/images/shop/starter.jpg", credit: {"title": "ARDX - Arduino Experimentation Kit (Inside the box).jpg", "artist": "oomlout", "license": "CC BY-SA 2.0", "source": "https://commons.wikimedia.org/wiki/File:ARDX_-_Arduino_Experimentation_Kit_(Inside_the_box).jpg"} },
  { id: "iot-kit", name: "IoT Starter Kit (ESP32)", category: "Robotics Kits", desc: "ESP32 plus sensors and relays for connected projects.", icon: Wifi, image: "/images/shop/iot-kit.jpg", credit: {"title": "ESP32 Dev Board.jpg", "artist": "Edwiyanto", "license": "CC BY-SA 4.0", "source": "https://commons.wikimedia.org/wiki/File:ESP32_Dev_Board.jpg"} },

  // Prototyping
  { id: "breadboard", name: "830-Point Breadboard", category: "Prototyping", desc: "Solderless prototyping board for every project.", icon: BoxSelect, image: "/images/shop/breadboard.jpg", credit: {"title": "400 points breadboard.jpg", "artist": "oomlout", "license": "CC BY-SA 2.0", "source": "https://commons.wikimedia.org/wiki/File:400_points_breadboard.jpg"} },
  { id: "jumpers", name: "Jumper Wire Set (120 pcs)", category: "Prototyping", desc: "Male–male, male–female and female–female wires.", icon: Cable, tag: "Bestseller", image: "/images/shop/jumpers.jpg", credit: {"title": "A few Jumper Wires.jpg", "artist": "oomlout", "license": "CC BY-SA 2.0", "source": "https://commons.wikimedia.org/wiki/File:A_few_Jumper_Wires.jpg"} },
  { id: "resistors", name: "Resistor & LED Assortment", category: "Prototyping", desc: "Common values plus multi-colour LEDs.", icon: Lightbulb, image: "/images/shop/resistors.jpg", credit: {"title": "Electronic-Axial-Lead-Resistors-Array.jpg", "artist": "Evan-Amos", "license": "Public domain", "source": "https://commons.wikimedia.org/wiki/File:Electronic-Axial-Lead-Resistors-Array.jpg"} },
  { id: "battery", name: "18650 Battery Holder (2-cell)", category: "Prototyping", desc: "Rechargeable power for robots and portable builds.", icon: Battery, image: "/images/shop/battery.jpg", credit: {"title": "Comparison of 18650 and 21700 battery compartments 02.jpg", "artist": "Retired electrician", "license": "CC0", "source": "https://commons.wikimedia.org/wiki/File:Comparison_of_18650_and_21700_battery_compartments_02.jpg"} },
  { id: "multimeter", name: "Digital Multimeter", category: "Prototyping", desc: "Measure voltage, current and continuity safely.", icon: Ruler, image: "/images/shop/multimeter.jpg", credit: {"title": "2017 Cyfrowy miernik uniwersalny.jpg", "artist": "Jacek Halicki", "license": "CC BY-SA 4.0", "source": "https://commons.wikimedia.org/wiki/File:2017_Cyfrowy_miernik_uniwersalny.jpg"} },
  { id: "solder", name: "Soldering Iron Kit", category: "Prototyping", desc: "Temperature-controlled iron with stand and solder.", icon: Wrench, image: "/images/shop/solder.jpg", credit: {"title": "Soldering iron (UK Plug).jpg", "artist": "Soldering_iron_and_accessories.jpg: oomlout\nderivative work: Bomazi", "license": "CC BY-SA 2.0", "source": "https://commons.wikimedia.org/wiki/File:Soldering_iron_(UK_Plug).jpg"} },
];

export const formatPrice = (p?: number) => (p === undefined ? "Ask for price" : `₹${p.toLocaleString("en-IN")}`);

/** Build a wa.me link with a pre-filled message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(lines: { product: Product; qty: number }[]) {
  const items = lines.map(({ product, qty }) => `• ${qty} × ${product.name}`).join("\n");
  return `Hi i3 Labs! I'd like to order these components:\n\n${items}\n\nPlease confirm availability and price.\nName:\nSchool / City:`;
}

export const chatMessage = "Hi i3 Labs! I'd like to know more about your STEM labs and electronics store.";
