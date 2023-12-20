import { useState, useEffect } from "react";
import { Select, SelectItem, Button, Input } from "@nextui-org/react";
import cities from "./cities";
import axios from "axios";
import ServerUrl from "../../constants";


const Consult = ({ user, role, lawyers}) => {
  const problems = [
    "Legal Notices",
    "Employment Issues",
    "Property Succesion",
    "Property Registration",
    "Property Verification",
    "Cheque Bounce Cases",
    "Money Recovery Issues",
    "Mutual Divorce",
    "Divorce & Matrimonial Consultation",
    "Maintenance and Alimony",
    "Child custody and Guardianship",
    "File a Consumer Case",
    "Will drafting and Registration",
    "MSME Samadhan",
    "Insolvency and Bankruptcy Code",
    "File a Criminal Complaint",
    "Company Law Matters",
    "File a RTI",
    "Arbitration Matters",
    "Debt Recovery Tribunal",
    "National Green Tribunal Cases",
    "Motor Accident Claims",
    "Rent Control Cases",
    "Setting up a Business",
    "Business Licenses Support",
    "Fundraising for Businesses",
  ];
  const languages = [
    "Assamese",
    "Bengali",
    "Gujarati",
    "Hindi",
    "Kannada",
    "Kashmiri",
    "Konkani",
    "Malayalam",
    "Manipuri",
    "Marathi",
    "Nepali",
    "Oriya",
    "Punjabi",
    "Sanskrit",
    "Sindhi",
    "Tamil",
    "Telugu",
    "Urdu",
    "Bodo",
    "Santhali",
    "Maithili",
    "Dogri",
  ];
  const cc = [
    "Delhi",
    "Mumbai",
    "Kolkata",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Sūrat",
    "Prayagraj",
    "Lucknow",
    "Jaipur",
    "Cawnpore",
    "Mirzapur",
    "Nagpur",
    "Ghaziabad",
    "Vadodara",
    "Vishakhapatnam",
    "Indore",
    "Thane",
    "Bhopal",
    "Chinchvad",
    "Patna",
    "Bilaspur",
    "Ludhiana",
    "Agwar",
    "agra",
    "Madurai",
    "Jamshedpur",
    "Nasik",
    "Farīdabad",
    "Aurangabad",
    "Rajkot",
    "Meerut",
    "Jabalpur",
    "Kalamboli",
    "Vasai",
    "Najafgarh",
    "Varanasi",
    "Srīnagar",
    "Dhanbad",
    "Amritsar",
    "Alīgarh",
    "Guwahati",
    "Haora",
    "Ranchi",
    "Gwalior",
    "Chandīgarh",
    "Vijayavada",
    "Jodhpur",
    "Raipur",
    "Kota",
    "Kalkaji Devi",
    "Bhayandar",
    "Ambattūr",
    "Salt Lake City",
    "Bhatpara",
    "Kūkatpalli",
    "Darbhanga",
    "Dasarhalli",
    "Muzaffarpur",
    "Oulgaret",
    "New Delhi",
    "Tiruvottiyūr",
    "Puducherry",
    "Byatarayanpur",
    "Pallavaram",
    "Secunderabad",
    "Shimla",
    "Puri",
    "Shrīrampur",
    "Hugli",
    "Chandannagar",
    "Sultanpur Mazra",
    "Krishnanagar",
    "Barakpur",
    "Bhalswa Jahangirpur",
    "Nangloi Jat",
    "Yelahanka",
    "Titagarh",
    "Dam Dam",
    "Bansbaria",
    "Madhavaram",
    "Baj Baj",
    "Nerkunram",
    "Kendraparha",
    "Sijua",
    "Manali",
    "Chakapara",
    "Pappakurichchi",
    "Herohalli",
    "Madipakkam",
    "Sabalpur",
    "Salua",
    "Balasore",
    "Jalhalli",
    "Chinnasekkadu",
    "Jethuli",
    "Nagtala",
    "Bagalūr",
    "Pakri",
    "Hunasamaranhalli",
    "Hesarghatta",
    "Bommayapalaiyam",
    "Gundūr",
    "Punadih",
    "Hariladih",
    "Alawalpur",
    "Madnaikanhalli",
    "Kadiganahalli",
    "Mahuli",
    "Zeyadah Kot",
    "Arshakunti",
    "Hīrapur",
    "Mirchi",
    "Sonudih",
    "Sondekoppa",
    "Babura",
    "Madavar",
    "Kadabgeri",
    "Nanmangalam",
    "Taliganja",
    "Tarchha",
    "Belgharia",
    "Kammanhalli",
    "Sonnappanhalli",
    "Kedihati",
    "Doddajīvanhalli",
    "Simli Murarpur",
    "Sonawan",
    "Devanandapur",
    "Tribeni",
    "Huttanhalli",
    "Nathupur",
    "Bali",
    "Vajarhalli",
    "Saino",
    "Shekhpura",
    "Cachohalli",
    "Narayanpur Kola",
    "Gyan Chak",
    "Kasgatpur",
    "Kitanelli",
    "Harchandi",
    "Santoshpur",
    "Bendravadi",
    "Kodagihalli",
    "Harna Buzurg",
    "Mailanhalli",
    "Sultanpur",
  ];

  // console.log(user.username);

  const [help, setHelp] = useState({
    category: "",
    location: "",
    description: "",
    username: "",
  });
  useEffect(() => {
    setHelp((prevHelp) => ({ ...prevHelp, username: user.username }));
  }, [user.username]);

  // console.log(user.username);
  // console.log(help);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (role === "User") {
      if (
        !help.location ||
        !help.description ||
        !help.category ||
        !help.username
      ) {
        alert("Please fill all the fields");
        // setIsLoading(false);
        return;
      }

      // let response = await axios.post(`${ServerUrl}/api/client/addHelp`, help);

      try {
        const token = document.cookie.split("token=")[1].split(';')[0];
        // console.log(help);
        const response = await axios.post(
          `${ServerUrl}/api/client/addHelp`,
          help,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.message === "Help added in database") {
          alert("Help Requested!");
          location.reload();
        } else {
          alert("Help not Requested!");
        }
      } catch (error) {
        console.error("Error Adding Help:", error);
      }
    } else alert("You are not a user, please login as a user");
  };

  const handleChange = (e) => {
    setHelp({ ...help, [e.target.name]: e.target.value });
    // console.log(">", help);
  };

  return (
    <div className="flex justify-center h-[90%] w-[80%] bg-blue-200 rounded-3xl p-4">
      <form
        autoComplete="off"
        action=""
        className="flex flex-col w-full justify-between items-center gap-4"
        onSubmit={handleSubmit}
      >
        <div className="my-2">
          <span className="font-bold">Consult a Lawyer</span>
        </div>
        <div className="w-[90%] flex justify-center rounded-xl bg-white px-2 py-1">
          <Select
            variant="underlined"
            label="Problem Type"
            placeholder="Select Problem Type"
            name="category"
            onChange={handleChange}
          >
            {problems.map((problem) => (
              <SelectItem key={problem} value={problem}>
                {problem}
              </SelectItem>
            ))}
          </Select>
        </div>
        {/* <div className="w-[90%] flex rounded-xl bg-white px-2 py-1">
          <Select
            variant="underlined"
            label="Language"
            placeholder="Select Language"
          >
            {languages.map((language) => (
              <SelectItem key={language} value={language}>
                {language}
              </SelectItem>
            ))}
          </Select>
        </div> */}
        <div className="w-[90%] flex rounded-xl bg-white px-2 py-1">
          <Select
            variant="underlined"
            label="Location"
            placeholder="Select City"
            name="location"
            onChange={handleChange}
          >
            {cc.map((language) => (
              <SelectItem key={language} value={language}>
                {language}
              </SelectItem>
            ))}
          </Select>
        </div>
        {/* <div className="w-[90%] flex flex-col flex-wrap rounded-xl bg-white px-2 py-1">
          <Input
            type="input"
            variant="underlined"
            label="Location"
            placeholder="Type here..."
            className="border-0"
          />
        </div> */}
        <div className="w-[90%] flex rounded-xl bg-white px-2 py-1">
          <Input
            type="input"
            variant="underlined"
            label="Description"
            placeholder="Type here..."
            className="border-0"
            name="description"
            onChange={handleChange}
          />
        </div>
        <Button type="submit" color="primary" className="w-[50%]">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Consult;
