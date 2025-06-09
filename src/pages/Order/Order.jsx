import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import LinguaPhoto from "../../assets/linguaPhoto.png";
import clsx from "clsx";

const LANGUAGES = [
  "English",
  "Uzbek",
  "Russian",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Italian",
  "Kazakh",
  "Turkish",
  "Azerbaijan",
  "Arabic",
  "Portuguese",
  "Japanese",
  "Afrikaans",
  "Persian",
  "Tajik",
  "Krygiz",
  "Turkmen",
  "Korean",
  "Belarus",
  "Indian",
];

const DOCUMENT_TYPES = [
  "Affidavit",
  "Marriage Certificate",
  "Divorce Decree",
  "Death Certificate",
  "Power of Attorney",
  "Passport",
  "Driver's License",
  "National ID",
  "Visa",
  "Bank Statement",
  "Tax Returns",
  "Pay Stubs",
  "Loan Agreement",
  "Academic Transcripts",
  "Diploma",
  "Degree Certificate",
  "Scholarship Letter",
  "Medical Records",
  "Vaccination Record",
  "Prescription",
  "Insurance Card",
  "Employment Contract",
  "Resume",
  "Business License",
  "Invoice",
  "Email",
  "Book",
  "Others...",
];

export default function Order() {
  const [translationType, setTranslationType] = useState("certified");
  const [fromLang, setFromLang] = useState("English");
  const [toLang, setToLang] = useState("Uzbek");
  const [documentType, setDocumentType] = useState(DOCUMENT_TYPES[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  const options = [
    {
      id: "certified",
      title: "Certified Translation",
      desc: "Word-for-word document translation with a certification letter for official use.",
    },
    {
      id: "uncertified",
      title: "Uncertified Translation",
      desc: "Word-for-word document translation without a certification letter for personal use.",
    },
  ];

  const swapLanguages = () => {
    setFromLang((prev) => {
      setToLang(prev);
      return toLang;
    });
  };

  const handleSendOrder = async () => {
    const message = `
👤 <b>Name:</b> ${name}
📞 <b>Phone:</b> ${phone}
🔤 <b>Type:</b> ${translationType}
🌐 <b>From → To:</b> ${fromLang} → ${toLang}
📄 <b>Document:</b> ${documentType}
`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    alert("Order sent!");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="container flex flex-col p-4  rounded-xl bg-white max-w-5xl">
        <div className="flex flex-col h-full lg:flex-row">
          {/* left side */}
          <div className="bg-[rgba(182,205,236,0.6)] rounded-xl w-full lg:w-1/2 flex items-center justify-center h-auto mb-6 lg:mb-0">
            <div className="flex items-center gap-2">
              <img
                className="w-[35px] h-[35px] object-cover"
                src={LinguaPhoto}
                alt="logo"
              />
              <a
                href="/"
                className="text-lg font-bold uppercase text-[#083473]"
              >
                World Translate Service
              </a>
            </div>
          </div>

          {/* right side */}
          <div className="rounded-xl w-full lg:w-1/2 flex flex-col p-5 gap-4">
            <p className="font-semibold text-2xl">
              Start your translation order
            </p>

            {/* Translation Type */}
            <div>
              <p className="text-xl">Translation type</p>
              <p className="text-gray-400 mb-2">
                Choose the kind of translation you need to get started.
              </p>
              <fieldset className="space-y-3">
                <legend className="sr-only">Choose translation type</legend>
                <div className="flex flex-col sm:flex-row gap-3">
                  {options.map(({ id, title, desc }) => (
                    <label
                      key={id}
                      className={clsx(
                        "flex-1 cursor-pointer rounded-lg border p-4 transition",
                        translationType === id
                          ? "border-blue-500 ring-2 ring-blue-200"
                          : "border-gray-300",
                        "hover:shadow focus-within:ring-2 focus-within:ring-blue-400"
                      )}
                    >
                      <input
                        type="radio"
                        name="translationType"
                        value={id}
                        checked={translationType === id}
                        onChange={() => setTranslationType(id)}
                        className="peer sr-only"
                      />
                      <p className="text-xl font-medium">{title}</p>
                      <p className="mt-1 text-sm text-gray-500">{desc}</p>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            {/* Language Selection */}
            <div>
              <p className="text-xl">Select languages</p>
              <p className="text-gray-400 mb-2">
                Choose your source and target languages.
              </p>
              <div className="flex items-center gap-2">
                <select
                  value={fromLang}
                  onChange={(e) => setFromLang(e.target.value)}
                  className="flex-1 border border-[#083473] rounded p-2 focus:border-[#083473]"
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={swapLanguages}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                >
                  <FiRefreshCw className="w-5 h-5 text-gray-600" />
                </button>
                <select
                  value={toLang}
                  onChange={(e) => setToLang(e.target.value)}
                  className="flex-1 border border-[#083473] rounded p-2 focus:border-[#083473]"
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Document Selection */}
            <div>
              <p className="text-xl">Select document type</p>
              <p className="text-gray-400 mb-2">
                Choose the type of document you’re translating.
              </p>
              <select
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
                className="w-full border border-[#083473] rounded p-2 focus:border-[#083473]"
              >
                {DOCUMENT_TYPES.map((doc) => (
                  <option key={doc} value={doc}>
                    {doc}
                  </option>
                ))}
              </select>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="border border-[#083473] rounded p-2 focus:border-[#083473]"
              />
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="border border-[#083473] rounded p-2 focus:border-[#083473]"
              />
            </div>

            {/* Send Order Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleSendOrder}
                className="bg-[#083473] hover:bg-[#062b5e] text-white rounded-full px-6 py-3 w-full font-semibold text-lg transition"
              >
                SEND ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
