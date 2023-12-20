import { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import "./GoogleTranslate.css";
const GoogleTranslate = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    // Define the function for initializing the Google Translate Element
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,ta,bn,te,mr,ur,gu,kn,or,pa,ml,as",
          // layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        },
        "google_element"
      );
    };

    // Call the initialization function directly
    window.googleTranslateElementInit();

    return () => {
      // No need to remove the script tag since it's included in the HTML head
      // console.log("GoogleTranslate component will unmount");
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div
      id="google_element"
      className="google-translate-container hidden sm:block [&>*]:opacity-1 [&>*]:text-transparent w-[2px]"
    ></div>
  );
};

export default GoogleTranslate;
